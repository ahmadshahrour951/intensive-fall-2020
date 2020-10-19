// Each module is imported based on screen page
import homeHTML from './home.js';
import profileHTML from './profile.js';

// I grab the #app main element in index.html
const app = document.getElementById('app');
// Web page is initialized with home page html content
app.innerHTML = homeHTML;

// Grab navigation buttons
let homeNav = document.getElementById('home-nav');
let profileNav = document.getElementById('profile-nav');

homeNav.className = 'active';

// EVENT HANDLERS
function switchToHome(event) {
  event.preventDefault();

  // This is does the fancy looking stuff during navigation
  homeNav.className = 'active';
  profileNav.className = null;
  app.style.opacity = 0;

  setTimeout(() => {
    // This is the logic to change content to homeHTML module
    app.innerHTML = homeHTML;
    app.style.opacity = 1;
  }, 500);
}

// Eve the user clicks the profile navigation
function switchToProfile(event) {
  event.preventDefault();
  // This is does the fancy looking stuff during navigation
  profileNav.className = 'active';
  homeNav.className = null;
  app.style.opacity = 0;

  setTimeout(() => {
    // This is the logic to change content to profileHTML module
    app.innerHTML = profileHTML;
    app.style.opacity = 1;
  }, 500);
}

// EVENT LISTNERS
// when the buttons are clicked, excute relevant event handlers
homeNav.addEventListener('click', switchToHome);
profileNav.addEventListener('click', switchToProfile);
