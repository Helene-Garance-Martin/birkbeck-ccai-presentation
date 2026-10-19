let current = 0;
const slides = document.querySelectorAll(".slide");
const total = slides.length;
const navItems = document.querySelectorAll(".nav-item");
const arrowL = document.getElementById("arrowLeft");
const arrowR = document.getElementById("arrowRight");
const counter = document.getElementById("counter");

function goSlide(n) {
  if (n < 0 || n >= total) return;
  slides[current].classList.remove("active");
  navItems[current].classList.remove("active");
  current = n;
  slides[current].classList.add("active");
  navItems[current].classList.add("active");
  counter.textContent = current + 1 + " / " + total;
  arrowL.classList.toggle("hidden", current === 0);
  arrowR.classList.toggle("hidden", current === total - 1);
}

function nextSlide() {
  goSlide(current + 1);
}
function prevSlide() {
  goSlide(current - 1);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") nextSlide();
  else if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevSlide();
});

// Flowchart tooltip logic
const flowWrap = document.getElementById("flowWrap");
const nodeBoxes = document.querySelectorAll(".node-box[data-tip]");

nodeBoxes.forEach((node) => {
  const tipId = "tip-" + node.dataset.tip;
  const tip = document.getElementById(tipId);
  if (!tip) return;

  function showTip(e) {
    document.querySelectorAll(".flow-tip").forEach((t) => {
      t.classList.remove("show");
    });

    tip.classList.add("show");

    const wrap = flowWrap.getBoundingClientRect();
    const slide = node.closest(".slide").getBoundingClientRect();

    // Visible slide area, with breathing room around the panel
    const top = Math.max(slide.top, 0) + 20;
    const bottom = Math.min(slide.bottom, window.innerHeight) - 20;
    const left = Math.max(slide.left, 0) + 20;
    const right = Math.min(slide.right, window.innerWidth) - 20;

    tip.style.width = Math.min(440, right - left) + "px";
    tip.style.maxHeight = Math.max(0, bottom - top) + "px";
    tip.style.overflowY = "auto";

    // Centre the panel within that visible area
    const box = node.getBoundingClientRect();
    const width = tip.offsetWidth;
    const height = tip.offsetHeight;
    const gap = 16;

    let x;
    let y = box.top + box.height / 2 - height / 2;

    if (box.right + gap + width <= right) {
      // Space to the right
      x = box.right + gap;
    } else if (box.left - gap - width >= left) {
      // Otherwise try the left
      x = box.left - gap - width;
    } else {
      // On narrower screens, try above the node
      x = box.left + box.width / 2 - width / 2;
      y = box.top - gap - height;

      if (y < top) y = box.bottom + gap;
    }

    // Keep the panel inside the visible slide
    x = Math.max(left, Math.min(x, right - width));
    y = Math.max(top, Math.min(y, bottom - height));

    tip.style.left = x - wrap.left + "px";
    tip.style.top = y - wrap.top + "px";
  }

  node.addEventListener("mouseenter", showTip);

  node.addEventListener("click", function (e) {
    e.stopPropagation();
    showTip(e);
  });
});
