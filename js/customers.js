// customers.js

document.addEventListener('DOMContentLoaded', function () {
    const addCustomerForm = document.getElementById('addCustomerForm');
    const customerList = document.getElementById('customerList');
    const adminName = document.querySelector(".admin-name");

    const admin = JSON.parse(localStorage.getItem("admin"));

    if (admin && admin.fullName) {
        adminName.textContent = admin.fullName;
      }

    // Load existing customers from local storage on page load
    loadCustomersFromLocalStorage();

    addCustomerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const driverName = document.getElementById('customerName').value;
        const employeeId = document.getElementById('employeeID').value;
        const driverLin = document.getElementById('driverLicense').value;

        // Add new customer to the list
        const newCustomerItem = document.createElement('p');
        const driverLicense = document.createElement('p');
        const employeeID = document.createElement('p');
        newCustomerItem.className = 'customer-item';
        driverLicense.textContent = `${driverLin}`;
        employeeID.textContent = `${employeeId}`;
        newCustomerItem.textContent = `${driverName}`;


        // Add delete button to remove the customer
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger float-right';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            customerList.removeChild(newCustomerItem);

            // Remove the customer from local storage
            removeCustomerFromLocalStorage(driverName);
        });

        newCustomerItem.appendChild(deleteButton);
        customerList.appendChild(newCustomerItem);

        // Save the new customer to local storage
        saveCustomerToLocalStorage(driverName, { name: driverName, employeeId: employeeId, driverLin: driverLin});

        // Clear the form
        addCustomerForm.reset();
    });

    function saveCustomerToLocalStorage(driverName, customerDetails) {
        // Get existing customers from local storage
        const existingCustomers = JSON.parse(localStorage.getItem('Drivers')) || {};

        // Add the new customer
        existingCustomers[driverName] = customerDetails;

        // Save the updated customers to local storage
        localStorage.setItem('Drivers', JSON.stringify(existingCustomers));
    }

    function removeCustomerFromLocalStorage(driverName) {
        // Get existing customers from local storage
        const existingCustomers = JSON.parse(localStorage.getItem('Drivers')) || {};

        // Remove the customer
        delete existingCustomers[driverName];

        // Save the updated customers to local storage
        localStorage.setItem('Customers', JSON.stringify(existingCustomers));
    }

    function loadCustomersFromLocalStorage() {
        // Get existing customers from local storage
        const existingCustomers = JSON.parse(localStorage.getItem('Drivers')) || {};

        // Display existing customers in the list
        for (const driverName in existingCustomers) {
            const customerDetails = existingCustomers[driverName];

            // Create a new customer list item
            const newCustomerItem = document.createElement('li');
            newCustomerItem.className = 'customer-item';
            newCustomerItem.textContent = `Drivers Name:  ${customerDetails.name} -  Drivers Id ${customerDetails.employeeId}`;

            // Add delete button to remove the customer
            const deleteButton = document.createElement('button');
            deleteButton.className = 'button ';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                customerList.removeChild(newCustomerItem);

                // Remove the customer from local storage
                removeCustomerFromLocalStorage(driverName);
            });

            newCustomerItem.appendChild(deleteButton);
            customerList.appendChild(newCustomerItem);
        }
    }
});
