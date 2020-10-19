import homeHTML from './home.js';
import profileHTML from './profile.js';

const app = document.getElementById('app');
app.innerHTML = homeHTML;

let homeNav = document.getElementById('home-nav');
let profileNav = document.getElementById('profile-nav');

homeNav.className = 'active';

function switchToHome(event) {
  event.preventDefault();
  homeNav.className = 'active';
  profileNav.className = null;
  app.style.opacity = 0;
  setTimeout(() => {
    app.innerHTML = homeHTML;
    app.style.opacity = 1;
  }, 500);
}

function switchToProfile(event) {
  event.preventDefault();
  homeNav.className = null;
  profileNav.className = 'active';
  app.style.opacity = 0;
  setTimeout(() => {
    app.innerHTML = profileHTML;
    app.style.opacity = 1;
  }, 500);
}

homeNav.addEventListener('click', switchToHome);
profileNav.addEventListener('click', switchToProfile);
