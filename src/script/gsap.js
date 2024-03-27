//Intro
const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } });

gsap.set('.introSvg g', {
  autoAlpha: 1,
});

tl.from('#familySvg  path', {
  delay: 0.5,
  yPercent: -200,
  stagger: 0.15,
  opacity: 0.5,
})
  .from(
    '#legacySvg path',
    {
      xPercent: 100,
      stagger: 0.1,
      opacity: 0,
    },
    '-=.7'
  )
  .from(
    '#loveSvg  path',
    {
      yPercent: 200,
      stagger: 0.08,
      opacity: 0,
    },
    '-=.9'
  )
  .from(
    '#sapinSvg path',
    {
      delay: 0.3,
      yPercent: 200,
      opacity: 0,
    },
    '-=1'
  )
  .from(
    '.reveal',
    {
      opacity: 0,
      xPercent: -100,
      duration: 1.4,
      ease: 'Power3.inOut',
      yoyo: false,
    },
    '<'
  )
  .from(
    '.reveal img',
    {
      xPercent: 100,
      scale: 1.25,
      duration: 1.4,
      ease: 'Power3.inOut',
      yoyo: false,
    },
    '<'
  )
  .from(
    '.reveal2',
    {
      opacity: 0,
      xPercent: 100,
      duration: 1.4,
      ease: 'Power3.inOut',
      yoyo: false,
    },
    '<'
  )
  .from(
    '.reveal2 img',
    {
      xPercent: -100,
      scale: 1.25,
      duration: 1.4,
      ease: 'Power3.inOut',
      yoyo: false,
    },
    '<'
  )
  .from(
    '.lineOne',
    {
      xPercent: -100,
    },
    '<'
  )
  .from(
    '.lineTwo',
    {
      xPercent: 100,
    },
    '<'
  );

//Rotate words
const words = $('.rotator > span');

let main = new TimelineMax({ repeat: -1 });

for (let i = 0; i < words.length; i++) {
  let delay = i - 1;
  let wordTL = new TimelineMax();
  if (i !== 0) {
    wordTL.from(words[i], 1, { y: '-100%', opacity: 0 });
  }

  if (i !== words.length - 1) {
    wordTL.to(words[i], 1, { y: '100%', opacity: 0 });
  }
  main.add(wordTL, delay);
}

//Smooth Scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: '.horizontal',
    start: 'center center',
    end: '+=1000px',
    pin: '#horizontal-scoll',
    scrub: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
  },
});

const myText = new SplitType('.siteText');
const showAnim = gsap.timeline({ duration: 0.2 });
showAnim.from('.navbar', { yPercent: -100 }).from('.char', { yPercent: -200, stagger: 0.03 }, '<');

ScrollTrigger.create({
  start: 'top top',
  end: 'max',
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});
