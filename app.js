/**
 * My Pre-Screening - Core Application Logic
 * Searches screening text database and resolves 5 local clinics per zip code
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const searchForm = document.getElementById('screening-search-form');
  const ageInput = document.getElementById('age-input');
  const zipInput = document.getElementById('zip-input');
  const searchBtn = document.getElementById('search-btn');
  const genderFilterGroup = document.getElementById('gender-filter-group');
  const resultsSection = document.getElementById('results-section');
  const emptyState = document.getElementById('empty-state');
  const screeningsList = document.getElementById('screenings-list');
  const resultsCount = document.getElementById('results-count');
  const locationText = document.getElementById('location-text');

  let screeningsDatabase = window.SCREENINGS_DATA || [];
  let currentGender = 'all';

  if (!screeningsDatabase || screeningsDatabase.length === 0) {
    fetch('screenings-data.json')
      .then(response => response.json())
      .then(data => {
        screeningsDatabase = data;
      })
      .catch(err => console.error('Fallback fetch error:', err));
  }

  // Handle Gender Toggle
  if (genderFilterGroup) {
    genderFilterGroup.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.gender-btn');
      if (!targetBtn) return;

      document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('active'));
      targetBtn.classList.add('active');
      currentGender = targetBtn.dataset.gender;

      // Re-run search if inputs are valid
      if (ageInput.value && zipInput.value) {
        performSearch();
      }
    });
  }

  // Handle Form Submission
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch();
  });

  function performSearch() {
    const age = parseInt(ageInput.value, 10);
    const zipCode = zipInput.value.trim();

    if (isNaN(age) || age < 1 || age > 120) {
      alert('Please enter a valid age between 1 and 120.');
      ageInput.focus();
      return;
    }

    if (!/^\d{5}$/.test(zipCode)) {
      alert('Please enter a valid 5-digit US zip code.');
      zipInput.focus();
      return;
    }

    // Filter Screenings by Age & Gender
    const matchedScreenings = screeningsDatabase.filter(screening => {
      const ageMatches = age >= screening.minAge && age <= screening.maxAge;
      
      let genderMatches = true;
      if (currentGender !== 'all') {
        if (screening.gender !== 'all' && screening.gender !== currentGender) {
          genderMatches = false;
        }
      }

      return ageMatches && genderMatches;
    });

    // Render Results
    renderResults(matchedScreenings, age, zipCode);
  }

  function renderResults(screenings, age, zipCode) {
    // Update Header Details
    locationText.textContent = `Zip Code: ${zipCode} • Age ${age}`;
    resultsCount.textContent = `${screenings.length} Screenings Found`;

    // Clear Previous List
    screeningsList.innerHTML = '';

    if (screenings.length === 0) {
      emptyState.style.display = 'block';
      resultsSection.style.display = 'none';
      return;
    }

    emptyState.style.display = 'none';
    resultsSection.style.display = 'block';

    // Render Each Screening Card
    screenings.forEach(screening => {
      const card = document.createElement('div');
      card.className = 'screening-card';

      // Format Frequency Text based on Age
      let frequencyDisplay = screening.frequency;
      if (typeof screening.frequency === 'object') {
        if (age < 40 && screening.frequency.under40) frequencyDisplay = screening.frequency.under40;
        else if (age >= 40 && age <= 54 && screening.frequency.age40_54) frequencyDisplay = screening.frequency.age40_54;
        else if (age >= 55 && age <= 64 && screening.frequency.age55_64) frequencyDisplay = screening.frequency.age55_64;
        else if (age >= 65 && screening.frequency.age65_plus) frequencyDisplay = screening.frequency.age65_plus;
        else if (age >= 40 && screening.frequency.over40) frequencyDisplay = screening.frequency.over40;
        else if (age >= 21 && age <= 29 && screening.frequency.age21_29) frequencyDisplay = screening.frequency.age21_29;
        else if (age >= 30 && screening.frequency.age30_65) frequencyDisplay = screening.frequency.age30_65;
        else frequencyDisplay = JSON.stringify(screening.frequency);
      }

      // Generate HTML for Screening Tests
      const testsHtml = screening.tests.map(t => `
        <div class="test-item">
          <div class="test-name">${escapeHtml(t.name)}</div>
          <div class="test-desc">${escapeHtml(t.description)}</div>
        </div>
      `).join('');

      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(screening.title + ' ' + zipCode)}`;

      card.innerHTML = `
        <div class="screening-header">
          <div class="screening-title-row">
            <div class="screening-meta">
              <span class="screening-category">${escapeHtml(screening.category)}</span>
              <h4 class="screening-title">${escapeHtml(screening.title)}</h4>
            </div>
            <a 
              href="${googleSearchUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-get-screened"
              aria-label="Get Screened for ${escapeHtml(screening.title)} in zip ${zipCode}"
            >
              <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              Get Screened
            </a>
          </div>
          <div class="screening-tags">
            <span class="tag tag-age">Age ${screening.minAge}${screening.maxAge < 120 ? '-' + screening.maxAge : '+'}</span>
            <span class="tag tag-frequency">${escapeHtml(frequencyDisplay)}</span>
          </div>
        </div>

        <div class="screening-body">
          <div class="purpose-box">
            <div class="section-subtitle">Screening Purpose</div>
            <p class="purpose-text">${escapeHtml(screening.purpose)}</p>
          </div>

          <div class="section-subtitle">Available Tests</div>
          <div class="tests-list">
            ${testsHtml}
          </div>

          <div class="action-footer-box">
            <div class="action-footer-text">
              Ready to schedule? Click <strong>Get Screened</strong> to find local providers and clinics in Zip <strong>${zipCode}</strong> on Google Search.
            </div>
            <a 
              href="${googleSearchUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-get-screened"
            >
              <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              Get Screened in Zip ${zipCode} ↗
            </a>
          </div>
        </div>
      `;

      screeningsList.appendChild(card);
    });

    // Scroll to results smoothly
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
