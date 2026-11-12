gsap.registerPlugin(ScrollTrigger);

//^ page2 (About)
// The page scrolls inside .sticky-transition-wrapper, so every trigger uses it as the scroller.
const aboutPoem = document.querySelector(".page2 .ab-poem");
const aboutPlacard = document.querySelector(".page2 .ab-placard");
const aboutLetters = document.querySelectorAll(".page2 .ab-title span");
const aboutLines = document.querySelectorAll(".page2 .ab-line");

if (aboutPoem && aboutPlacard && aboutLetters.length && aboutLines.length) {
  // Animations only run when the visitor hasn't asked for reduced motion;
  // otherwise the poem is simply visible (CSS default).
  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    // Heading: same entrance as the Projects and Skills headings
    gsap.from(aboutLetters, {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".page2 .ab-title",
        scroller: ".sticky-transition-wrapper",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reset",
      },
    });

    // The poem "reads in" line by line as you scroll,
    // then the education placard resolves once you reach the last line.
    gsap.set(aboutLines, { opacity: 0.18 });
    gsap.set(aboutPlacard, { opacity: 0.35 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: aboutPoem,
          scroller: ".sticky-transition-wrapper",
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.6,
        },
      })
      .to(aboutLines, {
        opacity: 1,
        ease: "none",
        stagger: 0.25,
        duration: 0.5,
      })
      .to(
        aboutPlacard,
        { opacity: 1, ease: "power2.out", duration: 1.5 },
        ">-0.5",
      );
  });

  // Google Fonts (Cinzel, Merienda) change text height after load, so re-measure
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

//^ page3 - Enhanced Animations

// Projects heading animation with improved stagger
gsap.from(".page3 h1 span", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)",
  stagger: {
    each: 0.1,
    from: "center",
  },
  scrollTrigger: {
    trigger: ".page3 h1",
    scroller: ".sticky-transition-wrapper",
    start: "top 85%",
    end: "top 40%",
    toggleActions: "play none none reset",
  },
});

// Initial setup for cards - set them invisible and positioned
gsap.set(".page3 .container .card", {
  opacity: 0,
  y: 100,
  rotationX: -15,
  scale: 0.8,
});

// Cards entrance animation with improved stagger and effects
gsap.to(".page3 .container .card", {
  opacity: 1,
  y: 0,
  rotationX: 0,
  scale: 1,
  duration: 1.8,
  ease: "power3.out",
  stagger: {
    each: 0.25,
    from: "start",
  },
  scrollTrigger: {
    trigger: ".page3 .container",
    scroller: ".sticky-transition-wrapper",
    start: "top 75%",
    end: "top 30%",
    toggleActions: "play none none reset",
  },
});

// Enhanced individual card animations on scroll
gsap.utils.toArray(".page3 .container .card").forEach((card, index) => {
  // Card face1 content animation
  gsap.from(card.querySelector(".face1 .content"), {
    scale: 0.7,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.4)",
    delay: 0.3 + index * 0.15,
    scrollTrigger: {
      trigger: card,
      scroller: ".sticky-transition-wrapper",
      start: "top 80%",
      end: "top 40%",
      toggleActions: "play none none reset",
    },
  });

  // Logo/image animations
  const logoImg = card.querySelector("[class*='project'][class*='logo-img']");
  if (logoImg) {
    gsap.from(logoImg, {
      scale: 0,
      rotation: 180,
      duration: 1.2,
      ease: "back.out(2)",
      delay: 0.5 + index * 0.1,
      scrollTrigger: {
        trigger: card,
        scroller: ".sticky-transition-wrapper",
        start: "top 75%",
        end: "top 35%",
        toggleActions: "play none none reset",
      },
    });
  }

  // Title animation
  const title = card.querySelector(".face1 h3");
  if (title) {
    gsap.from(title, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.7 + index * 0.1,
      scrollTrigger: {
        trigger: card,
        scroller: ".sticky-transition-wrapper",
        start: "top 75%",
        end: "top 35%",
        toggleActions: "play none none reset",
      },
    });
  }

  // Face2 content animations (for when cards are hovered)
  const face2Content = card.querySelector(".face2 .content");
  if (face2Content) {
    // Description text
    const description = face2Content.querySelector("p");
    if (description) {
      gsap.set(description, { opacity: 0, y: 20 });
    }

    // Links container
    const linksContainer = face2Content.querySelector(".project-link-tree");
    if (linksContainer) {
      gsap.set(linksContainer, { opacity: 0, y: 20 });

      // Individual link animations
      const links = linksContainer.querySelectorAll("a");
      gsap.set(links, { scale: 0, rotation: 45 });
    }

    // Hover event listeners for face2 animations
    card.addEventListener("mouseenter", () => {
      const tl = gsap.timeline();

      if (description) {
        tl.to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          0.2,
        );
      }

      if (linksContainer) {
        tl.to(
          linksContainer,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          0.3,
        );

        const links = linksContainer.querySelectorAll("a");
        tl.to(
          links,
          {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
          0.4,
        );
      }
    });

    card.addEventListener("mouseleave", () => {
      const tl = gsap.timeline();

      const links = face2Content.querySelectorAll("a");
      if (links.length > 0) {
        tl.to(links, {
          scale: 0.8,
          duration: 0.2,
          ease: "power2.inOut",
        });
      }

      // Reset to initial hover-ready state
      gsap.delayedCall(0.3, () => {
        if (description) gsap.set(description, { opacity: 0, y: 20 });
        if (linksContainer) {
          gsap.set(linksContainer, { opacity: 0, y: 20 });
          const allLinks = linksContainer.querySelectorAll("a");
          gsap.set(allLinks, { scale: 0, rotation: 45 });
        }
      });
    });
  }
});

// Parallax effect for the entire projects container
gsap.to(".page3 .container", {
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".sticky-transition-wrapper",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// Background elements animation (if you want to add some)
gsap.set(".page3", {
  position: "relative",
});

// Add subtle background movement
gsap.to(".page3", {
  backgroundPosition: "50% 20%",
  ease: "none",
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".sticky-transition-wrapper",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

//^ page4
gsap.from(".page4 h1 span", {
  y: 40,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page4 h1 span",
    scroller: ".sticky-transition-wrapper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reset",
  },
});

gsap.from(".page4 .skills .skill-item", {
  x: 900,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
  stagger: 0.3, // Fixed typo: was "stager"
  scrollTrigger: {
    trigger: ".page4 .skills .skill-item",
    scroller: ".sticky-transition-wrapper",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reset",
  },
});
