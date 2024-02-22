const adminName = document.querySelector(".admin-name");

const admin = JSON.parse(localStorage.getItem("admin"));

if (admin && admin.fullName) {
    adminName.textContent = admin.fullName;
  }
document.addEventListener("DOMContentLoaded", () => {
    displayBookedSlots();
    setupPrintButton();
});

function displayBookedSlots() {
    const bookedSlots = getBookedSlots();

    bookedSlots.forEach(slot => {
        const tableRow = createTableRow(slot);
        appendRowToTable('bookedSlot', tableRow);
    });
}

function getBookedSlots() {
    const bookingsData = localStorage.getItem('bookings');
    return bookingsData ? JSON.parse(bookingsData) : [];
  }
  

function createTableRow(slot) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${slot.name}</td>
        <td>${slot.department}</td>
        <td>${slot.shifts}</td>
        <td>${slot.time}</td>
        <td>${slot.pickupLocation}</td>
    `;

    return tr;
}

function appendRowToTable(tableId, row) {
    const table = document.getElementById(tableId);
    table.appendChild(row);
}


function setupPrintButton() {
    const btn = document.querySelector('.print');

    btn.addEventListener('click', () => {
        printBookedSlots(getBookedSlots());
    });
}


// function printBookedSlots(bookedSlots) {
    
//     const doc = new jsPDF();

//     doc.setFontSize(12);
//     doc.setFont('courier');

//     doc.autoTable({
//         head: [['Name', 'Department', 'Shifts', 'Time', 'Pickup Location']],
//         body: bookedSlots.map(slot => [slot.name, slot.department, slot.shifts, slot.time, slot.pickupLocation]),
//     });

//     doc.save('booked_slots.pdf');
// }
document.addEventListener("DOMContentLoaded", () => {
    displayBookedSlots();
    setupPrintButton();
});

function setupPrintButton() {
    const btn = document.querySelector('.print');

    btn.addEventListener('click', () => {
        printBookedSlots();
    });
}

function printBookedSlots() {
    const bookedSlots = getBookedSlots();
    
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.setFont('courier');

    doc.autoTable({
        head: [['Name', 'Department', 'Shifts', 'Time', 'Pickup Location']],
        body: bookedSlots.map(slot => [slot.name, slot.department, slot.shifts, slot.time, slot.pickupLocation]),
    });

    doc.save('booked_slots.pdf');
}
