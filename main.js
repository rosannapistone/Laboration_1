  //Exit page color
  let color = ['black'];

  //Get button
  let  button = document.getElementById('first-view-button-no');

  //Add event listener
  button.addEventListener('click', function (){
    
    // Tilldelning
    var exitColor = color;

    //Get main-background
    let background = document.getElementById('main-background');

    //Background styling
      background.style.background = exitColor;

  })