// Initialize click variables
let ice = parseInt(localStorage.getItem('ice')) || 0;  
localStorage.setItem('ice', ice); 
let perClick = parseInt(localStorage.getItem('perClick')) || 1;  
localStorage.setItem('perClick', perClick); 
let autoClick = parseInt(localStorage.getItem('autoClick')) || 0;  
localStorage.setItem('autoClick', autoClick); 
let globalWarmingPercent = parseInt(localStorage.getItem('globalWarmingPercent')) || 0.5;  
localStorage.setItem('globalWarmingPercent', globalWarmingPercent); 
let sound = localStorage.getItem('sound') || "on";  
localStorage.setItem('sound', sound); 
let music = localStorage.getItem('music') || "on";  
localStorage.setItem('music', music); 
let backgroundMusic = null; // Global reference to the audio object
let snowfallEnabled = localStorage.getItem('snowfallEnabled') || "on";  
localStorage.setItem('snowfallEnabled', snowfallEnabled); 
let darkModeEnabled = localStorage.getItem('darkModeEnabled') || "false";  
localStorage.setItem('darkModeEnabled', darkModeEnabled); 

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

  // Play click sound
  if (sound === "on") {
    const audio = new Audio('iceCrack.mp3');
    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 500);
  }
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

// Settings
function openSettings() {
  document.getElementById("settings").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
}

function closeSettings() {
  document.getElementById("settings").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

function soundSettings() {
  const soundCheckbox = document.getElementById("soundCheckbox");
  if (soundCheckbox.checked) {
    sound = "on";
    localStorage.setItem('sound', 'on');
  } else {
    sound = "off";
    localStorage.setItem('sound', 'off');
  }
}

function snowfallSettings() {
  const snowfallCheckbox = document.getElementById("snowfallCheckbox");
  if (snowfallCheckbox.checked) {
    snowfallEnabled = "off";
    localStorage.setItem('snowfallEnabled', 'off');
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => snowflake.remove());
  } else {
    snowfallEnabled = "on";
    localStorage.setItem('snowfallEnabled', 'on');
  }
}

function musicSettings() {
  const musicCheckbox = document.getElementById("musicCheckbox");
  if (musicCheckbox.checked) {
    music = "on";
    localStorage.setItem('music', 'on');
    playBackgroundMusic(); // Start music if turned on
  } else {
    music = "off";
    localStorage.setItem('music', 'off');
    if (backgroundMusic) {
      backgroundMusic.pause(); // Stop the music immediately
      backgroundMusic.currentTime = 0; // Reset playback position
      backgroundMusic = null; // Clear the reference
    }
  }
}

function darkModeSettings() {
  const darkModeCheckbox = document.getElementById("darkModeCheckbox");
  if (darkModeCheckbox.checked) {
    darkModeEnabled = true;
    localStorage.setItem('darkModeEnabled', 'true');
    document.body.classList.add("dark-mode");
  } else {
    darkModeEnabled = false;
    localStorage.setItem('darkModeEnabled', 'false');
    document.body.classList.remove("dark-mode");
  }
}

// Update HTML DOM
window.onload = function () {
  document.getElementById("ice").textContent = ice;
  document.getElementById("perClick").textContent = perClick;
  document.getElementById("autoClick").textContent = autoClick;
  document.getElementById("globalWarmingPercent").textContent = `- ${globalWarmingPercent*100}%`;
  if (darkModeEnabled === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeCheckbox").checked = true;
  }
};

function playBackgroundMusic() {
  if (music === "on" && !backgroundMusic) {
    backgroundMusic = new Audio('./FrozenStar.mp3');
    backgroundMusic.loop = true; 
    backgroundMusic.volume = 0.5;
    backgroundMusic.play().catch(err => console.error("Audio playback failed:", err));
  }
  // Set sound slider state
  const soundCheckbox = document.getElementById("soundCheckbox");
  soundCheckbox.checked = (sound === "on");

  // Set music slider state
  const musicCheckbox = document.getElementById("musicCheckbox");
  musicCheckbox.checked = (music === "on");
}


// Start background music after a user interaction
document.addEventListener("click", playBackgroundMusic, { once: true });
const maxSnowflakes = 50; // Set a maximum number of snowflakes

function createSnowflake() {
  if (snowfallEnabled === "off") return; 

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
  snowflake.style.animationDuration = Math.random() * 5 + 2 + "s"; // Random fall speed

  clickerArea.appendChild(snowflake);

  // Remove snowflake after animation ends
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 300); // Adjust interval for more or fewer snowflakes

function resetProgress() {
  if (confirm("Are you sure you want to reset your progress? This action cannot be undone.")) {
    // Clear only game-related progress, not settings
    localStorage.removeItem('ice');
    localStorage.removeItem('perClick');
    localStorage.removeItem('autoClick');
    localStorage.removeItem('globalWarmingPercent');
    location.reload(); // Reload the page to reset the game
  }
}
