let btn = document.querySelector(".uniquediv");
btn.addEventListener("mouseover", () => {
  let circle = document.querySelector(".circle");
  circle.classList.add("circlehovered");
  circle.classList.remove("circle");
});
btn.addEventListener("mouseout", () => {
  let circle = document.querySelector(".circlehovered");
  circle.classList.add("circle");
  circle.classList.remove("circlehovered");
});

document.querySelectorAll(".socialmediaimgs").forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.classList.add("socialmediaimgshovered");
    div.classList.remove("socialmediaimgs");
  });

  div.addEventListener("mouseout", () => {
    div.classList.add("socialmediaimgs");
    div.classList.remove("socialmediaimgshovered");
  });
});

document.querySelectorAll(".sec3divs").forEach((div) => {
  div.addEventListener("mouseover", () => {
    if (window.innerWidth > 1000) {
      let img = div.querySelector(".img");
      if (img) {
        img.classList.add("img2");
        img.classList.remove("img");
      }
    }
  });

  div.addEventListener("mouseout", () => {
    if (window.innerWidth > 1000) {
      let img2 = div.querySelector(".img2");
      if (img2) {
        img2.classList.add("img");
        img2.classList.remove("img2");
      }
    }
  });
});

function hiddenbtnsreveal() {
  let hiddennavbtns = document.querySelector(".hiddennavbtns");
  let extendedline = document.querySelector(".line2");
  let cir = document.querySelector(".circle1");
  hiddennavbtns.classList.add("hiddennavbtns2");
  hiddennavbtns.classList.remove("hiddennavbtns");
  extendedline.classList.add("line2extended");
  extendedline.classList.remove("line2");
  cir.classList.add("circlehovered1");
  cir.classList.remove("circle1");
  document.body.style.overflow = "hidden";
}
function hiddenbtnshide() {
  let hiddennavbtns = document.querySelector(".hiddennavbtns2");
  let extendedline = document.querySelector(".line2extended");
  let cir = document.querySelector(".circlehovered1");

  // Ensure elements with 'reveal' classes are selected and toggled back to 'hide' classes
  if (hiddennavbtns) {
    hiddennavbtns.classList.add("hiddennavbtns");
    hiddennavbtns.classList.remove("hiddennavbtns2");
  }
  if (extendedline) {
    extendedline.classList.add("line2");
    extendedline.classList.remove("line2extended");
  }
  if (cir) {
    cir.classList.add("circle1");
    cir.classList.remove("circlehovered1");
  }

  document.body.style.overflow = "auto";
}

document.querySelectorAll("#specialnavbtn2").forEach((div) => {
  div.addEventListener("click", () => {
    let hiddennavbtns = document.querySelector(".hiddennavbtns2");

    if (hiddennavbtns) {
      hiddenbtnshide();
    } else {
      hiddenbtnsreveal();
    }
  });
});

