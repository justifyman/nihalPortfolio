import Lenis from "@studio-freight/lenis";

export default function LenisProvider() {
  const lenis = new Lenis({
    wrapper: window,
    content: document.documentElement,
    smoothWheel: true,
    lerp: 0.1, // Lower = smoother glide
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return null;
}
