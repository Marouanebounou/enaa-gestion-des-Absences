
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("sidebarToggle");
const closeBtn = document.getElementById("closeSidebar");

function toggleMenu() {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}

if (toggleBtn) toggleBtn.addEventListener("click", toggleMenu);
if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
if (overlay) overlay.addEventListener("click", toggleMenu);

function handleLogout(){
    localStorage.clear()
}

const logoutBtn = document.querySelector('.logout')

logoutBtn.addEventListener('click' , handleLogout);