import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import webprocess from "../../assets/webprocess.webp";
import webintro from "../../assets/webintro.webp";
import webwhyus from "../../assets/webwhyus.webp";
import webapproach from "../../assets/webapproach.webp";
import customandroid from "../../assets/custom_android_icon.png";
import maintainsandroid from "../../assets/maintains_android.png";
import performance from "../../assets/performance.png";
import security from "../../assets/Securitytesting.png";
import mobile from "../../assets/mobile.webp";
import cicdintegration from "../../assets/cicdintegration.webp";
import "../../components/Services/Androidapp/androidappparagraph.css";
import "../../components/Services/Androidapp/androidmethods.css";
import "../../components/Services/Androidapp/androidprocess.css";
import SocialMediaIcons from "../../components/socialmediaicons/socialmedia";

// Top-level component
function WebSiteDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <WebSiteDev />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function WebSiteDev() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">WebSite Development</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging WebSite Developer Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={webintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>Website Development</h1>
<p>
  Intellion Technologies excels in delivering high-quality website development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest web technologies and frameworks to design and build user-centric, feature-rich websites that drive engagement and conversions. From initial design and development to testing and deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your website. We cater to various industries, offering customized solutions such as e-commerce platforms, corporate websites, and content management systems. By focusing on delivering visually appealing, responsive, and robust websites, we empower businesses to enhance their digital presence, improve user experience, and drive sustainable growth in a competitive online market. We also prioritize SEO best practices, fast loading times, mobile optimization, and ongoing maintenance to ensure your website remains effective and competitive.
</p>
      </div>
    </section>
  );
}


  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={webwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies excels in delivering high-quality website development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich websites that enhance customer engagement and brand visibility.
  From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your website. We cater to various industries, offering customized solutions such as e-commerce platforms, corporate websites, and content management systems that align with specific business goals.
  By focusing on delivering websites that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. With our expertise in website development, we enable organizations to stay ahead by providing platforms that deliver exceptional user experiences, strong SEO foundations, and measurable business outcomes.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Custom Website Development",
    description: "We build secure, scalable, and SEO-friendly websites tailored to your business needs using modern web technologies.",
    icon: customandroid,
  },
  {
    title: "Website Maintenance & Support",
    description: "Keep your website updated, secure, and performing at its best with our ongoing maintenance and support services.",
    icon: maintainsandroid,
  },
  {
    title: "CMS Integration",
    description: "Easily manage content with robust CMS platforms like WordPress, Drupal, or custom-built admin panels.",
    icon: performance,
  },
  {
    title: "UI/UX Design",
    description: "Craft visually appealing and user-centric website designs that enhance engagement and improve user experience.",
    icon: security,
  },
  {
    title: "E-commerce Development",
    description: "Develop feature-rich e-commerce platforms with secure payment gateways, inventory management, and more.",
    icon: mobile,
  },
  {
    title: "Website Testing & QA",
    description: "Ensure your website performs flawlessly across browsers and devices through rigorous testing and quality assurance.",
    icon: cicdintegration,
  },
];


  const [startIndex, setStartIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fadeIn");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fadeOut");
      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + 3) % services.length);
        setFadeState("fadeIn");
      }, 1500);
    }, 6000);
    return () => clearInterval(interval);
  }, [services.length]);

  const currentServices =
    services.slice(startIndex, startIndex + 3).length === 3
      ? services.slice(startIndex, startIndex + 3)
      : [
          ...services.slice(startIndex),
          ...services.slice(0, 3 - (services.length - startIndex)),
        ];

  return (
    <section className="services-section">
      <h2>Website Development Approach</h2>
      <div className="services-wrapper">
        <img
          src={webapproach}
          alt="Our Services"
          className="services-bg-image"
        />
        <div className={`services-list ${fadeState}`}>
          {currentServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* <a className="more_words" href="#">
                MORE
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function AndroidProcess() {
  return (
    <div className="android-process-wrapper">
<div className="android-process-text">
  <h2>
    Our Step-By-Step <strong>Website Development Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Ideation And Planning</strong>
      <p>
        Our web development team will begin by understanding your website goals, target audience, and key features.
      </p>
    </div>
    <div className="process-card">
      <strong>Design And Development</strong>
      <p>
        We create visually engaging designs and build responsive, user-friendly websites with all desired functionalities.
      </p>
    </div>
    <div className="process-card">
      <strong>Testing And QA</strong>
      <p>
        Our QA team conducts comprehensive testing to ensure cross-browser compatibility, responsiveness, and bug-free performance.
      </p>
    </div>
    <div className="process-card">
      <strong>Website Launch</strong>
      <p>
        Finally, we deploy your website on the hosting server and monitor its performance to ensure optimal uptime and user experience.
      </p>
    </div>
  </div>
</div>


      <div className="android-process-image-container">
  <div className="background-layer layer1" />
  <div className="background-layer layer2" />
  <div className="background-layer layer3" />
  <div className="background-layer layer4" />
  <div className="background-layer layer5" />
  <img
    src={webprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>

    </div>
  );
}

export default WebSiteDevelopment;
