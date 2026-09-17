
const btn=document.querySelector('.menu-toggle');
const menu=document.querySelector('.menu');
if(btn && menu){
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
}
