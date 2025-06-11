// Ice Crystals Upgrades
const crystalUpgrades = [
  {
    name: "Crystal Touch",
    max: 100,
    description: "Frosty fingers = frosty fortune",
    effectDescription: "+10% click power",
    baseCost: 1,
    costFormula: (owned) => Math.pow(2, owned), // x2
    effects: {
      clickPowerMultiplier: 1.10
    }
  },
  {
    name: "Frozen Heart",
    max: 100,
    description: "Too cool to heat up",
    effectDescription: "+5% autoclick",
    baseCost: 3,
    costFormula: (owned) => Math.pow(3, owned), // x3
    effects: {
      autoClickMultiplier: 1.05
    }
  },
  {
    name: "Permafrost",
    max: 50,
    description: "Can’t melt this legacy",
    effectDescription: "Retain 1% ice every reset",
    baseCost: 5,
    costFormula: (owned) => 5 + 5 * owned, // +5
    effects: {
      retainPercent: 0.01
    }
  },
  {
    name: "Chill Efficiency",
    max: 10,
    description: "Spend less for more",
    effectDescription: "-5% non-crystal upgrades cost",
    baseCost: 10,
    costFormula: (owned) => Math.pow(5, owned), // x5
    effects: {
      upgradeDiscount: 0.05
    }
  },
  {
    name: "Glacial Memory",
    max: 1,
    description: "Brain freeze... but in a good way",
    effectDescription: "Retain all basic upgrades every reset",
    baseCost: 20,
    costFormula: () => 20,
    effects: {
      retainBasicUpgrades: true
    }
  },
  {
    name: "Cryo Overdrive",
    max: 1,
    description: "Clicks go turbo-cold",
    effectDescription: "x5 click power",
    baseCost: 50,
    costFormula: () => 50,
    effects: {
      clickPowerMultiplier: 5
    }
  },
  {
    name: "Eternal Winter",
    max: 1,
    description: "I wonder what the weather is today!",
    effectDescription: "Half global warming rate",
    baseCost: 100,
    costFormula: () => 100,
    effects: {
      globalWarmingMultiplier: 0.5
    }
  }
];

// Initialize crystal upgrades in localStorage
crystalUpgrades.forEach(upg => {
  if (localStorage.getItem("crystal_" + upg.name) === null) {
    localStorage.setItem("crystal_" + upg.name, 0);
  }
});

// --- Ice Crystals Logic ---
function getIceCrystals() {
  return parseInt(localStorage.getItem('iceCrystals') || '0', 10);
}

function setIceCrystals(val) {
  localStorage.setItem('iceCrystals', val);
  updateIceCrystalsDisplay();
}

function addIceCrystals(val) {
  setIceCrystals(getIceCrystals() + val);
}

function canConvertToCrystal() {
  return ice >= 1e9;
}

function convertIceToCrystal() {
  if (canConvertToCrystal()) {
    ice -= 1e9;
    localStorage.setItem('ice', ice);
    addIceCrystals(1);
    document.getElementById('ice').textContent = ice;
    updateIceCrystalsDisplay();
    renderCrystalUpgrades();
    showCustomAlert('You gained 1 Ice Crystal!');
  } else {
    showCustomAlert('You need at least 1 billion ice to convert!');
  }
}

function updateIceCrystalsDisplay() {
  const el = document.getElementById('iceCrystalsDisplay');
  if (el) {
    el.textContent = getIceCrystals();
  }
}

// Calculate cost for next level
function getCrystalUpgradeCost(upgrade) {
  const owned = parseInt(localStorage.getItem("crystal_" + upgrade.name) || "0", 10);
  return upgrade.costFormula(owned) || upgrade.baseCost;
}

// --- Patch crystal upgrades display logic ---
function renderCrystalUpgrades() {
  const container = document.getElementById("crystal-upgrade-container");
  if (!container) return;
  const crystals = getIceCrystals();
  if (crystals <= 0) {
    container.style.display = "none";
    container.innerHTML = "";
    return;
  } else {
    container.style.display = "";
  }
  container.innerHTML = "";
  crystalUpgrades.forEach(upgrade => {
    const owned = parseInt(localStorage.getItem("crystal_" + upgrade.name) || "0", 10);
    const maxed = upgrade.max !== null && owned >= upgrade.max;
    const cost = getCrystalUpgradeCost(upgrade);
    const upgradeDiv = document.createElement("div");
    upgradeDiv.className = "upgrade";
    upgradeDiv.style.cursor = maxed ? "not-allowed" : "pointer";
    upgradeDiv.style.opacity = maxed ? "0.5" : "1";
    // Name and ownership
    const title = document.createElement("h4");
    title.textContent = upgrade.name;
    title.style.display = "inline";
    const ownedDisplay = document.createElement("span");
    ownedDisplay.style.marginLeft = "0.5rem";
    ownedDisplay.style.fontWeight = "bold";
    ownedDisplay.style.color = "#2196f3";
    ownedDisplay.textContent = maxed ? "MAX" : (owned > 0 ? `Owned: ${owned}${upgrade.max ? "/" + upgrade.max : ""}` : "");
    title.appendChild(ownedDisplay);
    // Description & effect
    const desc = document.createElement("span");
    desc.textContent = upgrade.effectDescription;
    // Cost
    const costP = document.createElement("p");
    costP.style.fontWeight = "bold";
    costP.style.marginBottom = "0.5rem";
    costP.textContent = maxed ? "MAXED" : `${cost} 💎`;
    // Buy handler
    upgradeDiv.addEventListener("click", function () {
      if (maxed) return;
      let crystals = getIceCrystals();
      if (crystals < cost) {
        showCustomAlert("Not enough ice crystals!");
        return;
      }
      setIceCrystals(crystals - cost);
      localStorage.setItem("crystal_" + upgrade.name, owned + 1);
      renderCrystalUpgrades();
    });
    upgradeDiv.appendChild(title);
    upgradeDiv.appendChild(document.createElement("br"));
    upgradeDiv.appendChild(desc);
    upgradeDiv.appendChild(document.createElement("br"));
    upgradeDiv.appendChild(costP);
    container.appendChild(upgradeDiv);
  });
}

