import { useEffect, useState } from "react";
import Image from 'next/image';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      id="about" 
      className="py-24 md:py-32"
    >
      <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square w-full max-w-[400px] mx-auto">
              <Image
                src="/profile.jpeg"
                alt="Profile picture of Mohith Baskaran"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mohith Baskaran</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">UBC</h2>

            <p className="text-gray-700 mb-6">
              I am a student at UBC with a passion for full-stack development and machine learning. 
              I love building clean, user focused web apps and exploring how intelligent systems can solve real world problems.
              Always learning, always coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;