const tbody = document.getElementById("tbody");
const popup = document.querySelector(".popup");
const form = document.querySelector(".popup-body");
const arr = [
  {
    name: "Yuvraj",
    role: "SDE",
    salary: 100000,
    phoneNumber: 9992356485,
    email: "yuvraj.maurya001@gmail.com",
    companyName: "Google",
  },
];

let employeeId = 1000;

// Add new Employee function
function addEmployee(employeeObj) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = employeeId++;

  tr.append(td);

  for (let key in employeeObj) {
    const dataCell = document.createElement("td");
    dataCell.innerText = employeeObj[key];
    tr.append(dataCell);
  }

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  deleteBtn.addEventListener("click", deleteEmployeeData);
  editBtn.addEventListener("click", editEmployeeData);
  actionCell.append(deleteBtn, editBtn);
  tr.append(actionCell);

  tbody.append(tr);
}

arr.forEach((item) => {
  addEmployee(item);
});

// Delete Employee Record function
function deleteEmployeeData(e) {
  e.target.parentNode.parentNode.remove();
}

// Edit Employee Details function
let data;
function editEmployeeData(e) {
  togglerBtn();
  form.button.innerText = "Edit Details";

  const tr = e.target.parentNode.parentNode;

  data = tr.querySelectorAll("td");

  form.name.value = data[1].innerText;
  form.role.value = data[2].innerText;
  form.salary.value = data[3].innerText;
  form.phone.value = data[4].innerText;
  form.email.value = data[5].innerText;
  form.company.value = data[6].innerText;
}

// Toggle employee form function
function togglerBtn(e) {
  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else popup.style.display = "flex";
  form.reset();
  data = undefined;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.button.innerText === "Add Employee") {
    // if it is a new employee
    const employeeObj = {
      name: e.target.name.value,
      role: e.target.role.value,
      salary: e.target.salary.value,
      phoneNumber: e.target.phone.value,
      email: e.target.email.value,
      companyName: e.target.company.value,
    };

    addEmployee(employeeObj);
  } else {
    // if record is editing
    data[1].innerText = e.target.name.value;
    data[2].innerText = e.target.role.value;
    data[3].innerText = e.target.salary.value;
    data[4].innerText = e.target.phone.value;
    data[5].innerText = e.target.email.value;
    data[6].innerText = e.target.company.value;
    form.button.innerText = "Add Employee";
  }
  togglerBtn();
});
