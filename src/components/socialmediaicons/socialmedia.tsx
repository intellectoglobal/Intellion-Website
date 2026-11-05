import React, { useState, useEffect, useRef } from 'react';
import './socialmedia.css';
import socialIcon from '../../assets/social_media_common.webp';
import whatsappIcon from '../../assets/whatsapp_icon.webp';
import threadsicon from '../../assets/threads_social_media.webp';
import linkedinIcon from '../../assets/linkedin.webp';
import instagramIcon from '../../assets/instragram_icon.webp';

const SocialMediaIcons: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div
      className="social-icons-container"
      ref={containerRef}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div 
        className="main-icon-with-arrow"
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleDropdown();
        }}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <img src={socialIcon} alt="Social Media" className="social-icon_side" />
        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>ᐯ</span>
      </div>

      <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
        <a href="https://wa.me/919176533933" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/intellion-technologies-private-limited/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/intelliontechnologies/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://x.com/IntellionL88568">
          <img src={threadsicon} alt="twitter" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
