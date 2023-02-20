function calculateVolume() {
  const radius = document.getElementById("radius").value;
  const volume = (4 / 3) * Math.PI * radius ** 3;
  document.getElementById("volume").textContent = volume.toFixed(2);
}
