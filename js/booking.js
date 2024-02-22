

function createElement(type, options = {}) {
    const element = document.createElement(type);

    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            if (key === 'style' && typeof options[key] === 'object') {
                Object.assign(element.style, options[key]);
            } else {
                element[key] = options[key];
            }
        }
    }

    return element;
}

function createButton(ride) {
    const buttonOptions = {
        className: 'btn btn-primary',
        textContent: 'Book Now',
        style: {
            backgroundColor: "#0062CC",
            borderRadius: "5px",
            border: "none",
            width: "200px",
            padding: "10px",
            color: "white"
        }
    };

    const btn = createElement('button', buttonOptions);
    btn.addEventListener('click', () => handleBooking(ride));

    return btn;
}

function handleBooking(ride) {
    // Get user information from local storage
    const userInfor = JSON.parse(localStorage.getItem("user")) || {};

    // Assuming you have user information properties like fullName, userId, and department
    const { fullName, userId, department } = userInfor;

    const booking = {
        name: fullName,
        employeeId: userId,
        department: department,
        shifts: ride.shifts,
        time: ride.time,
        pickupLocation: ride.pickupLocation,
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    console.log(booking);
}


function displayRides() {
    const rideList = document.getElementById('rideList');
    console.log(rideList);
    const rides = JSON.parse(localStorage.getItem('Rides')) || [];
    console.log(rides);

    rides.forEach((ride) => {
        const rideContainer = createElement('div', { className: 'ride-container' });

        const img = createElement('img', {
            src: ride.imageUrl,
            alt: 'Ride Image',
            className: 'ride-image',
            style: { width: '300px' }
        });

        const details = ['car_name', 'riderId', 'shifts', 'time', 'pickupLocation', 'dropofLocation'];
        const rideInfo = details.map(detail => createElement('p', { textContent: `${capitalizeFirstLetter(detail)}: ${ride[detail]}` }));

        const btn = createButton(ride);

        [img, ...rideInfo, btn].forEach(el => rideContainer.appendChild(el));

        rideList.appendChild(rideContainer);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

displayRides();
