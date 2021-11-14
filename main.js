  //Exit page color
  const exitBackgroundImage = "url('/Assets/underWater.jpg')";
  const inputNameBackgroundImage = "url('/Assets/underWater.jpg')";

  //Get button
  const noButton = document.getElementById('first-view-button-no');
  const yesButton = document.getElementById('first-view-button-yes');
  const questionText = document.getElementById('question-text');
  const questionContainer = document.getElementById('question-container');
  const inputUserName = document.createElement("input");
  const buttonContainer = document.getElementById('button-container');
  const submitButton = document.createElement("button");

  //Add event listener
  noButton.addEventListener('click', function (){
    //Get main-background
    const background = document.getElementById('main-background');
    //Background styling
      background.style.backgroundImage = exitBackgroundImage;
  })

 

    //Add event listener
    yesButton.addEventListener('click', function (){
        //Get main-background
        const background = document.getElementById('main-background');
        //Background styling
          background.style.backgroundImage = inputNameBackgroundImage;
          yesButton.style.display = 'none';
          noButton.style.display = 'none';
          questionText.style.display = 'none';          
          questionContainer.appendChild(inputUserName);
          
          submitButton.className = 'buttons';
          submitButton.style.backgroundColor = 'green';
          submitButton.textContent = 'Save';
          buttonContainer.appendChild(submitButton);
      })

      submitButton.addEventListener('click', function (){
        console.log(inputUserName.value);
    })

      /* const div = document.createElement("div");
          div.style.width = '5rem';
          div.style.height = '5rem';
          div.style.backgroundColor = 'red';
          textContainer.appendChild(div);*/