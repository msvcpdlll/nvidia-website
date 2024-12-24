// app.listen(5500, '0.0.0.0', () => {
//    console.log('Server running at http://0.0.0.0:5500');
//  });

 

gsap.registerPlugin(ScrollTrigger);

gsap.to(".rtx-container", {
  scrollTrigger: {
    trigger: ".rtx-container",
    start: "top top",
    end: "bottom 30%",
    scrub: 2,
    //pin: true,
    toggleActions: "",
  },
  x: "-33vw",
  y:"62vh",
  scale: 1.65,
  rotation: 90,
  ease: "power1.out",
  onResize: function() {
    ScrollTrigger.refresh();
  }
});

gsap.to(".rtx2-container", {
  scrollTrigger: {
    trigger: ".rtx2-container",
    start: "top bottom",
    end: "bottom 120%",
    scrub: 2,
    toggleActions: "",
  },
  x: "35vw",
  y:"-41vh",
  scale: 1.45,
  rotation: 90,
  ease: "power1.out",
});

const races = document.querySelector(".races");

function getScrollAmount() {
   let racesWidth = races.offsetWidth + window.innerWidth*0;
   return -(racesWidth - window.innerWidth);
}

console.log(getScrollAmount());


const tween = gsap.to(races, {
   x: getScrollAmount,
   duration:3,
   ease:"none"
});

ScrollTrigger.create({
   trigger:".panel",
   start:"top top",
   end:() => `+=${getScrollAmount()*-1}`,
   pin: true,
   animation: tween,
   scrub:1,
   invalidateOnRefresh:true,
   markers: true
});


let sections = gsap.utils.toArray(".block");

gsap.to(sections, {
   xPercent: -100 * (sections.length -1),
   ease:"none",
   scrollTrigger: {
      trigger: ".container",
      pin:true,
      scrub:1,
      snap:1/(sections.length - 1),
      end: () => "+=" +
document.querySelector(".container").offsetWidth
   }
});