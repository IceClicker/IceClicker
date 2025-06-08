// Upgrades
const upgrades = [
  {
    name: "🌿 Plants",
    max: 500,
    description: "Decreases CO2",
    effectDescription: "-1% debuff",
    baseCost: 10,
    effects: {
      globalWarmingReduction: -1,
    },
  },
  {
    name: "🌳 Trees",
    max: 250,
    description: "Decreases more CO2",
    effectDescription: "-2% debuff",
    baseCost: 25,
    effects: {
      globalWarmingReduction: -2,
    },
  },
  {
    name: "🧊 Ice Cube Mold",
    max: 200,
    description: "Create ice cubes",
    effectDescription: "+1 /click",
    baseCost: 50,
    effects: {
      icePerClick: 1,
    },
  },
  {
    name: "🧱 Ice Block Mold",
    max: 150,
    description: "Create ice blocks",
    effectDescription: "+3 /click",
    baseCost: 75,
    effects: {
      icePerClick: 3,
    },
  },
  {
    name: "Ice Machine",
    max: 100,
    description: "Creates ice for you",
    effectDescription: "+1 /sec, but +1% debuff",
    baseCost: 100,
    effects: {
      icePerSecond: 1,
      globalWarmingReduction: 1,
    },
  },
  {
    name: "🍡 Popsicle Molds",
    max: 75,
    description: "Homemade and delicious!",
    effectDescription: "+5 /click, but -1% debuff",
    baseCost: 150,
    effects: {
      icePerClick: 5,
      globalWarmingReduction: -1,
    },
  },
  {
    name: "🍦 Ice Cream",
    max: 50,
    description: "Yum! Makes you happy.",
    effectDescription: "+10/click",
    baseCost: 250,
    effects: {
      icePerClick: 10,
    },
  },
  {
    name: "🚚 Ice Cream Truck",
    max: 30,
    description: "ICE CREAM!!!",
    effectDescription: "+25/click, debuff +1%",
    baseCost: 500,
    effects: {
      icePerClick: 25,
      globalWarmingReduction: -1,
    },
  },
  {
    name: "🍧 Shaved Ice",
    max: 50,
    description: "Hawaiian ice",
    effectDescription: "+5/sec",
    baseCost: 1000,
    effects: {
      icePerSecond: 5,
    },
  },
  {
    name: "Freezer",
    max: 100,
    description: "Freezes ice (and ice cream)",
    effectDescription: "+10/click, +1x multiplier, -1% debuff",
    baseCost: 1500,
    effects: {
      icePerClick: 10,
      iceMultiplier: 1,
      globalWarmingReduction: -1,
    },
  },
  {
    name: "🌨️ Snowstorm",
    max: 100,
    description: "Let it fall",
    effectDescription: "+50/sec, enables snowman",
    baseCost: 2500,
    effects: {
      icePerSecond: 50,
    },
  },
  {
    name: "☃️ Snowman",
    max: 50,
    description: "Ice to meet you!",
    effectDescription:
      "+75/click, but -10/sec. Has a 1% chance every minute to produce another snowman.",
    baseCost: 5000,
    effects: {
      icePerClick: 75,
      icePerSecond: -10,
    },
  },
  {
    name: "Igloo",
    max: 25,
    description: "Ice house!",
    effectDescription: "+100/sec, but -10/click and +1% debuff",
    baseCost: 7500,
    effects: {
      icePerSecond: 100,
      icePerClick: -10,
      globalWarmingReduction: -1,
    },
  },
  {
    name: "Hail",
    max: 25,
    description: "Free ice grind",
    effectDescription: "+250/sec",
    baseCost: 10000,
    effects: {
      icePerSecond: 250,
    },
  },
  {
    name: "🧒 Sibling",
    max: 6,
    description: "Bribe your sibling to help",
    effectDescription: "+500/sec",
    baseCost: 15000,
    effects: {
      icePerSecond: 500,
    },
  },
  {
    name: "👯 Twin",
    max: 1,
    description: "Another you",
    effectDescription: "x2 click power + autoclick at 2 clicks per second",
    baseCost: 25000,
    effects: {
      clickMultiplier: 2,
      autoClickPerSecond: 2,
    },
  },
  {
    name: "🐧 Little Penguin",
    max: 100,
    description: "Cute and cuddly, increases focus",
    effectDescription: "+100/click",
    baseCost: 50000,
    effects: {
      icePerClick: 100,
    },
  },
  {
    name: "🐧 Royal Penguin",
    max: 75,
    description: "Penguin that gives you ice",
    effectDescription: "+1000/sec",
    baseCost: 75000,
    effects: {
      icePerSecond: 1000,
    },
  },
  {
    name: "🐧 King Penguin",
    max: 50,
    description: "Penguin that gives you more ice",
    effectDescription: "+5000/sec",
    baseCost: 100000,
    effects: {
      icePerSecond: 5000,
    },
  },
  {
    name: "🐧 Emperor Penguin",
    max: 20,
    description: "Ruler of the penguins",
    effectDescription: "-50/sec, but x2 penguin production",
    baseCost: 150000,
    effects: {
      icePerSecond: -50,
      penguinMultiplier: 2,
    },
  },
  {
    name: "Walrus",
    max: 90,
    description: "Chubby tusked friend",
    effectDescription: "+250/click",
    baseCost: 250000,
    effects: {
      icePerClick: 250,
    },
  },
  {
    name: "Narwhal",
    max: 60,
    description: "Unicorn of the sea",
    effectDescription: "+8000/sec",
    baseCost: 500000,
    effects: {
      icePerSecond: 8000,
    },
  },
  {
    name: "Orca",
    max: 40,
    description: "Non-killer whale, I think",
    effectDescription: "+500/click, halves penguin production",
    baseCost: 750000,
    effects: {
      icePerClick: 500,
      penguinMultiplier: 0.5,
    },
  },
  {
    name: "Polar Bear",
    max: 25,
    description: "Fluffy, fierce, ice boss",
    effectDescription: "+1,000/sec, halves penguin production",
    baseCost: 1000000,
    effects: {
      icePerSecond: 1000,
      penguinMultiplier: 0.5,
    },
  },
  {
    name: "👨‍🔬 Scientist",
    max: 1,
    description: "",
    effectDescription: "Unlocks science upgrades, but -50/click to maintain",
    baseCost: 1250000,
    effects: {
      icePerClick: -50,
    },
  },
  {
    name: "Renewable energy",
    max: 40,
    description: "Less CO2 and cleaner air",
    effectDescription: "-5% global warming",
    baseCost: 1500000,
    effects: {
      globalWarmingReduction: -5,
    },
  },
  {
    name: "Carbon Capture",
    max: 20,
    description: "Capture CO2",
    effectDescription: "-10% global warming",
    baseCost: 1750000,
    effects: {
      globalWarmingReduction: -10,
    },
  },
  {
    name: "Basalt Storage",
    max: 10,
    description: "Store CO2 in basalt",
    effectDescription: "-15% global warming",
    baseCost: 2000000,
    effects: {
      globalWarmingReduction: -15,
    },
  },
  {
    name: "⚗️ Cryoengineering",
    max: null,
    description: "Turn science into solid ice",
    effectDescription: "+1,000/click",
    baseCost: 2500000,
    effects: {
      icePerClick: 1000,
    },
  },
  {
    name: "💥 Fusion Freezer",
    max: null,
    description: "Clean energy meets cool tech",
    effectDescription: "+10,000/sec",
    baseCost: 5000000,
    effects: {
      icePerSecond: 10000,
    },
  },
  {
    name: "🏭 Ice Factory",
    max: 1,
    description: "N/A",
    effectDescription: "Unlocks factory upgrades, but -50/sec to maintain",
    baseCost: 7500000,
    effects: {
      icePerSecond: -50,
    },
  },
  {
    name: "👷 Factory Workers",
    max: 10,
    description: "Helps you make ice",
    effectDescription: "+10,000/click, but -100/sec",
    baseCost: 10000000,
    effects: {
      icePerClick: 10000,
      icePerSecond: -100,
    },
  },
  {
    name: "Super Icer 5000",
    max: 1,
    description: "Industrial ice",
    effectDescription: "+50,000/sec, +5% debuff",
    baseCost: 25000000,
    effects: {
      icePerSecond: 50000,
      globalWarmingReduction: -5,
    },
  },
  {
    name: "Frosto-Matic Pro",
    max: 1,
    description: "Auto frosted pro ice",
    effectDescription: "+100,000/sec +10% debuff",
    baseCost: 50000000,
    effects: {
      icePerSecond: 100000,
      globalWarmingReduction: -10,
    },
  },
  {
    name: "Ice-It MAX",
    max: 1,
    description: "Max = best",
    effectDescription: "+500,000/sec, +15% debuff",
    baseCost: 75000000,
    effects: {
      icePerSecond: 500000,
      globalWarmingReduction: -15,
    },
  },
  {
    name: "🗻 Glacier",
    max: 25,
    description: "Harvest glaciers for ice",
    effectDescription: "+1 million/sec",
    baseCost: 100000000,
    effects: {
      icePerSecond: 1000000,
    },
  },
  {
    name: "Ice Age",
    max: 1,
    description: "Back in time",
    effectDescription: "Unlocks Ice Age upgrades, but -100/sec to maintain.",
    baseCost: 250000000,
    effects: {
      icePerSecond: -100,
    },
  }, {
    name: "🐺 Dire Wolf",
    max: 25,
    description: "Who knew wolves could help?",
    effectDescription: "+50 million/sec",
    baseCost: 500000000,
    effects: {
      icePerSecond: 50000000,
    },
  },
  {
    name: "🐯 Sabertooth Tiger",
    max: 15,
    description: "Not that scary, I promise",
    effectDescription: "+100 million/sec",
    baseCost: 750000000,
    effects: {
      icePerSecond: 100000000,
    },
  },
  {
    name: "Woolly Mammoth",
    max: 10,
    description: "Woolly and big",
    effectDescription: "+50,000/click",
    baseCost: 1000000000,
    effects: {
      icePerClick: 50000,
    },
  },
  {
    name: "Mastodon",
    max: 10,
    description: "Lesser-known mammoth",
    effectDescription: "+100,000/click",
    baseCost: 10000000000,
    effects: {
      icePerClick: 100000,
    },
  },
  {
    name: "🧙‍♂️ Wizard",
    max: 1,
    description: "Magical things happen",
    effectDescription: "Unlocks Magic Upgrades, but -500,000/sec to maintain",
    baseCost: 100000000000,
    effects: {
      icePerSecond: -500000,
    },
  },
  {
    name: "Freeze water",
    max: 10,
    description: "Freeze water",
    effectDescription: "+1 billion/sec",
    baseCost: 250000000000,
    effects: {
      icePerSecond: 1000000000,
    },
  },
  {
    name: "⚡ Power boost",
    max: 7,
    description: "You feel energized",
    effectDescription: "x2 clicks power",
    baseCost: 500000000000,
    effects: {
      clickMultiplier: 2,
    },
  },
  {
    name: "Slow Time",
    max: 5,
    description: "Bend time",
    effectDescription: "Doubles time for debuff",
    baseCost: 750000000000,
    effects: {
      debuffTimeMultiplier: 2,
    },
  },
  {
    name: "Speed Up",
    max: 3,
    description: "Speed up time (for you)",
    effectDescription: "x2 autoclick",
    baseCost: 1000000000000,
    effects: {
      autoClickMultiplier: 2,
    },
  },
  {
    name: "Ice Titan",
    max: 1,
    description: "The almighty lord",
    effectDescription: "100 billion/sec, unlocks Cosmic upgrades, but -500/click to maintain",
    baseCost: 10000000000000,
    effects: {
      icePerSecond: 100000000000,
      icePerClick: -500,
    },
  },
  {
    name: "☄️ Comet",
    max: 5,
    description: "Amazon ice delivery but faster",
    effectDescription: "500 billion/sec",
    baseCost: 50000000000000,
    effects: {
      icePerSecond: 500000000000,
    },
  },
  {
    name: "🪐 Ice Planet",
    max: 2,
    description: "A planet full of ice",
    effectDescription: "10 million/click",
    baseCost: 100000000000000,
    effects: {
      icePerClick: 10000000,
    },
  },
  {
    name: "🕳️ Black Hole",
    max: 1,
    description: "See for yourself",
    effectDescription: "1 trillion/sec",
    baseCost: 1000000000000000,
    effects: {
      icePerSecond: 1000000000000,
    },
  }
];

