const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPosition = event.offsetX;
  const yPosition = event.offsetY;
  const size = Math.random() * 100;

  const spanEl = document.createElement("span");
  spanEl.style.left = xPosition + "px";
  spanEl.style.top = yPosition + "px";
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  console.log(xPosition, yPosition, size);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
