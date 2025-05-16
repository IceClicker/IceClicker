// Initialize click variables
let ice = parseInt(localStorage.getItem('ice')) || 0;  
localStorage.setItem('ice', ice); 
let perClick = parseInt(localStorage.getItem('perClick')) || 1;  
localStorage.setItem('perClick', perClick); 
let autoClick = parseInt(localStorage.getItem('autoClick')) || 0;  
localStorage.setItem('autoClick', autoClick); 

// Click!!!
function clickIce() {
  ice += perClick;
  localStorage.setItem('ice', ice); 
  document.getElementById("ice").textContent = ice;

  // Add pulse effect on click
  const iceImage = document.querySelector(".clicker-area img");

  // Restart the animation by removing and re-adding the class
  iceImage.classList.remove("pulse-on-click");
  void iceImage.offsetWidth;
  iceImage.classList.add("pulse-on-click");

  //Play ice sound
  const audio = new Audio('iceCrack.mp3');
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, 500); 
}

function openSettings() {
  alert("Under construction");
  document.getElementById("settings").style.display = "block";
}
// Update HTML DOM
window.onload = function () {
  document.getElementById("ice").textContent = ice;
  document.getElementById("perClick").textContent = perClick;
  document.getElementById("autoClick").textContent = autoClick;
};

