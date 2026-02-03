const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");
function moveButton() {
  const areaRect = buttonArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
buttonArea.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (btnRect.left + btnRect.width / 2),
    e.clientY - (btnRect.top + btnRect.height / 2),
  );
  if (distance < 70) {
    moveButton();
  }
});
function accept() {
  document.querySelector(".card").innerHTML = "<h2> Congratulations you are a proud gay! 🎉</h2>";
}
