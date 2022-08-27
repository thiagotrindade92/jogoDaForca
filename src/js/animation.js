const tl = gsap.timeline({defaults: {duration: 0.75, ease:"power1.out"}})
const tl1 = gsap.timeline({defaults: {duration: 0.75, ease:"power1.out"}})


tl.fromTo('.sectionMenu', {scale:0}, {scale:1, ease: "elastic.out(1, 0.4)", duration:1.5})
tl.fromTo('#menu', {x:30, opacity: 0}, {x:0, opacity:1})
tl.fromTo('.tituloPrincipal', {y:0, opacity:0 }, {y:-20, opacity:1, yoyo: true, repeat: -1} )
