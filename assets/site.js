(()=>{
'use strict';
const root=document.documentElement;
root.classList.add('js');
const header=document.querySelector('.header');
const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
const closeMenu=()=>{button?.setAttribute('aria-expanded','false');button?.setAttribute('aria-label','Ouvrir le menu');nav?.classList.remove('open')};
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');nav?.classList.toggle('open',open)});
document.addEventListener('click',event=>{if(!event.target.closest('.header')||event.target.closest('#nav a'))closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('open')){closeMenu();button?.focus()}});
window.matchMedia('(min-width:901px)').addEventListener('change',closeMenu);
let scheduled=false;
const updateScroll=()=>{if(header){header.classList.toggle('scrolled',window.scrollY>12);const available=root.scrollHeight-innerHeight;header.style.setProperty('--progress',String(available>0?Math.min(1,Math.max(0,scrollY/available)):0))}scheduled=false};
const scheduleScroll=()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll)}};
window.addEventListener('scroll',scheduleScroll,{passive:true});window.addEventListener('resize',scheduleScroll,{passive:true});updateScroll();
const reveal=[...document.querySelectorAll('.reveal')];
let observer;
const showAll=()=>{observer?.disconnect();reveal.forEach(item=>{item.classList.remove('pending');item.classList.add('visible')})};
if('IntersectionObserver'in window&&!motion.matches){
 document.querySelectorAll('.service-grid,.steps-grid').forEach(group=>[...group.children].forEach((item,i)=>item.style.setProperty('--reveal-delay',`${i*75}ms`)));
 observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.035,rootMargin:'0px 0px 30px 0px'});
 reveal.forEach(item=>{if(item.getBoundingClientRect().top>innerHeight){item.classList.add('pending');observer.observe(item)}});
}
motion.addEventListener('change',event=>{if(event.matches)showAll()});
window.addEventListener('beforeprint',showAll);
})();
