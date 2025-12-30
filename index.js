const students =JSON.parse(localStorage.getItem("students"))||[] ;
console.log(students);
 
document.querySelector(".todayDate").value = new Date()
  .toISOString()
  .slice(0, 10);
const studentBlock = students.map(
  (student) => `
  <div class="student-wrapper mb-4"> 
      
      <div class="bg-theme-card p-3 rounded-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between shadow">
          <div class="d-flex align-items-center gap-3 mb-3 mb-md-0">
              <div class="avatar-box bg-accent-yellow">FL</div>
              <div>
                  <h3 class="student-name text-white fs-5 fw-bold mb-0">${student.nom} ${student.prenom}</h3>
                  <p class="text-secondary small mb-0">Groupe ${student.group} . ID: #${student.id}</p>
              </div>
          </div>
          <div class="status-toggle-group">
              <button class="btn-status btn-present">Present</button>
              <button class="btn-status btn-absent">Absent</button>
              <button class="btn-status btn-retard">Retard</button>
          </div>
      </div>

      <div class="retard-card bg-theme-card d-none p-4 rounded-4 border-start border-4 border-accent-yellow shadow position-relative mt-3">
          <h4 class="text-accent-yellow fs-6 fw-medium mb-4">Informations du retard</h4>
          <div class="row g-4">
              <div class="col-md-6">
                  <label class="d-block text-secondary small fw-bold mb-2 text-uppercase">HEURE D'ARRIVEE</label>
                  <input type="text" class="input retard-time form-control bg-theme-input-inner text-black border-0 py-3 rounded">
              </div>
              <div class="col-md-6">
                  <label class="d-block text-secondary small fw-bold mb-2 text-uppercase">MOTIF DU RETARD</label>
                  <input type="text" class="input retard-reason form-control bg-theme-input-inner text-black border-0 py-3 rounded">
              </div>
          </div>
      </div>

      <div class="absent-card d-none bg-theme-card p-4 rounded-4 border-start border-4 border-accent-red shadow position-relative mt-3">
          <h4 class="text-accent-red fs-6 fw-medium mb-4">Informations du Absent</h4>
          <div class="row g-4">
              <div class="col-md-6">
                  <label class="d-block text-secondary small fw-bold mb-2 text-uppercase">MOTIF DU Absent</label>
                  <input type="text" class="input absent-reason form-control bg-theme-input-inner text-black border-0 py-3 rounded">
              </div>
          </div>
      </div>

  </div> 
  `
);

const container = document.getElementById("student-container");
container.innerHTML = studentBlock.join("");

const allWrappers = document.querySelectorAll(".student-wrapper");

allWrappers.forEach((wrapper) => {
  const retardBtn = wrapper.querySelector(".btn-retard");
  const presentBtn = wrapper.querySelector(".btn-present");
  const absentBtn = wrapper.querySelector(".btn-absent");
  const retardInput = wrapper.querySelector(".retard-time");
  const reasonRtInput = wrapper.querySelector(".retard-reason");
  const reasonAtInput = wrapper.querySelector(".absent-reason");
  const retardCard = wrapper.querySelector(".retard-card");
  const absentCard = wrapper.querySelector(".absent-card");

  retardBtn.addEventListener("click", () => {
    retardInput.addEventListener("focus", () => {
      retardInput.classList.add("bg-dark", "text-white");
    });
    reasonRtInput.addEventListener("focus", () => {
      reasonRtInput.classList.add("bg-dark", "text-white");
    });
    presentBtn.classList.remove("active-green");
    absentBtn.classList.remove("active-red");
    retardBtn.classList.add("active-yellow");
    retardCard.classList.remove("d-none");
    absentCard.classList.add("d-none");
    students.forEach((students) => {
      if (
        students.nom + " " + students.prenom ==
        wrapper.querySelector(".student-name").textContent
      ) {
         students.status = "Retard";
         students.retards = (students.retards || 0) + 1;
        students.retardTime = wrapper.querySelector(".retard-time").value;
      }
    });
  });
  presentBtn.addEventListener("click", () => {
    presentBtn.classList.add("active-green");
    absentBtn.classList.remove("active-red");
    retardBtn.classList.remove("active-yellow");
    retardCard.classList.add("d-none");
    absentCard.classList.add("d-none");
    students.forEach((students) => {
      if (
        students.nom + " " + students.prenom ==
        wrapper.querySelector(".student-name").textContent
      ) {
        students.status = "Present";
         students.presence = (students.presence || 0) + 1; 
      }
    });
  });
  absentBtn.addEventListener("click", () => {
    reasonAtInput.addEventListener("focus", () => {
      reasonAtInput.classList.add("bg-dark", "text-white");
    });
    presentBtn.classList.remove("active-green");
    absentBtn.classList.add("active-red");
    retardBtn.classList.remove("active-yellow");
    retardCard.classList.add("d-none");
    absentCard.classList.remove("d-none");
    students.forEach((students) => {
      if (
        students.nom + " " + students.prenom ==
        wrapper.querySelector(".student-name").textContent
      ) {
        students.status = "Absent";
        students.absences = (students.absences || 0) + 1;
        students.absentReason = wrapper.querySelector(".absent-reason").value;
      }
    });
  });
});

const saveButton = document.querySelector(".save-btn");

saveButton.addEventListener("click", () => {
  const message = document.querySelector(".success-msg");
  allWrappers.forEach((wrapper) => {
    const retardInput = wrapper.querySelector(".retard-time");
    const reasonRtInput = wrapper.querySelector(".retard-reason");
    const reasonAtInput = wrapper.querySelector(".absent-reason");
    students.forEach((students) => {
      if (
        students.nom + " " + students.prenom ==
        wrapper.querySelector(".student-name").textContent
      ) {
        students.absentReason = reasonAtInput.value;
        students.retardReason = reasonRtInput.value;
        students.retardTime = retardInput.value;
      }
    });
  });
  localStorage.setItem("students", JSON.stringify(students));
  message.classList.remove("d-none");
});


