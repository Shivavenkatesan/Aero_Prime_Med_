document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

// Reveal content smoothly as the visitor scrolls.
const revealTargets = document.querySelectorAll('main section, .card, .product-card, .grid > *, .split > *, .faq details');
revealTargets.forEach((el,index)=>{el.classList.add('reveal'); if(el.matches('.card,.product-card,.grid > *')) el.style.transitionDelay=((index%4)*70)+'ms';});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    });
  },{threshold:0.12});
  revealTargets.forEach(el=>observer.observe(el));
} else {
  revealTargets.forEach(el=>el.classList.add('is-visible'));
}
