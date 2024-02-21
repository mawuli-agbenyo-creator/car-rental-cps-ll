const buttonLogin = document.querySelector(".btn");

function loginUser() {
  event.preventDefault();
  const emailInput = document.getElementById("loginEmail").value.toLowerCase();
  const passwordInput = document.getElementById("loginPassword").value;

  try {
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      const storedUser = JSON.parse(storedUserData);

      if (
        emailInput === storedUser.email.toLowerCase() &&
        passwordInput === storedUser.password
      ) {
        alert("Login successful");
        window.location.href = "./employee/listing.hngtml"; 
      } else {
        alert("Incorrect email or password");
      }
    } else {
      alert("User not found");
    }
  } catch (error) {
    console.error("Error during login:", error);
    // Handle error appropriately, e.g., display an error message to the user
  }
}

buttonLogin.addEventListener("click", loginUser);
