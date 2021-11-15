  //Exit page color
  const exitBackgroundImage = "url('Assets/fish-in-bottle-background.jpg')";
  const inputNameBackgroundImage = "url('Assets/underWater.jpg')";
  //const firstDomandBackgroundImage = "url('')";
  const seaCowBackgroundImage = "url('Assets/sea-cows.png')";

  //Get elements
  const noButton = document.getElementById('first-view-button-no');
  const yesButton = document.getElementById('first-view-button-yes');
  const questionText = document.getElementById('question-text');
  const questionContainer = document.getElementById('question-container');
  const inputUserName = document.createElement("input");
  const buttonContainer = document.getElementById('button-container');
  const goldFish = document.getElementById('gold-fish');
  const submitButton = document.createElement("button");
  const mainHeadingText = document.getElementById('main-heading-text');
  const textContainer = document.getElementById('text-container');
  const firstFirstOptionButton = document.createElement('button');
  const firstSecondOptionButton = document.createElement('button');
  //const userName = inputUserName.value


  //Add event listener
  noButton.addEventListener('click', function (){
    //Get main-background
    const background = document.getElementById('main-background');
    //Background styling
      background.style.backgroundImage = exitBackgroundImage;
      goldFish.style.display = 'none';
      noButton.style.display = 'none';
      mainHeadingText.innerHTML = 'Say what? You´re a real LANDKRABBA';
      mainHeadingText.style.color = 'red';
      questionText.innerHTML = 'I´ll now give you ONE option:';
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
          goldFish.style.display = 'initial';    
          mainHeadingText.innerHTML = 'Type your name'; 
          mainHeadingText.style.color = 'white';   
          mainHeadingText.style.paddingBottom = '2rem';
          questionContainer.appendChild(inputUserName);
          
          submitButton.className = 'buttons';
          submitButton.style.backgroundColor = 'green';
          submitButton.textContent = 'Save';
          buttonContainer.appendChild(submitButton);
      })

      submitButton.addEventListener('click', function (){
        //questionContainer.innerHTML = inputUserName.value;
        mainHeadingText.innerHTML = 'Welcome' +" "+ inputUserName.value; 
        //submitButton.textContent = 'Continue';
        //submitButton.style.width = '8rem';
        submitButton.style.display = 'none';
        inputUserName.style.display = 'none';
        questionText.style.display = 'initial';
        questionText.innerHTML = 'What do you want to do?'

        firstFirstOptionButton.className = 'buttons';
            firstFirstOptionButton.style.backgroundColor = 'black';
            firstFirstOptionButton.textContent = 'Overturn sea-cows';
            firstFirstOptionButton.style.width = '15rem';
            firstFirstOptionButton.style.marginBottom = '1rem';
        firstSecondOptionButton.className = 'buttons';
            firstSecondOptionButton.style.backgroundColor = 'black';
            firstSecondOptionButton.textContent = 'Explore caves';
            firstSecondOptionButton.style.width = '15rem';
          buttonContainer.appendChild(firstFirstOptionButton);
          buttonContainer.appendChild(firstSecondOptionButton);
    })

    /*firstFirstOptionButton.addEventListener('click', function (){
        
        questionContainer.innerHTML = inputUserName.value;
        mainHeadingText.innerHTML = 'Welcome:'; 
        //submitButton.textContent = 'Continue';
        //submitButton.style.width = '8rem';
        submitButton.style.display = 'none';

        continueButton.className = 'buttons';
          continueButton.style.backgroundColor = 'green';
          continueButton.textContent = 'Continue';
          continueButton.style.width = '8rem';
          buttonContainer.appendChild(continueButton);

    })*/

     