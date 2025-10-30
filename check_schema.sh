#!/bin/bash

echo "=== SCHEMA MARKUP VALIDATION REPORT ==="
echo ""

# Count schema types
echo "Schema Counts by Type:"
echo "====================="

org_count=$(find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"ProfessionalService"' {} \; | wc -l | xargs)
article_count=$(find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"Article"' {} \; | wc -l | xargs)
person_count=$(find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"Person"' {} \; | wc -l | xargs)
faq_count=$(find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"FAQPage"' {} \; | wc -l | xargs)
breadcrumb_count=$(find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"BreadcrumbList"' {} \; | wc -l | xargs)

echo "✅ Organization (ProfessionalService) Schema: $org_count pages"
echo "✅ Article Schema: $article_count pages"
echo "✅ Person Schema: $person_count pages"
echo "✅ FAQPage Schema: $faq_count pages"
echo "✅ BreadcrumbList Schema: $breadcrumb_count pages"
echo ""

# List files with Article schema
echo "Files with Article Schema:"
echo "=========================="
find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"Article"' {} \; | sort

echo ""
echo "Files with FAQPage Schema:"
echo "=========================="
find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"FAQPage"' {} \;

echo ""
echo "Files with BreadcrumbList Schema:"
echo "================================="
find . -name "*.html" -not -path "*/dist/*" -type f -exec grep -l '"@type".*"BreadcrumbList"' {} \;

echo ""
echo "=== SCHEMA VALIDATION COMPLETE ==="
