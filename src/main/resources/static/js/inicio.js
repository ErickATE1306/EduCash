// Matrix background (vanilla JS)
(function(){
  const canvas = document.getElementById('matrix-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  if(!ctx) return;

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン$¥€£';
  const fontSize = 14;
  const drops = [];

  function initDrops(){
    const columns = Math.floor(canvas.width / fontSize);
    drops.length = 0;
    for(let i=0;i<columns;i++) drops[i] = 1 + Math.floor(Math.random()*canvas.height/fontSize);
  }
  initDrops();
  window.addEventListener('resize', initDrops);

  function draw(){
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#059669';
    ctx.font = fontSize + 'px monospace';

    for(let i=0;i<drops.length;i++){
      const text = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(text, i*fontSize, drops[i]*fontSize);
      if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let timer = setInterval(draw, 33);
  window.addEventListener('beforeunload', ()=>{ clearInterval(timer); });
})();

// Mobile menu toggle
(function(){
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if(!toggle || !menu) return;
  function open(){ menu.hidden = false; document.body.style.overflow = 'hidden'; }
  function close(){ menu.hidden = true; document.body.style.overflow = ''; }
  let isOpen = false;
  toggle.addEventListener('click', ()=>{ isOpen = !isOpen; isOpen ? open() : close(); });
  menu.addEventListener('click', (e)=>{ if(e.target === menu) close(); });
  menu.querySelectorAll('a').forEach(a=> a.addEventListener('click', close));
})();

// Logo scroll-to-top behavior
(function(){
  const logo = document.getElementById('logoBtn');
  if(!logo) return;
  logo.addEventListener('click', ()=>{ window.scrollTo({ top:0, behavior:'smooth' }); });
})();

// Force redirect for "Comenzar Ahora" (flujo: ir a /login)
(function(){
  const go = document.getElementById('getStarted');
  if(!go) return;
  go.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.assign('/login');
  });
})();
