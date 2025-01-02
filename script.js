function searchNews() {
    const query = document.getElementById('search-bar').value;
    const results = [
      { source: 'Source 1', headline: 'Dummy news 1' },
      { source: 'Source 2', headline: 'Dummy news 2' },
      { source: 'Source 3', headline: 'Dummy news 3' },
    ];
    displayResults(results);
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.className = 'result';
      resultElement.innerHTML = `<p><strong>${result.source}</strong>: ${result.headline}</p>`;
      resultsContainer.appendChild(resultElement);
    });
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
  });
  
  // Dummy chart and news recommendations for the dashboard
  const chartContainer = document.getElementById('chart-container');
  if (chartContainer) {
    const ctx = document.createElement('canvas');
    chartContainer.appendChild(ctx);
  
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Stock Prices',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }]
      },
      options: {
        responsive: true,
      }
    });
  }
  
  const newsRecommendations = document.getElementById('news-recommendations');
  if (newsRecommendations) {
    newsRecommendations.innerHTML = '<p>Personalized news recommendations coming soon!</p>';
  }
  