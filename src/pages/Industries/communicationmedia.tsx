import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/communication.webp";
import communicationwhyus from "../../assets/communicationwhyus.webp";
import communicationwhatwedo from "../../assets/communicationwhatwedo.webp";
import androidBg from "../../assets/communicationbackgroundimage.webp";
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

function CommunicationMedia() {
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
        <h1 id="HS_headingtext1-banking">Communication, Media & Technology Services</h1>
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
          <h1>Communication, Media & Technology</h1>
          <p>
            Intellion Technologies empowers the communication, media, and technology sectors with next-gen digital solutions that drive connectivity, engagement, and innovation. Our expert team builds scalable platforms and applications—ranging from OTT streaming services and media content delivery systems to telecom automation tools and customer experience apps.
            We leverage the latest in AI, cloud, 5G, and data analytics to transform digital interactions, optimize operations, and ensure seamless connectivity across channels. Whether it’s enabling real-time media streaming, managing massive user data, or building collaborative tech platforms, we deliver agile and reliable solutions tailored to your business goals.
          </p>
          <p>
            Our deep industry knowledge allows us to craft solutions that enhance content personalization, improve network efficiency, and streamline digital workflows. We support broadcasters, telecom operators, and media houses by integrating advanced technologies such as machine learning and blockchain to secure content and optimize monetization strategies. With a focus on user experience, our applications facilitate immersive communication and seamless media consumption, helping businesses stay competitive in a rapidly evolving digital landscape. We are committed to driving innovation that transforms how people connect, share, and communicate globally.
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
        <img src={communicationwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          At Intellion Technologies, we specialize in building cutting-edge solutions that empower the Communication, Media & Technology sectors to thrive in the digital era. Our team understands the unique demands of real-time communication, seamless content delivery, and data-driven user engagement. We use emerging technologies like AI, 5G, cloud, and big data to create highly scalable, secure, and responsive platforms. From media streaming apps to telecom automation and content management systems, we ensure rapid delivery, high availability, and superior user experience. Partnering with us means gaining a forward-thinking ally committed to driving innovation and competitive advantage in an ever-evolving digital landscape. We deliver personalized digital solutions, ensure seamless integration with legacy systems, and provide round-the-clock support to maximize operational efficiency.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={communicationwhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p>
          Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement.
          From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools.
          Our communication, media, and technology services encompass digital transformation, OTT platform integration, real-time content delivery, and cloud-based solutions that streamline operations. We also offer cross-platform compatibility, advanced analytics, and AI-driven personalization to keep you ahead of the curve.
          By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market.
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

export default CommunicationMedia;