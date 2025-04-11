import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
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
  
  const technicalSkills = [
    "JavaScript", "TypeScript", "R", "Java", "Python", "C++", "HTML", "CSS",
  ];
  
  const conceptualSkills = [
    "React.js", "Express.js", "Node.js", "MongoDB", "Django",
    "TailwindCSS", "Docker", "Jest", "Azure Console"
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-16 md:py-20"
    >
      <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="w-12 h-1 bg-gray-900 mb-8"></div>
        
        <div className="flex flex-wrap gap-4">
          {technicalSkills.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-sm text-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mt-6">
          {conceptualSkills.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-sm text-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
