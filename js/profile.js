// This can be written in HTML, however I want to later use logic to manipulate the DOM,
// so for consistency, javascript file makes sense although it looks bad to read

// Its a simple form that displays dummy information about the author of this code
let profileHTML = `
  <div class="profile">
      <form>
          <img src="./images/ahmed.jpeg" >
          <hr />
          <div class="input-container">
              <!-- Admin Inputs-->
              <div class="left-inputs">
                  <label for="name">Name</label>
                  <input disabled type="text" name="name" value="Ahmed Shahrour"/>

                  <label for="email">Email</label>
                  <input disabled type="email" name="email" value="ahmed.shahrour@students.makeschool.com"/>

                  <label for="dorm">Dorm</label>
                  <input disabled type="text" name="dorm" value="611"/>
              </div>

              <!-- User Inputs-->
              <div class="right-inputs">
                  <label for="status">Status</label>
                  <input type="text" name="status" value="Down to Chill"/>
  
                  <label for="top_things">Top Things I Like</label>
                  <input type="text" name="top_things" value="Philosophy" />
                  <input type="text" name="top_things" value="Music" />
                  <input type="text" name="top_things" value="Physics" />
              </div>
          </div>
          <div>
          <button type="submit">Save</button>
          
      </form>
  </div>
`;

export default profileHTML;
