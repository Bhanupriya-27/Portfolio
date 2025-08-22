import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Technical Excellence",
      description: "4+ years of experience in power platform."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Strong communicator who thrives in cross-functional teams and mentors junior developers."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation Focus",
      description: "Always exploring new technologies and methodologies to solve complex problems efficiently."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Results Driven",
      description: "Committed to delivering high-quality solutions that meet business objectives and user needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              Passionate developer with a drive for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I started my journey in Power platform since 4 years, driven by a passion for creating 
                  digital solutions that make a real impact. From building my first static website to 
                  developing complex full-stack applications, I've continuously evolved my skills and expertise.
                </p>
                <p>
                  My experience spans across various industries, from e-commerce platforms to fintech 
                  applications. I believe in writing clean, maintainable code and staying up-to-date 
                  with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, attending 
                  tech meetups, or exploring new frameworks and tools that can enhance my development workflow.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Bring</h3>
              <div className="grid gap-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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