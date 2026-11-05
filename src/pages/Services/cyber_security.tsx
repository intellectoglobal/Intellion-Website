import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import cyberintro from "../../assets/cyber_intro.webp";
import cyberprocess from "../../assets/cyber_process.webp";
import cyberwhyus from "../../assets/cyber_whyus.webp";
import cyberapproach from "../../assets/cyber_approach.webp";
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

function cyber_Security() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CyberSecurity />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function CyberSecurity() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">Cyber Security</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging Cyber Security Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={cyberintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>Cyber Security</h1>
<p>
  Intellion Technologies Pvt Ltd specializes in delivering comprehensive cyber security solutions designed to protect businesses from evolving digital threats. Our team of skilled security experts employs the latest tools and methodologies to develop robust, proactive defenses that safeguard sensitive data and ensure regulatory compliance. From risk assessment and vulnerability management to threat detection, penetration testing, and incident response, we follow a thorough and strategic approach to secure your entire infrastructure. Serving a wide range of industries, we offer customized security frameworks, including network protection, application security, cloud security, and endpoint defense solutions. By focusing on creating resilient, scalable, and adaptive security measures, we empower organizations to maintain trust, safeguard their assets, and confidently grow in an increasingly complex cyber landscape.
</p>
      </div>
    </section>
  );
}

  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={cyberwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies Pvt Ltd excels in delivering advanced cyber security solutions tailored to protect businesses against evolving digital threats. Our team of expert professionals leverages cutting-edge technologies and industry best practices to design and implement comprehensive, proactive security frameworks that safeguard critical assets and ensure regulatory compliance. From risk assessment and threat mitigation to continuous monitoring and incident response, we follow a systematic and agile approach to maintain robust protection and resilience. We serve diverse industries, offering customized cyber security services such as network defense, cloud security, application protection, and endpoint security solutions designed to meet specific business objectives.

  By focusing on delivering solutions that are adaptive, scalable, and reliable, we empower organizations to strengthen their security posture, preserve customer trust, and sustain growth in an increasingly complex cyber landscape. With our expertise in cyber security, we enable businesses to stay ahead by providing strategies and technologies that mitigate risks, reduce vulnerabilities, and ensure business continuity.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Custom Cybersecurity Solutions",
    description: "We deliver tailored security frameworks including threat modeling, risk analysis, and infrastructure hardening to safeguard your assets.",
    icon: customandroid,
  },
  {
    title: "Security Maintenance & Monitoring",
    description: "Ensure 24/7 protection with continuous monitoring, timely patching, and proactive vulnerability management across all systems.",
    icon: maintainsandroid,
  },
  {
    title: "Secure 3rd Party Integrations",
    description: "Integrate firewalls, SIEMs, IAM, and other trusted third-party tools to enhance your security posture and incident response.",
    icon: performance,
  },
  {
    title: "Secure UI/UX Design",
    description: "Design user interfaces with built-in security measures to minimize social engineering risks and unauthorized data access.",
    icon: security,
  },
  {
    title: "Wearable Security Frameworks",
    description: "Protect wearable apps through secure APIs, encrypted data exchange, and endpoint monitoring for full compliance and privacy.",
    icon: mobile,
  },
  {
    title: "Cybersecurity Testing & Audits",
    description: "Perform comprehensive penetration tests, code reviews, and policy audits to detect weaknesses and ensure regulatory alignment.",
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
      <h2>Cyber Security Approach</h2>
      <div className="services-wrapper">
        <img
          src={cyberapproach}
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
    Our Step-By-Step <strong>Cybersecurity Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Risk Assessment and Planning</strong>
      <p>
        We begin by identifying your organization’s vulnerabilities and assessing potential security risks to create a tailored protection plan.
      </p>
    </div>
    <div className="process-card">
      <strong>Security Design and Implementation</strong>
      <p>
        Our team develops and integrates security measures, including firewalls, encryption, and access controls to safeguard your systems.
      </p>
    </div>
    <div className="process-card">
      <strong>Monitoring and Testing</strong>
      <p>
        Continuous monitoring and penetration testing are conducted to detect threats and vulnerabilities, ensuring your defenses remain strong.
      </p>
    </div>
    <div className="process-card">
      <strong>Incident Response and Maintenance</strong>
      <p>
        In case of breaches, we provide rapid incident response and ongoing security updates to protect against evolving threats.
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
    src={cyberprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>
    </div>
  );
}

export default cyber_Security;
