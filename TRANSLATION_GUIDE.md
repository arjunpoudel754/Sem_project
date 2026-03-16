# Website Translation Guide - English to French

## Overview
This website now supports both English (EN) and French (FR) languages. Users can switch between languages using the language selector buttons in the navigation bar.

## How It Works

### Language Switching
- Click the **EN** or **FR** button in the top right of the navigation bar
- The selected language preference is saved to the browser's local storage
- Language preference persists across page refreshes

### Translation Implementation

The website uses a data-attribute-based translation system:

```html
<!-- Example translation element -->
<h1 data-en="Learn" data-fr="Apprendre">Learn</h1>
```

JavaScript automatically updates the text content based on the selected language.

### Translation Files

**Main Translation File:**
- `/templates/fr_translations.json` - Contains comprehensive French translations for all UI elements

**JSON Files:**
- `/accounts/static/accounts/en.json` - English translations (original)
- `/accounts/static/accounts/fr.json` - French translations

## Files Modified for Translation Support

### Templates
1. **base.html** - Main template with navigation and footer
   - Added language selector buttons (EN/FR)
   - Added data-* attributes for all translatable text
   - Added translation JavaScript engine

2. **home.html** - Home/landing page
   - Added translation attributes to hero section, stats, and CTAs
   - Added language change event listener

3. **auth.html** - Authentication page (login/register)
   - Added translation attributes to form labels and validation messages
   - Added dynamic placeholder translation for input fields

4. **AboutUs.html** - About page
   - Added translation attributes to hero section and main content

### Static Files
- `/accounts/static/accounts/en.json` - English account strings
- `/accounts/static/accounts/fr.json` - French account strings

## Adding New Translations

To add translations for new content:

1. **For HTML Text:**
   ```html
   <h2 data-en="Your English Text" data-fr="Votre texte français">Your English Text</h2>
   ```

2. **For Input Placeholders:**
   ```html
   <input data-en-placeholder="Enter name" data-fr-placeholder="Entrez le nom" />
   ```

3. **For Dynamic Text:**
   Add the class that matches the translation listener:
   - `.home-text` - For home page
   - `.auth-text` - For auth page
   - `.about-text` - For about page
   - `.nav-text` - For navigation elements
   - `.footer-text` - For footer elements

## French Translations Included

### Core UI
- Navigation: Home, Courses, How It Works, About Us, Sign In, Sign Up, Logout
- Buttons: Start Learning, Sign Up, Create Account
- Forms: First Name, Last Name, Email, Password, Confirm Password

### Content
- Hero section headings and descriptions
- Statistics labels (Active Learners, Interactive Tasks, etc.)
- Course descriptions and module information
- Footer links and information

### Validation Messages
- Email already exists
- Passwords do not match
- Password strength requirements

## Language Persistence

The selected language is automaticallysaved to the browser's localStorage key `language`. Users' language preference will be remembered when they return to the site.

## Browser Compatibility

This translation system works in all modern browsers that support:
- localStorage
- CustomEvent API
- ES6 JavaScript (let, const, arrow functions)

---

**Last Updated:** March 2026
**Default Language:** English (EN)
**Supported Languages:** English (EN), French (FR)
