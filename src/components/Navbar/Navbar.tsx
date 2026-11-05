import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import intelliontech from "../../assets/Intellion_technologies.webp";
import "./Navbar.css";

const services = [
  { name: 'Android Development', path: '/android-app-development' },
  { name: 'AI Development', path: '/ai-app-development' },
  { name: 'Python Development', path: '/python-development' },
  { name: 'Content Writing', path: '/content-writer' },
  { name: 'Cyber Security', path: '/cyber-security' },
  { name: 'DevOps', path: '/devops' },
  { name: 'Digital Marketing', path: '/digital-marketing' },
  { name: 'IOT Development', path: '/iot-development' },
  { name: 'Website Development', path: '/website-development' },
  { name: 'SEO', path: '/seo' },
  { name: 'QA Automation and Testing', path: '/qa-automation-testing' },
];

const industries = [
  { name: 'Banking & Finance', path: '/banking-and-financial' },
  { name: 'Education', path: '/education' },
  { name: 'Energy, Resources & Utilities', path: '/energy-resources-utilities' },
  { name: 'Insurance', path: '/insurance' },
  { name: 'Life Sciences & HealthCare', path: '/life-sciences-healthcare' },
  { name: 'Public Services', path: '/public-services' },
  { name: 'Communications, Media & Technology', path: '/communications-media-technology' },
  { name: 'Travel, Transportation & Logistics', path: '/travel-transportation-logistics' },
  { name: 'Information Services', path: '/information-services' },
];

type DropdownType = 'Services' | 'Industries' | null;

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();

const handleLinkClick = (path: string): void => { 
  const dropdownEl = dropdownRef.current;

  // Disable pointer events temporarily to break hover state
  if (dropdownEl) dropdownEl.style.pointerEvents = 'none';

  setOpenDropdown(null);
  setIsMobileMenuOpen(false);

  requestAnimationFrame(() => {
    if (dropdownEl) dropdownEl.style.pointerEvents = 'auto'; // Re-enable after frame
    navigate(path);
  });
};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={intelliontech} alt="Intellion Technologies" className="intellion_tech" />
        </Link>
      </div>

      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" role="button" tabIndex={0}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`} ref={dropdownRef}>
        <li><Link to="/" className="nav-link" onClick={() => handleLinkClick('/')}>Home</Link></li>

        {/* Industries Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('Industries')}
          onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
          onClick={() => {
            if (window.innerWidth <= 768) {
              setOpenDropdown(openDropdown === 'Industries' ? null : 'Industries');
            }
          }}
        >
          <div className="dropdown-label">
            Industries
            <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.5 5.5l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
<ul className={`dropdown-content ${openDropdown === 'Industries' ? 'show' : ''}`}>
  {industries.map((industry, index) => (
    <li key={index} onClick={() => handleLinkClick(industry.path)}>
      <span>{industry.name}</span>
    </li>
  ))}
</ul>
        </li>

        {/* Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('Services')}
          onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
          onClick={() => window.innerWidth <= 768 && setOpenDropdown(openDropdown === 'Services' ? null : 'Services')}
        >
          <span className="dropdown-label">
            Services
            <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.5 5.5l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
<ul className={`dropdown-content ${openDropdown === 'Services' ? 'show' : ''}`}>
  {services.map((service, index) => (
    <li key={index} onClick={() => handleLinkClick(service.path)}>
      <span>{service.name}</span>
    </li>
  ))}
</ul>
        </li>

        <li><Link to="/projects" className="nav-link" onClick={() => handleLinkClick('/projects')}>Projects</Link></li>
        <li><Link to="/about-us" className="nav-link" onClick={() => handleLinkClick('/about-us')}>About Us</Link></li>
        <li><Link to="/contact-us" className="nav-link" onClick={() => handleLinkClick('/contact-us')}>Contact Us</Link></li>
      </ul>

  <div className={`mobile-call-btn ${isMobileMenuOpen ? "show" : ""}`}>
    <a href="tel:+919176533933" target="_blank" rel="noopener noreferrer">
      <button className="nav-button">Call</button>
    </a>
  </div>

      <div className="hng-div desktop-call-btn">
        <a href="tel:+919176533933" target="_blank" rel="noopener noreferrer">
          <button className="nav-button">Call</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
