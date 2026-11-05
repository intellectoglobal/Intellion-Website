import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import iotprocess from "../../assets/iotprocess.webp";
import iotintro from "../../assets/iotintro.webp";
import iotwhyus from "../../assets/iotwhyus.webp";
import iotapproach from "../../assets/iotapproach.webp";
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

function IOT() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <IOTDev />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function IOTDev() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">IOT Development</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging IOT Developer Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={iotintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>IOT Development</h1>
<p>
  Intellion Technologies Pvt Ltd specializes in delivering cutting-edge IoT development solutions customized to address the unique challenges of diverse industries. Our skilled engineers leverage advanced IoT platforms and protocols to design and implement smart, connected devices and systems that drive operational efficiency and innovation. From initial concept and prototyping to deployment and maintenance, we follow a thorough, agile process ensuring security, scalability, and seamless integration with existing infrastructure. We serve industries such as manufacturing, healthcare, agriculture, and smart cities, offering tailored IoT solutions that enable real-time monitoring, automation, and data-driven decision-making. By delivering robust, scalable, and user-friendly IoT applications, we empower businesses to transform their operations and unlock new growth opportunities in the digital era. Our commitment to continuous innovation, reliable support, and customized IoT frameworks ensures that our clients stay ahead in the rapidly evolving connected world.
</p>
      </div>
    </section>
  );
}

  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={iotwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies Pvt Ltd specializes in delivering advanced IoT development solutions designed to meet the evolving needs of diverse industries. Our team of skilled engineers utilizes the latest IoT platforms and protocols to create connected, intelligent systems that drive operational efficiency and innovation.
  From initial concept and prototyping to deployment and maintenance, we adopt a thorough and agile approach to ensure seamless integration, security, and scalability of your IoT solutions. We serve sectors such as manufacturing, healthcare, agriculture, and smart cities with customized, end-to-end IoT applications tailored to specific business goals.
  By focusing on delivering scalable, reliable, and user-friendly IoT platforms, we empower businesses to optimize processes, improve decision-making through real-time data, and unlock new opportunities in the connected world. Our expertise ensures organizations stay competitive by harnessing the true potential of IoT technology.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Custom IoT App Development",
    description: "Build powerful, scalable IoT applications tailored to connect and control smart devices across platforms.",
    icon: customandroid,
  },
  {
    title: "IoT Device Integration",
    description: "Seamlessly integrate various sensors, devices, and gateways into your IoT ecosystem with secure communication protocols.",
    icon: maintainsandroid,
  },
  {
    title: "Cloud & Edge IoT Solutions",
    description: "Deploy real-time processing using cloud and edge computing to ensure low-latency and highly available IoT environments.",
    icon: performance,
  },
  {
    title: "IoT Data Analytics",
    description: "Leverage big data from connected devices to extract insights, monitor operations, and make predictive decisions.",
    icon: security,
  },
  {
    title: "Smart Home & Industrial IoT",
    description: "Design and implement solutions for smart homes, factories, and cities, improving automation, safety, and efficiency.",
    icon: mobile,
  },
  {
    title: "IoT Security Services",
    description: "Protect your IoT network with multi-layered security protocols, device authentication, and data encryption strategies.",
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
      <h2>Internet of Things Approach</h2>
      <div className="services-wrapper">
        <img
          src={iotapproach}
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
    Our Step-By-Step <strong>IoT Development Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Ideation And Planning</strong>
      <p>
        We start by understanding your IoT goals, device requirements, and connectivity needs to outline a robust project plan.
      </p>
    </div>
    <div className="process-card">
      <strong>Design And Development</strong>
      <p>
        Our engineers design and develop IoT hardware and software components, integrating sensors, communication protocols, and cloud services.
      </p>
    </div>
    <div className="process-card">
      <strong>Testing And QA</strong>
      <p>
        We rigorously test device interoperability, security, and data accuracy to ensure a reliable and scalable IoT solution.
      </p>
    </div>
    <div className="process-card">
      <strong>Deployment And Support</strong>
      <p>
        Finally, we deploy your IoT system, monitor performance, and provide ongoing support to optimize device connectivity and data flow.
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
    src={iotprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>
    </div>
  );
}

export default IOT;
