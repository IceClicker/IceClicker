let ice = 0;

function clickIce() {
  ice++;
  document.getElementById("ice").textContent = ice;
}

window.onload = function () {
  document.getElementById("ice").textContent = ice;
};

