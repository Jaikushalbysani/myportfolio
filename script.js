gsap.registerPlugin(ScrollTrigger);

gsap.from(".video-container1 video", {
    scale: 0.7,
    duration: 3,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".video-container1 video",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: 2
    }
});

gsap.from(".magz img", {
    y:100,
    duration: 3,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".magz img",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: 2,
    }
});