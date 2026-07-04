const STORAGE_KEY = 'jobApplications';

const form = document.querySelector('.application-form');
const applicationList = document.querySelector('.application-list');
const emptyState = document.getElementById('empty-state');

function getApplications() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveApplications(applications) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

function getStatusClass(status) {
  return 'status-' + status.toLowerCase();
}

function createApplicationCard(company, jobTitle, dateApplied, status) {
  const card = document.createElement('li');
  card.className = 'application-card';

  const companyHeading = document.createElement('h3');
  companyHeading.className = 'application-company';
  companyHeading.textContent = company;

  const jobTitleElement = document.createElement('p');
  jobTitleElement.className = 'application-job-title';
  jobTitleElement.textContent = jobTitle;

  const dateElement = document.createElement('p');
  dateElement.className = 'application-date';

  const dateLabel = document.createElement('span');
  dateLabel.className = 'application-label';
  dateLabel.textContent = 'Date Applied:';

  dateElement.appendChild(dateLabel);
  dateElement.append(' ' + dateApplied);

  const statusElement = document.createElement('span');
  statusElement.className = 'application-status ' + getStatusClass(status);
  statusElement.textContent = status;

  card.appendChild(companyHeading);
  card.appendChild(jobTitleElement);
  card.appendChild(dateElement);
  card.appendChild(statusElement);

  return card;
}

function hideEmptyState() {
  if (emptyState) {
    emptyState.remove();
  }
}

function renderApplications(applications) {
  if (applications.length === 0) {
    return;
  }

  hideEmptyState();

  applications.forEach(function (application) {
    const card = createApplicationCard(
      application.company,
      application.jobTitle,
      application.dateApplied,
      application.status
    );
    applicationList.appendChild(card);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const application = {
    company: document.getElementById('company').value,
    jobTitle: document.getElementById('job-title').value,
    dateApplied: document.getElementById('date-applied').value,
    status: document.getElementById('status').value
  };

  const applications = getApplications();
  applications.push(application);
  saveApplications(applications);

  hideEmptyState();

  const card = createApplicationCard(
    application.company,
    application.jobTitle,
    application.dateApplied,
    application.status
  );
  applicationList.appendChild(card);

  form.reset();
});

renderApplications(getApplications());
