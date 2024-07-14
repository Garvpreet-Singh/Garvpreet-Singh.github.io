function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Close the menu after clicking a link
  var navLinks = document.getElementById("navLinks");
  var burger = document.querySelector(".burger");
  if (window.innerWidth <= 768) {
    navLinks.style.display = "none";
    burger.classList.remove("toggle");
  }
}

function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  var burger = document.querySelector(".burger");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
    burger.classList.remove("toggle");
  } else {
    navLinks.style.display = "flex";
    burger.classList.add("toggle");
  }
}
