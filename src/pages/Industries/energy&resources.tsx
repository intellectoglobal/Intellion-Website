import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/energy.webp";
import energywhatwedo from "../../assets/energywhatwedo.webp";
import energywhyus from "../../assets/energywhyus.webp";
import androidBg from "../../assets/energybackground.webp";
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

function EnergyResourcesUtilities() {
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
        <h1 id="HS_headingtext1-banking">Energy, Resources & Utilities Services</h1>
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
          <h1>Energy, Resources & Utilities</h1>
          <p>
            Intellion Technologies specializes in delivering cutting-edge Android app development solutions tailored specifically for the energy, resources, and utilities sector. Our skilled developers harness the latest technologies to create scalable, secure, and user-centric applications that streamline operations, optimize resource management, and enhance customer engagement.
            From initial planning through deployment, we employ a strategic and agile development process to ensure robust performance, stringent security, and seamless integration with existing enterprise systems. Our customized solutions include smart grid management, asset monitoring, energy consumption analytics, and field workforce automation tools designed to drive efficiency and innovation.
            By delivering visually intuitive, highly responsive, and durable applications, we empower businesses in this dynamic sector to transform their digital landscape, reduce operational costs, and accelerate sustainable growth in a competitive market.
          </p>
          <p>
            With deep domain expertise and a commitment to excellence, Intellion Technologies helps energy and utility companies stay ahead of industry challenges by providing solutions that enhance operational visibility, improve decision-making, and foster stronger customer relationships through exceptional digital experiences.
            Our focus on sustainability and digital transformation supports organizations in adopting renewable energy solutions, optimizing supply chains, and meeting regulatory compliance efficiently, making us a trusted partner in the evolving energy landscape.
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
        <img src={energywhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies stands out as a trusted partner in the Energy, Resources & Utilities sector by delivering innovative and secure Android app development solutions tailored to industry-specific challenges. Our expert team leverages advanced technologies and deep domain knowledge to build scalable, reliable applications that optimize operational efficiency and improve asset management.
          From initial concept to deployment, we follow a rigorous, agile development process ensuring seamless integration with existing systems while maintaining the highest standards of security and compliance. Our customized solutions empower businesses to enhance energy management, streamline workflows, and drive sustainable growth.
          By delivering intuitive, responsive, and robust applications, we enable organizations to accelerate digital transformation, improve customer engagement, and maintain a competitive edge in a rapidly evolving market.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={energywhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p>
          At Intellion Technologies, we specialize in crafting advanced Android applications tailored specifically for the Energy, Resources & Utilities sector. Our solutions help organizations optimize energy consumption, monitor assets in real time, and enhance operational efficiency through intelligent automation and data-driven insights.
          Leveraging cutting-edge technologies, we develop secure, scalable, and user-friendly apps that facilitate smart grid management, predictive maintenance, and environmental compliance tracking. From initial analysis and design to deployment and ongoing support, our systematic approach ensures seamless integration with existing infrastructure while maintaining strict industry standards.
          By delivering customized applications that streamline workflows and improve customer engagement, we empower businesses in the energy sector to innovate sustainably, reduce costs, and accelerate digital transformation in a rapidly evolving market.
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

export default EnergyResourcesUtilities;