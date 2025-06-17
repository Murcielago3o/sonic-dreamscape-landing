
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ExperimentsSection = () => {
  const { isDark } = useTheme();

  const experiments = [
    {
      title: "Particle Physics",
      tech: "Three.js + React",
      description: "Interactive particle system responding to mouse movement",
      status: "Live"
    },
    {
      title: "Terminal UI Kit",
      tech: "CSS + TypeScript", 
      description: "Retro terminal components for modern interfaces",
      status: "Beta"
    },
    {
      title: "Micro Animations",
      tech: "Framer Motion",
      description: "Collection of purposeful microinteractions",
      status: "WIP"
    },
    {
      title: "3D Portfolio Cards",
      tech: "React Three Fiber",
      description: "Portfolio pieces floating in 3D space",
      status: "Concept"
    }
  ];

  return (
    <section id="experiments" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Experiments
          </h2>
          <p className="text-lg opacity-60 max-w-2xl">
            Side projects where I explore the intersection of design, code, and curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => (
            <div
              key={experiment.title}
              className={`group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                isDark ? 'bg-card/30 hover:bg-card/60' : 'bg-gray-100/50 hover:bg-gray-100'
              } rounded-xl p-6 border border-transparent hover:border-accent/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                    {experiment.title}
                  </h3>
                  <div className="font-mono text-xs opacity-60 uppercase tracking-wider">
                    {experiment.tech}
                  </div>
                </div>
                
                <div className={`px-2 py-1 rounded text-xs font-mono ${
                  experiment.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                  experiment.status === 'Beta' ? 'bg-orange-500/20 text-orange-400' :
                  experiment.status === 'WIP' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {experiment.status}
                </div>
              </div>
              
              <p className="text-sm opacity-70 mb-4">
                {experiment.description}
              </p>
              
              <div className="w-full h-32 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="text-2xl opacity-30">⚡</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperimentsSection;
