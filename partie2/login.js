const students = JSON.parse(localStorage);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputVal = document.getElementById("username").value.trim();
  const errorMsg = document.getElementById("errorMessage");

  const userExists = students.some(
    (s) => s.name.toLowerCase() === inputVal.toLowerCase()
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
