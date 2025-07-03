
import React from 'react';

interface ProjectCardProps {
  image: string;
  link?: string;
  videoId?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  link, 
  videoId 
}) => {
  const isVideo = !!videoId;

  return (
    <div className={`animate-fade-in ${isVideo ? 'mb-8' : ''}`}>
      {isVideo ? (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <img 
            src={image} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
