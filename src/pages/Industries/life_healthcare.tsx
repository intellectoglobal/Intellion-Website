import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/health.webp";
import lifewhyus from "../../assets/lifewhyus.webp";
import lifewhatwedo from "../../assets/lifewhatwedo.webp";
import androidBg from "../../assets/lifebackground.webp";
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

function LifeScienceHealthcare() {
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
        <h1 id="HS_headingtext1-banking">Life, Science & HealthCare Services</h1>
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
          <h1>Life, Science & Healthcare</h1>
          <p>
            Intellion Technologies delivers innovative, high-quality Android app development solutions tailored for the life sciences and healthcare industries. Our experienced team builds secure, HIPAA-compliant, and scalable mobile applications that support everything from patient engagement and remote monitoring to lab management and clinical workflows.
            Leveraging the latest technologies such as AI, IoT, and cloud integration, we create intelligent, feature-rich platforms that improve healthcare accessibility and scientific collaboration. Our user-centric designs ensure ease of use for medical professionals, patients, and researchers alike.
            We also provide support for wearable device integration, real-time health analytics, telehealth solutions, and electronic prescription platforms. These services empower healthcare providers to enhance diagnostic precision, streamline workflows, and personalize patient care. With a deep understanding of compliance, security, and usability, we deliver end-to-end digital transformation in health and science. Our solutions also support predictive analytics, patient data interoperability, and regulatory compliance across global standards. By integrating cutting-edge tools like blockchain for secure records and AR/VR for medical training, we help organizations innovate faster, reduce operational costs, and deliver smarter, safer, and more personalized health experiences at scale.
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
        <img src={lifewhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p> At Intellion Technologies, we bring domain-specific expertise in life sciences and healthcare to develop intelligent, secure, and scalable digital solutions. Our seasoned developers harness cutting-edge technologies—AI, IoT, and cloud—to build apps that address critical needs like patient engagement, clinical workflow efficiency, and real-time health monitoring. We understand the importance of compliance, privacy, and precision in this sector. That’s why our end-to-end development process ensures HIPAA-compliant, interoperable systems that meet global healthcare standards. From biotech firms to hospitals and research labs, we deliver intuitive, high-performance solutions that accelerate innovation and improve health outcomes across the board. </p>

      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={lifewhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p> At Intellion Technologies, we specialize in crafting intelligent, secure, and compliant digital solutions for the life sciences and healthcare sectors. From telemedicine platforms and remote patient monitoring systems to clinical trial management apps and hospital automation tools, we deliver customized applications that streamline operations and improve care delivery. Our team combines healthcare domain knowledge with cutting-edge technologies such as AI, machine learning, IoT, and cloud computing to build solutions that are not only user-centric but also scalable and regulatory-compliant. Whether you’re a pharmaceutical company, a biotech innovator, or a healthcare provider, we develop high-performance apps that support diagnostics, data integration, and patient engagement. </p>
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

export default LifeScienceHealthcare;