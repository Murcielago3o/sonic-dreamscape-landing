
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ContactSection = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 animate-fade-in">Let's Create Something Amazing</h2>
        <p className="text-xl opacity-70 mb-16 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'd love to hear about your project 
          and explore how we can work together! ✨
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-card' : 'bg-gray-50'}`}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 focus:border-accent focus:shadow-lg ${
                      isDark ? 'bg-background border-muted' : 'bg-white border-gray-200'
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 focus:border-accent focus:shadow-lg ${
                      isDark ? 'bg-background border-muted' : 'bg-white border-gray-200'
                    }`}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 focus:border-accent focus:shadow-lg resize-none ${
                      isDark ? 'bg-background border-muted' : 'bg-white border-gray-200'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full retro-btn text-lg font-semibold py-4 hover-scale"
                >
                  Send Message 🚀
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-scale-in">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-2xl font-bold mb-2 text-accent">Message Sent!</h3>
                <p className="opacity-70">Thanks for reaching out! I'll get back to you soon.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-card' : 'bg-gray-50'} hover-scale transition-all duration-300`}>
              <div className="text-2xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-70">hello@alexdesigns.com</p>
            </div>
            
            <div className={`p-6 rounded-xl ${isDark ? 'bg-card' : 'bg-gray-50'} hover-scale transition-all duration-300`}>
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="opacity-70">@alexdesigner</p>
            </div>
            
            <div className={`p-6 rounded-xl ${isDark ? 'bg-card' : 'bg-gray-50'} hover-scale transition-all duration-300`}>
              <div className="text-2xl mb-3">🐦</div>
              <h3 className="font-semibold mb-2">Twitter</h3>
              <p className="opacity-70">@alex_designs</p>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-card' : 'bg-gray-50'}`}>
              <p className="text-sm opacity-60 leading-relaxed">
                💡 <strong>Quick tip:</strong> The more details you share about your project, 
                the better I can help you achieve your goals!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
