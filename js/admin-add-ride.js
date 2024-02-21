document.addEventListener('DOMContentLoaded', function () {
    const addRideForm = document.getElementById('addRideForm');
    const rideList = document.getElementById('rideList');
    const adminName = document.querySelector('.admin-name');

    // Fetching admin name from local storage 
    const admin = JSON.parse(localStorage.getItem('admin'));

    if (admin && admin.fullName) {
        adminName.textContent = "Project Work";
    }

    // Load existing rides from local storage on page load
    loadRidesFromLocalStorage();

    addRideForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const rideName = document.getElementById('rideName').value;
        const riderId = document.getElementById('riderId').value;
        const pickupLocation = document.getElementById('pickupLocation').value;
        const time = document.getElementById('time').value;
        const carNumber = document.getElementById('carNumber').value;
        const rideImageUrl = document.getElementById('rideImageUrl').value;
        const shifts = document.getElementById('timeShift').value;
        console.log(shifts);
        const iconSize = 50; // Adjust the icon size as needed

        // Add new ride to the list
        const newRideItem = createRideListItem(rideName, riderId, pickupLocation, shifts, time, carNumber, rideImageUrl, iconSize);
        rideList.appendChild(newRideItem);

        // Save the new ride to local storage
        saveRideToLocalStorage({
            car_name: rideName,
            riderId: riderId,
            pickupLocation: pickupLocation,
            imageUrl: rideImageUrl,
            shifts: shifts,
            time: time,
            carNumber: carNumber
        });

        // Clear the form
        addRideForm.reset();
    });

    function saveRideToLocalStorage(rideDetails) {
        // Get existing rides from local storage
        const existingRides = JSON.parse(localStorage.getItem('Rides')) || [];

        // Add the new ride
        existingRides.push(rideDetails);

        // Save the updated rides to local storage
        localStorage.setItem('Rides', JSON.stringify(existingRides));
    }

    function removeRideFromLocalStorage(rideName) {
        const existingRides = JSON.parse(localStorage.getItem('Rides')) || [];

        // Filter out the ride to be removed
        const updatedRides = existingRides.filter(ride => ride.car_name !== rideName);

        // Save the updated list back to local storage
        localStorage.setItem('Rides', JSON.stringify(updatedRides));
    }

    function createRideListItem(rideName, riderId, pickupLocation, shifts, time, carNumber, rideImageUrl, iconSize) {
        const newRideItem = document.createElement('li');
        newRideItem.className = 'list-group-item';

        // Create an image element if the image URL is provided
        if (rideImageUrl) {
            const rideImage = document.createElement('img');
            rideImage.src = rideImageUrl;
            rideImage.alt = `${rideName} Image`;
            rideImage.className = 'ride-image';
            rideImage.style.width = `${iconSize}px`;
            rideImage.style.height = `${iconSize}px`;
            newRideItem.appendChild(rideImage);
        }

        // Add ride details to the list item
        const rideDetailsText = document.createElement('p');
        rideDetailsText.textContent = `Drivers Name: ${rideName}- Work ID: ${riderId} - Car Number: ${carNumber} - Pick-Up Location: ${pickupLocation} - Shift: ${shifts} - Time: ${time}`;
        newRideItem.appendChild(rideDetailsText);

        // Add delete button to remove the ride
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger float-right';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            rideList.removeChild(newRideItem);

            // Remove the ride from local storage
            removeRideFromLocalStorage(rideName);
        });

        newRideItem.appendChild(deleteButton);

        return newRideItem;
    }

    function loadRidesFromLocalStorage() {
        // Get existing rides from local storage
        const existingRides = JSON.parse(localStorage.getItem('Rides')) || [];

        // Display existing rides in the list
        for (const rideDetails of existingRides) {
            const newRideItem = createRideListItem(
                rideDetails.car_name,
                rideDetails.riderId,
                rideDetails.pickupLocation,
                rideDetails.shifts,
                rideDetails.time,
                rideDetails.carNumber,
                rideDetails.imageUrl,
                50 // Set the default icon size
            );

            rideList.appendChild(newRideItem);
        }
    }
});



