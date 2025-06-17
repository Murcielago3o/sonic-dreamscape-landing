
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className={`max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8 animate-scale-in ${
          isDark ? 'bg-card' : 'bg-white'
        }`}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-sm font-medium opacity-60 uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold mt-2">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-2xl hover:text-accent transition-colors hover-scale"
          >
            ✕
          </button>
        </div>
        
        <div 
          className="w-full h-48 rounded-xl flex items-center justify-center text-6xl mb-6"
          style={{ backgroundColor: project.color + '20' }}
        >
          {project.image}
        </div>
        
        <p className="text-lg opacity-80 mb-6">{project.description}</p>
        <p className="leading-relaxed opacity-70">{project.details}</p>
        
        <div className="mt-8 pt-6 border-t border-muted">
          <p className="text-sm opacity-60">
            This is a sample project showcase. In a real portfolio, this would contain detailed case studies, 
            process documentation, and results metrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
