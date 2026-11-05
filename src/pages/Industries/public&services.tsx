import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import banking_financial from "../../assets/publicservices.webp";
import publicwhyus from "../../assets/publicwhyus.webp";
import punlicwhatwedo from "../../assets/publicwhatwedo.webp";
import androidBg from "../../assets/publicbackground.webp";
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

function PublicServices() {
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
        <h1 id="HS_headingtext1-banking">Public Services</h1>
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
          <h1>Public Services</h1>
          <p>
            Intellion Technologies specializes in delivering high-quality Android app development solutions tailored specifically for public sector organizations. Our expert team leverages the latest technologies to design and build user-centric, secure, and feature-rich applications that improve citizen engagement and streamline service delivery.
            From initial concept through deployment, we follow a structured approach to ensure seamless performance, data security, and scalability to meet the unique demands of public services. We provide customized solutions such as digital portals, emergency response apps, and community outreach platforms.
          </p>
          <p>
            By focusing on developing visually appealing, responsive, and robust applications, we empower government bodies and public institutions to modernize their digital presence and enhance accessibility for all citizens. Our expertise ensures organizations remain at the forefront of innovation, delivering exceptional user experiences and measurable outcomes that improve public welfare and operational efficiency.
            Additionally, our solutions support compliance with regulatory standards, enhance transparency, and facilitate efficient resource management to better serve communities and stakeholders.
          </p>
          <p>
            Our solutions also prioritize accessibility, ensuring that apps are usable by people with disabilities, complying with ADA standards. We integrate real-time data analytics and reporting tools to help public agencies make informed decisions and respond promptly to community needs and emergencies.
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
        <img src={publicwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement.
          From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools.
          By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. With our expertise in Android app development, we enable organizations to stay ahead by providing applications that deliver exceptional user experiences and measurable business outcomes.
          Furthermore, we emphasize compliance with industry standards and accessibility, ensuring our apps serve diverse communities effectively. Our commitment to continuous innovation and dedicated support ensures your public service initiatives succeed in a rapidly evolving digital landscape.
        </p>
      </div>
    </section>
  );
}

function Bankingwhatwedo() {
  return (
    <section className="android-app-container normal-layout">
      <div className="android-app-image">
        <img src={punlicwhatwedo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>What we do?</h1>
        <p>
          Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement.
          From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools.
          By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. With our expertise in Android app development, we enable organizations to stay ahead by providing applications that deliver exceptional user experiences and measurable business outcomes.
          Additionally, we specialize in public sector projects by building apps that improve community engagement, facilitate access to essential services, and promote transparency.
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

export default PublicServices;