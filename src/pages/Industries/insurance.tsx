import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/insurance.avif";
import insurancewhyus from "../../assets/insurancewhyus.webp";
import insurancewhatwedo from "../../assets/insurancewhatwedo.webp";
import androidBg from "../../assets/insurancebackground.webp";
import SocialMediaIcons from "../../components/socialmediaicons/socialmedia";
import bankingImage from '../../assets/android_2.webp';
import educationImage from '../../assets/cyber_security.avif';
import energyImage from '../../assets/deploy_img.webp';
import lifesciencesImage from '../../assets/lifescienceimage.webp';
import insuranceImage from '../../assets/insuranceimage.webp';
import publicImage from '../../assets/AIdev.webp';
import communicationImage from '../../assets/seo_dev.webp';
import travelImage from '../../assets/iot_development.webp';
import "../../components/Industries/Banking_Financial/banking_financial.css";
import "../../components/Industries/Banking_Financial/bankingimagelist.css";
import "../../components/Industries/Banking_Financial/bankingconnectsec.css";
import "../../components/Services/Androidapp/androidappparagraph.css";

function Insurance() {
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

function BankingFinancial() {
  return (
    <header
      className="intro-section-banking"
      style={{ backgroundImage: `url(${banking_financial})` }}
    >
      <div id="HS_heading-banking">
        <h1 id="HS_headingtext1-banking">Insurance Services</h1>
        <p id="HS_headingtext2-banking">we offer you a comprehensive suite for Various kinds of industries.</p>
      </div>
    </header>
  );
}

function Bankingaboutus() {
  return (
    <section className="android-app-container-banking reverse-layout">
      <div
        className="android-app-background"
        style={{ backgroundImage: `url(${androidBg})` }}
      >
        <div className="android-app-content-overlay">
          <h1>Insurance</h1>
          <p>
            Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement.
            From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools.
            For the insurance sector, we create secure, scalable mobile apps that support policy management, digital onboarding, premium reminders, claims tracking, and agent collaboration. Our solutions improve client retention, speed up processing, and provide real-time access to important services.
            By integrating data analytics, AI-driven chat support, and personalized dashboards, we transform traditional insurance services into modern, intuitive digital experiences.
            By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. With our expertise in Android app development, we enable organizations to stay ahead by providing applications that deliver exceptional user experiences and measurable business outcomes.
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
        <img src={insurancewhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          At Intellion Technologies, we understand the complexities and compliance demands of the insurance industry. Our Android app development expertise helps insurers digitize operations, streamline policy management, and deliver seamless customer experiences.
          With a proven track record in developing secure, scalable, and intuitive mobile apps, we ensure faster claims processing, efficient agent workflows, and enhanced client engagement.
          We integrate AI, analytics, and automation to deliver smart features like predictive insights, fraud detection, and real-time support.
          By partnering with us, insurance firms gain a competitive edge through innovative technology that drives customer satisfaction, operational efficiency, and business growth.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={insurancewhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p>
          At Intellion Technologies, we specialize in developing cutting-edge Android applications designed specifically for the insurance sector. Our solutions streamline operations such as policy issuance, claims management, customer onboarding, and agent support. We design secure, scalable, and feature-rich apps that empower insurance providers to offer seamless self-service portals, real-time policy tracking, and mobile-first customer engagement.
          From initial consultation to final deployment, our development lifecycle ensures compliance with industry regulations, high performance, and exceptional user experience. Our goal is to help insurers reduce operational costs, increase transparency, and build trust through modern digital platforms that drive business continuity and innovation.
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

export default Insurance;