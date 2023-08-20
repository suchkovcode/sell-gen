export const anumation = (() => {
   gsap.registerPlugin(ScrollTrigger);
   const tl = gsap.timeline();

   const headerScroll = () => {
      if (screen.width > 992) {
         gsap.to(".header__overlay", {
            duration: 0.4,
            opacity: 0.7,
            boxShadow: "0px 1px 3px rgb(0 0 0 / 0.15)",
            scrollTrigger: {
               trigger: ".section-1__title",
               end: "top 90",
               start: "top 25%",
               toggleActions: "play none none reverse",
               scrub: false,
            },
         });
      }
   };
   const intro = () => {
      const blue = document.querySelector(".section-1__blue");
      const pink = document.querySelector(".section-1__pink");
      tl.from(".section-1__title", {
         delay: 0.5,
         duration: 0.4,
         opacity: 0,
         ease: "power1.out",
      })
         .to(blue, {
            delay: 0.2,
            duration: 0.4,
            width: "100%",
            ease: "power1.out",
         })
         .to(pink, {
            duration: 0.4,
            width: "100%",
            ease: "power1.out",
         })
         .from(".section-1__subtitle-box", {
            y: 150,
            duration: 0.4,
            opacity: 0,
            ease: "power1.out",
         })
         .from(".section-1__outline", {
            y: 150,
            duration: 0.4,
            opacity: 0,
            ease: "power1.out",
         });
      return tl;
   };
   const about = () => {
      const blue1 = document.querySelector(".section-3__blue-1");
      const blue2 = document.querySelector(".section-3__blue-2");
      const blue3 = document.querySelector(".section-3__blue-3");
      tl.to(blue1, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: ".section-3__title",
            end: "top 90",
            start: "top 40%",
            scrub: true,
         },
      })
         .to(blue2, {
            width: "100%",
            ease: "power1.out",
            scrollTrigger: {
               trigger: ".section-3__bullet-list",
               end: "top 90",
               start: "top 40%",
               scrub: true,
            },
         })
         .to(blue3, {
            width: "100%",
            ease: "power1.out",
            scrollTrigger: {
               trigger: "#triger1",
               end: "top 90",
               start: "top 40%",
               scrub: true,
            },
         });
      return tl;
   };
   const principles = () => {
      const blue = document.querySelector(".section-4__blue");
      tl.to(blue, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger2",
            end: "top 90",
            start: "top 40%",
            scrub: true,
         },
      });
      return tl;
   };
   const quote = () => {
      const pink = document.querySelector(".section-6__pink");
      const blue = document.querySelector(".section-6__blue");
      tl.to(pink, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger3",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      }).to(blue, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger3",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      });
      return tl;
   };
   const reasons = () => {
      const blue = document.querySelectorAll(".section-7__blue");
      tl.to(blue, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger4",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      });
      return tl;
   };
   const familiar = () => {
      const pink = document.querySelector(".section-9__pink");
      const blue = document.querySelector(".section-9__blue");
      tl.to(pink, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger7",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      }).to(blue, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger8",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      });
      return tl;
   };
   const contact = () => {
      const blue = document.querySelector(".section-10__blue");
      tl.to(blue, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger9",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      });
      return tl;
   };
   const talk = () => {
      const blue = document.querySelector(".section-15__blue");
      tl.to(blue, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: "#triger10",
            end: "top 90",
            start: "top 45%",
            scrub: true,
         },
      });
      return tl;
   };

   tl.add(intro())
      .add(headerScroll())
      .add(about())
      .add(principles())
      .add(quote())
      .add(reasons())
      .add(familiar())
      .add(contact())
      .add(talk());
})();
