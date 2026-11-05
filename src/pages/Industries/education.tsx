import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useLazyBackground from "../lazy";
import banking_financial from "../../assets/education.webp";
import educationwhyus from "../../assets/educationwhyus.webp";
import eduactionwhatwedo from "../../assets/educationwhatwedo.webp";
import SocialMediaIcons from "../../components/socialmediaicons/socialmedia";
import bankingImage from '../../assets/android_2.webp';
import educationImage from '../../assets/cyber_security.avif';
import energyImage from '../../assets/deploy_img.webp';
import lifesciencesImage from '../../assets/lifescienceimage.webp';
import insuranceImage from '../../assets/insuranceimage.webp';
import publicImage from '../../assets/AIdev.webp';
import communicationImage from '../../assets/seo_dev.webp';
import travelImage from '../../assets/iot_development.webp';
import androidBg from '../../assets/educationbackground.webp';
import "../../components/Industries/Banking_Financial/banking_financial.css";
import "../../components/Industries/Banking_Financial/bankingimagelist.css";
import "../../components/Industries/Banking_Financial/bankingconnectsec.css";
import "../../components/Services/Androidapp/androidappparagraph.css";

function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SocialMediaIcons />
      <BankingFinancial />
      <Bankingaboutus />
      <Bankingwhatwedo />
      <Bankingwhyus />
      <BankingImageList />
      <ConnectSec />
    </>
  );
}

const BankingFinancial: React.FC = () => {
  const [ref, bgImage] = useLazyBackground(banking_financial);

  return (
    <header
      ref={ref}
      className="intro-section-banking"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        transition: 'background-image 0.5s ease-in-out',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div id="HS_heading-banking">
        <h1 id="HS_headingtext1-banking">Education Services</h1>
        <p id="HS_headingtext2-banking">
          we offer you a comprehensive suite for Various kinds of industries.
        </p>
      </div>
    </header>
  );
};

