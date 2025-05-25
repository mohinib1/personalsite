import { useEffect, useRef, useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string | string[];
}

const ExperienceSection = () => {
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
  
  const experiences: Experience[] = [
    {
      title: "Software Developer Intern",
      company: "Smite Orthodontics",
      period: "June 2024 - Aug 2024",
      description: [
        "Built a dynamic appointment workflow by integrating Flask, React.js, and PostgreSQL to support clinical decision making.",
        "Streamlined patient form creation and scheduling processes with Docker, ensuring consistent dev and production environments.",
        "Implemented an event-based architecture to improve concurrency and reduce manual overhead.",
        "Modularized architecture to support future AWS/GCP cloud integration."
      ]
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Radiair",
      period: "Jan 2024 - May 2024",
      description: [
        "Built a scalable seat booking microservice, leveraging Flask for high performance microservices to handle computationally intense tasks.",
        "Used Next.js for seat reservation RESTful APIs that handle seat merges and ticket data flow to reduce load times.",
        "Integrated the Amadeus API, enabling real-time seat updates and pricing information across microservices, including advanced error handling, circuit breakers, and rate-limiting mechanisms.",
        "Implemented a front-end using Next.js and Tailwind CSS, focusing on optimizations to streamline development and improve user engagement.",
        "Reduced route resolution time by ~40% through careful refactoring and performance tuning."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Tech Bytes",
      period: "May 2022 - Sept 2022",
      description: [
        "Implemented efficient data handling with SQL to support real-time data retrieval and data validations from 1000 users.",
        "Achieved an average 40% improvement in query performance by optimizing indexes and rewriting stored procedures.",
        "Integrated user authentication and role-based access control with JWT tokens, tied into Azure DevOps pipelines.",
        "Collaborated with the front-end team to refine UI/UX for a seamless onboarding experience, employing TDD with NUnit."
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
    >
      <div
        className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="w-12 h-1 bg-gray-900 mb-8"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            // Wrap each experience in a white, rounded "bubble" with some shadow
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-lg text-gray-700 mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-6 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-600">
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
