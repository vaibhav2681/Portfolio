const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    

    tl.from(".nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    gsap.from("#main-heading", { duration: 2, x: -100, opacity: 0, ease: "power2.inOut" });
    gsap.from("#choti-heading", { duration: 2, x: 100, opacity: 0, ease: "power2.inOut", delay: 0.5 });
    gsap.from(".aboutme h2", { duration: 2, x: -100, opacity: 0, ease: "power2.inOut",delay: 1 });
    gsap.from("#forntpage p", { duration: 2, y: 50, opacity: 0, ease: "power2.inOut", delay: 1.5 });
    gsap.from(".aboutme a", { duration: 2, y: -50, opacity: 0, ease: "power2.inOut", delay: 2 });
    gsap.from(".image-container", { duration: 2, x: -100, opacity: 0, ease: "power2.inOut",delay:1 });
      // tl.to("#heading", {
      //   y: 0,
      //   ease: Expo.easeInOut,
      //   duration: 2,
      //   delay: -1,
      //   stagger: 0.2,
      // })
      // tl.from("#herofooter", {
      //   y: -10,
      //   opacity: 0,
      //   duration: 1.5,
      //   delay: -1,
      //   ease: Expo.easeInOut,
      // });
  }

firstPageAnim();

var timeout;

function circleChaptaKaro() {
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets) {
        clearTimeout(timeout);
        var xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        var yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function() {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
    });
}

circleChaptaKaro();

function circleMouseFollower(xscale, yscale) {
    document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale},${yscale})`;
}



document.querySelectorAll(".elem").forEach(function(elem){
  var rotate =0;
  var diffrot = 0;

  elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot=dets.clientX - rotate;
    rotate =dets.clientX;

    gsap.utils.clamp(-20,20)

    gsap.to(elem.querySelector("img"),{
      opacity: .5,
      ease: Power1,
      top: 0,
      left: dets.clientX,
      rotate : gsap.utils.clamp(-20,20, diffrot * 0.5),
    });
  });
  elem.addEventListener("mouseleave",function(){
  

    gsap.to(elem.querySelector("img"),{
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
}); 