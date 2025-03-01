# My-Digital-Resume
# Wisdom Ehirim Portfolio Website
This repository contains the source code for the portfolio website of Wisdom Ehirim. The site showcases work experience, projects, and technical skills using a clean, responsive design and dynamic animations.

## Overview
The website is built using:

HTML for structure.
Tailwind CSS for styling.
JavaScript for dynamic interactions and animations.
It features multiple sections including About, Services, Projects, Timeline, and a Contact form integrated with Formspree.

Components
index.html:
The main HTML file that contains the layout and structure for all sections (Navigation, Hero, About, Services, Projects, Timeline, and Contact).

styles.css:
Contains custom styles including keyframe animations (floating icons and fade-in effects), layout adjustments, and timeline styling.

script.js:
Implements dynamic features such as:

Floating tech stack icons.
Dynamic project timeline population.
Timeline filtering with animations using GSAP.
Intersection Observer for scroll-triggered fade-in animations.
Initialization of AOS (Animate on Scroll) library for additional scroll animations.

External Libraries & Tools
Tailwind CSS:
A utility-first CSS framework for rapidly building custom designs.
Tailwind CSS

GSAP (GreenSock Animation Platform):
Used for creating smooth, advanced animations and scroll-triggered effects.
GSAP

Devicon:
An icon set representing various programming languages and technologies, used here for tech stack icons.
Devicon

Formspree:
A form handling service that processes contact form submissions without needing a dedicated backend.
Formspree

AOS (Animate on Scroll):
A library that animates elements as they scroll into view. It is dynamically loaded and initialized in the script.
AOS

Vercel:
The deployment platform used to host the website.
Vercel

File Structure
graphql
Copy
Edit
├── index.html      # Main HTML file
├── styles.css      # Custom CSS with animations and styling rules
├── script.js       # JavaScript for dynamic content, animations, and interactions
├── favicon_io/     # Directory containing favicon assets
└── README.md       # This documentation file
Setup & Deployment
Local Setup
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/your-username/wisdom-ehirim-portfolio.git
cd wisdom-ehirim-portfolio
Open Locally: Open index.html in your preferred browser to view and test the site locally.

Deployment on Vercel
Push to GitHub:
Ensure your project is committed and pushed to a GitHub repository.

Import into Vercel:

Log in to Vercel.
Click "New Project" and import your repository.
For a static site, select the "Other" framework preset.
Leave the build command blank if not required and set the output directory as needed.
Deploy:

Click "Deploy".
Vercel will automatically build and deploy your site, providing you with a live URL.
Custom Domain (Optional):
Follow Vercel’s instructions to add and configure a custom domain.

Credits
This project is developed by Wisdom Ehirim as a portfolio to showcase backend development, technical writing, and project management skills.

