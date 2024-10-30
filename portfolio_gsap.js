gsap.registerPlugin(ScrollTrigger)


//^ page2
gsap.from(".page2 .about h1 span", {
    y: 40, 
    opacity: 0,
    duration: 1.5, 
    ease: "power3.out",
    stagger: 0.2, 
    scrollTrigger: {
        trigger: ".page2 .about h1",
        scroller: '.sticky-transition-wrapper',
        // markers: true,
        start: 'top 80%', 
        end: 'top 20%',
        toggleActions: "play none none reset"
    }
})
gsap.from(".page2 .about-content",{
    x:500,
    opacity:0,
    duration: 1.5, 
    ease: "power3.out", 
    scrollTrigger: {
        trigger: ".page2 .about-content",
        scroller: '.sticky-transition-wrapper',
        // markers: true,
        start: 'top 80%', 
        end: 'top 20%',
        toggleActions: "play none none reset"
    }
})


//^ page3

gsap.from(".page3 h1 span", {
    y: 40, 
    opacity: 0,
    duration: 1.5, 
    ease: "power3.out",
    stagger: 0.2, 
    scrollTrigger: {
        trigger: ".page3 h1 span",
        scroller: '.sticky-transition-wrapper',
        // markers: true,
        start: 'top 80%', 
        end: 'top 20%',
        toggleActions: "play none none reset"
    }
})

gsap.from(".page3 .container .card",{
    x:500,
    opacity:0,
    duration: 1.5, 
    ease: "power3.out", 
    stager:0.5,
    scrollTrigger: {
        trigger: ".page3 .container .card",
        scroller: '.sticky-transition-wrapper',
        // markers: true,
        start: 'top 80%', 
        end: 'top 20%',
        toggleActions: "play none none reset"
    }
})


//^ page4

gsap.from(".page4 h1 span", {
    y: 40, 
    opacity: 0,
    duration: 1.5, 
    ease: "power3.out",
    stagger: 0.2, 
    scrollTrigger: {
        trigger: ".page4 h1 span",
        scroller: '.sticky-transition-wrapper',
        // markers: true,
        start: 'top 80%', 
        end: 'top 20%',
        toggleActions: "play none none reset"
    }
})
gsap.from(".page4 .skills .skill-item",{
    x:900,
    opacity:0,
    duration: 2, 
    ease: "power3.out", 
    stager:2,
    scrub:true,
    scrollTrigger: {
        trigger: ".page4 .skills .skill-item",
        scroller: '.sticky-transition-wrapper',
        // markers: true,
        start: 'top 80%', 
        end: 'top 20%',
        toggleActions: "play none none reset"
    }
})
