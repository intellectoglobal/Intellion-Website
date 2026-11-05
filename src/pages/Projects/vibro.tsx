import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/socialmediaicons/socialmedia';
import '../../components/Project/projectpopup.css';
import '../../components/Project/projectimagewords.css';
import '../../components/Project/Projectintro.css';
import '../../components/Project/Projects.css';


const Vibro = () => {
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
            'Frontend: React.js with TypeScript, Next.js, Tailwind CSS',
            'Mobile App: React PWA with offline support',
            'Backend: Python with Django REST Framework (DRF)',
            'Database: PostgreSQL',
            'Cloud/Hosting: Vercel (frontend), AWS (backend/database)',
            'APIs: RESTful APIs via Django DRF',
            'Tools: Git, Webpack (via Next.js), Lighthouse',
            'Deployment: Google Play Store (PWA)',
    ];

    // const images = [constrogenImg1, constrogenImg2, constrogenImg3, constrogenImg4];

    return (
        <div className="project-page-container">
            <h1 className="popup-title">Vibro</h1>
            <div className="overview-box">
                <div className="popup-overview">
                    <p>
                        The Vibro Application is a mobile productivity platform tailored for frontline teams, focusing on efficient task and form management.

                        Its core Planner Module facilitates bulk task/form assignments through a Template Upload Screen, where super admins and admins can upload CSV/Excel templates specifying locations, form IDs, and other essential details. A preview is displayed to summarize the assignments for validation, followed by automated assignment upon confirmation.

                        The system provides clear success and error messages and includes a Planner Adherence Summary to track key compliance metrics such as task completion by location.

                        Deployed as a Progressive Web App (PWA), Vibro supports offline access for mobile supervisors and workers. It seamlessly integrates with the forms module—covering Standard, Location-based, and Audit forms—for real-time data collection and analytics.

                        Vibro is designed for industries like retail and logistics that rely heavily on structured task execution and mobile workforce coordination.
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

export default Vibro;
