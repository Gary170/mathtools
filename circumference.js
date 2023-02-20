function calculateCircumference() {
  const radius = document.getElementById("radius").value;
  const circumference = 2 * Math.PI * radius;
  document.getElementById("circumference").textContent = circumference.toFixed(2);
}
