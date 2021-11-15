  //Exit page color globala variabler STATE if-satser Hajenljud window.onload main
  const exitBackgroundImage = "url('Assets/fish-in-bottle-background.jpg')";
  const inputNameBackgroundImage = "url('Assets/underWater.jpg')";
  //const firstDomandBackgroundImage = "url('')";
  const seaCowBackgroundImage = "url('Assets/sea-cows.png')";
  const underWaterCaveDarkBackgroundImage = "url('Assets/underwater-cave-dark.jpg')";
  const pushedSeaCowsBackgroundImage = "url('Assets/sea-cows-pushed.png')";
  // Images
  const flashlightImage = "url('Assets/flashlight.png')" ;

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
  const pushCowButton = document.createElement('button');
  const flashlightDiv = document.createElement('div');
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
      questionText.innerHTML = 'I´ll now give you ONE option, or no wait, Hmmm,  I order you to press the button below. End of discussion. End.';
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

        firstFirstOptionButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = seaCowBackgroundImage;
        goldFish.style.display = 'none'; 
        firstFirstOptionButton.style.display = 'none';
        firstSecondOptionButton.style.display = 'none';
        mainHeadingText.style.display = 'none';
        questionText.style.display = 'none';
        pushCowButton.className = 'buttons';
        pushCowButton.style.backgroundColor = 'black';
        pushCowButton.textContent = 'PUSH PUSH PUSH';
        pushCowButton.style.width = '15rem';
        buttonContainer.appendChild(pushCowButton);
        //background.onclick = "url('Assets/underwater-cave-dark.jpg')";
        
    })

   pushCowButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = pushedSeaCowsBackgroundImage;
    })

    firstSecondOptionButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = underWaterCaveDarkBackgroundImage;
        goldFish.style.display = 'none'; 
        mainHeadingText.innerHTML = 'Turn on the flashlight';
        questionText.style.display = 'none';
        flashlightDiv.className = 'domand-container';
        questionContainer.appendChild(flashlightDiv);
        flashlightDiv.style.height = '16rem';
        flashlightDiv.style.width = '6.2rem';
        flashlightDiv.style.margin = 'auto';
        flashlightDiv.style.marginBottom = 'none';
        //flashlightDiv.style.backgroundColor = 'red';
        flashlightDiv.style.backgroundImage = flashlightImage;
       
    
        

    })

   

    
        
        /*questionContainer.innerHTML = inputUserName.value;
        mainHeadingText.innerHTML = 'Welcome:'; 
        //submitButton.textContent = 'Continue';
        //submitButton.style.width = '8rem';
        submitButton.style.display = 'none';

        continueButton.className = 'buttons';
          continueButton.style.backgroundColor = 'green';
          continueButton.textContent = 'Continue';
          continueButton.style.width = '8rem';
          buttonContainer.appendChild(continueButton);*/

     