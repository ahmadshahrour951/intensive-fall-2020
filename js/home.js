// Import dummy data
import data from '../data/home.js';

// This is the location residence HTML, it can be modularlized
let homeHTML = `
<div class="location">
      <h2>Herbert Hotel Residence</h2>
      <small class="location-address">161 Powell St, San Francisco, CA 94102</small>
</div>

`;

// I go through each residence and floor to create student cards
for (let residence of data.residences) {
  for (let floor of residence.floors) {
    // Opening HTML tags for each floor
    homeHTML += `
    <section class="floor-section">
        <h3>${floor.label}</h3>
        <div class="card-deck">
  `;

    for (let student of floor.students) {
      let topThings = '';

      // Grab the top things the user likes and create list elements (the red buttons in each card)
      for (let topThing of student.top_things) {
        topThings += `<li>${topThing}</li>`;
      }

      // This is the card elements you see on the page, This can be modularlized
      homeHTML += `
      <article class="card">
          <img src="images/${student.img}">
          <h4 class="card-title">${student.name}</h4>
          <div class="card-dorm-room">
              <label>Room:</label>
              <h6> ${student.dorm_room}</h6>
          </div>
          <div class="card-top-things">
              <label>Top Things I Like:</label>
              <ul>${topThings}</ul>
          </div>
      </article>
      `;
    }

    // Closing tages

    homeHTML += `
        </div>
    </section>
    <hr class="section-hr" />
    
    `;
  }
}

export default homeHTML;
