import { useEffect, useState } from "react";
import pythonintroimage from "../../assets/androidintro2.webp";
import pythonintro from "../../assets/python_intro.webp";
import pythonprocess from "../../assets/python_process.webp";
import pythonwhyus from "../../assets/python_whyus.webp";
import pythonapproach from "../../assets/python_approach.webp";
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

function PythonDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PythonDev />
      <AndroidIntroPara />
      <AndroidWhyUs />
      <AndroidMethods />
      <AndroidProcess />
      <SocialMediaIcons />
    </>
  );
}

function PythonDev() {
  return (
    <header
      className="intro-section"
      style={{ backgroundImage: `url(${pythonintroimage})` }}
    >
      <div id="HS_heading">
        <h1 id="HS_headingtext1">Python Development</h1>
        <p id="HS_headingtext2">Turn Your Ideas Into Engaging Python Developer Experiences</p>
      </div>
    </header>
  );
}

function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={pythonintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>Python Development</h1>
        <p>
          At Intellion Technologies Pvt Ltd, we specialize in delivering robust and scalable Python development solutions tailored to meet diverse business requirements. Our team of experienced Python developers leverages the latest frameworks and libraries to build efficient, secure, and maintainable applications that drive innovation and improve operational efficiency. From custom web applications and APIs to automation scripts and data analytics tools, we follow a comprehensive development lifecycle to ensure seamless integration, high performance, and scalability. Serving multiple industries including finance, healthcare, e-commerce, and enterprise software, we provide customized Python solutions that empower businesses to optimize workflows, enhance user experiences, and accelerate digital transformation. By focusing on clean code, modular architecture, and cutting-edge technologies, we help organizations stay competitive in today’s fast-paced market.
        </p>
      </div>
    </section>
  );
}

function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={pythonwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          At Intellion Technologies Pvt Ltd, we pride ourselves on delivering high-quality technology solutions tailored to meet diverse business challenges. Our team of skilled professionals leverages the latest tools and methodologies to design and develop user-centric, feature-rich applications that drive engagement and operational excellence.
          From initial planning and development to deployment and ongoing support, we follow a structured and agile approach to ensure seamless performance, robust security, and scalable solutions. We serve a broad range of industries, providing customized offerings such as enterprise applications, AI-driven platforms, and cloud-based services.
          By focusing on delivering solutions that are intuitive, responsive, and reliable, we empower businesses to strengthen their digital presence and accelerate growth in today’s competitive landscape. With our deep expertise and commitment to innovation, we help organizations achieve exceptional user experiences and tangible business results.
        </p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Custom Backend Development",
    description: "Develop robust and scalable backend systems using Python frameworks like Django and Flask, tailored to your business logic.",
    icon: customandroid,
  },
  {
    title: "Ongoing Maintenance & Support",
    description: "Ensure peak performance of Python applications through continuous monitoring, optimization, and security patching.",
    icon: maintainsandroid,
  },
  {
    title: "Secure Third-Party Integrations",
    description: "Seamlessly integrate payment gateways, APIs, and analytics using reliable Python libraries and secure protocols.",
    icon: performance,
  },
  {
    title: "Interactive UI with Python Backends",
    description: "Connect responsive frontends (React/Angular) to Python APIs for seamless, user-friendly interfaces and real-time data flow.",
    icon: security,
  },
  {
    title: "Python for IoT & Wearables",
    description: "Leverage Python for backend logic and data analytics in wearable and IoT solutions, enabling real-time monitoring and control.",
    icon: mobile,
  },
  {
    title: "Testing & Quality Assurance",
    description: "Conduct comprehensive testing using PyTest, Unittest, and CI/CD pipelines to ensure code reliability and application quality.",
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
      <h2>Python Development Approach</h2>
      <div className="services-wrapper">
        <img
          src={pythonapproach}
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
    Our Step-By-Step <strong>Python Development Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Requirement Analysis & Planning</strong>
      <p>
        We begin by understanding your project requirements and planning the architecture to deliver scalable Python solutions.
      </p>
    </div>
    <div className="process-card">
      <strong>Design & Development</strong>
      <p>
        Our developers write clean, efficient Python code, integrating necessary libraries and frameworks to build your application.
      </p>
    </div>
    <div className="process-card">
      <strong>Testing & Quality Assurance</strong>
      <p>
        Rigorous testing is performed to detect and fix bugs, ensuring your Python application is reliable and performs optimally.
      </p>
    </div>
    <div className="process-card">
      <strong>Deployment & Maintenance</strong>
      <p>
        We deploy your Python app to the production environment and provide ongoing support and maintenance for continuous improvement.
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
          src={pythonprocess}
          alt="Android Development Process"
          className="android-process-image"
        />
      </div>
    </div>
  );
}

export default PythonDevelopment;
