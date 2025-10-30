#!/bin/bash

# SEO Meta Tags Validation Script

echo "=== SEO META TAGS VALIDATION REPORT ==="
echo ""
echo "Checking all HTML files (excluding dist folder)..."
echo ""

# Find all HTML files excluding dist
find . -name "*.html" -not -path "*/dist/*" -type f | sort | while read file; do
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "FILE: $file"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    # Extract title
    title=$(grep -o '<title>.*</title>' "$file" | sed 's/<title>//;s/<\/title>//')
    title_length=${#title}
    
    # Extract meta description
    meta_desc=$(grep -o 'name="description" content="[^"]*"' "$file" | sed 's/name="description" content="//;s/"//')
    desc_length=${#meta_desc}
    
    # Check canonical
    canonical=$(grep -o 'rel="canonical" href="[^"]*"' "$file" | sed 's/rel="canonical" href="//;s/"//')
    
    # Check OG tags
    og_title=$(grep -o 'property="og:title" content="[^"]*"' "$file" | sed 's/property="og:title" content="//;s/"//')
    og_desc=$(grep -o 'property="og:description" content="[^"]*"' "$file" | sed 's/property="og:description" content="//;s/"//')
    og_type=$(grep -o 'property="og:type" content="[^"]*"' "$file" | sed 's/property="og:type" content="//;s/"//')
    og_url=$(grep -o 'property="og:url" content="[^"]*"' "$file" | sed 's/property="og:url" content="//;s/"//')
    og_image=$(grep -o 'property="og:image" content="[^"]*"' "$file" | sed 's/property="og:image" content="//;s/"//')
    
    # Check Twitter Card
    twitter_card=$(grep -o 'name="twitter:card" content="[^"]*"' "$file" | sed 's/name="twitter:card" content="//;s/"//')
    twitter_title=$(grep -o 'name="twitter:title" content="[^"]*"' "$file" | sed 's/name="twitter:title" content="//;s/"//')
    twitter_desc=$(grep -o 'name="twitter:description" content="[^"]*"' "$file" | sed 's/name="twitter:description" content="//;s/"//')
    
    # Display results
    echo "📄 Title: $title"
    if [ $title_length -gt 60 ]; then
        echo "   ⚠️  WARNING: Title too long ($title_length chars, recommended <60)"
    else
        echo "   ✅ Length: $title_length chars"
    fi
    
    echo ""
    echo "📝 Meta Description: $meta_desc"
    if [ -z "$meta_desc" ]; then
        echo "   ❌ MISSING: No meta description"
    elif [ $desc_length -lt 150 ] || [ $desc_length -gt 160 ]; then
        echo "   ⚠️  WARNING: Description length $desc_length chars (recommended 150-160)"
    else
        echo "   ✅ Length: $desc_length chars"
    fi
    
    echo ""
    echo "🔗 Canonical: ${canonical:-❌ MISSING}"
    echo "🌐 OG Title: ${og_title:-❌ MISSING}"
    echo "🌐 OG Description: ${og_desc:-❌ MISSING}"
    echo "🌐 OG Type: ${og_type:-❌ MISSING}"
    echo "🌐 OG URL: ${og_url:-❌ MISSING}"
    echo "🌐 OG Image: ${og_image:-❌ MISSING}"
    echo "🐦 Twitter Card: ${twitter_card:-❌ MISSING}"
    echo "🐦 Twitter Title: ${twitter_title:-❌ MISSING}"
    echo "🐦 Twitter Description: ${twitter_desc:-❌ MISSING}"
    
    echo ""
done

echo ""
echo "=== END OF REPORT ==="