upgrades.forEach((element) => {
  if (localStorage.getItem(element.name) === null) {
    localStorage.setItem(element.name, 0);
  }
});

// Lock Upgrades
function isUpgradeLocked(upgrade) {
  if (upgrade.name === "☃️ Snowman") {
    return parseInt(localStorage.getItem("🌨️ Snowstorm") || "0", 10) < 1;
  }
  // mores stuff
  return false;
}


// Buy upgrade function
function buyUpgrade(upgradeName) {
  const upgrade = upgrades.find(u => u.name === upgradeName);
  if (!upgrade) return;

  let owned = parseInt(localStorage.getItem(upgrade.name) || "0", 10);

  if (upgrade.max !== null && owned >= upgrade.max) {
    alert("Maxed out!");
    return;
  }

  // Get cost
  let currentCost = parseFloat(localStorage.getItem(upgrade.name + "_cost")) || upgrade.baseCost;
  if (currentCost !== null && ice < currentCost) {
    alert("Not enough ice!");
    return;
  }

  if (currentCost !== null) {
    ice -= currentCost;
    boughtAlert(currentCost, upgrade.name);
  }
  owned += 1;
  localStorage.setItem(upgrade.name, owned);
  applyEffects(upgrade.effects);
}

// Apply effects
function applyEffects(effects) {
  if (effects.icePerClick) {
    if (typeof perClick === "undefined") window.perClick = 0;
    perClick += effects.icePerClick;
    localStorage.setItem('perClick', perClick);
  }
  if (effects.icePerSecond) {
    if (typeof autoClick === "undefined") window.autoClick = 0;
    autoClick += effects.icePerSecond;
    localStorage.setItem('autoClick', autoClick);
  }
  if (effects.globalWarmingReduction) {
    if (typeof globalWarmingPercent === "undefined") window.globalWarmingPercent = 0.5;
    globalWarmingPercent += effects.globalWarmingReduction / 100;
    // Always round to two decimals after update
    globalWarmingPercent = Math.round(globalWarmingPercent * 100) / 100;
    localStorage.setItem('globalWarmingPercent', globalWarmingPercent);
  }
  if (effects.iceMultiplier) {
    if (typeof iceMultiplier === "undefined") window.iceMultiplier = 1;
    iceMultiplier *= (1 + effects.iceMultiplier);
    localStorage.setItem('iceMultiplier', iceMultiplier);
  }
  if (effects.clickMultiplier) {
    if (typeof clickMultiplier === "undefined") window.clickMultiplier = 1;
    clickMultiplier *= effects.clickMultiplier;
    localStorage.setItem('clickMultiplier', clickMultiplier);
  }
  if (effects.autoClickPerSecond) {
    if (typeof autoClickPerSecond === "undefined") window.autoClickPerSecond = 0;
    autoClickPerSecond += effects.autoClickPerSecond;
    localStorage.setItem('autoClickPerSecond', autoClickPerSecond);
  }
  if (effects.penguinMultiplier) {
    if (typeof penguinMultiplier === "undefined") window.penguinMultiplier = 1;
    penguinMultiplier *= effects.penguinMultiplier;
    localStorage.setItem('penguinMultiplier', penguinMultiplier);
  }
  if (effects.polarMultiplier) {
    if (typeof polarMultiplier === "undefined") window.polarMultiplier = 1;
    polarMultiplier *= effects.polarMultiplier;
    localStorage.setItem('polarMultiplier', polarMultiplier);
  }
  if (effects.icePerSecondMultiplier) {
    if (typeof icePerSecondMultiplier === "undefined") window.icePerSecondMultiplier = 1;
    icePerSecondMultiplier *= effects.icePerSecondMultiplier;
    localStorage.setItem('icePerSecondMultiplier', icePerSecondMultiplier);
  }
  if (effects.autoClickMultiplier) {
    if (typeof autoClickMultiplier === "undefined") window.autoClickMultiplier = 1;
    autoClickMultiplier *= effects.autoClickMultiplier;
    localStorage.setItem('autoClickMultiplier', autoClickMultiplier);
  }
  if (effects.debuffTimeMultiplier) {
    if (typeof debuffTimeMultiplier === "undefined") window.debuffTimeMultiplier = 1;
    debuffTimeMultiplier *= effects.debuffTimeMultiplier;
    localStorage.setItem('debuffTimeMultiplier', debuffTimeMultiplier);
  }
  document.getElementById("ice").textContent = localStorage.getItem('ice') || 0;
  document.getElementById("perClick").textContent = localStorage.getItem('perClick') || 0;
  document.getElementById("autoClick").textContent = localStorage.getItem('autoClick') || 0;
  document.getElementById("globalWarmingPercent").textContent = ((parseFloat(localStorage.getItem('globalWarmingPercent')) || 0) * 100).toFixed(0) + "%";
}

