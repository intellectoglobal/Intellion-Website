import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/socialmediaicons/socialmedia';
import vby1 from '../../assets/vby1.webp';
import vby2 from '../../assets/vby2.webp';
import vby3 from '../../assets/vby3.webp';
import '../../components/Project/projectpopup.css';
import '../../components/Project/projectimagewords.css';
import '../../components/Project/Projectintro.css';
import '../../components/Project/Projects.css';


const VBY = () => {
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
            'Backend: Java, Spring Boot, REST APIs',
            'Frontend: React, TypeScript',
            'Deployment: Frontend hosted on Vercel, Backend on AWS cloud.',
    ];

    return (
        <div className="project-page-container">
            <h1 className="popup-title">VBY</h1>
            <div className="overview-box">
                <div className="popup-overview">
                    <p>
                        VBY Vudabodayo is an innovative vehicle loan management system designed to streamline and automate the entire lifecycle of loan processing. The platform efficiently manages critical operations including data entry, document management, and multi-level verification workflows to ensure accuracy and regulatory compliance. By automating these processes, the system reduces manual errors and accelerates loan approval times. VBY Vudabodayo maintains precise and up-to-date loan records while providing transparent tracking of loan statuses for both administrators and customers. The system’s financial management module simplifies the monitoring of payment schedules, interest calculations, and outstanding balances, thereby improving overall financial oversight. Built to support scalability and security, the platform enables lenders to manage a high volume of loans with ease while delivering a seamless user experience through an intuitive interface.
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

            {/* <div className="image-grid">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="grid-img" />
                ))}
            </div> */}
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

export default VBY;
