# Job Application Tracker

## Project Description

Job Application Tracker is a simple web application that helps users record and manage job applications in one place. Users can add applications with company name, job title, date applied, and status, view them in a responsive card layout, and delete entries they no longer need. Applications are saved in the browser using `localStorage`, so data persists after a page refresh.

## Live Demo

[View the Live Demo](https://trr-code.github.io/job-application-tracker/)

## Purpose of the Project

This project was built for the **Next Chapter Technical Pre-Course** admissions project. It demonstrates foundational web development skills using HTML, CSS, and JavaScript, including semantic markup, responsive design, DOM manipulation, browser storage, and incremental feature development.

The application solves a practical problem: keeping job search information organized without requiring accounts, databases, or external dependencies.

## Features

- Responsive homepage layout with a clear page title and description
- Application form with Company, Job Title, Date Applied, and Status fields
- Built-in HTML validation for required fields
- Status options: Applied, Interview, Offer, Rejected
- Color-coded status badges on application cards
- Add applications without page reload
- Display applications in a responsive card grid
- Empty-state message when no applications exist
- Persist applications with `localStorage`
- Delete individual applications
- Restore empty-state message when the last application is deleted

## Technologies Used

- HTML5
- CSS3 (custom properties, Flexbox, CSS Grid, responsive media queries)
- JavaScript (DOM APIs, event handling, `localStorage`, `crypto.randomUUID()`)

No frameworks, build tools, or package managers were used.

## Project Structure

```
job-application-tracker/
├── index.html          # Page structure and form markup
├── styles.css          # Layout, typography, and responsive styling
├── script.js           # Application logic and localStorage handling
├── development-log.md  # Feature-by-feature development notes
├── prompt-history.md   # Record of AI-assisted development prompts
└── README.md           # Project documentation
```

Each file follows the Single Responsibility Principle: HTML handles structure, CSS handles presentation, and JavaScript handles behavior.

## Getting Started

This project uses only HTML, CSS, and JavaScript. No installation or build step is required.

1. Clone the repository:
   ```bash
   git clone https://github.com/trr-code/job-application-tracker.git
   ```
2. Open `index.html` in your preferred modern web browser.

For a hosted version, see the [Live Demo](#live-demo) section above.

## How to Use

1. Open the application in your browser.
2. Fill in the **Add Application** form:
   - **Company** (required)
   - **Job Title** (required)
   - **Date Applied** (required)
   - **Status** (defaults to Applied)
3. Click **Add Application** to save the entry.
4. View saved applications in the **Your Applications** section.
5. Click **Delete** on a card to remove an application.
6. Refresh the page — saved applications remain until deleted.

If no applications exist, the message "No applications yet. Add your first application above." is displayed.

## Testing Summary

The following testing was performed during development:

- **Form validation** — Confirmed required fields block submission when empty
- **Adding applications** — Verified new cards display correct company, job title, date, and status
- **localStorage persistence** — Verified applications save to the `jobApplications` key and reload on page refresh
- **Delete functionality** — Verified cards remove from the UI and from `localStorage`
- **Empty-state behavior** — Verified empty-state message shows with no applications and returns after deleting the last entry
- **Page refresh persistence** — Verified add and delete changes survive browser refresh
- **GitHub Pages verification** — Tested deployed features after pushing changes
- **Responsive layout checks** — Verified layout on desktop, tablet, and mobile screen sizes

Browser DevTools were used to inspect `localStorage` and confirm no console errors during testing.

## Development Process

This project was built incrementally, one feature at a time:

1. Homepage Layout
2. Application Form
3. Display Applications
4. Add Application Functionality
5. Persist Applications with localStorage
6. Delete Application
7. Final Testing & Responsive Polish

Each feature was planned, implemented, reviewed, tested, committed, and pushed before moving to the next. This approach kept the codebase manageable, made bugs easier to isolate, and allowed verification at every step. Progress and lessons learned were recorded in `development-log.md`.

## AI Assistance

**Cursor** was used for implementation support throughout the project, including writing HTML, CSS, and JavaScript for each feature.

**ChatGPT** was used as a second reviewer for brainstorming, refining requirements into clear implementation prompts for Cursor, questioning implementation decisions, discussing software engineering concepts, verifying testing procedures, reviewing code quality, and helping document the project.

All AI-generated suggestions were reviewed before accepting changes. Questions were asked when implementation choices were unclear, including code organization, validation, testing strategy, refactoring decisions, and overall application design. Final decisions were made after reviewing the code and testing the behavior in the browser.

A full record of prompts and responses is available in `prompt-history.md`.

## Author

**Terry Lafferty**

GitHub: [trr-code](https://github.com/trr-code)
