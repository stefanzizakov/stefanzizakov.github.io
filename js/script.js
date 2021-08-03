$(document).scroll(function () {
    var y = $(this).scrollTop();   
    if (y > 100) {
        $('.icon-scroll').fadeOut();
    } else {
        $('.icon-scroll').fadeIn();
    }
});





let sections = document.getElementsByClassName('.content');
        gsap.from('.cont', {opacity: 0, duration: 1.5, y:-50 });
        gsap.from(".image", {scrollTrigger: { trigger: '.image', start: "center bottom", end: "+=400", scrub: true, snap: 1/5 }, opacity: 0, duration: 1.5, y:50, x:-50});
        gsap.from('.text1', {scrollTrigger: { trigger: '.text1', start: "center bottom", end: "+=400", scrub: true }, opacity: 0, duration: 1.5, y:50, x:10 });
        var first = gsap.from('.first', {
           scrollTrigger: { 
            animaton: first, 
            trigger: ".first", 
            start: "top center",
            end: "+=300", 
            scrub: true, 
            pin: true, 
            pinSpacing: false, 
            snap: 1 / (sections.length - 1) 
          }, duration: 1, opacity: 0, xPercent: -100});
        var second = gsap.from('.second', {
           scrollTrigger: { 
            animaton: second, 
            trigger: ".second", 
            start: "top center",
            end: "+=300", 
            scrub: true, 
            pin: true, 
            pinSpacing: false, 
            snap: 1 / (sections.length - 1) 
          }, duration: 1, opacity: 0, xPercent: 100});
        var third = gsap.from('.third', { 
          scrollTrigger: { 
            animaton: third, 
            trigger: ".third", 
            start: "top center", 
            end: "+=300", 
            scrub: true, 
            pin: true,
            pinSpacing: false, 
            snap: 1 / (sections.length - 1) }, 
            duration: 1,
            opacity: 0,
            xPercent: -100});


let boxes = document.getElementsByClassName(".box");

let featRows = document.getElementsByClassName("#features .row");


gsap.from('.box', {
    scrollTrigger: {
        trigger: '#features .row .col-md-4',
        start: "top 80%",
        end: "+=700",
        toggleActions: "restart pause resume reset",
        markers: true
    },
    duration: 3,
    opacity: 0,
    y: 150,
    ease: "elastic",
    stagger: 0.25,
})
