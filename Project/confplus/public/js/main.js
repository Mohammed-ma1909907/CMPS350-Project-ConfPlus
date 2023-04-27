const loginBtn = document.querySelector("#login-button");
const mainNav = document.querySelector(".main-nav");
const isLoggedIn = sessionStorage.getItem("isLoggedIn");
const CurrentUser = JSON.parse(sessionStorage.getItem("CurrentUser"));

if (isLoggedIn) {
  loginBtn.textContent = "Logout";
  addNav();
  loginBtn.addEventListener("click", () => {
    if (confirm(`Are you sure you want LogOut ?`)) {
      sessionStorage.removeItem("isLoggedIn");
      window.location.href = "home.html";
    }
  });
} else {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

function addNav() {
  const userRole = CurrentUser.userRole;

  let newNavLink = null;

  if (userRole === "organizer") {
    newNavLink = `<li><a href="schedule-editor.html">Edit Schedule</a></li>`;
  } else if (userRole === "reviewer") {
    newNavLink = `<li><a href="review.html">Review Papers</a></li>`;
  } else {
    newNavLink = `<li><a href="submitPaper.html">Submit Paper</a></li>`;
  }

  mainNav.querySelector("ul").insertAdjacentHTML("afterbegin", newNavLink);
}
