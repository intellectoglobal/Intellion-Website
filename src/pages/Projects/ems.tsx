import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/socialmediaicons/socialmedia';
import ems1 from '../../assets/ems1.webp';
import ems2 from '../../assets/ems2.webp';
import ems3 from '../../assets/ems3.webp';
import ems4 from '../../assets/ems4.webp';
import '../../components/Project/projectpopup.css';
import '../../components/Project/projectimagewords.css';
import '../../components/Project/Projectintro.css';
import '../../components/Project/Projects.css';


const EMS = () => {
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
            'Backend: Django with PostgreSQL for scalable data management',
            'Frontend: UI built with Bootstrap, CSS, JavaScript, and jQuery',
            'Role-based access control and multi-user management',
            'Deployment: Hosted on AWS cloud infrastructure for scalability',
    ];

    const images = [ems1, ems2, ems3, ems4];

    return (
        <div className="project-page-container">
            <h1 className="popup-title">Employee Management System</h1>
            <div className="overview-box">
                <div className="popup-overview">
                    <p>
                        EMS (Employee Management System) is a robust and comprehensive internal platform designed to streamline and automate employee-related operations within an organization. It supports a multi-role authorization framework encompassing Superadmin, Manager, Scrum Master, and Employee roles to ensure secure and role-based access control. The system centralizes core HR and administrative functions, enhancing organizational efficiency, transparency, and communication. EMS facilitates detailed personal information management by maintaining accurate employee profiles and records, ensuring data integrity and accessibility. Team management features empower Superadmins and Managers to create and organize teams, assign Scrum Masters, and oversee team compositions for effective collaboration. The timesheet management module allows employees, Scrum Masters, and Managers to submit and approve timesheets, with hierarchical approval workflows to maintain accountability. Leave management mirrors the timesheet workflow, enabling role-based leave requests and approvals that align with company policies. Payroll management supports the creation and administration of employee CTC structures and payslips, providing employees and Scrum Masters with secure access to view and download their compensation details. Inventory management enables Admins and Managers to track assets such as laptops, mobiles, and headphones, while employees can view assigned items and submit service or request forms. The platform also facilitates publication and dissemination of company policies and holiday calendars, ensuring all users remain informed of the latest updates. Performance review cycles allow periodic submissions by employees, Scrum Masters, and Managers, which are then evaluated by Admins or Managers to support employee development and feedback. Additionally, the system supports HR functions like job openings and referral management, allowing designated HR roles to post openings, receive referrals, and manage recruitment workflows. EMS is designed to foster a structured, role-driven workflow that enhances collaboration, accountability, and compliance with organizational policies, ultimately improving workforce management and operational transparency.
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

export default EMS;
