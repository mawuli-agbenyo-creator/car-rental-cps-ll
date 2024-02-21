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
  

function Employees_rides() 
{
    // Get the Employees_rides from local storage
const Employees_rides = JSON.parse(localStorage.getItem('Employees_rides'));

// Check if Employees_rides exists and is an array
if (Array.isArray(Employees_rides)) {
    const count = Employees_rides.length;
    document.getElementById('Employees_rides').textContent = count;
} else {
    console.log('Employees_rides not found in local storage or is not an array');
}  
}

Employees_rides();
setInterval(Employees_rides, 5000);


function Employees() 
{
// Get the data from local storage
const data = JSON.parse(localStorage.getItem('Customers'));

// Check if data exists and is an object
if (data && typeof data === 'object') {
    // Get the keys of the object and count them
    const count = Object.keys(data).length;
    document.getElementById('Employees_count').textContent = count;
    console.log(`Number of items in data: ${count}`);
} else {
    console.log('Data not found in local storage or is not an object');
}
  
}

Employees();
setInterval(Employees, 5000);

