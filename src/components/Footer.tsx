import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inplast-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/ed27593e-b69f-4a83-b4c1-b98eed195b36.webp"
              alt="Inplast Novex Logo" 
              className="h-12 mb-4"
            />
            <p className="text-white mb-4">
              Comprehensive industrial solutions for equipment upgrades, relocation and commissioning
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-inplast-orange transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-white hover:text-inplast-orange transition-colors">Expertise</Link></li>
              <li><Link to="/services" className="text-white hover:text-inplast-orange transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-white hover:text-inplast-orange transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-white hover:text-inplast-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/overhaul" className="text-white hover:text-inplast-orange transition-colors">Equipment Restoration and Upgrade</Link></li>
              <li><Link to="/services/engineering" className="text-white hover:text-inplast-orange transition-colors">Engineering and Control Systems Upgrade</Link></li>
              <li><Link to="/services/installation" className="text-white hover:text-inplast-orange transition-colors">Installation and Commissioning</Link></li>
              <li><Link to="/services/relocation" className="text-white hover:text-inplast-orange transition-colors">Equipment Relocation</Link></li>
            </ul>
          </div>
          
          {/*
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Group Companies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-inplast-orange transition-colors">Inplast Novex</a></li>
              <li><a href="https://visopack.pl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-inplast-orange transition-colors">Visopack</a></li>
              <li><a href="https://moplefan-group.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-inplast-orange transition-colors">Moplefan</a></li>
            </ul>
          </div>*/}
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
            © {currentYear} Inplast Novex. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-white hover:text-inplast-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white hover:text-inplast-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