function Bankingaboutus() {
  return (
    <section className="android-app-container-banking reverse-layout">
      <div
        className="android-app-background"
        style={{ backgroundImage: `url(${androidBg})` }}
      >
        <div className="android-app-content-overlay">
          <h1>Education</h1>
          <p>
            Intellion Technologies excels in delivering high-quality Android app development solutions tailored specifically to the education sector. Our expert developers leverage cutting-edge technologies to design and build intuitive, interactive, and feature-rich educational applications that enhance student engagement and learning outcomes.
            From conceptualization to deployment, we follow a structured approach to ensure seamless performance, robust security, and scalability of your app. We provide customized solutions such as e-learning platforms, virtual classrooms, student management systems, and digital content delivery tools that cater to diverse educational needs.
            By focusing on creating apps that are visually appealing, user-friendly, and highly responsive, we empower educational institutions and edtech companies to enhance their digital presence and foster academic growth in a competitive market. With our expertise, we help organizations deliver exceptional educational experiences and measurable improvements in learner success.
          </p>
          <p>
            We understand the unique challenges of the education sector and prioritize accessibility, interactive features, and seamless integration with existing systems. Our team is dedicated to developing innovative solutions that transform traditional education methods, making learning more engaging, flexible, and accessible for students and educators alike. By continuously adapting to emerging trends and technologies, we ensure your educational apps remain future-ready and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}

function Bankingwhyus() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={educationwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>what we do?</h1>
        <p>
          At Intellion Technologies, we specialize in developing innovative Android applications tailored for the education sector. Our dedicated team of developers uses the latest technologies to create interactive, user-friendly, and scalable educational apps designed to improve learning experiences for students, educators, and institutions alike.
          We work closely with educational organizations to understand their unique requirements and build solutions such as e-learning platforms, virtual classrooms, assessment tools, and student management systems. Our approach ensures seamless integration, robust security, and high performance to support the dynamic needs of modern education.
          By delivering visually engaging and highly functional apps, we help educational institutions enhance student engagement, facilitate remote learning, and streamline administrative processes. Our goal is to empower education providers with digital tools that foster knowledge sharing, collaboration, and academic success in an increasingly digital world.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={eduactionwhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies is dedicated to delivering top-notch Android app development solutions specifically designed for the education sector. Our expert developers leverage cutting-edge technologies to create engaging, intuitive, and scalable educational applications that foster interactive learning and improve educational outcomes.
          We adopt a comprehensive development process from initial consultation to final deployment, ensuring seamless performance, strong data security, and easy scalability to meet evolving educational needs. Our customized solutions include e-learning platforms, virtual classrooms, student portals, and administrative tools tailored to empower educators and learners alike.
          By focusing on user-friendly design, robust functionality, and seamless integration, we help educational institutions enhance student engagement, streamline operations, and embrace digital transformation. Partner with us to deliver innovative educational experiences that truly make a difference in today’s fast-changing learning landscape.
        </p>
      </div>
    </section>
  );
}

const allImages = [
  bankingImage,
  educationImage,
  energyImage,
  insuranceImage,
  lifesciencesImage,
  publicImage,
  communicationImage,
  travelImage,
];

const titles = [
  "Banking & Financial",
  "Education",
  "Energy, Resources & Utilities",
  "Insurance",
  "Life Sciences & Healthcare",
  "Public Services",
  "Communications Media & Technology",
  "Travel, Transportation & Logistics",
];

const descriptions = [
  "Innovative financial solutions designed to empower your banking and investment needs, delivering seamless digital experiences.",
  "Transforming education with smart, accessible learning platforms that foster growth and skill development worldwide.",
  "Driving sustainable energy and utility management through cutting-edge technology and efficient resource solutions.",
  "Comprehensive insurance services offering protection and peace of mind tailored to your unique requirements.",
  "Advancing healthcare through technology-enabled solutions that improve patient outcomes and operational efficiency.",
  "Enhancing public services with transparent, user-friendly digital platforms that foster community engagement and accessibility.",
  "Empowering communication and media through innovative technology solutions driving connectivity and content delivery.",
  "Streamlining travel and logistics with smart apps that optimize routes, enhance customer experience, and boost efficiency.",
];

const routes = [
  "/banking-and-financial",
  "/education",
  "/energy-resources-utilities",
  "/insurance",
  "/life-sciences-healthcare",
  "/public-services",
  "/communications-media-technology",
  "/travel-transportation-logistics",
];

type Service = {
  image: string;
  title: string;
  description: string;
  route: string;
};

function BankingImageList() {
  const [services, setServices] = useState<Service[]>([]);
  const navigate = useNavigate();

  const getRandomUniqueServices = (): Service[] => {
    const indices = Array.from({ length: allImages.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, 4).map((i) => ({
      image: allImages[i],
      title: titles[i],
      description: descriptions[i],
      route: routes[i],
    }));
  };

  useEffect(() => {
    setServices(getRandomUniqueServices());

    const interval = setInterval(() => {
      setServices(getRandomUniqueServices());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="popular-tours">
      <h2 className="title-banking">Our Popular Services</h2>
      <h3 className="subtitle-banking">and get exceptional banking</h3>
      <div className="tours-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="tour-card fade-up"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(service.route)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="tour-image"
              onError={(e) => {
                console.error(`Failed to load image: ${service.image}`);
              }}
            />
            <h4 className="tour-title">{service.title}</h4>
            <p className="tour-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectSec() {
  const navigate = useNavigate();

  return (
    <section className="connect-container">
      <div className="connect-text">
        <h2>
          Let’s <span>Connect</span> here
        </h2>
      </div>
      <div className="connect-button">
        <button onClick={() => navigate('/contact-us')}>
          Contact Us Now <span className="plus-icon">﹥</span>
        </button>
      </div>
    </section>
  );
}

export default Education;