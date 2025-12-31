let students = [
  {
    nom: "amine",
    prenom: "Bounou",
    retardTime: "5:50",
    absences: 5,
    retards: 3,
    presence: 20,
    group: "G1",
  },
  {
    nom: "Ali",
    prenom: "Bounou",
    retardTime: "7:20",
    absences: 4,
    retards: 6,
    presence: 18,
    group: "G2",
  },
  {
    nom: "Mohamed",
    prenom: "Bounou",
    retardTime: "2:45",
    absences: 8,
    retards: 2,
    presence: 15,
    group: "G3",
  },
  {
    nom: "Youssef",
    prenom: "Bounou",
    retardTime: "8:50",
    absences: 2,
    retards: 7,
    presence: 21,
    group: "G1",
  },
  {
    nom: "soufiane",
    prenom: "Bounou",
    retardTime: "4:00",
    absences: 2,
    retards: 3,
    presence: 11,
    group: "G2",
  },
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputVal = document.getElementById("username").value.trim();
  const errorMsg = document.getElementById("errorMessage");

  const userExists = students.some(
    (s) => s.nom.toLowerCase() === inputVal.toLowerCase()
  );

  if (userExists) {
    localStorage.setItem("connectedUser", inputVal);
    window.location.href = "dashboard.html";
  } else {
    errorMsg.classList.remove("hidden");
  }
});
document.getElementById("username").addEventListener("input", function () {
  document.getElementById("errorMessage").classList.add("hidden");
});
