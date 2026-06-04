/* typewriter.js — terminal typing effect */
(function() {
  const SPEED = 22;
  const TAG_SPEED = 30;
  const PAUSE_AFTER = 500;

  const style = document.createElement('style');
  style.textContent = `
    .tw-cursor { animation: tw-blink 0.8s step-end infinite; }
    @keyframes tw-blink { 50% { opacity: 0; } }
    .tw-fade-in { animation: tw-fade 0.6s ease-out both; }
    @keyframes tw-fade {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (!main) return;

    const typeTargets = document.querySelectorAll('nav, main h2, main .terminal-box h1, main .terminal-box p, main blockquote, main .flag-box, main .writeup-meta');
    const fadeTargets = main.querySelectorAll('.grid, pre');

    let delay = 300;

    typeTargets.forEach(el => {
      if (el.closest('.card')) return;
      const raw = el.innerHTML.trim();
      if (!raw) return;
      el.innerHTML = '';

      setTimeout(() => { typeIn(el, raw); }, delay);
      delay += raw.replace(/<[^>]+>/g, '').length * SPEED + PAUSE_AFTER;
    });

    setTimeout(() => {
      fadeTargets.forEach((el, i) => {
        el.style.opacity = '0';
        el.classList.add('tw-fade-in');
        el.style.animationDelay = (i * 100) + 'ms';
      });
    }, delay + 200);

    function typeIn(el, html) {
      let pos = 0;
      const len = html.length;

      function tick() {
        if (pos >= len) {
          el.innerHTML = html;
          return;
        }

        if (html[pos] === '<') {
          const end = html.indexOf('>', pos);
          if (end !== -1) pos = end + 1;
          else pos++;
          el.innerHTML = html.substring(0, pos) + '<span class="tw-cursor">_</span>';
          setTimeout(tick, TAG_SPEED);
          return;
        }

        pos++;
        el.innerHTML = html.substring(0, pos) + '<span class="tw-cursor">_</span>';
        setTimeout(tick, SPEED);
      }

      tick();
    }
  });
})();
