// /*const secondHand = document.querySelector('.second-hand');
// const minHad = document.querySelector('.mint-hand');
// const hourHad =document.querySelector('.hour-hand');
// function setDate(){
// const now = new Date ();

// const seconds = now.getSeconds();
// const secondsDegress = ((seconds/60)*360)+90;
// secondHand.style.transform =`rotate(${secoundsDegrees}deg)`;

// const mins = now.getMinutes();
// const minsDegrees = ((mins / 60) * 360) + 90;
// minsHand.style.transform = `rotate(${minsDegress}deg)`;
 
// const hour = now.getMinutes();
// const hourDegrees = ((mins / 12) * 360) + 90;
// hourHand.style.transform = `rotate(${minsDegress}deg)`;

// }
// setInterval(setDate,1000);

// */


// // JavaScript to handle the clock movement
// const secondHand = document.querySelector('.hand.second');
// const minHand = document.querySelector('.hand.mint');
// const hourHand = document.querySelector('.hand.hour');

// function setDate() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + 90;
//     minHand.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);


// Function to set the current time on the clock
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const date = now.getDate();
    const year = now.getFullYear();
  
    // Calculate the rotation angles
    const hourRotation = 360 * ((hour % 12) + minute / 60) / 12;
    const minuteRotation = 360 * (minute + second / 60) / 60;
    const secondRotation = 360 * second / 60;
  
    // Apply rotation to the clock hands
    document.querySelector('.hand.hour').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.hand.mint').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.hand.second').style.transform = `rotate(${secondRotation}deg)`;
    // Update the date and year display
    document.querySelector('.date').textContent = date;
    document.querySelector('.year').textContent = year;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to update the clock
  updateClock();
  
