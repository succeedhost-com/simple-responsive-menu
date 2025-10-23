# Simple Responsive Menu

A lightweight, mobile-friendly navigation menu suitable for beginners and small projects.  
Includes a **click-to-toggle mobile menu** and **one-level dropdown support**.  

---

## Features

- Fully responsive, with automatic mobile menu on small screens.
- One-level dropdown support.
- Minimal CSS and JavaScript; no external dependencies.
- UTF-8 characters for dropdown indicators and the hamburger menu.

---

## File Structure

```text
/index.html - Example page demonstrating the menu
/css/nav.css - Menu styles
/js/nav.js - JavaScript for toggle and dropdown functionality
```

---

## How to Use

1. Copy the files into your project, maintaining the folder structure:


2. Link the CSS and JS in your HTML:

```html
<link rel="stylesheet" href="css/nav.css"> <!-- link in <head> -->

<script src="js/nav.js"></script> <!-- link just before ending </body> -->
```

3. Copy the <nav> element from index.html into your pages:

```html
<nav id="main-nav">
  <!-- copy menu structure here -->
</nav>
```

4. Customize the menu items and dropdowns as needed.


---

## Notes for Beginners

The hamburger menu ☰ appears automatically on screens ≤ 768px.

Dropdowns open on click, making it mobile-friendly.

The JavaScript is simple and readable — good for learning DOM events and class toggling.

You can enhance the CSS for animations, colors, or fonts as you grow more confident.


---

## Live Demo

https://succeedhost-com.github.io/simple-responsive-menu/


---

## License

Free to use, modify, and distribute.

