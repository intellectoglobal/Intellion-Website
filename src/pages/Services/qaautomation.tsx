import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import qaprocess from "../../assets/qaprocess.webp";
import qaintro from "../../assets/qaintro.webp";
import qawhyus from "../../assets/qawhyus.webp";
import qaapproach from "../../assets/qaapproach.webp";
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

function QAAuto_Testing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <QAAutomationTesting />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function QAAutomationTesting() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">QA Automation and Testing</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging Automation & Manual Testing Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={qaintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>QA Automation & Testing</h1>
<p>
  Intellion Technologies specializes in delivering comprehensive QA automation and testing solutions tailored to ensure the highest quality software products. Our skilled QA engineers utilize advanced tools and methodologies to design, develop, and execute automated test scripts that improve accuracy and efficiency. From functional to performance testing, we adopt a systematic approach to guarantee seamless software performance, security, and scalability across diverse industries. We offer customized testing strategies for e-commerce platforms, healthcare systems, and enterprise applications. By focusing on delivering reliable, robust, and scalable testing services, we help businesses reduce time-to-market and enhance user satisfaction in a competitive digital landscape. Our end-to-end testing services include regression, integration, and user acceptance testing, ensuring defect-free releases. We leverage continuous testing in CI/CD pipelines to accelerate delivery while maintaining superior software quality and reliability.
</p>
      </div>
    </section>
  );
}


  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={qawhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement.
  From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools.
  By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. With our expertise in Android app development, we enable organizations to stay ahead by providing applications that deliver exceptional user experiences and measurable business outcomes.
  Additionally, our QA automation and testing services guarantee high-quality, bug-free software through comprehensive test coverage, continuous integration, and rapid feedback loops, ensuring your applications remain reliable and perform optimally under all conditions.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Functional Testing",
    description: "Verify that all application features perform as expected across different environments and scenarios.",
    icon: customandroid,
  },
  {
    title: "Test Automation",
    description: "Accelerate release cycles with robust automation frameworks like Selenium, Cypress, and Appium.",
    icon: maintainsandroid,
  },
  {
    title: "Performance Testing",
    description: "Identify system bottlenecks and ensure scalability with load, stress, and endurance testing.",
    icon: performance,
  },
  {
    title: "Security Testing",
    description: "Protect applications from vulnerabilities with thorough penetration testing and risk assessments.",
    icon: security,
  },
  {
    title: "Mobile App Testing",
    description: "Ensure quality and compatibility across devices, OS versions, and screen sizes for mobile apps.",
    icon: mobile,
  },
  {
    title: "CI/CD Test Integration",
    description: "Integrate testing into CI/CD pipelines to enable continuous testing and faster feedback loops.",
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
      <h2>QA Automation & Testing Approach</h2>
      <div className="services-wrapper">
        <img
          src={qaapproach}
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
    Our Step-By-Step <strong>QA Automation and Testing Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Test Planning</strong>
      <p>
        We start by understanding your project requirements and creating a comprehensive test plan covering all critical scenarios.
      </p>
    </div>
    <div className="process-card">
      <strong>Test Development</strong>
      <p>
        Our team develops automated test scripts and manual test cases to ensure thorough coverage and reliability.
      </p>
    </div>
    <div className="process-card">
      <strong>Test Execution & Bug Reporting</strong>
      <p>
        We execute tests across multiple environments, report bugs with detailed logs, and work closely to resolve any issues found.
      </p>
    </div>
    <div className="process-card">
      <strong>Continuous Testing & Maintenance</strong>
      <p>
        Finally, we integrate automated tests into CI/CD pipelines and maintain test suites for ongoing quality assurance.
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
    src={qaprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>
    </div>
  );
}

export default QAAuto_Testing;
