const form = document.querySelector('form');
const results = document.querySelector('#results');
const line = document.querySelector('#line'); // ✅ make sure this exists in your HTML

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    // ✅ BMI category check
    if (bmi <= 18.6) {
      line.innerHTML = "You are underweight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      line.innerHTML = "You are in the normal range";
    } else {
      line.innerHTML = "You are overweight";
    }
  }
});
