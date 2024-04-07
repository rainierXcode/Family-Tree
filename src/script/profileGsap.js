const profTl = gsap.timeline({ defaults: { ease: 'power4.out', opacity: 0 } });
const text = new SplitType('.profFName', { types: 'words, chars' });
const text1 = new SplitType('.profLName', { types: 'words, chars' });
const overflowBox = $('.overflowBox');
const imageContainer = $('.imageContainer');
const imageBox = $('.imageContainer .imageBox');
const fName = $('.profFName .word .char');
const lName = $('.profLName .word .char');
const role = $('.profRole');
const blob1 = $('.blob1');
const blob2 = $('.blob2');
const blob3 = $('.blob3');
const blob4 = $('.blob4');
const buttons = $('.buttons');

profTl
  .from(overflowBox, {
    opacity: 0,
    duration: 0.5,
    scale: 0,
  })
  .from(
    imageContainer,
    {
      yPercent: 100,
      duration: 1.4,
      ease: 'Power3.inOut',
    },
    '+=0.5'
  )
  .from(
    imageBox,
    {
      yPercent: -100,
      scale: 1.15,
      duration: 1.4,
      ease: 'Power3.inOut',
    },
    '<'
  )
  .from(fName, { yPercent: -200, stagger: 0.03 })
  .from(lName, { yPercent: -200, stagger: 0.03 })
  .from(role, {
    xPercent: -100,
  })
  .from(
    blob1,
    {
      opacity: 0,
      ease: 'power4.in',
    },
    '+=0.2'
  )
  .from(
    blob2,
    {
      opacity: 0,
      ease: 'power4.in',
    },
    '-=0.01'
  )
  .from(
    blob3,
    {
      opacity: 0,
      ease: 'power4.in',
    },
    '-=0.01'
  )
  .from(
    blob4,
    {
      opacity: 0,
      ease: 'power4.in',
    },
    '-=0.01'
  )
  .from(
    buttons,
    {
      opacity: 0,
    },
    '-=0.01'
  );

gsap.registerPlugin(ScrollTrigger);
const canCallMe = $('.canCallMe');
gsap.from(canCallMe, {
  xPercent: -100,
  ease: 'power4.inOut',
  duration: 1,
  scrollTrigger: {
    trigger: canCallMe,
    start: 'top 80%',
    toggleActions: 'play none none reset',
    instantClear: true,
    stagger: 0.2,
  },
});

const lenis = new Lenis();

lenis.on('scroll', (e) => {});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const descTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.line',
    start: 'top 70%',
    toggleActions: 'play none none reset',
    instantClear: true,
    stagger: 0.2,
  },
});

descTl.from('.line ', 1, {
  y: -100,
  ease: 'power4.out',
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
});

gsap.from('.aboutMe', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.aboutMe',
    start: 'top 82%',
    toggleActions: 'play none none reset',
    instantClear: true,
    stagger: 0.2,
  },
});

gsap.from('.aboutMeBox', {
  opacity: 0,
  yPercent: 100,
  duration: 0.5,
  delay: 0.2,
  ease: 'power4.inOut',
  scrollTrigger: {
    trigger: '.aboutMeContainer',
    start: 'top 82%',
    toggleActions: 'play none none reset',
  },
});
