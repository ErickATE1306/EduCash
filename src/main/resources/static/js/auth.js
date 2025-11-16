(function(){
  const btn = document.getElementById('togglePwd');
  const pwd = document.getElementById('password');
  if(btn && pwd){
    btn.addEventListener('click', ()=>{
      const isPwd = pwd.type === 'password';
      pwd.type = isPwd ? 'text' : 'password';
      const on = btn.querySelector('.eye.on');
      const off = btn.querySelector('.eye.off');
      if(on && off){
        on.style.display = isPwd ? 'none' : '';
        off.style.display = isPwd ? '' : 'none';
      }
      btn.setAttribute('aria-label', isPwd ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });
  }
})();

// Sutil pulso de glow en la tarjeta de login
(function(){
  const card = document.querySelector('.auth-card');
  if(!card) return;
  let t = 0;
  function tick(){
    t += 0.02;
    const intensity = 0.18 + Math.sin(t)*0.06;
    card.style.boxShadow = `0 0 50px rgba(0,255,136,${intensity.toFixed(2)})`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// Pequeños parallax para las tarjetas flotantes
(function(){
  // Eliminamos parallax para evitar solapamientos; solo dejamos float via CSS
})();

// Toggle registro
(function(){
  const showBtn = document.getElementById('showRegister');
  const cancelBtn = document.getElementById('cancelRegister');
  const box = document.getElementById('registerBox');
  const regForm = document.getElementById('regForm');
  if(showBtn && box){
    showBtn.addEventListener('click', ()=>{ box.hidden = false; showBtn.closest('.auth-card').scrollIntoView({behavior:'smooth'}); });
  }
  if(cancelBtn && box){
    cancelBtn.addEventListener('click', ()=>{ box.hidden = true; });
  }
  if(regForm){
    regForm.addEventListener('submit', (e)=>{
      // Validación mínima front-end (sin lógica de servidor todavía)
      const pass = document.getElementById('regPass');
      const pass2 = document.getElementById('regPass2');
      if(pass && pass2 && pass.value !== pass2.value){
        e.preventDefault();
        pass2.style.borderColor = '#ff3b3b';
        pass2.focus();
      }
    });
  }
})();
