//Intro

const introG = $('introSvg g');
const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } });

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
    '-=.9'
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

const familyTreeTextTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.familyTreeText',
    start: 'top 35%',
    end: '+=400',
    scrub: 1,
    pin: '.actualFamilyText',
    pinSpacing: true,
    toggleActions: 'play none none reset',
  },
});

familyTreeTextTl.to('.treeText', {
  xPercent: 27,
  ease: 'power3.inOut',
});

const familyDiagramTL = gsap.timeline({
  scrollTrigger: {
    start: '100% 0%',
    trigger: '.actualFamilyText',
    toggleActions: 'play none none reset',
    instantClear: true,
    stagger: 0.2,
  },
  ease: 'power4.inOut',
});

familyDiagramTL
  .to('.familyTextContainer', {
    backgroundColor: '#435659',
    ease: 'power3.inOut',
  })
  .from('.diagramMainBoxFirst', {
    opacity: 0,
    xPercent: 100,
    duration: 1,
  })
  .from(
    '.diagramLineFirst',
    {
      opacity: 0,
      xPercent: 100,
    },
    '-=0.3'
  )
  .from(
    '.meetTextFirst',
    {
      opacity: 0,
      stagger: 0.03,
      duration: 1,
    },
    '+=0.07'
  );

const diagramBoxLeft = gsap.utils.toArray($('.diagramBoxLeft'));

diagramBoxLeft.forEach((container) => {
  let diagramLine = container.querySelector('.diagramLineLeft');
  let meetText = container.querySelector('.meetTextLeft');
  let mainBox = container.querySelector('.diagramMainBoxLeft');
  let diagramTlLeft = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 50%',
      toggleActions: 'play none none reset',
      instantClear: true,
      stagger: 0.2,
    },
  });

  let child = container.classList.contains('diagramBoxAte');

  if (!child) {
    diagramTlLeft
      .from(mainBox, {
        opacity: 0,
        xPercent: -100,
        duration: 1,
      })
      .from(diagramLine, {
        opacity: 0,
        xPercent: -100,
        duration: 1,
      })
      .from(meetText, {
        opacity: 0,
        stagger: 0.03,
        duration: 1,
      });
  } else {
    diagramTlLeft
      .from(
        diagramLine,
        {
          opacity: 0,
          xPercent: -100,
          duration: 1,
        },
        0.1
      )
      .from(
        container,
        {
          opacity: 0,
          xPercent: -100,
          duration: 1,
        },
        '-=0.3'
      )
      .from(
        meetText,
        {
          opacity: 0,
          stagger: 0.03,
          duration: 1,
        },
        '+=0.07'
      );
  }
});

const diagramBoxRight = gsap.utils.toArray($('.diagramBoxRight'));

diagramBoxRight.forEach((container) => {
  let diagramLine = container.querySelector('.diagramLineRight');
  let meetText = container.querySelector('.meetTextRight');
  let mainBox = container.querySelector('.diagramMainBoxRight');
  let diagramTlRight = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 50%',
      toggleActions: 'play none none reset',
      instantClear: true,
      stagger: 0.2,
    },
  });

  diagramTlRight
    .from(
      diagramLine,
      {
        opacity: 0,
        xPercent: 100,
        duration: 1,
      },
      0.1
    )
    .from(
      container,
      {
        opacity: 0,
        xPercent: 100,
        duration: 1,
      },
      '+=0.3'
    )

    .from(
      meetText,
      {
        opacity: 0,
        stagger: 0.03,
        duration: 1,
      },
      '+=0.07'
    );
});

const lenis = new Lenis();

lenis.on('scroll', (e) => {});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
