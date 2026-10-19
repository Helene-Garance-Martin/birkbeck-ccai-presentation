let current = 0;
  const total = 6;
  const slides = document.querySelectorAll('.slide');
  const navItems = document.querySelectorAll('.nav-item');
  const arrowL = document.getElementById('arrowLeft');
  const arrowR = document.getElementById('arrowRight');
  const counter = document.getElementById('counter');

  function goSlide(n) {
    if (n < 0 || n >= total) return;
    slides[current].classList.remove('active');
    navItems[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    navItems[current].classList.add('active');
    counter.textContent = (current + 1) + ' / ' + total;
    arrowL.classList.toggle('hidden', current === 0);
    arrowR.classList.toggle('hidden', current === total - 1);
  }

  function nextSlide() { goSlide(current + 1); }
  function prevSlide() { goSlide(current - 1); }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
  });

  // Flowchart tooltip logic
  const flowWrap = document.getElementById('flowWrap');
  const nodeBoxes = document.querySelectorAll('.node-box[data-tip]');

  nodeBoxes.forEach(node => {
    const tipId = 'tip-' + node.dataset.tip;
    const tip = document.getElementById(tipId);
    if (!tip) return;

    function showTip(e) {
      // Hide all
      document.querySelectorAll('.flow-tip').forEach(t => t.classList.remove('show'));
      tip.classList.add('show');

      // Position near the node
      const wrap = flowWrap.getBoundingClientRect();
      const nr = node.getBoundingClientRect();
      let left = nr.left - wrap.left + nr.width / 2;
      let topPos = nr.bottom - wrap.top + 8;

      // Keep within bounds
      if (left + 380 > wrap.width) left = wrap.width - 390;
      if (left < 10) left = 10;

      tip.style.left = left + 'px';
      tip.style.top = topPos + 'px';
    }

    node.addEventListener('mouseenter', showTip);
    node.addEventListener('click', function(e) {
      e.stopPropagation();
      showTip(e);
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.flow-tip').forEach(t => t.classList.remove('show'));
  });
