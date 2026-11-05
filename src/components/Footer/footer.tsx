import React from "react";
import "./footer.css";
import whatsappIcon from '../../assets/whatsapp_footer_icon.webp';
import instagramIcon from '../../assets/instragram_footer-icon.webp';
import linkedinIcon from '../../assets/linkedin_footer_icon.png';
import threadsicon from '../../assets/threads_footer_icon.webp';
import { Link } from "react-router-dom";
import logo from "../../assets/logo_icon.webp";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">

      <div className="footer-bottom">
        <div className="footer-intro">
          <img src={logo} alt="Design Studio" className="intellion_logo" />
          <p>
            Intellion Technologies delivers smart, scalable, and secure IT solutions to drive digital transformation and business growth across industries.
          </p>
        </div>
        {/* CONTACT US SECTION */}
        <div className="footer-col-contact-us">
          <h4>CONTACT US</h4>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </div>
            <div className="contact-details">
              <a href="tel:+919176533933" className="contact-text">+91 91765 33933</a>
            </div>

          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="contact-details">
              <a href="mailto:hr@intelliontechnologies.in" className="contact-text contact-link">
                hr@intelliontechnologies.in
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="contact-details">
              <address className="contact-address">
                7/15, 2nd Floor, Velachery Main Road,<br />
                United Colony, Medavakkam<br />
                Beside Latha Super Bazaar & above Ibaco,<br />
                Chennai, Tamil Nadu 600100
              </address>
            </div>
          </div>
        </div>
        {/* FOLLOW US SECTION */}
        <div className="footer-col-follow-us">
          {/* <h4>FOLLOW US</h4> */}
          <ul className="social-icons-footer">
            <li className="social-item">
              <a href="https://wa.me/919176533933" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="social-icon-img" />
              </a>
              <p>WhatsApp</p>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/company/intellions" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
              </a>
              <p>LinkedIn</p>
            </li>
            <li className="social-item">
              <a href="https://www.instagram.com/intelliontechnologies/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
              </a>
              <p>Instagram</p>
            </li>
            <li className="social-item">
              <a href="https://x.com/Intellecto_igs" target="_blank" rel="noopener noreferrer">
                <img src={threadsicon} alt="Twitter" className="social-icon-img" />
              </a>
              <p>Twitter</p>
            </li>
          </ul>
        </div>
        <div className="footer-columns">
          
          <div className="footer-col">
            <h5>INDUSTRIES</h5>
            <ul>
              <li><span className="bullet">➢</span><Link to="/banking-and-financial" className="footer-text">Banking & Financial Services</Link></li>
              <li><span className="bullet">➢</span><Link to="/education" className="footer-text">Education</Link></li>
              <li><span className="bullet">➢</span><Link to="/energy-resources-utilities" className="footer-text">Energy, Resources & Utilities</Link></li>
              <li><span className="bullet">➢</span><Link to="/insurance" className="footer-text">Insurance</Link></li>
              <li><span className="bullet">➢</span><Link to="/life-sciences-healthcare" className="footer-text">Life Sciences & Healthcare</Link></li>
              <li><span className="bullet">➢</span><Link to="/public-services" className="footer-text">Public Services</Link></li>
              <li><span className="bullet">➢</span><Link to="/communications-media-technology" className="footer-text"> Communications, Media & Technology</Link></li>
              <li><span className="bullet">➢</span><Link to="/travel-transportation-logistics" className="footer-text">Travel, Transportation & Logistics</Link></li>
              <li><span className="bullet">➢</span><Link to="/information-services" className="footer-text">Information Services</Link></li>
            </ul>
          </div>
          <div className="footer-col-services">
            <h5>SERVICES</h5>
            <ul>
              <li><span className="bullet">➢</span> <Link to="/android-app-development" className="footer-text">Android Development</Link></li>
              <li><span className="bullet">➢</span> <Link to="/python-development" className="footer-text">Python Development</Link></li>
              <li><span className="bullet">➢</span> <Link to="/ai-app-development" className="footer-text">AI Development</Link></li>
              <li><span className="bullet">➢</span> <Link to="/content-writer" className="footer-text">Content Writing</Link></li>
              <li><span className="bullet">➢</span> <Link to="/cyber-security" className="footer-text">CyberSecurity</Link></li>
              <li><span className="bullet">➢</span> <Link to="/devops" className="footer-text">DevOps</Link></li>
              <li><span className="bullet">➢</span> <Link to="/digital-marketing" className="footer-text">Digital Marketing</Link></li>
              <li><span className="bullet">➢</span> <Link to="/iot-development" className="footer-text">IoT Development</Link></li>
              <li><span className="bullet">➢</span> <Link to="/website-development" className="footer-text">Website Development</Link></li>
              <li><span className="bullet">➢</span> <Link to="/qa-automation-testing" className="footer-text">QA Automation and Testing</Link></li>
            </ul>
          </div>
        </div>
        {/* ✅ COPYRIGHT BELOW INDUSTRIES AND SERVICES */}
        <div className="footer-copyright">
          {/* <img src={logoIcon} alt="Logo" className="copyright-logo" /> */}
          <span>© 2025 Intellion Technologies. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;