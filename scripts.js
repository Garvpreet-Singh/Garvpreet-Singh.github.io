function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  }

  // Close the menu after clicking a link if screen width is less than or equal to 768px
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
  
  // Toggle the display of the nav links and burger menu
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
    burger.classList.remove("toggle");
  } else {
    navLinks.style.display = "flex";
    burger.classList.add("toggle");
  }
}

// Initialize accordion elements
var acc = document.getElementsByClassName("accordion");
var i;

// Set the first accordion to be active and its panel to be open
acc[0].classList.toggle("active");
var mainPanel = document.getElementsByClassName("main-panel");
mainPanel[0].style.display = "block";

// Add click event listeners to all accordion elements
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle between adding and removing the "active" class to highlight the button
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function goBack() {
  window.location.href = "../portfolio.html"; 
}
    
