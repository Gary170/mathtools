function calculateArea() {
  // Get the value of the radius input field
  const radius = document.getElementById("radius").value;

  // Calculate the area of the circle
  const area = Math.PI * radius ** 2;

  // Display the area of the circle
  document.getElementById("area").textContent = area.toFixed(2);
}
