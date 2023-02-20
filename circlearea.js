function calculateArea() {
  const radius = document.getElementById("radius").value;
  const area = Math.PI * radius ** 2;
  document.getElementById("area").textContent = area.toFixed(2);
}
