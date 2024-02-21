// Get the rides data from local storage
const rides = JSON.parse(localStorage.getItem('Rides'));

// Check if rides exist and is an array
if (Array.isArray(rides)) {
    // Get the table body element
    const tbody = document.querySelector('.table tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Loop through the rides and create table rows
    rides.forEach((ride, index) => {
        const row = `
            <tr data-toggle="modal" data-target="#rideDetailsModal">
                <td>${index + 1}</td>
                <td>${ride.car_name}</td>
                <td>${ride.riderId}</td>
                <td>
                    <button class="btn btn-info btn-sm">View Details</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
} else {
    console.log('Rides not found in local storage or is not an array');
}
