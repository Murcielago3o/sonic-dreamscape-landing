
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const AboutSection = () => {
  const { isDark } = useTheme();
  const [activeYear, setActiveYear] = useState(2024);

  const timeline = [
    { year: 2020, title: "Started Design Journey", desc: "Fell in love with Figma and never looked back", icon: "🎨" },
    { year: 2021, title: "First UX Role", desc: "Joined a startup and learned the power of user research", icon: "🚀" },
    { year: 2022, title: "Design Systems Expert", desc: "Built my first comprehensive design system", icon: "⚡" },
    { year: 2023, title: "Led Design Team", desc: "Mentored junior designers and shipped 15+ features", icon: "👥" },
    { year: 2024, title: "Freelance Designer", desc: "Helping brands create meaningful digital experiences", icon: "✨" }
  ];

  const funFacts = [
    "I've designed over 200 screens this year 📱",
    "Coffee consumed: 847 cups ☕",
    "Favorite color: #317de5 💙",
    "Design books read: 23 📚"
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">My Journey</h3>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover-scale ${
                    activeYear === item.year 
                      ? (isDark ? 'bg-card shadow-retro' : 'bg-gray-100 shadow-lg') 
                      : 'hover:bg-muted/50'
                  }`}
                  onMouseEnter={() => setActiveYear(item.year)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-accent">{item.year}</span>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                      <p className="text-sm opacity-70 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Fun Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center transition-all duration-300 hover-scale cursor-pointer ${
                    isDark ? 'bg-card hover:shadow-retro' : 'bg-gray-50 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-sm font-medium">{fact}</p>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-card' : 'bg-gray-50'}`}>
              <p className="leading-relaxed">
                When I'm not pushing pixels, you'll find me exploring new coffee shops, 
                reading design blogs, or experimenting with the latest design tools. 
                I believe great design should be invisible—it just works. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
