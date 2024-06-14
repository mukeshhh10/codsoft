var timeout;

function loco() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
loco()



function circleSize() {
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function() {
        document.querySelector(
          ".minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      },100);
    });
  }
  
function circleMouseFollower(xscale ,yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(   
        ".minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  circleSize();
  circleMouseFollower();




  
var tl = gsap.timeline({
  scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      start:"top 80%",
      end:"top 10%",
      scrub:6,
  }
})

tl.to(".left2",{
  x:20,   
},"anim")

tl.to(".right2",{
  x:-80,
},"anim")


var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      start:"top 50%",
      end:"top 10%",
      scrub:6,
  }
})
tl3.to(".page3 h1",{
  y:-20,   
},"tl3")

tl3.to(".elem",{
  y:-30,   
},"tl3")

