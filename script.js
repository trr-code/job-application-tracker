const form = document.querySelector('.application-form');
const applicationList = document.querySelector('.application-list');
const emptyState = document.getElementById('empty-state');

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

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const company = document.getElementById('company').value;
  const jobTitle = document.getElementById('job-title').value;
  const dateApplied = document.getElementById('date-applied').value;
  const status = document.getElementById('status').value;

  const card = createApplicationCard(company, jobTitle, dateApplied, status);

  if (emptyState) {
    emptyState.remove();
  }

  applicationList.appendChild(card);

  form.reset();
});
