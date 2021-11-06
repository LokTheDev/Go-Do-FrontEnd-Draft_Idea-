// api url
const api_url = 
      "https://nameless-wave-08460.herokuapp.com/notes";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        console.log(response);
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Show Data
function show(data) {
    for(let i =0; i < data.length;i++){
        document.getElementsByClassName("notesCreator")[i].innerHTML = data[i].creator
        document.getElementsByClassName("notesDate")[i].innerHTML = data[i].date
        document.getElementsByClassName("notesTitle")[i].innerHTML = data[i].title
        document.getElementsByClassName("notesContent")[i].innerHTML = data[i].content
        document.getElementsByClassName("notesColour_dot")[i].style.backgroundColor = data[i].color
    }

    

}


//menu button
const slideMenu = document.getElementById("slideMenu");

function menuToggle(){
    if(slideMenu.style.minWidth== 0+"vw"){
        slideMenu.style.minWidth = 15+"vw"
        slideMenu.style.opacity = 1; 
    }else{
        slideMenu.style.minWidth = 0+"vw";
        slideMenu.style.opacity = 0;
    }
}

