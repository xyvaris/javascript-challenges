const employees = [
  { name: "Luffy", department: "IT", status: "active", salary: 30000 },
  { name: "Zoro", department: "HR", status: "active", salary: 25000 },
  { name: "Nami", department: "IT", status: "active", salary: 35000 },
  { name: "Sanji", department: "Finance", status: "inactive", salary: 40000 },
  { name: "Robin", department: "HR", status: "active", salary: 28000 },
  { name: "Usopp", department: "IT", status: "inactive", salary: 22000 },
  { name: "Franky", department: "Finance", status: "active", salary: 32000 },
  { name: "Brook", department: "IT", status: "active", salary: 27000 }
];

const showEmployees = document.getElementById('showEmployees'); // Siguraduhing <ul> o <ol> ito sa HTML
const showAllBtn = document.getElementById('showAll');
const showInactiveBtn = document.getElementById('showInactive');
const showActiveBtn = document.getElementById('showActive');

// Isang function lang para sa lahat ng uri ng display (All, Active, Inactive)
function renderEmployees(filterType) {
  // 1. Linisin muna ang listahan bago magdagdag para hindi magka-duplicate
  showEmployees.innerHTML = ''; 

  employees.forEach(({ name, department, status, salary }) => {
    // 2. I-check kung tumutugma ang status sa pinindot na filter
    if (filterType === 'All' || status === filterType) {
      
      // 3. Gumawa ng isang <li> element para sa bawat empleyado
      const li = document.createElement('li'); // May quotes dapat ang 'li'
      
      // 4. I-set ang text sa loob ng list item
      li.innerText = `Name: ${name} | Dept: ${department} | Status: ${status} | Salary: ₱${salary.toLocaleString()}`;
      
      // 5. I-append o idikit ang <li> sa loob ng showEmployees container natin sa web page
      showEmployees.appendChild(li);
    }
  });
}

// Event Listeners para sa mga buttons
showAllBtn.addEventListener('click', () => renderEmployees('All'));
showActiveBtn.addEventListener('click', () => renderEmployees('active'));
showInactiveBtn.addEventListener('click', () => renderEmployees('inactive'));

renderEmployees('All');

// Display data in table
const dataTable = document.getElementById('dataTable');

const employeesActive = employees.filter(({status}) => status === 'active');




