function displayPi() {
  // Get the number of decimal places to display
  const decimalPlaces = 1000000000;

  // Calculate the value of pi to the specified number of decimal places
  const pi = Math.PI.toFixed(decimalPlaces);

  // Display the value of pi
  document.getElementById("pi").textContent = pi;
}
