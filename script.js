const revealNodes = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${index * 80}ms`;
  observer.observe(node);
});

const orbs = document.querySelectorAll(".bg-orb");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  orbs.forEach((orb, i) => {
    const factor = i === 0 ? 0.08 : 0.12;
    orb.style.transform = `translateY(${y * factor}px)`;
  });
});
