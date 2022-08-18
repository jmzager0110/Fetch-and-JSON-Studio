// TODO: add code here
window.addEventListener("load", function(){
    //fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      fetch("./data.json").then(function(response){
      response.json().then( function(json) {
        let container = document.getElementById("container");
        let astronauts = json;
        astronauts.sort(compare);
        
        for (astronaut of astronauts){
            container.innerHTML += ` <div class="astronaut">
            <div class="bio">
               <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
               <ul>
                  <li>Hours in Space: ${astronaut.hoursInSpace} </li>
                  <li>Active: ${astronaut.active} </li>
                  <li>Skills: ${astronaut.skills.join(', ')} </li>
               </ul>
            </div>
            <img class="avatar" src=${astronaut.picture}></img>
         </div>
        `;
        }    
        container.innerHTML += `<p>Astronaut Count: ${astronaut.length} </p>` 
      });
    });
  });

function compare ( a, b) {
    if (a.hoursInSpace < b.hoursInSpace) {
        return 1;
    } else if (a.hoursInSpace > b.hoursInSpace){
        return -1;
    } else {
        return 0;
    }
}
   
