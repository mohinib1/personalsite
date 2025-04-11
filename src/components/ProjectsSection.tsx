import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const projects: Project[] = [
    {
      title: "Vehicle Simulation via CARLA ",
      description: "Simulated autonomous driving in CARLA with real-time object detection using YOLO and TensorFlow",
      link: "https://github.com/mohinib1/CarlaAutoDrive"
    },
    {
      title: "Placement Prediction",
      description: "Built a logistic regression model to predict job placement success using academic and non-academic factors.",
      link: "#"
    },
    {
      title: "ESPN Fantasy Auto Selection",
      description: "Built a Chrome extension that automates ESPN Fantasy draft picks based on custom player rankings and live draft logic.",
      link: "https://github.com/mohinib1/EspnFantasy"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-20"
    >
      <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="w-12 h-1 bg-gray-900 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-transform hover:translate-y-[-4px]"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-gray-900 font-medium hover:underline"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;