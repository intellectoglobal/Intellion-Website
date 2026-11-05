import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import devopsprocess from "../../assets/devopsprocess.webp";
import devopsintro from "../../assets/devopsintro.webp";
import devopswhyus from "../../assets/devopswhyus.webp";
import devopsapproach from "../../assets/devopsapproach.webp";
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

function DevopsDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Devops />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function Devops() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">DevOps</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging Devops Developer Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={devopsintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>DevOps Development</h1>
<p>
  Intellion Technologies excels in delivering high-quality DevOps solutions tailored to meet diverse business needs. Our team of expert engineers leverages the latest automation tools and cloud technologies to design and implement scalable, efficient, and reliable CI/CD pipelines that accelerate software delivery. From infrastructure provisioning and configuration management to continuous integration, testing, and deployment, we follow a systematic and agile approach to ensure seamless performance, security, and scalability of your applications. We cater to various industries, offering customized solutions such as container orchestration, microservices architecture, and cloud migration services. By focusing on delivering robust, automated, and resilient DevOps practices, we empower businesses to enhance operational efficiency, reduce time-to-market, and drive sustained growth in a competitive digital landscape. Our continuous monitoring and proactive incident management further ensure maximum uptime and rapid issue resolution, supporting your business continuity and innovation goals.
</p>
      </div>
    </section>
  );
}

  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={devopswhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies Pvt Ltd excels in delivering end-to-end DevOps solutions designed to streamline software development and operations. Our team of skilled engineers leverages cutting-edge tools and best practices to build automated, scalable, and secure pipelines that accelerate delivery cycles and improve collaboration.
  From infrastructure as code and continuous integration to automated testing and deployment, we follow a systematic and agile approach to ensure high availability, performance, and scalability of your applications. We serve diverse industries, providing customized DevOps frameworks that align with specific business requirements and compliance standards.
  By focusing on robust automation, monitoring, and proactive incident management, we empower organizations to reduce downtime, increase efficiency, and drive innovation. With our deep expertise in DevOps, we enable businesses to stay competitive by delivering reliable, scalable, and high-quality software products rapidly and consistently.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "CI/CD Pipeline Development",
    description: "Implement end-to-end CI/CD pipelines using tools like Jenkins, GitLab CI, and GitHub Actions to automate builds, testing, and deployments.",
    icon: customandroid,
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Use tools like Terraform and AWS CloudFormation to provision and manage scalable, repeatable infrastructure with code-based automation.",
    icon: maintainsandroid,
  },
  {
    title: "Monitoring & Logging",
    description: "Set up real-time monitoring and log management using Prometheus, Grafana, ELK, and Splunk for proactive issue resolution.",
    icon: performance,
  },
  {
    title: "Containerization & Orchestration",
    description: "Leverage Docker and Kubernetes to build, deploy, and manage microservices-based applications efficiently at scale.",
    icon: security,
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Optimize and manage cloud environments across AWS, Azure, or GCP with automated scaling, load balancing, and security best practices.",
    icon: mobile,
  },
  {
    title: "DevOps Consulting & Strategy",
    description: "Get expert guidance to design, implement, and improve DevOps workflows, culture, and toolchains for faster software delivery.",
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
      <h2>Devops Development Approach</h2>
      <div className="services-wrapper">
        <img
          src={devopsapproach}
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
    Our Step-By-Step <strong>DevOps Implementation Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Planning and Collaboration</strong>
      <p>
        We start by understanding your project requirements and aligning development and operations teams for seamless collaboration.
      </p>
    </div>
    <div className="process-card">
      <strong>CI/CD Pipeline Setup</strong>
      <p>
        Next, we design and implement continuous integration and continuous deployment pipelines to automate builds, testing, and deployments.
      </p>
    </div>
    <div className="process-card">
      <strong>Monitoring and Testing</strong>
      <p>
        We establish automated monitoring and testing to detect issues early, ensure system stability, and optimize performance.
      </p>
    </div>
    <div className="process-card">
      <strong>Deployment and Maintenance</strong>
      <p>
        Finally, we deploy the solution in your production environment and provide ongoing support for scaling and continuous improvement.
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
    src={devopsprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>
    </div>
  );
}

export default DevopsDevelopment;
