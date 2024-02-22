
const btn = document.querySelector(".btn");

const employeeBookings = [];

function book(event) {
  event.preventDefault();

  const formControls = document.querySelectorAll(".form-control");

  const booking = {
    name: formControls[0].value,
    employeeId: formControls[1].value,
    pickupLocation: formControls[2].value,
    dropOffLocation: formControls[3].value,
    time: formControls[4].value,
  };

  if (!Object.values(booking).every(Boolean)) {
    alert("Please fill in all fields");
    return;
  }
  // save booking to local storage
   
  const bookings = JSON.parse(localStorage.getItem("booking")) || [];
  bookings.push(booking);

  try {
    localStorage.setItem("booking", JSON.stringify(booking));
    employeeBookings.push(booking);
    window.location.href = "../employee/listing.html";
  } catch (error) {
    console.error("Error during booking:", error);
    // Handle error appropriately, e.g., display an error message to the user
  }

  console.log(booking);
}

btn.addEventListener("click", book);


