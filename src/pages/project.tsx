import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../components/socialmediaicons/socialmedia';
import "../components/Project/Projectintro.css";
import "../components/Project/Projects.css";
import "../components/Project/projectpopup.css";
import "../components/Project/projectimagewords.css";
import aboutusintro from '../assets/ourproject.webp';
import aboutusintro2 from '../assets/projectintro.webp';
// Listed image
import constrogenListingImg from '../assets/constrogen.webp';
import IntelliReaderListingImg from '../assets/intellireader.webp';
import VBYListingImg from '../assets/vbyproject.webp';
import ETRMListingImg from '../assets/etrm.webp';
import EMSListingImg from '../assets/ems.webp';
import vibroListingImg from '../assets/vibroprojectpage.webp';
// Project popup images
import constrogenImg1 from '../assets/constrogen1.webp';
import constrogenImg2 from '../assets/constrogen2.webp';
import constrogenImg3 from '../assets/constrogen3.webp';
import constrogenImg4 from '../assets/constrogen4.webp';
import ems1 from '../assets/ems1.webp';
import ems2 from '../assets/ems2.webp';
import ems3 from '../assets/ems3.webp';
import ems4 from '../assets/ems4.webp';
import vby1 from '../assets/vby1.webp';
import vby2 from '../assets/vby2.webp';
import vby3 from '../assets/vby3.webp';
import intelli1 from '../assets/intelli1.webp';
import intelli2 from '../assets/intelli2.webp';
import intelli3 from '../assets/intelli3.webp';
import intelli4 from '../assets/intelli4.webp';

const Project = () => {
    return (
        <>
            <Projectintro />
            <Projectone />
            <Projectimagewords />
            <SocialMediaIcons />
        </>
    )
}

function Projectintro() {
    const [showIntro, setShowIntro] = useState(true);
    const [zoomOut, setZoomOut] = useState(false);
    const [showSecond, setShowSecond] = useState(false);

    useEffect(() => {
        const holdTimer = setTimeout(() => {
            setZoomOut(true);

            const switchTimer = setTimeout(() => {
                setShowIntro(false);
                setShowSecond(true);
            }, 1000);

            return () => clearTimeout(switchTimer);
        }, 1000);

        return () => clearTimeout(holdTimer);
    }, []);

    return (
        <header
            className="project-intro-section"
            style={{
                backgroundImage: `url(${showIntro ? aboutusintro : aboutusintro2})`,
            }}
        >
            <div className="about-intro-content">
                {showIntro && (
                    <h1 className={`intro-title-project ${zoomOut ? "text-zoom-out" : ""}`}>
                        Our Projects
                    </h1>
                )}

                {showSecond && (
                    <div className="project-text-wrapper zoom-in">
                        <h2 className="project-heading">The Intellion Edge: A Project Story</h2>
                        <p className="intro-description">
                            At Intellion, our project is a transformative journey into intelligent digital innovation. Focused on delivering high-impact solutions across industries, we combine cutting-edge technology with deep domain expertise to solve real-world business challenges. Our team has architected a robust, scalable ecosystem that leverages cloud-native services, automation, and data-driven intelligence to enable enterprises to accelerate growth, improve operational efficiency, and enhance customer experiences.

                            This project is a culmination of collaborative thinking, agile practices, and a commitment to innovation. It spans end-to-end development—from frontend interfaces to backend APIs and microservices—using modern technologies such as ReactJS, Python, Flask, FastAPI, AWS Lambda, Docker, and PostgreSQL. The architecture is designed with modularity, security, and performance in mind, supporting both real-time and batch processing needs.

                            Data is at the heart of our project. We’ve engineered secure pipelines that transform, cleanse, and analyze data with precision, allowing stakeholders to make informed decisions. Our cloud infrastructure ensures high availability, fault tolerance, and seamless scalability, while our DevOps pipelines empower rapid and reliable deployments with zero downtime.

                            This isn’t just a technical implementation—it’s a strategic enabler. From banking and financial services to healthcare and education, our platform is tailored to solve industry-specific problems with reusable components and intelligent automation. Our commitment to UI/UX ensures that every interaction is intuitive, fast, and responsive.
                        </p>
                    </div>
                )}
            </div>
        </header>
    );
}

interface Project {
    id: string;
    title: string;
    listingImage?: string;
    images: string[];
    overview: string;
    techStack: string[];
}

