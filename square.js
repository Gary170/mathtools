function calculatePerimeter() {
  const length = document.getElementById("length").value;
  const perimeter = 4 * length;
  document.getElementById("perimeter").textContent = perimeter;
}
