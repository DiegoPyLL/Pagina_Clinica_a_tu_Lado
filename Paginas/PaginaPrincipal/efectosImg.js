// IntersectionObserver: activa .in-view cuando entra al viewport
const items = document.querySelectorAll('.collage .item');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('in-view');
  });
}, {threshold:0.18});

items.forEach(i=>obs.observe(i));

// Parallax efecto: mueve imágenes según el scroll
const parallaxItems = Array.from(document.querySelectorAll('.parallax'));
let ticking = false;

function onScroll(){
  if(!ticking){
    window.requestAnimationFrame(()=>{
      parallaxItems.forEach(el=>{
        const speed = parseFloat(el.dataset.speed) || 0;
        const rect = el.getBoundingClientRect();
        if(rect.bottom >= 0 && rect.top <= window.innerHeight){
          const offset = (rect.top + rect.height/2 - window.innerHeight/2) * speed * -1;
          const inner = el.querySelector('.parallax-inner');
          if(inner) inner.style.transform = `translateY(${offset}px)`;
        }
      });
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll(); // inicial
