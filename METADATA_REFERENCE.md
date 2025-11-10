# Metadata Reference Guide

This document outlines the comprehensive metadata implementation across all Digital Dino frontend layout pages for optimal SEO and social media sharing.

## Main Layout (`/src/app/(frontend)/layout.tsx`)

### Features Implemented:
- **Dynamic Title Template**: `%s | Digital Dino` for consistent branding
- **Comprehensive Keywords**: Web design, development, creative studio terms
- **Open Graph**: Full social media optimization
- **Twitter Cards**: Large image cards for better engagement
- **Robots Configuration**: Optimized for search engine crawling
- **Canonical URLs**: Proper URL structure for SEO

### Key Metadata:
- **Title**: "Digital Dino - We Make Damn Good Websites"
- **Description**: Creative design and development studio specializing in exceptional web experiences
- **Base URL**: https://digitaldino.com
- **OG Images**: `/og-image.png` (1200x630)

---

## Company Section (`/company/layout.tsx`)

### Purpose: Company information, team, careers, contact
### Key Metadata:
- **Title**: "Company"
- **Description**: Learn about Digital Dino - story, team, values, and career opportunities
- **Keywords**: about digital dino, company culture, design team, careers, contact
- **Canonical**: `/company`
- **OG Image**: `/og-company.png`

---

## Services Section (`/services/layout.tsx`)

### Purpose: Service offerings and capabilities
### Key Metadata:
- **Title**: "Services"
- **Description**: Comprehensive design and development services including website design, web development, creative design, product design, and agentic AI solutions
- **Keywords**: web design services, website development, creative design, product design, UI/UX design, agentic AI
- **Canonical**: `/services`
- **OG Image**: `/og-services.png`

---

## Case Studies Section (`/casestudies/layout.tsx`)

### Purpose: Portfolio and project showcase
### Key Metadata:
- **Title**: "Case Studies"
- **Description**: Explore Digital Dino's portfolio of exceptional web design and development projects
- **Keywords**: web design portfolio, case studies, design portfolio, client work, web development projects
- **Canonical**: `/casestudies`
- **OG Image**: `/og-casestudies.png`

---

## Resources Section (`/resources/layout.tsx`)

### Purpose: Design resources, guides, and tools
### Key Metadata:
- **Title**: "Resources"
- **Description**: Access Digital Dino's collection of design resources, insights, guides, and tools
- **Keywords**: design resources, web design guides, development tools, design insights, creative resources
- **Canonical**: `/resources`
- **OG Image**: `/og-resources.png`

---

## Start Project Section (`/start/layout.tsx`)

### Purpose: Project inquiries and contact
### Key Metadata:
- **Title**: "Start Your Project"
- **Description**: Ready to start your next web design or development project? Get in touch with Digital Dino today
- **Keywords**: start project, contact digital dino, web design consultation, project inquiry, get quote
- **Canonical**: `/start`
- **OG Image**: `/og-start.png`

---

## SEO Benefits Implemented

### 🎯 Search Engine Optimization
- **Title Templates**: Consistent branding across all pages
- **Meta Descriptions**: Unique, compelling descriptions for each section
- **Keywords**: Targeted, relevant keywords for each page type
- **Canonical URLs**: Prevents duplicate content issues
- **Robots Configuration**: Optimized crawling and indexing

### 📱 Social Media Optimization
- **Open Graph**: Rich previews on Facebook, LinkedIn, etc.
- **Twitter Cards**: Enhanced Twitter sharing with large images
- **Structured Data**: Better social media representation
- **Custom OG Images**: Section-specific visual branding

### 🌐 Technical SEO
- **Metadata Base**: Proper URL resolution
- **Format Detection**: Prevents automatic phone/email linking
- **Author/Creator**: Proper attribution
- **Verification Tags**: Ready for Google Search Console

## Required Assets

### Images Needed:
- `/public/og-image.png` (1200x630) - Main site image
- `/public/og-company.png` (1200x630) - Company section
- `/public/og-services.png` (1200x630) - Services section
- `/public/og-casestudies.png` (1200x630) - Case studies section
- `/public/og-resources.png` (1200x630) - Resources section
- `/public/og-start.png` (1200x630) - Start project section

### Configuration Updates:
- Replace `"your-google-verification-code"` with actual Google verification
- Update `@digitaldino` Twitter handle if different
- Confirm `https://digitaldino.com` as the production URL

## Next Steps

1. **Create OG Images**: Design section-specific Open Graph images
2. **Google Verification**: Add actual Google Search Console verification code
3. **Analytics**: Ensure Google Analytics tracking is properly configured
4. **Sitemap**: Generate and submit XML sitemap
5. **Schema Markup**: Consider adding structured data for enhanced search results

---

*This metadata implementation provides comprehensive SEO optimization and social media sharing capabilities across the entire Digital Dino website.*