import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/travel.webp";
import travelwhatwedo from "../../assets/travelwhatwedo.avif";
import travelwhyus from "../../assets/travelwhyus.avif";
import SocialMediaIcons from "../../components/socialmediaicons/socialmedia";
import bankingImage from '../../assets/android_2.webp';
import educationImage from '../../assets/cyber_security.avif';
import energyImage from '../../assets/deploy_img.webp';
import lifesciencesImage from '../../assets/lifescienceimage.webp';
import insuranceImage from '../../assets/insuranceimage.webp';
import publicImage from '../../assets/AIdev.webp';
import communicationImage from '../../assets/seo_dev.webp';
import travelImage from '../../assets/iot_development.webp';
import androidBg from '../../assets/travelbackground.webp';
import "../../components/Industries/Banking_Financial/banking_financial.css";
import "../../components/Industries/Banking_Financial/bankingimagelist.css";
import "../../components/Industries/Banking_Financial/bankingconnectsec.css";
import "../../components/Services/Androidapp/androidappparagraph.css";

function TravelMediaLogistics() {
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
        <h1 id="HS_headingtext1-banking">Travel & Transportation Services</h1>
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
          <h1>Travel & Transportation</h1>
          <p>
            Intellion Technologies delivers cutting-edge digital solutions tailored for the travel and transportation industry. We specialize in creating Android applications that streamline operations, optimize route planning, enhance booking experiences, and improve fleet management. Our expert developers harness the power of the latest technologies to build scalable, intuitive, and secure apps that cater to logistics providers, travel agencies, ride-sharing platforms, and public transit systems.
          </p>
          <p>
            From GPS integration and real-time tracking to personalized itineraries and multi-modal booking features, our solutions focus on improving efficiency, customer satisfaction, and business agility. We incorporate advanced analytics, AI-powered recommendations, and seamless payment gateways to provide end-users with a smooth and reliable service experience. Our apps are designed to support 24/7 operations, ensuring high availability and quick response times in dynamic environments.
          </p>
          <p>
            With a commitment to innovation and user-centric design, we help transportation companies and travel brands modernize their services and stay competitive in a rapidly evolving digital landscape.
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
        <img src={travelwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies specializes in creating innovative Android app solutions tailored specifically for the travel and transportation industry. Our experienced developers combine deep domain knowledge with cutting-edge technologies to deliver apps that improve operational efficiency, enhance user experiences, and support real-time data integration.
          We understand the complexities of travel logistics, fleet management, and customer engagement, allowing us to craft solutions that are scalable, secure, and reliable. From booking platforms and route optimization tools to real-time tracking and AI-driven personalization, we provide end-to-end support throughout the app development lifecycle.
          By partnering with us, travel and transportation businesses gain a competitive edge through technology that boosts customer satisfaction, streamlines workflows, and adapts seamlessly to evolving market demands. We are committed to delivering high-quality, robust, and user-centric applications that drive measurable business outcomes and long-term success.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={travelwhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p>
          At Intellion Technologies, we specialize in delivering tailored Android app development solutions specifically designed for the travel and transportation industry. Our expert developers utilize the latest technologies to create seamless, user-friendly applications that streamline booking, fleet management, route optimization, and real-time tracking.
          We work closely with clients from initial concept through deployment, ensuring apps are scalable, secure, and highly performant. Our solutions include customer-facing booking platforms, driver and logistics management tools, and AI-driven personalization features to enhance passenger experience.
          By delivering visually appealing, responsive, and robust apps, we empower travel and transportation businesses to optimize operations, improve customer satisfaction, and maintain a competitive advantage in a fast-evolving market.
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

export default TravelMediaLogistics;