// Format numbers to be user-friendly
function formatNumber(num) {
  if (num === null || num === undefined) return "???";
  if (num >= 1e15) return (num / 1e15).toFixed(3).replace(/\.?0+$/, "") + " quadrillion";
  if (num >= 1e12) return (num / 1e12).toFixed(3).replace(/\.?0+$/, "") + " trillion";
  if (num >= 1e9) return (num / 1e9).toFixed(3).replace(/\.?0+$/, "") + " billion";
  if (num >= 1e6) return (num / 1e6).toFixed(3).replace(/\.?0+$/, "") + " million";
  if (num >= 1e3) return (num / 1e3).toFixed(3).replace(/\.?0+$/, "") + "k";
  return num.toString();
}

// Increase prices by 10%
function increaseUpgradePrice(upgradeName) {
  const upgrade = upgrades.find(u => u.name === upgradeName);
  if (!upgrade) return;
  let currentCost = parseFloat(localStorage.getItem(upgrade.name + "_cost")) || upgrade.baseCost;
  currentCost = Math.round(currentCost * 1.1);
  localStorage.setItem(upgrade.name + "_cost", currentCost);
  return currentCost;
}

// Render upgrades display
const container = document.getElementById("upgrade-container");
upgrades.forEach((upgrade) => {
  let owned = parseInt(localStorage.getItem(upgrade.name) || "0", 10);
  let currentCost = parseFloat(localStorage.getItem(upgrade.name + "_cost")) || upgrade.baseCost;
  const upgradeDiv = document.createElement("div");
  upgradeDiv.className = "upgrade";
  upgradeDiv.style.cursor = "pointer";
  upgradeDiv.title = "Click to buy";

  // Tooltip wrapper
  const tooltipWrapper = document.createElement("span");
  tooltipWrapper.className = "tooltip";
  tooltipWrapper.style.display = "inline-block";

  // Name
  const title = document.createElement("h4");
  title.textContent = upgrade.name;
  title.style.display = "inline";
  tooltipWrapper.appendChild(title);

  // Tooltip text
  const tooltipText = document.createElement("span");
  tooltipText.className = "tooltiptext";
  tooltipText.textContent = upgrade.description;
  tooltipWrapper.appendChild(tooltipText);

  // Effect
  const desc = document.createElement("span");
  desc.textContent = upgrade.effectDescription;

  // Move these lines BEFORE you use maxed in the ownership display!
  const locked = isUpgradeLocked(upgrade);
  const maxed = upgrade.max !== null && owned >= upgrade.max;

  // Ownership display
  const ownedDisplay = document.createElement("span");
  ownedDisplay.style.fontWeight = "bold";
  if (maxed) {
    ownedDisplay.textContent = "MAX";
  } else if (owned > 0) {
    ownedDisplay.textContent = `Owned: ${owned}`;
  } else {
    ownedDisplay.textContent = ""; // Don't display anything if you don't own any
  }

  // Cost
  const cost = document.createElement("p");
  cost.style.fontWeight = "bold";
  cost.style.marginBottom = "0.5rem";
  cost.textContent = `${formatNumber(currentCost) + " 🧊"}`;

  if (locked) {
    upgradeDiv.classList.add("locked-upgrade");
    upgradeDiv.style.opacity = "0.5";
    upgradeDiv.style.pointerEvents = "none";
    cost.textContent = "Locked";
  } else if (maxed) {
    upgradeDiv.classList.add("maxed-upgrade");
    upgradeDiv.style.opacity = "0.5";
    upgradeDiv.style.pointerEvents = "none";
    cost.textContent = "MAXED";
  }

  // Buy by clicking
  upgradeDiv.addEventListener("click", function () {
    if (isUpgradeLocked(upgrade)) return;
    if (upgrade.max !== null && owned >= upgrade.max) return;
    buyUpgrade(upgrade.name);
    // After purchase, increase price and update display
    owned = parseInt(localStorage.getItem(upgrade.name) || "0", 10);
    if (upgrade.max !== null && owned >= upgrade.max) {
      ownedDisplay.textContent = "MAX";
      cost.textContent = "MAXED";
      upgradeDiv.classList.add("maxed-upgrade");
      upgradeDiv.style.opacity = "0.5";
      upgradeDiv.style.pointerEvents = "none";
      return;
    }
    ownedDisplay.textContent = `Owned: ${owned}${upgrade.max !== null ? "/" + upgrade.max : ""}`;
    const newCost = increaseUpgradePrice(upgrade.name);
    cost.textContent = `${formatNumber(newCost) + " 🧊"}`;
  });

// Create cards
upgradeDiv.appendChild(tooltipWrapper);
upgradeDiv.appendChild(document.createElement("br"));
upgradeDiv.appendChild(desc);
if (ownedDisplay.textContent !== "") {
  upgradeDiv.appendChild(document.createElement("br"));
  upgradeDiv.appendChild(ownedDisplay);
}
upgradeDiv.appendChild(cost);
container.appendChild(upgradeDiv);
});

// Show bought alert
function boughtAlert(cost, item) {
  const clickerArea = document.querySelector(".clicker-area");
  const alertText = document.createElement("div");

  alertText.textContent = `-${cost} 🧊 (Bought ${item})`;
  alertText.classList.add("floating-alert");

  alertText.style.position = "absolute";
  alertText.style.left = `10rem`;
  alertText.style.top = `14rem`;

  clickerArea.appendChild(alertText);

  alertText.addEventListener("animationend", () => {
    alertText.remove();
  });
}