const projects: Project[] = [
    {
        id: 'constrogen',
        title: 'Constrogen',
        listingImage: constrogenListingImg,
        images: [constrogenImg1, constrogenImg2, constrogenImg3, constrogenImg4],
        overview: `Constrogen is a comprehensive ERP web application designed specifically for construction builders to efficiently manage projects, vendors, contractors, leads, and sales from a single platform. It simplifies operations by providing integrated tools for inventory management, purchase orders, invoices, agreements, and payments across all stakeholders. 

With built-in financial features supporting GST, non-GST, and TDS compliance, Constrogen also delivers detailed audit reports and payment tracking. The platform offers clear insights into project-wise income and expenses, empowering businesses to maintain efficiency, ensure compliance, and stay financially in control. Additionally, Constrogen facilitates seamless communication between teams and vendors, enhances project scheduling and resource allocation, and provides customizable dashboards and real-time analytics for informed decision-making across all levels of the organization.`,
        techStack: [
            'Frontend: React TypeScript (ReactTS) with PrimeReact',
            'Backend: Django REST Framework (DRF)',
            'Database: PostgreSQL',
            'Hosting & Infrastructure: AWS (Amazon Web Services)',
        ]
    },
    {
        id: 'Intellireader',
        title: 'Intellireader',
        listingImage: IntelliReaderListingImg,
        images: [intelli1, intelli2, intelli3, intelli4],
        overview: `IntelliReader is a premium AI-powered application designed to extract and interpret content from various file types using cutting-edge RAG (Retrieval-Augmented Generation) technology. Built for professionals and businesses seeking efficient document analysis, IntelliReader provides seamless support for video-to-text, PDF-to-text, and image-to-text conversions. Users can upload PDFs, video files, or images, and the platform intelligently extracts meaningful content using advanced OCR and transcription models. 

The application features a clean, responsive user interface built with React and Tailwind CSS, offering a smooth user experience across all devices.`,
        techStack: [
            'Video to Text, PDF to Text, and Image to Text processing modules',
            'AI-Powered content extraction using RAG (Retrieval-Augmented Generation)',
            'Token-based API consumption for precise and scalable interactions',
            'UI: Built with React.js and Tailwind CSS for responsive design',
            'Integration: API endpoints for media uploads and text retrieval',
            'Deployment: Hosted on Vercel with edge network optimization for fast access',
            'Authentication & Billing: Paid subscription-based access management',
        ],
    },
    {
        id: 'vby',
        title: 'VBY',
        listingImage: VBYListingImg,
        images: [vby1, vby2, vby3],
        overview: `VBY Vudabodayo is an innovative vehicle loan management system designed to streamline and automate the entire lifecycle of loan processing. The platform efficiently manages critical operations including data entry, document management, and multi-level verification workflows to ensure accuracy and regulatory compliance. By automating these processes, the system reduces manual errors and accelerates loan approval times. VBY Vudabodayo maintains precise and up-to-date loan records while providing transparent tracking of loan statuses for both administrators and customers. The system’s financial management module simplifies the monitoring of payment schedules, interest calculations, and outstanding balances, thereby improving overall financial oversight. Built to support scalability and security, the platform enables lenders to manage a high volume of loans with ease while delivering a seamless user experience through an intuitive interface.`,
        techStack: [
            'Backend: Java, Spring Boot, REST APIs',
            'Frontend: React, TypeScript',
            'Deployment: Frontend hosted on Vercel, Backend deployed on AWS cloud infrastructure',
        ]
    },
    {
        id: 'ETRM',
        title: 'ETRM',
        listingImage: ETRMListingImg,
        images: [],
        overview: `ETRM (Energy Trading and Risk Management) systems are critical platforms that enable companies to efficiently manage the full spectrum of energy commodity trading and associated risks. These systems support complex workflows involving the buying, selling, scheduling, and financial management of commodities such as crude oil, natural gas, refined petroleum products, power and electricity, coal, and LNG. Given the volatility and complexity of energy markets, where rapid price fluctuations and stringent regulations are the norm, ETRM solutions help organizations mitigate operational, market, and credit risks. They ensure compliance with regulatory requirements while optimizing financial performance across trading portfolios. Core functions of an ETRM system include trade capture (logging trade details accurately), scheduling and logistics management for physical commodity delivery, comprehensive risk management including market and credit exposure calculations, valuation and mark-to-market pricing of open positions, hedging activities using futures and options, settlement and invoicing processes, and detailed reporting for both internal decision-making and regulatory audits. ETRM systems are widely used by oil and gas companies, power utilities, energy trading houses, financial institutions like banks and hedge funds dealing in commodities, and midstream logistics companies handling transportation and storage. Skarvi Systems delivers a powerful suite of ETRM and CTRM solutions including Navigator, an enterprise-grade trade and inventory management platform; Trader Co-Pilot, an AI-powered assistant for pre- and post-trade optimization; Fleet Compass for comprehensive ship management; Demurrage Manager to control demurrage costs; and Demand Decoder, which forecasts and optimizes retail and industrial product demand.`,
        techStack: [
            'Trade Capture & Risk Management modules',
            'Scheduling, Logistics & Settlement systems',
            'Financial Valuation and Hedging tools',
            'Reporting and Compliance dashboards',
            'Backend: Enterprise-grade scalable architecture (details vary per product)',
            'Integration: APIs for real-time data exchange',
            'Deployment: Cloud-hosted solutions optimized for high availability and security',
        ]
    },
    {
        id: 'EMS',
        title: 'EMS',
        listingImage: EMSListingImg,
        images: [ems1, ems2, ems3, ems4],
        overview: `EMS (Employee Management System) is a robust and comprehensive internal platform designed to streamline and automate employee-related operations within an organization. It supports a multi-role authorization framework encompassing Superadmin, Manager, Scrum Master, and Employee roles to ensure secure and role-based access control. The system centralizes core HR and administrative functions, enhancing organizational efficiency, transparency, and communication. EMS facilitates detailed personal information management by maintaining accurate employee profiles and records, ensuring data integrity and accessibility. Team management features empower Superadmins and Managers to create and organize teams, assign Scrum Masters, and oversee team compositions for effective collaboration. The timesheet management module allows employees, Scrum Masters, and Managers to submit and approve timesheets, with hierarchical approval workflows to maintain accountability. Leave management mirrors the timesheet workflow, enabling role-based leave requests and approvals that align with company policies. Payroll management supports the creation and administration of employee CTC structures and payslips, providing employees and Scrum Masters with secure access to view and download their compensation details. Inventory management enables Admins and Managers to track assets such as laptops, mobiles, and headphones, while employees can view assigned items and submit service or request forms. The platform also facilitates publication and dissemination of company policies and holiday calendars, ensuring all users remain informed of the latest updates. Performance review cycles allow periodic submissions by employees, Scrum Masters, and Managers, which are then evaluated by Admins or Managers to support employee development and feedback. Additionally, the system supports HR functions like job openings and referral management, allowing designated HR roles to post openings, receive referrals, and manage recruitment workflows. EMS is designed to foster a structured, role-driven workflow that enhances collaboration, accountability, and compliance with organizational policies, ultimately improving workforce management and operational transparency.`,
        techStack: [
            'Backend: Django with PostgreSQL for secure, scalable data management',
            'Frontend: Responsive UI built with Bootstrap, CSS, JavaScript, and jQuery',
            'Role-based access control and multi-user management',
            'Deployment: Hosted on AWS cloud infrastructure for reliability and scalability',
        ]
    },
    {
        id: 'Vibro',
        title: 'Vibro',
        listingImage: vibroListingImg,
        images: [],
        overview: `The Vibro Application is a mobile productivity platform tailored for frontline teams, focusing on efficient task and form management. 

Its core Planner Module facilitates bulk task/form assignments through a Template Upload Screen, where super admins and admins can upload CSV/Excel templates specifying locations, form IDs, and other essential details. A preview is displayed to summarize the assignments for validation, followed by automated assignment upon confirmation.

The system provides clear success and error messages and includes a Planner Adherence Summary to track key compliance metrics such as task completion by location.

Deployed as a Progressive Web App (PWA), Vibro supports offline access for mobile supervisors and workers. It seamlessly integrates with the forms module—covering Standard, Location-based, and Audit forms—for real-time data collection and analytics.

Vibro is designed for industries like retail and logistics that rely heavily on structured task execution and mobile workforce coordination.`,
        techStack: [
            'Frontend: React.js with TypeScript, Next.js, Tailwind CSS',
            'Mobile App: React PWA with offline support',
            'Backend: Python with Django REST Framework (DRF)',
            'Database: PostgreSQL',
            'Cloud/Hosting: Vercel (frontend), AWS (backend/database)',
            'APIs: RESTful APIs via Django DRF',
            'Tools: Git, Webpack (via Next.js), Lighthouse',
            'Deployment: Google Play Store (PWA)',
        ]
    },
];

