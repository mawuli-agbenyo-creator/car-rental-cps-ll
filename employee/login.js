// const buttonLogin = document.querySelector(".btn");

// function loginUser() {
//   event.preventDefault();
//   const emailInput = document.getElementById("loginEmail").value.toLowerCase();
//   const passwordInput = document.getElementById("loginPassword").value;

//   try {
//     const storedUserData = localStorage.getItem("user");

//     if (storedUserData) {
//       const storedUser = JSON.parse(storedUserData);

//       if (
//         emailInput === storedUser.email.toLowerCase() &&
//         passwordInput === storedUser.password
//       ) {
//         alert("Login successful");
//         window.location.href = "/employee/listing.html"; 
//       } else {
//         alert("Incorrect email or password");
//       }
//     } else {
//       alert("User not found");
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     // Handle error appropriately, e.g., display an error message to the user
//   }
// }

// buttonLogin.addEventListener("click", loginUser);


const buttonLogin = document.querySelector(".btn");

function loginUser(event) {
  event.preventDefault();
  const emailInput = document.getElementById("loginEmail").value.toLowerCase();
  const passwordInput = document.getElementById("loginPassword").value;

  try {
    // Retrieve the array of users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching email and password
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === emailInput && u.password === passwordInput
    );

    if (user) {
      alert("Login successful");
      window.location.href = "/employee/listing.html";
    } else {
      alert("Incorrect email or password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    // Handle error appropriately, e.g., display an error message to the user
  }
}

buttonLogin.addEventListener("click", loginUser);
