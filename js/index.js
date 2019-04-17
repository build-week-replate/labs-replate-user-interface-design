//GSAP animation for Logo

TweenMax.from('.header', 2, { x: -600, y: -50, scale: 0, rotation: 360, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('.header', { x: 0, y: 0 });



