const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const container = document.querySelector(".container");

// Romantic ending 💖
yes.addEventListener("click", () => {
  document.location.href = "accept.html";
});


// setup NO button
yes.style.position = "absolute";
yes.style.right = "60%";
no.style.position = "absolute";
no.style.left = "60%";

function moveNoButton() {
  const padding = 10;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const btnWidth = no.offsetWidth;
  const btnHeight = no.offsetHeight;

  const maxX = containerWidth - btnWidth - padding;
  const maxY = containerHeight - btnHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = x + "px";
  no.style.top = y + "px";
}

// desktop
no.addEventListener("mouseover", moveNoButton);

// mobile
no.addEventListener("touchstart", moveNoButton);