function Projectone() {
  const navigate = useNavigate();

const redirectToProject = (projectId: string) => {
  navigate(`/${projectId.toLowerCase()}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Our Projects</h1>
        <p>Projects that speak for themselves</p>
      </header>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={project.id}
            className="project-section"
            onClick={() => redirectToProject(project.id)}
            style={{ cursor: 'pointer', flexDirection: isEven ? 'row' : 'row-reverse' }}
          >
            <div className="project-image">
              <img
                src={project.listingImage || project.images[0] || "/assets/default-project.png"}
                alt={`${project.title} Project`}
                className="w-full h-64 object-cover rounded-t-xl"
              />
            </div>
            <div className="project-info-box">
              <h2>{project.title}</h2>
              <p>{project.overview.substring(0, 350)}...</p>
              <button
                className="read-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToProject(project.id);
                }}
              >
                Read More
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Projectimagewords() {
    return (
        <section className="project-container-project reverse-layout">
            <div className="project-background">
                <div className="project-content-overlay">
                    <h1>Innovative IT Projects That Drive Business Transformation</h1>
                    <p>
                        At Intellion IT, we are committed to delivering next-generation digital solutions that empower enterprises across industries. Our project portfolio reflects a strong focus on innovation, scalability, and real-world impact. Whether it's building intelligent platforms for construction management, developing smart content extraction tools like IntelliReader, or engineering enterprise-grade employee management systems, every project is designed with precision and purpose. Leveraging cutting-edge technologies—such as ReactJS, Python, AWS, Docker, and PostgreSQL—we build modular, cloud-native systems that solve complex business problems efficiently. From strategy to deployment, our cross-functional teams collaborate using agile methodologies to ensure timely delivery, robust performance, and superior user experience. At Intellion, each project is more than code—it's a strategic solution tailored to transform industries and accelerate digital growth. At Intellion, each project is more than code—it's a strategic solution tailored to transform industries and accelerate digital growth.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Project;
