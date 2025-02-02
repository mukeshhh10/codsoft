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

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main");

document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+ "px"
  crsr.style.top=dets.y + "px"
})


var tl = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top 30%",
      end:"top 0",
      scrub:3,
  }
})

tl.to(".page1 h1",{
  x:-100,   
},"anim")

tl.to(".page1 h2",{
  x:100,
},"anim")

tl.to(".page1 img",{
  width:"97%"
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top -115%",
      end:"top -120%",
      scrub:3,
  }
})

tl2.to(".main",{
  backgroundColor:"white",
})


var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top -280%",
      end:"top -300%",
      scrub:3,
  }
})

tl3.to(".main",{
  backgroundColor:"#0f0d0d"
})