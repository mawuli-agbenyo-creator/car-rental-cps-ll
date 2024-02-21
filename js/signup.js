var buttonRegister = document.querySelector('.btn');

function userDetails() {
    event.preventDefault();

    var fullName = document.getElementById('registerName').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('registerConfirmPassword').value;
    var workID = document.getElementById('WorkID').value;

    var admin = {
        fullName,
        email,
        password,
        confirmPassword,
        workID
    };

    try {
        localStorage.setItem('admin', JSON.stringify(admin));
        // alert("Registered");
        // Redirect to the desired page after successful login
        // Change the URL to your desired  page if the local storage is not empty
        if (localStorage.getItem('admin') !== null) {
            // window.location.href = "../admin/login.html";
            window.location.href = "/dashboard.html";
        }
    } catch (error) {
        console.error("Error storing data:", error);
        // Handle error appropriately, e.g., display an error message to the user
    }
}

buttonRegister.addEventListener('click',   userDetails);
