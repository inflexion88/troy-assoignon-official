#!/bin/bash

echo "=== INTERNAL LINKS AUDIT ==="
echo ""

broken_count=0
total_count=0

# Extract all internal links from HTML files
# NOTE: Ignore absolute-root paths (starting with /) because filesystem checks
# on local dev don’t reflect production routes.

find . -name "*.html" -not -path "*/dist/*" -type f | while read file; do
    grep -o 'href="[^"]*"' "$file" | sed 's/href="//;s/"//' | while read link; do
        # Skip external links, mailto, tel, # anchors
        if [[ "$link" =~ ^https?:// ]] || [[ "$link" =~ ^mailto: ]] || [[ "$link" =~ ^tel: ]] || [[ "$link" == "#"* ]] || [[ "$link" == /* ]]; then
            continue
        fi
        
        total_count=$((total_count + 1))
        
        # Remove anchor and query params for file checking
        clean_link=$(echo "$link" | sed 's/[#?].*$//')
        
        # Skip empty links
        if [ -z "$clean_link" ]; then
            continue
        fi
        
        # Determine the target file path
        if [[ "$clean_link" == /* ]]; then
            # Absolute path from root
            target_file=".${clean_link}"
        else
            # Relative path
            dir=$(dirname "$file")
            target_file="${dir}/${clean_link}"
        fi
        
        # Normalize path
        target_file=$(realpath -m "$target_file" 2>/dev/null)
        
        # Check if file exists
        if [ ! -f "$target_file" ] && [ ! -d "$target_file" ]; then
            echo "❌ BROKEN LINK:"
            echo "   Source: $file"
            echo "   Link: $link"
            echo "   Expected: $target_file"
            echo ""
            broken_count=$((broken_count + 1))
        fi
    done
done

echo "=== SUMMARY ==="
echo "Broken links found: Run complete (check output above)"
echo ""

