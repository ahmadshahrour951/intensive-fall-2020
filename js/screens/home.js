import data from '../../data/home.js';

let homeHTML = `<h2 class="location-title">Herbert Hotel Residence</h2>`;

for (let residence of data.residences) {
  for (let floor of residence.floors) {
    homeHTML += `
    <section class="floor-section">
        <h3>${floor.label}</h3>
        <div class="card-deck">
  `;

    for (let student of floor.students) {
      let topThings = '';

      for (let topThing of student.top_things) {
        topThings += `<li>${topThing}</li>`;
      }

      homeHTML += `
      <article class="card">
          <img src="../../images/${student.img}">
          <h4 class="card-title">${student.name}</h4>

          <div style="display: flex; flex-direction: row; margin-top: 20px;">
            <label>Room:</label>
            <h6 style="margin-left: 10px;"> ${student.dorm_room}</h6>
          </div>
          <div class="card-top-things" style="margin-top: 8px;">
            <label>Top Things I Like:</label>
            <ul>${topThings}</ul>
          </div>
      </article>
      `;
    }

    homeHTML += `
        </div>
    </section>
    <hr class="section-hr" />
    
    `;
  }
}

export default homeHTML;
