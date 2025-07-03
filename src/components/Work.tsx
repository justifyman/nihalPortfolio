import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const videoProjects = [
    {
      image: "https://img.youtube.com/vi/5EHoZoRMGgw/maxresdefault.jpg",

      videoId: "5EHoZoRMGgw",
    },
    {
      image: "https://img.youtube.com/vi/dMF5ePyMeF8/maxresdefault.jpg",

      videoId: "dMF5ePyMeF8",
    },
    {
      image: "https://img.youtube.com/vi/caQiSipnypo/maxresdefault.jpg",

      videoId: "caQiSipnypo",
    },
    {
      image: "https://img.youtube.com/vi/gryoR_R7rms/maxresdefault.jpg",

      videoId: "gryoR_R7rms",
    },
  ];

  const designProjects = [
    {
      image:
        "https://file.notion.so/f/f/fec04e8c-2c44-47d3-a29a-ddd4301e57f9/02b6f9ca-73a5-4499-a56c-4114e87c76af/image.png?table=block&id=19b89556-43ba-8027-8d1b-e6c0738a9902&spaceId=fec04e8c-2c44-47d3-a29a-ddd4301e57f9&expirationTimestamp=1751544000000&signature=6UqrI_5lFePBqbsMjqGEKp3jRDALxjYLCPggS8oCay8&downloadName=image.png",
    },
    {
      image:
        "https://file.notion.so/f/f/fec04e8c-2c44-47d3-a29a-ddd4301e57f9/bb8aa1c5-c9a7-4d38-b106-799d4800f679/image.png?table=block&id=19b89556-43ba-80af-acd1-cf7649238ac0&spaceId=fec04e8c-2c44-47d3-a29a-ddd4301e57f9&expirationTimestamp=1751544000000&signature=K2GaA4MN2RcxyD-xduUu5EPTVWyEWgqtLlFbViHgAYI&downloadName=image.png",
    },
    {
      image:
        "https://file.notion.so/f/f/fec04e8c-2c44-47d3-a29a-ddd4301e57f9/24388450-d9bc-4516-872f-f889d5a99d05/image.png?table=block&id=1a289556-43ba-80ab-b6f2-f1af53693f6c&spaceId=fec04e8c-2c44-47d3-a29a-ddd4301e57f9&expirationTimestamp=1751544000000&signature=PHRkw6guou8-FgDDa0dN1MUDL2BYHjrO_9sM3ys1fSI&downloadName=image.png",
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Recent Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of recent projects showcasing video editing excellence
            and graphic design innovation. Halal content only!
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-foreground mb-4">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videoProjects.map((project, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Designs & Thumbnails Section */}
        <div>
          <h3 className="text-3xl font-light text-foreground mb-4">
            Designs & Thumbnails
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
