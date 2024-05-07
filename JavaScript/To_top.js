let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  scrollToTop(0, 500); 
}

function scrollToTop(scrollTargetY, speed) {
  let scrollY = window.scrollY || document.documentElement.scrollTop;
  let currentTime = 0;

  const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  const easingEquations = {
    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
  };

  function tick() {
    currentTime += 1 / 60;

    let p = currentTime / time;
    let t = easingEquations.easeInOutSine(p);

    if (p < 1) {
      window.requestAnimationFrame(tick);
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  tick();
}