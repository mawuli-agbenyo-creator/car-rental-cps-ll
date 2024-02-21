const buttonLogin = document.querySelector(".btn-block");

function loginUser() {
  event.preventDefault();
  const emailInput = document.getElementById("loginEmail").value.toLowerCase();
  const passwordInput = document.getElementById("loginPassword").value;

  try {
    const storedAdminData = localStorage.getItem("admin");

    if (storedAdminData) {
      const storedAdmin = JSON.parse(storedAdminData);

      if (
        emailInput === storedAdmin.email.toLowerCase() &&
        passwordInput === storedAdmin.password
      ) {
        alert("Login successful");
        window.location.href = "../admin/dashboard.html";
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
