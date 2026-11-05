import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/consumer.webp";
import consumerwhyus from "../../assets/consumerwhyus.jpeg";
import consumerwhatwedo from "../../assets/consumerwhatwedo.webp";
import androidBg from "../../assets/consumerbackground.webp";
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

function InformationServices() {
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
        <h1 id="HS_headingtext1-banking">Information Services</h1>
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
          <h1>Consumer Goods</h1>
          <p>
            Intellion Technologies specializes in delivering cutting-edge Android app development solutions customized for the consumer goods industry. Our skilled developers leverage advanced technologies to create intuitive, feature-rich applications that boost customer engagement and streamline product management.
            We take a comprehensive approach from ideation through deployment, ensuring that your app delivers outstanding performance, security, and scalability. Our expertise spans various solutions including inventory management, customer loyalty programs, and seamless e-commerce integration tailored to consumer goods businesses.
            By focusing on designing visually attractive, responsive, and robust applications, we help brands enhance their digital footprint, improve operational efficiency, and accelerate revenue growth in a highly competitive marketplace.
          </p>
          <p>
            We understand the unique challenges faced by consumer goods companies, such as fast-changing consumer preferences and supply chain complexities. Therefore, our solutions include real-time analytics, personalized marketing features, and omnichannel support to help you stay ahead of market trends and exceed customer expectations.
            With our expertise in Android app development, we empower organizations to deliver exceptional user experiences, boost brand loyalty, and achieve measurable business results. Our agile development process ensures quick adaptation to market changes, enabling consumer goods brands to innovate continuously and maintain a competitive edge.
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
        <img src={consumerwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies stands out by delivering specialized Android app development solutions crafted specifically for the consumer goods industry. Our expert developers leverage the latest technologies to create user-centric, feature-rich applications that drive customer engagement and streamline business operations.
          We adopt a comprehensive approach from ideation through deployment, ensuring your app offers seamless performance, robust security, and scalability to support your growth. Our deep understanding of consumer goods challenges allows us to provide customized solutions such as real-time inventory management, personalized marketing tools, and omnichannel support.
          By delivering visually appealing, responsive, and reliable apps, we empower consumer goods brands to enhance their digital presence, increase customer loyalty, and outperform competitors in a rapidly evolving marketplace. Partner with us to stay ahead and achieve measurable business outcomes through innovative mobile solutions.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={consumerwhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p>
          At Intellion Technologies, we specialize in delivering top-tier Android app development solutions designed specifically for the consumer goods sector. Our skilled developers leverage cutting-edge technologies to build user-centric, feature-rich applications that boost customer engagement and streamline sales processes.
          From initial concept through deployment, we follow a thorough, systematic approach to ensure your app offers seamless performance, strong security, and scalability to meet evolving business needs. Our customized solutions include inventory management, personalized promotions, and omnichannel integration, tailored to the unique challenges of consumer goods companies.
          By delivering visually appealing, highly responsive, and robust apps, we help businesses strengthen their digital presence and accelerate growth in a competitive market. Our expertise enables organizations to stay ahead by providing applications that deliver outstanding user experiences and measurable business outcomes.
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

export default InformationServices;