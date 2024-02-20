const btn = document.querySelectorAll(".btn-primary");

function booked() {
    alert("Booking successful");
}

btn.forEach((button) => {
    button.addEventListener("click", booked);
});

// JavaScript
function displayRides() {
    const rideList = document.getElementById('rideList');
    const rides = JSON.parse(localStorage.getItem('Rides')) || [];

    rides.forEach((ride) => {
        // Create elements for each ride
        const rideContainer = document.createElement('div');
        rideContainer.className = 'ride-container';

        const img = document.createElement('img');
        img.src = ride.imageUrl;
        img.alt = 'Ride Image';
        img.className = 'ride-image';
        img.style.width = '300px';

        const name = document.createElement('p');
        name.textContent = "Driver Name: " + ride.car_name;

        const driverId = document.createElement('p');
        driverId.textContent = "Driver ID: " + ride.riderId;

        const cardNumber = document.createElement('p');
        cardNumber.textContent = "Car Number: " + ride.cardNumber;

        const shifts = document.createElement('p');
        shifts.textContent = "Shift: " + ride.shifts;

        const time = document.createElement('p');
        time.textContent = "Time Slot: " + ride.time;

        const location = document.createElement('p');
        location.textContent = "Pick-Up Location: " + ride.pickupLocation;

        const btn = document.createElement('button');
        btn.createClassName = 'btn btn-primary';
        btn.style.backgroundColor = "#0062CC"
        btn.style.borderRadius = "5px";
        btn.style.border = "none"
        btn.style.width = "200px";
        btn.style.padding = "10px"
        btn.addEventListener('click', () => {
            alert("Booked successfully")
        });
        btn.textContent = "Book Now";
        btn.style.color = "white"


        // Append elements to the rideContainer
        rideContainer.appendChild(img);
        rideContainer.appendChild(name);
        rideContainer.appendChild(driverId);
        rideContainer.appendChild(cardNumber);
        rideContainer.appendChild(shifts);
        rideContainer.appendChild(time);
        rideContainer.appendChild(location);
        rideContainer.appendChild(btn);

        // Append the rideContainer to the rideList
        rideList.appendChild(rideContainer);
    });
}

displayRides();