function scrollToContact() {
  // Select the element to scroll to (assuming it has an id="contact" attribute)
  const contactSection = document.querySelector(".finalsection");

  // Scroll to the contact section smoothly
  contactSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToContactmobile() {
  // Select the element to scroll to (assuming it has an id="contact" attribute)
  const contactSection = document.querySelector(".finalsection");
  hiddenbtnshide();

  // Scroll to the contact section smoothly
  contactSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToHome() {
  // Select the element to scroll to (assuming it has an id="contact" attribute)
  const contactSection = document.querySelector(".herocontent");
  hiddenbtnshide();

  // Scroll to the contact section smoothly
  contactSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToTopskills() {
  // Select the element to scroll to (assuming it has an id="contact" attribute)
  const contactSection = document.querySelector(".section2outer");
  hiddenbtnshide();

  // Scroll to the contact section smoothly
  contactSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToProjects() {
  // Select the element to scroll to (assuming it has an id="contact" attribute)
  const contactSection = document.querySelector(".section3outer");
  hiddenbtnshide();

  // Scroll to the contact section smoothly
  contactSection.scrollIntoView({ behavior: "smooth" });
}

// -------------------------------------------
// GSAP
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 700) {
    gsap.from(".education", {
      duration: 2,
      x: -100,
      ease: "power2.out",
      opacity: 0,
    });
    gsap.to(".education", {
      duration: 2,
      x: 0,
      ease: "power2.inOut",
      opacity: 1,
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 999) {
    gsap.from(".intro h1", {
      duration: 2,
      x: 100,
      ease: "power2.out",
      opacity: 0,
    });
    gsap.to(".intro h1", {
      duration: 2,
      x: 0,
      ease: "power2.inOut",
      opacity: 1,
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  if (window.innerWidth < 1000) {
    gsap.from(".intro h1", {
      duration: 1,
      x: 30,
      ease: "power1.out",
      opacity: 0,
      scrollTrigger: {
        trigger: ".intro p",
        start: "top 60%", // Adjust the start point as needed
        end: "top 40%", // Adjust the end point as needed
      },
    });

    gsap.to(".intro h1", {
      duration: 1,
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".intro p",
        start: "top 60%", // Adjust the start point as needed
        end: "top 40%", // Adjust the end point as needed
        toggleActions: "play none none none", // Play the animation when entering the viewport
        once: true,
      },
    });

    gsap.from(".intro p", {
      duration: 1,
      x: -30,
      ease: "power1.out",
      opacity: 0,
      scrollTrigger: {
        trigger: ".intro p",
        start: "top 60%", // Adjust the start point as needed
        end: "top 40%", // Adjust the end point as needed
      },
    });

    gsap.to(".intro p", {
      duration: 1,
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".intro p",
        start: "top 60%", // Adjust the start point as needed
        end: "top 40%", // Adjust the end point as needed
        toggleActions: "play none none none", // Play the animation when entering the viewport
        once: true,
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 999) {
    gsap.from(".illustration", {
      duration: 1,
      y: 0, // Change from 0 to 100 to see the effect more clearly
      opacity: 0,
      ease: "power1.out",
      delay: 2, // Delay before the animation starts
    });

    gsap.to(".illustration", {
      duration: 1,
      y: 0,
      opacity: 1,
      // ease: "power1.inOut",
      delay: 2, // Delay before the animation starts
    });
  }
  if (window.innerWidth < 999) {
    gsap.from(".illustration", {
      duration: 1,
      y: 0, // Change from 0 to 100 to see the effect more clearly
      opacity: 0,
      ease: "power1.out",
      delay: 0.5, // Delay before the animation starts
    });

    gsap.to(".illustration", {
      duration: 1,
      y: 0,
      opacity: 1,
      // ease: "power1.inOut",
      delay: 0.5, // Delay before the animation starts
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("#socialmediaimg1", {
    duration: 0.5,
    x: -40, // Change from 0 to 100 to see the effect more clearly
    opacity: 0,
    ease: "power2.out", // Ease-out effect
    delay: 2.5, // Delay before the animation starts
  });

  gsap.to("#socialmediaimg1", {
    duration: 0.5,
    x: 40,
    opacity: 1,
    delay: 2.5, // Delay before the animation starts
  });
  gsap.from("#socialmediaimg2", {
    duration: 0.5,
    x: -40, // Change from 0 to 100 to see the effect more clearly
    opacity: 0,
    ease: "power2.out", // Ease-out effect
    delay: 2.7, // Delay before the animation starts
  });

  gsap.to("#socialmediaimg2", {
    duration: 0.5,
    x: 40,
    opacity: 1,
    delay: 2.7, // Delay before the animation starts
  });
  gsap.from("#socialmediaimg3", {
    duration: 0.5,
    x: -40, // Change from 0 to 100 to see the effect more clearly
    opacity: 0,
    ease: "power2.out", // Ease-out effect
    delay: 2.9, // Delay before the animation starts
  });

  gsap.to("#socialmediaimg3", {
    duration: 0.5,
    x: 40,
    opacity: 1,
    delay: 2.9, // Delay before the animation starts
  });
  gsap.from("#socialmediaimg4", {
    duration: 0.5,
    x: -40, // Change from 0 to 100 to see the effect more clearly
    opacity: 0,
    ease: "power2.out", // Ease-out effect
    delay: 3.1, // Delay before the animation starts
  });

  gsap.to("#socialmediaimg4", {
    duration: 0.5,
    x: 40,
    opacity: 1,
    delay: 3.1, // Delay before the animation starts
  });
  gsap.to("#socialmediaimg1", {
    duration: 0.5,
    x: 0,
    opacity: 1,
    delay: 4, // Delay before the animation starts
  });
  gsap.to("#socialmediaimg2", {
    duration: 0.5,
    x: 0,
    opacity: 1,
    delay: 4, // Delay before the animation starts
  });
  gsap.to("#socialmediaimg3", {
    duration: 0.5,
    x: 0,
    opacity: 1,
    delay: 4, // Delay before the animation starts
  });
  gsap.to("#socialmediaimg4", {
    duration: 0.5,
    x: 0,
    opacity: 1,
    delay: 4, // Delay before the animation starts
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".section2outer h1",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".section2outer h1",
        start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
        end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
        toggleActions: "play none none none", // Play the animation when entering the viewport
        once: true, // Only run the animation once
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 699) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#sec2div1",
      {
        x: -50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div2",
      {
        x: -50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.2,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div3",
      {
        x: -50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.4,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div4",
      {
        x: -50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.6,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div5",
      {
        x: 50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.8,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div6",
      {
        x: 50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 1,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div7",
      {
        x: 50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 1.2,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div8",
      {
        x: 50,
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 1.4,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
  }
  if (window.innerWidth < 700) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#sec2div1",
      {
        x: -30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div2",
      {
        x: 30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.2,

        scrollTrigger: {
          trigger: "#sec2div1",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div3",
      {
        x: -30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        // delay: 0.4,

        scrollTrigger: {
          trigger: "#sec2div3",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div4",
      {
        x: 30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.2,

        scrollTrigger: {
          trigger: "#sec2div3",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div5",
      {
        x: -30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.2,

        scrollTrigger: {
          trigger: "#sec2div6",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div6",
      {
        x: 30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: "#sec2div6",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div7",
      {
        x: -30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.2,

        scrollTrigger: {
          trigger: "#sec2div8",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
    gsap.fromTo(
      "#sec2div8",
      {
        x: 30,
        y: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: "#sec2div8",
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
  }
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".section3outer h1",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".section3outer h1",
        start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
        end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
        toggleActions: "play none none none", // Play the animation when entering the viewport
        once: true, // Only run the animation once
      },
    }
  );
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".sec3divs").forEach((div) => {
    gsap.fromTo(
      div,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: div,
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: "play none none none", // Play the animation when entering the viewport
          once: true, // Only run the animation once
        },
      }
    );
  });
});
