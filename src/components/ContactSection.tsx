import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
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

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 md:py-20"
    >
      <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="w-12 h-1 bg-gray-900 mb-8"></div>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <a 
            href="mailto:mohithbaskaran@gmail.com" 
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Mail className="mr-2" size={20} />
            <span>mohithbaskaran@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/mohith-vishal-baskaran-11622724b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="mr-2" size={20} />
            <span>linkedin.com/in/mohithbaskaran</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;