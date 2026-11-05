import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/banking.webp";
import androidtwo from "../../assets/bankingwhyus.webp";
import androidthree from "../../assets/bankingwhatwedo.webp";
import SocialMediaIcons from "../../components/socialmediaicons/socialmedia";
import bankingImage from '../../assets/android_2.webp';
import educationImage from '../../assets/cyber_security.avif';
import energyImage from '../../assets/deploy_img.webp';
import lifesciencesImage from '../../assets/lifescienceimage.webp';
import insuranceImage from '../../assets/insuranceimage.webp';
import publicImage from '../../assets/AIdev.webp';
import communicationImage from '../../assets/seo_dev.webp';
import travelImage from '../../assets/iot_development.webp';
import androidBg from '../../assets/bankbackground.webp';
import "../../components/Industries/Banking_Financial/banking_financial.css";
import "../../components/Industries/Banking_Financial/bankingimagelist.css";
import "../../components/Industries/Banking_Financial/bankingconnectsec.css";
import "../../components/Services/Androidapp/androidappparagraph.css";

// Top-level component
function BankingAndFinancial() {
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
      {/* <div className="intro-content"> */}
      {/* <img src={logo} alt="Design Studio" className="intellion_intro_logo" /> */}
      {/* </div> */}
      {/* <h3 className="hero-subtitle">SUPREME</h3> */}
      <div id="HS_heading-banking">
        <h1 id="HS_headingtext1-banking">Banking & Financial Services</h1>
        <p id="HS_headingtext2-banking">we offer you a comprehensive suite for Various kinds of industries.</p>
      </div>
      {/* <p className="intro-subtext">
            Empowering businesses through intelligent digital transformation solutions.
          </p> */}
      {/* </div> */}
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
          <h1>Banking & Financial</h1>
          <p>
            Intellion Technologies specializes in delivering secure and innovative banking and financial software solutions designed to meet the evolving needs of financial institutions. Our team leverages cutting-edge technology and industry best practices to develop scalable, compliant, and user-friendly applications that optimize operational efficiency and enhance customer trust.
            From digital banking platforms and payment gateways to risk management tools and financial analytics, we provide end-to-end development services. Our solutions prioritize security, regulatory compliance, and seamless integration with legacy systems to ensure smooth business operations and superior user experience.
            We also focus on implementing advanced encryption, fraud detection, and AI-powered insights to keep your data safe and empower smarter financial decisions.
            By combining robust technology frameworks with industry expertise, we empower banks, fintech companies, and financial service providers to accelerate digital transformation, reduce costs, and deliver personalized financial services that drive growth and customer satisfaction.
          </p>
          <p>
            With a focus on reliability, performance, and compliance, we help financial organizations stay competitive in a rapidly changing market. Our banking solutions are designed to adapt to regulatory changes and emerging trends, enabling clients to innovate confidently while maintaining operational integrity. Partner with us to transform your banking services and deliver measurable business value through advanced, secure, and scalable technology.
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
        <img src={androidtwo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What We Do?</h1>
        <p>
          At Intellion Technologies, we specialize in crafting secure and compliant banking software solutions designed to meet the rigorous demands of the financial sector. Our skilled developers use advanced fintech technologies to build custom applications that streamline operations, improve customer engagement, and ensure regulatory compliance.
          We deliver end-to-end services—from requirement analysis and system architecture design to development, testing, and deployment—focused on performance, security, and scalability. Our solutions include digital banking platforms, mobile wallets, loan management systems, payment processing, and fraud detection tools.
          By combining industry expertise with innovative technology, we help financial institutions transform their digital landscape, reduce risks, and deliver seamless, trustworthy experiences to their customers.
        </p>
      </div>
    </section>
  );
}


function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={androidthree} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies specializes in delivering secure, compliant, and innovative banking and financial software solutions that meet the unique challenges of the industry. Our expert team leverages the latest fintech technologies to build robust, scalable, and user-centric applications that boost customer trust and operational efficiency.
          From regulatory compliance and risk management to seamless integration with legacy systems, we follow a rigorous development process to ensure high performance and data security. We serve a wide range of financial institutions with customized solutions such as digital banking platforms, payment gateways, and analytics tools.
          By prioritizing security, reliability, and innovation, we empower financial organizations to accelerate digital transformation, enhance customer experiences, and maintain a competitive edge in the dynamic banking landscape.
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
    // Shuffle indices
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    // Pick first 4 unique services with route
    return indices.slice(0, 4).map((i) => ({
      image: allImages[i],
      title: titles[i],
      description: descriptions[i],
      route: routes[i],
    }));
  };

  useEffect(() => {
    setServices(getRandomUniqueServices()); // Initial set

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


export default BankingAndFinancial;