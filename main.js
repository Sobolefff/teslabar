(()=>{"use strict";document.querySelector(".gallery__slider");for(var e=document.querySelector(".gallery__sliderline"),l=(document.querySelector(".gallery__slide"),document.querySelectorAll(".gallery__slide")),t=[],r=document.querySelector(".gallery__button-left"),o=(document.querySelector(".gallery__button-right"),0),c=0,n=0;n<l.length;n++)t[n]=l[n].src,l[n].remove(),s();function s(){var l=document.createElement("img");l.src=t[c],l.classList.add("slide"),e.prepend(l),c++,console.log(l.src)}console.log(t),r.addEventListener("click",(function(){o+=100,e.style.left=o+"px",t.unshift(t.pop()),e.lastElementChild.remove(),s(),console.log(t)}))})();