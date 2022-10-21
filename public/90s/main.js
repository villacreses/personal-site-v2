var counterDigits = "00001000000"
var hitCounter = document.querySelector("#hit-counter tr");
var digitContainer;

for(var i = 0; i < counterDigits.length; i++) {
  digitContainer = document.createElement('td');
  digitContainer.innerHTML = counterDigits[i];
  hitCounter.appendChild(digitContainer);
}