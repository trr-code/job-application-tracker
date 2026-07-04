# Development Log

## Feature 1 – Homepage Layout

Goal:
- Create the basic structure of the application.

What I Built:
- Homepage header with title and description.
- Add Application section.
- Your Applications section.
- Linked HTML, CSS, and JavaScript files.
- Responsive page layout.

How I Verified It:
- Opened the page in a browser.
- Checked desktop, tablet, and mobile layouts.
- Confirmed no Console errors.
- Tested the feature on GitHub Pages after pushing the changes.

What I Learned:
- Building one feature at a time makes verification simpler and keeps the project organized.
- Breaking the project into smaller steps helps me better understand each part before moving on.
- Testing each completed feature gives me confidence that changes aren't introducing new problems.
- Working incrementally makes it easier to review AI-generated code instead of reviewing large amounts of code at once.
- Planning, building, verifying, and improving each feature creates a more structured development process.

Commit Message:
- Create homepage layout

## Feature 2 – Application Form

Goal:
- Allow the user to enter a job application.

What I Built:
- Added the application form.
- Added Company, Job Title, Date Applied, and Status fields.
- Added an Add Application button.
- Added responsive styling for the form.
- Added built-in HTML validation with the `required` attribute.

How I Verified It:
- Confirmed all fields and the button display correctly.
- Verified the Status dropdown contains all four options.
- Tested required field validation.
- Tested the layout on desktop, tablet, and mobile.
- Confirmed there are no project Console errors.
- Tested the feature on GitHub Pages after pushing the changes.

What I Learned:
- Built-in HTML validation with the required attribute can provide useful validation without JavaScript.
- Asking AI why it made a design decision helps me better understand the implementation before moving on.
- Verifying each completed feature before continuing makes the project easier to manage.

Commit Message:
- Add application form

## Feature 3 – Display Applications

Goal:
- Display job applications in the Your Applications section.

What I Built:
- Added placeholder application cards.
- Displayed Company, Job Title, Date Applied, and Status on each card.
- Added color-coded status badges.
- Added responsive card layout for mobile and desktop.

How I Verified It:
- Confirmed four application cards display.
- Verified each card shows the correct information.
- Confirmed each status uses a different color.
- Tested the layout on desktop, tablet, and mobile.
- Confirmed there were no project Console errors.
- Tested the feature on GitHub Pages after pushing the changes.

What I Learned:
- Building the display before adding JavaScript makes it easier to verify the layout independently.
- Placeholder data is useful for testing the interface before connecting real data.
- Separating each feature into small steps makes debugging and verification simpler.

Commit Message:
- Display application cards

## Feature 4 – Add Application Functionality

Goal:
- Allow the user to add a job application through the form.

What I Built:
- Connected the form to JavaScript.
- Prevented the page from reloading on form submission.
- Created new application cards from user input.
- Added new application cards to the Your Applications section.
- Cleared the form after each submission.
- Replaced placeholder cards with an empty-state message.
- Used a dedicated `.empty-state` class for the empty-state message.

How I Verified It:
- Confirmed the empty-state message displays when there are no applications.
- Added multiple test applications using the form.
- Confirmed each new card displays the correct information.
- Confirmed the empty-state message disappears after the first application is added.
- Confirmed the form clears after submission.
- Confirmed the `required` field validation still works.
- Confirmed there were no project Console errors.
- Tested the feature on GitHub Pages after pushing the changes.

What I Learned:
- Separating each feature into small steps makes testing and debugging easier.
- Questioning AI's implementation decisions can lead to cleaner, more maintainable code.
- Using dedicated classes makes the code easier to understand and maintain.
- Verifying each feature before moving on helps catch small issues early.

Commit Message:
- Add application functionality

## Feature 5 – Persist Applications with localStorage

Goal:

- Keep applications after the page is refreshed.

What I Built:

- Added helper functions to save and load applications from `localStorage`.
- Stored applications using the `jobApplications` key.
- Loaded saved applications when the page first opens.
- Rendered saved application cards automatically on page load.
- Kept the empty-state message visible when there are no saved applications.
- Hid the empty-state message when saved applications exist or a new application is added.

How I Verified It:

- Confirmed the empty-state message displays when no applications are saved.
- Added multiple applications using the form.
- Refreshed the page and confirmed all applications persisted.
- Closed and reopened the page and confirmed applications were still saved.
- Verified the `jobApplications` key was created in Local Storage.
- Confirmed there were no project Console errors.
- Tested the feature on GitHub Pages after pushing the changes.

What I'm Learning:

- Separating storage logic into dedicated helper functions keeps the code easier to understand and maintain.
- Verifying data in browser DevTools helps confirm features are working correctly.
- Building one feature at a time makes it easier to isolate and verify new functionality.

Commit Message:

- Persist applications with localStorage

## Feature 6 – Delete Application

Goal:
- Allow the user to delete saved job applications.

What I Built:
- Added a Delete button to each application card.
- Added a unique `id` to each new application.
- Stored each application `id` in `localStorage`.
- Added delete functionality that removes the selected application from the page.
- Updated `localStorage` so deleted applications stay deleted after refresh.
- Restored the empty-state message when the last application is deleted.
- Added styling for the Delete button.

How I Verified It:
- Added an application and confirmed it displayed with a Delete button.
- Confirmed new applications include an `id` in Local Storage.
- Deleted an application and confirmed it disappeared from the page.
- Refreshed the page and confirmed the deleted application did not return.
- Added multiple applications, deleted one, and confirmed the remaining one persisted.
- Deleted the last application and confirmed the empty-state message returned.
- Confirmed there were no project Console errors.

What I'm Learning:
- Inspecting Local Storage directly is an effective way to verify application data.
- Verifying both the UI and Local Storage makes debugging easier.
- Building one feature at a time keeps problems isolated and easier to diagnose.
- Testing every workflow before committing helps catch issues early.

Commit Message:
- Add delete functionality

## Feature 7 – Final Testing & Responsive Polish

Goal:

What I Built:

How I Verified It:

What I Learned:

Commit Message:
