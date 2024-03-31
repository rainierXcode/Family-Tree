//Intro

const introG = $('introSvg g');
const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } });

gsap.set(introG, {
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

let main = gsap.timeline({ repeat: -1 });

for (let i = 0; i < words.length; i++) {
  let delay = i - 1;
  let wordTL = gsap.timeline();
  if (i !== 0) {
    wordTL.from(words[i], { duration: 1, yPercent: -100, opacity: 0, ease: 'power2.out' });
  } else {
    delay += 1;
    gsap.set(words[0], { opacity: 1, yPercent: 0 });
  }

  if (i !== words.length - 1) {
    wordTL.to(words[i], { duration: 1, yPercent: 100, opacity: 0, ease: 'power2.out' });
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

let horizontalSection = $('.horizontal');

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: -100,
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

//Header
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

//Gallery
const imageContainers = gsap.utils.toArray($('.galleryReveal'));

imageContainers.forEach((container) => {
  let galleryImg = container.querySelector('img');

  let galleryTl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: 'restart reverse play reset',
      start: 'center 80%',
      end: 'center 5%',
    },
    defaults: {
      duration: 1.4,
      ease: 'Power3.inOut',
      snap: true,
    },
  });

  let right = container.classList.contains('galleryRevealRight');

  if (right) {
    galleryTl
      .from(
        container,
        {
          opacity: 0,
          xPercent: 100,
        },
        0
      )
      .from(
        galleryImg,
        {
          xPercent: -100,
          scale: 1.15,
        },
        0
      );
  } else {
    galleryTl
      .from(
        container,
        {
          opacity: 0,
          xPercent: -100,
        },
        0
      )
      .from(
        galleryImg,
        {
          xPercent: 100,
          scale: 1.15,
        },
        0
      );
  }
});

const arrow = $('.scrollArrow');
const circular = $('.scrollCircular');
const scrollBox = $('.scrollBox');

const arrowTl = gsap.timeline({ repeat: -1, yoyo: true });

arrowTl.from(arrow, {
  yPercent: -40,
  ease: 'power3.inOut',
  duration: 1,
  opacity: 0.8,
});

gsap.set(circular, { transformOrigin: '50% 50%' });

const circularTl = gsap.timeline({ repeat: -1 });
circularTl
  .to(circular, {
    rotate: 360,
    ease: 'power3.inOut',
    duration: 1,
  })
  .to(circular, {
    rotate: -360,
    ease: 'power3.inOut',
    duration: 1,
  })
  .to(circular, {
    rotate: -720,
    ease: 'power3.inOut',
    duration: 1,
  })
  .to(circular, {
    rotate: 0,
    ease: 'power3.inOut',
    duration: 1,
  });

const scrollArrowTrigger = ScrollTrigger.create({
  trigger: scrollBox,
  start: 'bottom 90%',
  onEnter: () => {
    gsap.to(scrollBox, { opacity: 0 });
    circularTl.pause();
    arrowTl.pause();
  },
});

const colorTrigger1 = $('.galleryChangeColor1');
const colorTrigger2 = $('.galleryChangeColor2');
const galleryPage = $('.galleryPage');

gsap.to(galleryPage, {
  backgroundColor: '#D4D6B9',
  ease: 'power3.in',
  scrollTrigger: {
    trigger: colorTrigger1,
    start: 'center 75%',
    end: 'center 55%',
    toggleActions: 'play none none reset',
  },
});

gsap.to(galleryPage, {
  backgroundColor: '#f7fee7',
  ease: 'power3.in',
  scrollTrigger: {
    trigger: colorTrigger2,
    start: 'center 65%',
    end: 'center 55%',
    toggleActions: 'play none none reset',
  },
});
