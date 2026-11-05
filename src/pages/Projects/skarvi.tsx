import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/socialmediaicons/socialmedia';
import '../../components/Project/projectpopup.css';
import '../../components/Project/projectimagewords.css';
import '../../components/Project/Projectintro.css';
import '../../components/Project/Projects.css';


const Skarvi = () => {
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
        'Trade Capture & Risk Management modules',
        'Scheduling, Logistics & Settlement systems',
        'Financial Valuation and Hedging tools',
        'Reporting and Compliance dashboards',
        'Backend: Enterprise-grade scalable architecture',
        'Integration: APIs for real-time data exchange',
        'Deployment: Cloud-hosted solutions for high availability and security',
    ];

    // const images = [constrogenImg1, constrogenImg2, constrogenImg3, constrogenImg4];

    return (
        <div className="project-page-container">
            <h1 className="popup-title">Skarvi</h1>
            <div className="overview-box">
                <div className="popup-overview">
                    <p>
                        ETRM (Energy Trading and Risk Management) systems are critical platforms that enable companies to efficiently manage the full spectrum of energy commodity trading and associated risks. These systems support complex workflows involving the buying, selling, scheduling, and financial management of commodities such as crude oil, natural gas, refined petroleum products, power and electricity, coal, and LNG. Given the volatility and complexity of energy markets, where rapid price fluctuations and stringent regulations are the norm, ETRM solutions help organizations mitigate operational, market, and credit risks. They ensure compliance with regulatory requirements while optimizing financial performance across trading portfolios. Core functions of an ETRM system include trade capture (logging trade details accurately), scheduling and logistics management for physical commodity delivery, comprehensive risk management including market and credit exposure calculations, valuation and mark-to-market pricing of open positions, hedging activities using futures and options, settlement and invoicing processes, and detailed reporting for both internal decision-making and regulatory audits. ETRM systems are widely used by oil and gas companies, power utilities, energy trading houses, financial institutions like banks and hedge funds dealing in commodities, and midstream logistics companies handling transportation and storage. Skarvi Systems delivers a powerful suite of ETRM and CTRM solutions including Navigator, an enterprise-grade trade and inventory management platform; Trader Co-Pilot, an AI-powered assistant for pre- and post-trade optimization; Fleet Compass for comprehensive ship management; Demurrage Manager to control demurrage costs; and Demand Decoder, which forecasts and optimizes retail and industrial product demand.
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
            {/* 
            <div className="image-grid">
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

export default Skarvi;
