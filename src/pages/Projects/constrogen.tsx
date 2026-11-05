import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/socialmediaicons/socialmedia';
import constrogenImg1 from '../../assets/constrogen1.webp';
import constrogenImg2 from '../../assets/constrogen2.webp';
import constrogenImg3 from '../../assets/constrogen3.webp';
import constrogenImg4 from '../../assets/constrogen4.webp';
import '../../components/Project/projectpopup.css';
import '../../components/Project/projectimagewords.css';
import '../../components/Project/Projectintro.css';
import '../../components/Project/Projects.css';


const Constrogen = () => {
return (
    <>
    <Constrogenintro />
    <ConnectSec />
    <SocialMediaIcons />
    </>
);
}

function Constrogenintro() {
    const techStack = [
        'Frontend: React TypeScript (ReactTS) with PrimeReact',
        'Backend: Django REST Framework (DRF)',
        'Database: PostgreSQL',
        'Hosting & Infrastructure: AWS'
    ];

    const images = [constrogenImg1, constrogenImg2, constrogenImg3, constrogenImg4];

    return (
        <div className="project-page-container">
            <h1 className="popup-title">Constrogen</h1>
            <div className="overview-box">
                <div className="popup-overview">
                    <p>
                        Constrogen is a comprehensive ERP web application designed specifically for construction builders to efficiently manage projects, vendors, contractors, leads, and sales from a single platform. It simplifies operations by providing integrated tools for inventory management, purchase orders, invoices, agreements, and payments across all stakeholders.

                        With built-in financial features supporting GST, non-GST, and TDS compliance, Constrogen also delivers detailed audit reports and payment tracking. The platform offers clear insights into project-wise income and expenses, empowering businesses to maintain efficiency, ensure compliance, and stay financially in control. Additionally, Constrogen facilitates seamless communication between teams and vendors, enhances project scheduling and resource allocation, and provides customizable dashboards and real-time analytics for informed decision-making across all levels of the organization.
                    </p>
                </div>
            </div>

            <div className="popup-techstack">
                <h3>Tech Stack</h3>
                <div className="tech-buttons">
                    {techStack.map((tech, idx) => (
                        <span key={idx} className="tech-btn">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="image-grid">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="grid-img" />
                ))}
            </div>
        </div>
    );
};

function ConnectSec() {
  const navigate = useNavigate();

  return (
    <section className="connect-container-constrogen">
      <div className="connect-text-constrogen">
                <h2>
                    Explore  <span>Our </span> Innovations
                </h2>
      </div>
      <div className="connect-button-constrogen">
        <button onClick={() => navigate('/projects')}>
          View Projects <span className="plus-icon-constrogen">﹥</span>
        </button>
      </div>
    </section>
  );
}

export default Constrogen;
