# Practice 01

--
## 1. HTML (index.html)


Explanation:
Header & Navigation: Utilizes a <nav> element with a logo and navigation links. A hamburger menu is included for mobile responsiveness.
Sections: Divided into Home, About, Projects, and Contact using <section> elements with corresponding IDs for navigation.
Projects: Uses a grid layout to display project cards.
Contact Form: Simple form with validation attributes (required).
Footer: Contains copyright information.

--
## 2. CSS (styles.css)

Explanation:
Global Styles: Resets margins and paddings, sets a global font and text color.
Navbar: Uses Flexbox to align items. The .hamburger menu is hidden on larger screens and displayed on smaller screens.
Home Section: Full viewport height with a background image, centered text, and a call-to-action button.
About Section: Centers content with a flex layout for skills tags.
Projects Section: Utilizes CSS Grid for a responsive project card layout.
Contact Section: Centers the contact form with styled input fields.
Footer: Simple dark footer with centered text.
Responsive Styles: Media queries adjust the navigation for smaller screens, displaying a hamburger menu and stacking navigation links vertically.


--

## 3. JavaScript (script.js)

Explanation:
Hamburger Menu Toggle: Adds a click event listener to the hamburger icon to show/hide navigation links on mobile devices.
Smooth Scrolling: Enhances user experience by smoothly scrolling to sections when navigation links are clicked.
Contact Form Submission: Handles form submission by validating inputs and displaying a success or error message. In a real-world scenario, you'd send the form data to a server using fetch or another method.
--
## 4. folder
01-practice/
│
├── index.html
├── styles.css
├── script.js
└── images/
    ├── home-bg.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── project3.jpg