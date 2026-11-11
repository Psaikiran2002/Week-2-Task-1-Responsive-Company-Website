# Bluewave Technologies – Responsive Company Website

A simple, responsive 4-page website for a fictional IT company, **Bluewave Technologies**, built with plain **HTML, CSS and JavaScript** (no frameworks or libraries).

## Features

- **4 pages:** Home, About, Services, Contact
- **Responsive design:** works on phones, tablets and desktops (flexbox layout and a media query at 700px)
- **Hamburger menu:** the navigation collapses into a "Menu" button on small screens
- **Consistent header and footer** on every page, with the current page highlighted in the menu
- **Contact form validation** using JavaScript:
  - Name cannot be empty
  - Email must contain an `@`
  - Message must be at least 10 characters
  - A success message is shown when the form is valid
- **Auto-updating footer year** using JavaScript

## Pages

| Page | File | What it contains |
|------|------|------------------|
| Home | `index.html` | Hero banner, "What We Do" service cards, call-to-action |
| About | `about.html` | Company story, values cards, team cards |
| Services | `services.html` | Six service cards and a call-to-action |
| Contact | `contact.html` | Contact details and the validated contact form |

## Technologies Used

- **HTML5** – page structure
- **CSS3** – styling, flexbox, media queries
- **JavaScript (ES5)** – mobile menu, form validation, footer year

## How to Run

1. Download or clone this repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Open the project folder.
3. Double-click `index.html` to open it in your browser (Chrome, Edge, Firefox, etc.).

No installation or server is needed.

## How It Works

- **Mobile menu:** `script.js` adds or removes the `show` class on the menu list when the Menu button is clicked. The CSS only displays the button and hides the menu on screens 700px wide or less.
- **Cards:** the `.cards` container uses `display: flex` with `flex-wrap: wrap`, so cards automatically move to the next line on small screens.
- **Form validation:** when the form is submitted, `script.js` stops the page from reloading, checks each field, shows red error messages under any invalid field, and shows a green success message if everything is valid.

## Colors Used

| Color | Hex | Used for |
|-------|-----|----------|
| Dark blue | `#0b2545` | Header, footer, hero, headings |
| Teal blue | `#0e7c9b` | Links |
| Orange | `#f2a93b` | Buttons, active menu link |
| Light blue | `#e8f4f8` | Section backgrounds |

## Testing Checklist

- [x] All four pages open and link to each other
- [x] Layout looks good on desktop
- [x] Menu button appears and works below 700px width
- [x] Contact form shows errors for empty or invalid input
- [x] Contact form shows a success message for valid input


## Project Structure

```
bluewave-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── screenshots/
│   ├── home-landing_page.png
│   ├── about_page.png
│   ├── services_page.png
│   └── contact_page.png
└── README.md
```

### live project link
  
  https://claude.ai/artifact/WPqYsnsjx4kPtTs1YdAdg7.

### live github link

  https://psaikiran2002.github.io/Week-2-Task-1-Responsive-Company-Website/

  
## Screenshots

| Home | About |
|------|-------|
| ![Home page](screenshots/home-landing_page.png) | ![About page](screenshots/about_page.png) |

| Services | Contact |
|----------|---------|
| ![Services page](screenshots/services_page.png) | ![Contact page](screenshots/contact_page.png) |


## Author

**Pilli Sai Kiran**
Visakhapatnam, Andhra Pradesh, India

## License

This project was created for learning purposes.
## Bluewave Technologies - Responsive Company Website

A beginner-friendly multi-page website: Home, About, Services and Contact.
Made with plain HTML, CSS and JavaScript. Bluewave is a made-up company; change the text to your own.

## Files
- `index.html`, `about.html`, `services.html`, `contact.html` - the four pages
- `css/style.css` - all the styling (with comments)
- `js/script.js` - mobile menu, form check, footer year (with comments)

## How to run
Double-click `index.html` to open it in your browser.

## What I practised
- HTML: headings, paragraphs, links, sections, forms
- CSS: flexbox, cards, colors, media query for mobile
- JavaScript: click events, form validation, changing page content
