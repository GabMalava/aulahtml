const VISITORS_KEY = '@visitorsCounter';

const initialVisitorsData = {
  count: 0,
  lastVisit: getCurrentDateTime(),
};

function getCurrentDateTime() {
  const locale = 'pt-BR';
  const now = new Date();
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options).format(now);
}

function updateVisitorCount() {
  const savedData = localStorage.getItem(VISITORS_KEY);
  const visitorsData = savedData ? JSON.parse(savedData) : initialVisitorsData;

  visitorsData.count += 1;
  visitorsData.lastVisit = getCurrentDateTime();

  localStorage.setItem(VISITORS_KEY, JSON.stringify(visitorsData));

  displayVisitorInfo(visitorsData);
}

function displayVisitorInfo(data) {
  const visitorInfo = document.createElement('p');
  visitorInfo.id = 'visitors-counter';
  visitorInfo.textContent = `Esta página foi visitada ${data.count} vezes. A última visita foi: ${data.lastVisit}`;

  const footer = document.querySelector('footer');
  footer.appendChild(visitorInfo);
}

document.addEventListener('DOMContentLoaded', function () {
  updateVisitorCount();
});
