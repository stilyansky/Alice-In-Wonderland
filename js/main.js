// hides welcome screen and displays the tasks
const revealTasks = () => {
  const showSoultions = document.getElementById("show-solutions");
  showSoultions.style.display = "block";

  const hideIntroButton = document.getElementById("intro");
  hideIntroButton.style.display = "none";
};

// diplays the result of each calculation
const addResult = (resultText, parentId) => {
  const html = `<img src="img/result.png" class="result-image"> <div class="result-display"><em>RESULT: </em>${resultText}</div>`;
  document.getElementById(parentId).innerHTML = html;
};


// TASK 1
// gets the current year and displays it
const ageCurrentYear = (new Date().getFullYear());
document.getElementById('current-year').value = ageCurrentYear;

// calculates the current age based on the birth year
const calculateAge = birthYear => {
  const ageBirthYear = document.getElementById(birthYear).value;

  const currentAge = ageCurrentYear - ageBirthYear;

  addResult(`You are either <em>${currentAge - 1}</em> or <em>${currentAge}</em>.`, 'age-result');
};


// TASK 2 - calculates supply of snack until the end of the users lifetime
const calculateSupply = (age, amountPerDay, ageMax, snackType) => {

  const supplyUserAge = document.getElementById(age).value;
  const supplyAmountPerDay = document.getElementById(amountPerDay).value;
  const supplyAgeMax = document.getElementById(ageMax).value;
  const supplySnackType = document.getElementById(snackType).value;

  const supplyResult = (supplyAgeMax - supplyUserAge) * (supplyAmountPerDay * 356);

  addResult(`You will need <em>${(supplyResult)}</em> of <em>${supplySnackType}</em> to last you until the ripe old age of <em>${supplyAgeMax}</em>.`, "supply-results");
};


// TASK 3 - calculates a circle circumference and area based on a radius input
const calcCirle = radius => {
  const userRadius = document.getElementById(radius).value;
  const circumference = (2 * 3.14) * userRadius;
  const area = 3.14 * (userRadius * userRadius);

  addResult(`The <em>circumference is ${circumference}</em> and the <em>area is ${area}</em>.`, "geo-circle-result");
};


// TASK 4
// generic function to highlight the result
const switchHighlighted = (dehighlight, highlight) => {
  document.getElementById(dehighlight).setAttribute("class", "dehighlight-answer");
  document.getElementById(highlight).setAttribute("class", "highlight-answer");
}

// converts Fahrenheit to Celsius
const fahrenheitToCelsius = tempreture => {
  const userFahrenheit = document.getElementById(tempreture).value;
  document.getElementById('user-celsius').value = Math.ceil((userFahrenheit - 32) * 5 / 9);

  switchHighlighted('user-fahrenheit', 'user-celsius');
};

// converts Celsius to Fahrenheit
const celsiusToFahrenheit = tempreture => {
  const userCelsius = document.getElementById(tempreture).value;
  document.getElementById('user-fahrenheit').value = Math.ceil((userCelsius * 9 / 5) + 32);

  switchHighlighted('user-celsius', 'user-fahrenheit');
};
