function updateDataCount() {
    let data = JSON.parse(localStorage.getItem('Rides'));
    if (data) {
      document.getElementById('data-count').textContent = data.length;
    } else {
      document.getElementById('data-count').textContent = '0';
    }
  }
  
  updateDataCount();
  setInterval(updateDataCount, 5000);
  