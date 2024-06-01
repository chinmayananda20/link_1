// Create a new Date object
const currentDate = new Date();

// Extract the day, month, and year
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const year = currentDate.getFullYear();

// Format the date as dd/mm/yyyy
const formattedDate = `${day}/${month}/${year}`;

// Parse the formatted date into the HTML element with id 'main'
document.getElementById('main').textContent = "Today is "+formattedDate;