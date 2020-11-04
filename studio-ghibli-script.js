let ghibliHeader = "Call " + "<u>Studio Ghibli API</u>" + " to access films and characters catalog";
let ghibliUrlLink = ghibliHeader.link("https://ghibliapi.herokuapp.com/");
document.getElementById("headerLink").innerHTML = ghibliUrlLink;

fetch('https://ghibliapi.herokuapp.com/films') 

.then(function(result) {   
  return result.json(); 
})

.then(function(json) {
  let films = json; 
  console.log('films:',films)
  
  let filmsList = document.getElementById('filmsList');
   
  for(f of films) {
    let listItemF = document.createElement('li'); 
    
    listItemF.innerHTML = '<p>' + "Title: " + f.title + '<br>' + "Description: " + f.description + 
    '<br>' + "Director: " + f.director + '<br>' + "Producer: " + f.producer + '<br>' + "Release Year: " + 
    f.release_date + '<br>' + "Rating: " + f.rt_score + '<br>' + "Locations: " + f.locations + '<br>' + 
    "Vehicles: " + f.vehicles + '</p>'; 
    
    listItemF.style.border = 'solid 1px black';
    listItemF.style.backgroundColor = 'lightgrey';
    filmsList.appendChild(listItemF);    
  }
})
 
fetch('https://ghibliapi.herokuapp.com/people') 

.then(function(result) {   
  return result.json(); 
})

.then(function(json) {
  let characters = json; 
  console.log('characters:',characters)
  
  let charactersList = document.getElementById('charactersList');
   
  for(c of characters) {
    let listItemC = document.createElement('li'); 

    listItemC.innerHTML = '<p>' + "Name: " + c.name + '<br>' + "Gender: " + c.gender + '<br>' +
    "Age: " + c.age + '<br>' + "Eye Color: " + c.eye_color + '<br>' + "Hair Color: " + 
    c.hair_color + '<br>' + "Films: " + c.films + '<br>' + "Species: " + c.species + '<br>' + '</p>'; 
    
    listItemC.style.border = 'solid 1px black';
    listItemC.style.backgroundColor = 'lightgrey';
    charactersList.appendChild(listItemC);    
  }   
});

