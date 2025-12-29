const addBtn = document.getElementById("addBtn");
const addStudentBox = document.querySelector(".add-student");
const submitBtn = document.querySelector(".submit-btn");
const tableBody = document.getElementById("studentsTable");

const nomInput = document.querySelector(".input-nom");
const prenomInput = document.querySelector(".input-prenom");
const emailInput = document.querySelector(".input-email");
const groupInput = document.getElementById("group");
const statusInput = document.querySelector(".input-status");

let counter = 1
let students = JSON.parse(localStorage.getItem("students")) || [];

addBtn.addEventListener("click", () => {
  addStudentBox.classList.remove("d-none");
});

function closeModal() {
  addStudentBox.classList.add("d-none");
}

submitBtn.addEventListener("click", () => {
  const nom = nomInput.value.trim();
  const prenom = prenomInput.value.trim();
  const email = emailInput.value.trim();
  const group = groupInput.value.trim();
  const activ = statusInput.value;

  if (!nom || !prenom || !email || !group || !activ) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  const student = {
    id: counter++,
    nom,
    prenom,
    email,
    group,
    activ,
    status:"",
    retardTime: "",
    absences:"",
    retards:"",
    presence:"",
    retardReason:"",
    absentReason:"",
    date: Date.now()
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  renderStudents();
  clearForm();
  closeModal();
});

function renderStudents() {
  tableBody.innerHTML = "";

  students.forEach(student => {
    const initials =
      student.nom[0].toUpperCase() + student.prenom[0].toUpperCase();

    const statusStyle =
      student.activ === "actif"
        ? "background:rgba(16,185,129,.25);color:#10b981;"
        : "background:rgba(139,92,246,.25);color:#8b5cf6;";

    const tr = document.createElement("tr");
    tr.style.background = "#14325a";
    tr.style.color = "white";

    tr.innerHTML = `
      <td>
        <div class="d-flex align-items-center gap-3">
          <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold"
               style="width:40px;height:40px;background:#f59e0b;color:#000;">
            ${initials}
          </div>
          <div>
            <strong>${student.nom} ${student.prenom}</strong><br>
            <small>${student.group}</small>
          </div>
        </div>
      </td>
      <td>${student.email}</td>
      <td>${student.group}</td>
      <td>
        <span class="px-3 py-1 rounded-pill fw-semibold" style="${statusStyle}">
          ${student.activ}
        </span>
      </td>
      <td>
        <i class="bi bi-pencil me-3 text-warning"
           style="cursor:pointer"
           title="Modifier"
           onclick="editStudent(${student.id}, this)"></i>

        <i class="bi bi-trash text-danger"
           style="cursor:pointer"
           title="Supprimer"
           onclick="deleteStudent(${student.id})"></i>
      </td>
    `;

    tableBody.appendChild(tr);
  });

  updateStats();
}

function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}

function updateStats() {
  document.getElementById("totalStudents").textContent = students.length;
  document.getElementById("activeStudents").textContent = students.filter(s => s.status === "actif").length;
  document.getElementById("inactiveStudents").textContent =
    students.filter(s => s.status !== "actif").length;
}

function clearForm() {
  nomInput.value = "";
  prenomInput.value = "";
  emailInput.value = "";
  groupInput.value = "";
  statusInput.value = "";
}

renderStudents();

function editStudent(id, btn) {
  const tr = btn.closest("tr");
  tr.dataset.old = tr.innerHTML;

  const student = students.find(s => s.id === id);

  tr.innerHTML = `
    <td>
      <input class="form-control form-control-sm mb-1" value="${student.nom}">
      <input class="form-control form-control-sm" value="${student.prenom}">
    </td>

    <td>
      <input class="form-control form-control-sm" value="${student.email}">
    </td>

    <td>
      <input class="form-control form-control-sm" value="${student.group}">
    </td>

    <td>
      <select class="form-select form-select-sm">
        <option value="actif" ${student.activ === "actif" ? "selected" : ""}>actif</option>
        <option value="inactif" ${student.activ === "inactif" ? "selected" : ""}>inactif</option>
      </select>
    </td>

    <td>
      <i class="bi bi-check-lg text-success me-3"
         style="cursor:pointer"
         title="Enregistrer"
         onclick="saveStudent(${id}, this)"></i>

      <i class="bi bi-x-lg text-secondary"
         style="cursor:pointer"
         title="Annuler"
         onclick="cancelEdit(this)"></i>
    </td>
  `;
}

function saveStudent(id, btn) {
  const tr = btn.closest("tr");
  const inputs = tr.querySelectorAll("input");
  const activ = tr.querySelector("select").value;

  const nom = inputs[0].value.trim();
  const prenom = inputs[1].value.trim();
  const email = inputs[2].value.trim();
  const group = inputs[3].value.trim();

  if (!nom || !prenom || !email || !group) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  const index = students.findIndex(s => s.id === id);

  if (index !== -1) {
    students[index] = {
      ...students[index],
      nom,
      prenom,
      email,
      group,
      activ
    };
    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
  } else {
    alert("Étudiant non trouvé");
  }
}

function cancelEdit(btn) {
  const tr = btn.closest("tr");
  if (tr.dataset.old) {
    tr.innerHTML = tr.dataset.old;
    delete tr.dataset.old;
  }
}
