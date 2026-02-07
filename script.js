const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const container = document.querySelector(".container");

// Romantic ending 💖
yes.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;padding:20px;background-color:#ffe6e6;display:flex;flex-direction:column;align-items:center;justify-content:center;">
      <h1 style="text-align:center;">
        💖 I knew you’d say YES 💖
      </h1>
      <img " src="/dudu-kiss-bubu-kisses.gif">
      <h1 style="text-align:center; font-size:1.8rem; margin-top:20px;">
        💖 LOVE YOU FOREVER 💖
    </h1>
    </div>
  `;
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
