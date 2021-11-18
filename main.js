  // Notes: globala variabler, STATE, if-satser, Hajenljud, window.onload main
  
  // Background images
  const exitBackgroundImage = "url('Assets/fish-in-bottle-background.jpg')";
  const inputNameBackgroundImage = "url('Assets/underWater.jpg')";
  const seaCowBackgroundImage = "url('Assets/sea-cows.png')";
  const pushedSeaCowsBackgroundImage = "url('Assets/sea-cows-pushed.png')";
  const underWaterCaveDarkBackgroundImage = "url('Assets/underwater-cave-dark.jpg')";
  const underWaterCaveLightBackgroundImage = "url('Assets/underwater-cave-light.jpg')";
  const octopusBackgroundImage = "url('Assets/octopus.jpg')";
  const sunkedShipBackgroundImage = "url('Assets/sunked-ship.jpeg')";
  const underWaterDarkBackgroundImage = "url('Assets/under-water-dark.jpg')";
  const sharkDistantBackgroundImage = "url('Assets/sharkDistant.jpg')";

  // Images
  const flashlightImage = "url('Assets/flashlight.png')" ;

  //Get and create elements
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
  const continueButton = document.createElement('button');
  const secondFirstOptionButton = document.createElement('button');
  const secondSecondOptionButton = document.createElement('button');
  const whatIsGoingOnButton = document.createElement('button');
  const inputSharkMessage = document.createElement('textarea');
  const submitMessageButton = document.createElement('button');
  const fishImageContainer = document.getElementById('fish-container');


  //Add event listener
  noButton.addEventListener('click', function (){
    //Get main-background
    const background = document.getElementById('main-background');
    //New background and styling
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
        //New background and styling
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
        mainHeadingText.innerHTML = 'Welcome' +" "+ inputUserName.value; 
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
        textContainer.style.background = 'none';

        pushCowButton.className = 'buttons';
        pushCowButton.style.backgroundColor = 'black';
        pushCowButton.textContent = 'PUSH PUSH PUSH';
        pushCowButton.style.width = '15rem';
        buttonContainer.appendChild(pushCowButton);
    })

   pushCowButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = pushedSeaCowsBackgroundImage;
        continueButton.className = 'buttons';
          continueButton.style.backgroundColor = 'green';
          continueButton.textContent = 'Continue';
          continueButton.style.width = '15rem';
          buttonContainer.appendChild(continueButton);
          pushCowButton.style.display = 'none';
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
        flashlightDiv.style.backgroundImage = flashlightImage;
        textContainer.style.background = 'none';
        firstFirstOptionButton.style.display = 'none';
        firstSecondOptionButton.style.display = 'none';
    })

    flashlightDiv.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = underWaterCaveLightBackgroundImage;
        flashlightDiv.style.display = 'none';
        mainHeadingText.style.display = 'none';
        continueButton.className = 'buttons';
          continueButton.style.backgroundColor = 'green';
          continueButton.textContent = 'Continue';
          continueButton.style.width = '15rem';
          buttonContainer.appendChild(continueButton);
    }) 

    continueButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = inputNameBackgroundImage;
        
        secondFirstOptionButton.className = 'buttons';
            secondFirstOptionButton.style.backgroundColor = 'black';
            secondFirstOptionButton.textContent = 'Scare octopus';
            secondFirstOptionButton.style.width = '15rem';
            secondFirstOptionButton.style.marginBottom = '1rem';
        secondSecondOptionButton.className = 'buttons';
            secondSecondOptionButton.style.backgroundColor = 'black';
            secondSecondOptionButton.textContent = 'Look for wrecks';
            secondSecondOptionButton.style.width = '15rem';
          buttonContainer.appendChild(secondFirstOptionButton);
          buttonContainer.appendChild(secondSecondOptionButton);
          
          textContainer.style.background = 'rgba(243, 247, 243, 0.3)';
          mainHeadingText.style.display = 'initial';
          continueButton.style.display = 'none';
          mainHeadingText.innerHTML = 'Nice hah?';
          questionText.style.display = 'initial';
          questionText.innerHTML = 'What do you want to do next?';
          goldFish.style.display = 'initial';

    }) 

    secondFirstOptionButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = octopusBackgroundImage;
        
        questionText.style.display = 'none';
        whatIsGoingOnButton.className = 'buttons';
        buttonContainer.appendChild(whatIsGoingOnButton);
        whatIsGoingOnButton.textContent = 'What the heck is going on?';
        whatIsGoingOnButton.style.backgroundColor = 'red';
        whatIsGoingOnButton.style.width = '20rem';
        secondFirstOptionButton.style.display = 'none';
        secondSecondOptionButton.style.display = 'none';
        goldFish.style.display = 'none';

        const interval = setInterval(function(){
            mainHeadingText.innerHTML = 'ERROR! ERROR! ERROR!';
            mainHeadingText.style.color = 'red';
            mainHeadingText.style.display=(mainHeadingText.style.display=='none'?'':'none');
            },500);
            whatIsGoingOnButton.addEventListener("click", function(){
            clearInterval(interval);
            }); 
    })

    secondSecondOptionButton.addEventListener('click', function (){
        const background = document.getElementById('main-background');
        background.style.backgroundImage = sunkedShipBackgroundImage;
        
            questionText.style.display = 'none';
            whatIsGoingOnButton.className = 'buttons';
            buttonContainer.appendChild(whatIsGoingOnButton);
            whatIsGoingOnButton.textContent = 'What the heck is going on?';
            whatIsGoingOnButton.style.backgroundColor = 'red';
            whatIsGoingOnButton.style.width = '20rem';
            secondFirstOptionButton.style.display = 'none';
            secondSecondOptionButton.style.display = 'none';
            goldFish.style.display = 'none';

            const interval = setInterval(function(){
                mainHeadingText.innerHTML = 'ERROR! ERROR! ERROR!';
                mainHeadingText.style.color = 'red';
                mainHeadingText.style.display=(mainHeadingText.style.display==='none'?'':'none');
                },500);
                whatIsGoingOnButton.addEventListener("click", function(){
                clearInterval(interval);
                }); 
    })

    whatIsGoingOnButton.addEventListener('click', function (){
      
        const background = document.getElementById('main-background');
        background.style.backgroundImage = underWaterDarkBackgroundImage;
        goldFish.style.display = 'initial';
        mainHeadingText.innerHTML = 'Heh,' +" "+ inputUserName.value +" "+ 'sorry for interrupting but it´s a beautiful shark behind you.';
        mainHeadingText.style.color = 'white';
        questionText.style.display = 'initial';
        questionText.innerHTML = 'What should you say to it?';
        whatIsGoingOnButton.style.display = 'none';
        buttonContainer.appendChild(inputSharkMessage);
       

        submitMessageButton.className = 'buttons';
          submitMessageButton.style.backgroundColor = 'green';
          submitMessageButton.textContent = 'Turn around and say it!';
          submitMessageButton.style.width = '18rem';
          submitMessageButton.style.marginTop = '1rem';
          buttonContainer.appendChild(submitMessageButton);
    })

    submitMessageButton.addEventListener('click', function (){
      
        const background = document.getElementById('main-background');
        background.style.backgroundImage = sharkDistantBackgroundImage;
        textContainer.style.display = 'none';
        goldFish.style.display = 'none';
    

        setTimeout(function(){
            background.style.transform = 'scale(2.5)';
            textContainer.style.display = 'initial';
            
            const interval = setInterval(function(){
                mainHeadingText.innerHTML = 'GAME OVER!';
                mainHeadingText.style.color = 'red';
                mainHeadingText.style.display=(mainHeadingText.style.display=='none'?'':'none');
                },500);
            
            textContainer.style.background = 'none';
            questionText.style.display = 'none';
            buttonContainer.style.display = 'none';    
        }, 3000);
    })
   
   