import React from "react";

const About = () => {
  const skills = ["Adobe Premiere Pro", "After Effects", "Photoshop", "Figma"];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>I'm a Muslim content creator, video editor, and designer.</p>
              <p>
                I work with Muslims all around the world and always deliver the
                best results. I'm dedicated to elevating the Muslim creator
                economy with the help of Allah and my skills, in sha Allah
              </p>
              <p>Let’s level up the Muslim creator economy with your video.</p>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-transparent p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-foreground mb-6">
                Skills & Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-muted text-muted-foreground px-4 py-2 rounded-lg text-sm text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
