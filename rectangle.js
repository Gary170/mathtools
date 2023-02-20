function calculateArea() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;
  const area = length * width;
  document.getElementById("area").textContent = area.toFixed(2);
}