// --- Add display update on load ---
window.addEventListener('DOMContentLoaded', updateIceCrystalsDisplay);

// Add event listener for the reset for crystal button
window.addEventListener('DOMContentLoaded', function() {
  const resetBtn = document.getElementById('resetForCrystalBtn');
  if (resetBtn) {
    resetBtn.onclick = function() {
      if (ice < 1e9) {
        showCustomAlert('You need at least 1 billion ice to reset for a crystal!');
        return;
      }
      showCustomConfirm('Are you sure you want to reset your progress for 1 Ice Crystal? This will reset your ice and upgrades!', function(confirmed) {
        if (confirmed) {
          // Award 1 ice crystal
          let crystals = parseInt(localStorage.getItem('iceCrystals') || '0', 10);
          localStorage.setItem('iceCrystals', crystals + 1);
          // Reset main progress (but not settings or crystals)
          localStorage.setItem('ice', 0);
          localStorage.setItem('perClick', 1);
          localStorage.setItem('autoClick', 0);
          localStorage.setItem('globalWarmingPercent', 0.5);
          // Reset all upgrades
          upgrades.forEach(upg => {
            localStorage.setItem(upg.name, 0);
            localStorage.removeItem(upg.name + '_cost');
          });
          // Optionally reset other progress here
          showCustomAlert('Progress reset! You gained 1 Ice Crystal.');
          // Only reload after user closes the alert
          const modal = document.getElementById('customAlertModal');
          const okBtn = document.getElementById('customAlertOkBtn');
          function reloadOnClose() {
            modal.style.display = 'none';
            okBtn.removeEventListener('click', reloadOnClose);
            document.removeEventListener('keydown', escListener);
            window.location.reload();
          }
          function escListener(e) { if (e.key === 'Escape') reloadOnClose(); }
          okBtn.addEventListener('click', reloadOnClose);
          document.addEventListener('keydown', escListener);
        }
      });
    };
  }
});

// Custom confirm modal (optional, for reset confirmation)
function showCustomConfirm(message, callback) {
  const modal = document.getElementById('customAlertModal');
  const msg = document.getElementById('customAlertMessage');
  const okBtn = document.getElementById('customAlertOkBtn');
  let cancelBtn = document.getElementById('customAlertCancelBtn');
  if (!modal || !msg || !okBtn) return;
  msg.textContent = message;
  okBtn.textContent = 'OK';
  // Add Cancel button if not present
  if (!cancelBtn) {
    cancelBtn = document.createElement('button');
    cancelBtn.className = 'styled-button';
    cancelBtn.id = 'customAlertCancelBtn';
    cancelBtn.style.marginLeft = '1rem';
    okBtn.parentNode.appendChild(cancelBtn);
  }
  cancelBtn.textContent = 'Cancel';
  cancelBtn.style.display = '';
  modal.style.display = 'flex';
  okBtn.focus();
  function cleanup(result) {
    modal.style.display = 'none';
    okBtn.removeEventListener('click', okHandler);
    cancelBtn.removeEventListener('click', cancelHandler);
    document.removeEventListener('keydown', escListener);
    if (callback) callback(result);
  }
  function okHandler() { cleanup(true); }
  function cancelHandler() { cleanup(false); }
  function escListener(e) { if (e.key === 'Escape') cleanup(false); }
  okBtn.addEventListener('click', okHandler);
  cancelBtn.addEventListener('click', cancelHandler);
  document.addEventListener('keydown', escListener);
}

// Custom alert modal logic
function showCustomAlert(message) {
  const modal = document.getElementById('customAlertModal');
  const msg = document.getElementById('customAlertMessage');
  const okBtn = document.getElementById('customAlertOkBtn');
  let cancelBtn = document.getElementById('customAlertCancelBtn');
  if (cancelBtn) cancelBtn.style.display = 'none'; // Hide cancel for simple alerts
  if (!modal || !msg || !okBtn) return;
  msg.textContent = message;
  modal.style.display = 'flex';
  okBtn.textContent = 'OK';
  okBtn.focus();
  function closeModal() {
    modal.style.display = 'none';
    okBtn.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', escListener);
  }
  function escListener(e) {
    if (e.key === 'Escape') closeModal();
  }
  okBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', escListener);
}