const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {currentYear} John Doe. All rights reserved.
            </p>
            
            <div className="text-gray-500 text-sm">
              Built with React & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;