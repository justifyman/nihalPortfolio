import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const heroRef = useScrollAnimation("animate-scroll-fade");
  const greetingRef = useScrollAnimation("animate-scroll-slide-left");
  const headingRef = useScrollAnimation("animate-scroll-scale");
  const descriptionRef = useScrollAnimation("animate-scroll-fade");
  const buttonsRef = useScrollAnimation("animate-scroll-slide-right");
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/50 opacity-90"></div>

        {/* Static background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-accent/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>

        {/* Geometric patterns */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/5 border border-primary/10 rounded-lg blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent/5 border border-accent/10 rounded-lg blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-t from-accent/5 to-primary/5 rounded-lg blur-2xl"></div>

        {/* Moving animated elements */}
        <div className="absolute top-16 left-1/3 w-8 h-8 bg-primary/30 rounded-full animate-float-rotate"></div>
        <div
          className="absolute top-32 right-1/3 w-6 h-6 bg-accent/40 rounded-full animate-bounce-rotate"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-16 w-10 h-10 bg-primary/20 rounded-full animate-float-rotate"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-24 right-1/4 w-7 h-7 bg-accent/35 rounded-full animate-bounce-rotate"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-20 w-5 h-5 bg-primary/40 rounded-full animate-float-rotate"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-16 w-9 h-9 bg-accent/25 rounded-full animate-bounce-rotate"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Floating elements with custom animation */}
        <div className="absolute top-24 left-1/2 w-3 h-3 bg-primary/50 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent/45 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-primary/35 rounded-full animate-float-slow"></div>

        {/* Additional animated elements */}
        <div
          className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/25 rounded-full animate-float-up"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-accent/30 rounded-full animate-float-up"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="absolute top-1/5 right-1/5 w-8 h-8 bg-primary/35 rounded-full animate-float-up"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-9 h-9 bg-accent/35 rounded-full animate-float-up"
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* More floating elements */}
        <div className="absolute top-1/6 left-1/6 w-4 h-4 bg-primary/40 rounded-full animate-float-rotate-slow"></div>
        <div className="absolute bottom-1/6 right-1/6 w-5 h-5 bg-accent/40 rounded-full animate-float-rotate-delayed"></div>
        <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-primary/45 rounded-full animate-bounce-rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/6 w-7 h-7 bg-accent/50 rounded-full animate-float-rotate-delayed"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-primary/3 to-accent/3 rounded-lg blur-2xl"></div>
        <div className="absolute bottom-1/2 left-1/4 w-16 h-16 bg-gradient-to-b from-accent/3 to-primary/3 rounded-lg blur-2xl"></div>
      </div>

      <div
        className="max-w-4xl mx-auto text-center relative z-10"
        ref={heroRef}
      >
        <div>
          <p
            ref={greetingRef}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-light font-sf"
          >
            Salam, I'm Nihal
          </p>
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-light text-foreground mb-6 font-times"
          >
            I edit, design & keep it halal.
          </h1>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I create clean, engaging, and meaningful content 🎨 while staying
            true to Islamic values
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium animate-float-up"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-foreground border border-border px-8 py-3 rounded-full hover:bg-muted transition-colors animate-float-up"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (single correct version) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="relative">
          <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center animate-bounce">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
