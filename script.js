const STORAGE_KEY = 'jobApplications';

const form = document.querySelector('.application-form');
const applicationList = document.querySelector('.application-list');
const listSection = document.querySelector('.list-section');

// Storage
function generateId() {
  return crypto.randomUUID();
}

function getApplications() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveApplications(applications) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

// UI
function getStatusClass(status) {
  return 'status-' + status.toLowerCase();
}

function createApplicationCard(application) {
  const card = document.createElement('li');
  card.className = 'application-card';
  card.dataset.id = application.id;

  const companyHeading = document.createElement('h3');
  companyHeading.className = 'application-company';
  companyHeading.textContent = application.company;

  const jobTitleElement = document.createElement('p');
  jobTitleElement.className = 'application-job-title';
  jobTitleElement.textContent = application.jobTitle;

  const dateElement = document.createElement('p');
  dateElement.className = 'application-date';

  const dateLabel = document.createElement('span');
  dateLabel.className = 'application-label';
  dateLabel.textContent = 'Date Applied:';

  dateElement.appendChild(dateLabel);
  dateElement.append(' ' + application.dateApplied);

  const statusElement = document.createElement('span');
  statusElement.className = 'application-status ' + getStatusClass(application.status);
  statusElement.textContent = application.status;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'btn-delete';
  deleteButton.textContent = 'Delete';

  card.appendChild(companyHeading);
  card.appendChild(jobTitleElement);
  card.appendChild(dateElement);
  card.appendChild(statusElement);
  card.appendChild(deleteButton);

  return card;
}

function hideEmptyState() {
  const emptyState = document.getElementById('empty-state');

  if (emptyState) {
    emptyState.remove();
  }
}

function showEmptyState() {
  if (document.getElementById('empty-state')) {
    return;
  }

  const emptyState = document.createElement('p');
  emptyState.className = 'empty-state';
  emptyState.id = 'empty-state';
  emptyState.textContent = 'No applications yet. Add your first application above.';

  listSection.insertBefore(emptyState, applicationList);
}

function renderApplications(applications) {
  applicationList.innerHTML = '';

  if (applications.length === 0) {
    showEmptyState();
    return;
  }

  hideEmptyState();

  applications.forEach(function (application) {
    applicationList.appendChild(createApplicationCard(application));
  });
}

function deleteApplication(id) {
  const applications = getApplications().filter(function (application) {
    return application.id !== id;
  });

  saveApplications(applications);
  renderApplications(getApplications());
}

// Events
function getApplicationFromForm() {
  return {
    id: generateId(),
    company: document.getElementById('company').value,
    jobTitle: document.getElementById('job-title').value,
    dateApplied: document.getElementById('date-applied').value,
    status: document.getElementById('status').value
  };
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const applications = getApplications();
  applications.push(getApplicationFromForm());
  saveApplications(applications);

  renderApplications(getApplications());
  form.reset();
});

applicationList.addEventListener('click', function (event) {
  if (!event.target.classList.contains('btn-delete')) {
    return;
  }

  const card = event.target.closest('.application-card');
  deleteApplication(card.dataset.id);
});

renderApplications(getApplications());
