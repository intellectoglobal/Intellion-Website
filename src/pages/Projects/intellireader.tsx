import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/socialmediaicons/socialmedia';
import constrogenImg1 from '../../assets/constrogen1.webp';
import constrogenImg2 from '../../assets/constrogen2.webp';
import constrogenImg3 from '../../assets/constrogen3.webp';
import constrogenImg4 from '../../assets/constrogen4.webp';
import intelli1 from '../../assets/intelli1.webp';
import intelli2 from '../../assets/intelli2.webp';
import intelli3 from '../../assets/intelli3.webp';
import intelli4 from '../../assets/intelli4.webp';


const IntelliReader = () => {
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
        'Video to Text, PDF to Text, and Image to Text processing modules',
        'AI-Powered content extraction using RAG',
        'Token-based API consumption for precise & scalable interactions',
        'UI: Built with React.js and Tailwind CSS for responsive design',
        'Integration: API endpoints for media uploads and text retrieval',
        'Deployment: Hosted on Vercel for fast access',
        'Authentication & Billing: Paid subscription-based access management',
    ];

    const images = [intelli1, intelli2, intelli3, intelli4];

    return (
        <div className="project-page-container">
            <h1 className="popup-title">IntelliReader</h1>
            <div className="overview-box">
                <div className="popup-overview">
                    <p>
                        IntelliReader is a premium AI-powered application designed to extract and interpret content from various file types using cutting-edge RAG (Retrieval-Augmented Generation) technology. Built for professionals and businesses seeking efficient document analysis, IntelliReader provides seamless support for video-to-text, PDF-to-text, and image-to-text conversions. Users can upload PDFs, video files, or images, and the platform intelligently extracts meaningful content using advanced OCR and transcription models.

                        The application features a clean, responsive user interface built with React and Tailwind CSS, offering a smooth user experience across all devices.
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

export default IntelliReader;
