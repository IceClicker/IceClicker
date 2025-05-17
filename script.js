// Initialize click variables
let ice = parseInt(localStorage.getItem('ice')) || 0;  
localStorage.setItem('ice', ice); 
let perClick = parseInt(localStorage.getItem('perClick')) || 1;  
localStorage.setItem('perClick', perClick); 
let autoClick = parseInt(localStorage.getItem('autoClick')) || 0;  
localStorage.setItem('autoClick', autoClick); 
let globalWarmingPercent = parseInt(localStorage.getItem('globalWarmingPercent')) || 0.5;  
localStorage.setItem('globalWarmingPercent', globalWarmingPercent); 

// Click!!!
function clickIce() {
  ice += perClick;
  localStorage.setItem('ice', ice); 
  document.getElementById("ice").textContent = ice;

  // Add pulse effect on click
  const iceImage = document.querySelector(".clicker-area img");
  iceImage.classList.remove("pulse-on-click");
  void iceImage.offsetWidth; // Trigger reflow to restart the animation
  iceImage.classList.add("pulse-on-click");

  // Play ice sound
  const audio = new Audio('iceCrack.mp3');
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 500);
}

// Global Warming
// Flags to ensure conditions run only once
let hasReducedAt100 = false;
let hasReducedAt1000 = false;
setInterval(() => {
  if (ice > 2) { 
    ice -= Math.round(ice * globalWarmingPercent);
    localStorage.setItem('ice', ice);
    document.getElementById("ice").textContent = ice;
  }
  if (ice > 100 && ice < 1000 && globalWarmingPercent > 0.1 && !hasReducedAt100) {
    globalWarmingPercent -=0.1;
    localStorage.setItem('globalWarmingPercent', globalWarmingPercent);
    hasReducedAt100 = true;
  }
  if (ice > 1000  && globalWarmingPercent > 0.1 && !hasReducedAt1000) {
    globalWarmingPercent -=0.1;
    localStorage.setItem('globalWarmingPercent', globalWarmingPercent);
    hasReducedAt1000 = true;
  }
}, 60000); 

function openSettings() {
  alert("Under construction");
  document.getElementById("settings").style.display = "block";
}
// Update HTML DOM
window.onload = function () {
  document.getElementById("ice").textContent = ice;
  document.getElementById("perClick").textContent = perClick;
  document.getElementById("autoClick").textContent = autoClick;
  document.getElementById("globalWarmingPercent").textContent = `- ${globalWarmingPercent*100}%`;
};

const maxSnowflakes = 50; // Set a maximum number of snowflakes

function createSnowflake() {
  const clickerArea = document.querySelector(".clicker-area");
  const existingSnowflakes = clickerArea.querySelectorAll(".snowflake");

  // Check if the number of snowflakes exceeds the limit
  if (existingSnowflakes.length >= maxSnowflakes) {
    return; // Stop creating new snowflakes
  }

  const snowflake = document.createElement("div");
  const snowflakeTypes = ["❅", "❆", "❉", "❊"];
  const randomType = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
  snowflake.textContent = randomType;

  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * 100 + "%"; // Random horizontal position
  snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + "rem"; // Random size
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed

  clickerArea.appendChild(snowflake);

  // Remove snowflake after animation ends
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 300); // Adjust interval for more or fewer snowflakes
