import { useEffect, useState } from "react";
import androidintro from "../../assets/androidintro2.webp";
import androidone from "../../assets/android_1.webp";
import androidtwo from "../../assets/android_2.webp";
import androidservices from "../../assets/android_approach.webp";
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
function Android() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AndroidAppDev />
      <AndroidIntroPara />
      <AndroidWhyUs />
      <AndroidMethods />
      <AndroidProcess />
      <SocialMediaIcons />
    </>
  );
}

function AndroidAppDev() {
  return (
    <header
      className="intro-section"
      style={{ backgroundImage: `url(${androidintro})` }}
    >
      {/* <div className="intro-content"> */}
      {/* <img src={logo} alt="Design Studio" className="intellion_intro_logo" /> */}
      {/* </div> */}
      {/* <h3 className="hero-subtitle">SUPREME</h3> */}
      <div id="HS_heading">
        <h1 id="HS_headingtext1">Android App Development</h1>
        <p id="HS_headingtext2">Turn Your Ideas Into Engaging Android Developer Experiences</p>
      </div>
      {/* <p className="intro-subtext">
            Empowering businesses through intelligent digital transformation solutions.
          </p> */}
      {/* </div> */}
    </header>
  );
}

function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={androidone} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>Android App Development</h1>
        <p>
          Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement. From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools. By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market.
        </p>
      </div>
    </section>
  );
}


function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={androidtwo} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement.
        </p>
        <p>
          From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools.
        </p>
        <p>
          By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. With our expertise in Android app development, we enable organizations to stay ahead by providing applications that deliver exceptional user experiences and measurable business outcomes.
        </p>
      </div>
    </section>
  );
}

function AndroidMethods() {
  const services = [
    {
      title: "Custom Android App Development",
      description: "We provide feature-rich, high-performing custom Android apps using the latest Android development technologies and tools.",
      icon: customandroid,
    },
    {
      title: "Android App Maintenance & Support",
      description: "Maintain and upgrade your Android apps with robust technology for improved performance, security, and efficiency.",
      icon: maintainsandroid,
    },
    {
      title: "3rd Party Integrations",
      description: "Secure third-party integrations to enhance payment processing, sales tools, advertising, and marketing capabilities.",
      icon: performance,
    },
    {
      title: "UI/UX Design",
      description: "We craft intuitive, visually appealing interfaces that elevate user experience and drive higher engagement.",
      icon: security,
    },
    {
      title: "Wearable App Development",
      description: "Develop optimized, elegant applications for smartwatches and wearable devices to expand your ecosystem.",
      icon: mobile,
    },
    {
      title: "App Testing & QA",
      description: "Deliver reliable, bug-free Android apps with our comprehensive end-to-end testing and quality assurance services.",
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
      }, 1500); // match CSS animation duration
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
      <h2>Android Development Approach</h2>
      <div className="services-wrapper">
        <img
          src={androidservices}
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
          Our Step-By-Step <strong>Android App Development Process</strong>
        </h2>
        <div className="android-process-cards">
          <div className="process-card">
            <strong>Requirement Gathering</strong>
            <p>
              We start by understanding your business goals, target audience, and specific Android platform requirements.
            </p>
          </div>
          <div className="process-card">
            <strong>Wireframing & UI/UX Design</strong>
            <p>
              Our designers create intuitive wireframes and visually engaging interfaces optimized for Android devices.
            </p>
          </div>
          <div className="process-card">
            <strong>App Development</strong>
            <p>
              Our developers build the app using Kotlin/Java with proper architecture, ensuring performance and scalability.
            </p>
          </div>
          <div className="process-card">
            <strong>Testing & Quality Assurance</strong>
            <p>
              Rigorous functional, compatibility, and performance testing is conducted to eliminate bugs across Android devices.
            </p>
          </div>
          {/* <div className="process-card">
    <strong>Play Store Deployment</strong>
    <p>
      We publish the final app to Google Play Store following all compliance guidelines and provide post-launch support.
    </p>
  </div> */}
        </div>

      </div>

      <div className="android-process-image-container">
        <div className="background-layer layer1" />
        <div className="background-layer layer2" />
        <div className="background-layer layer3" />
        <div className="background-layer layer4" />
        <div className="background-layer layer5" />
        <img
          src={androidone}
          alt="Android Development Process"
          className="android-process-image"
        />
      </div>

    </div>
  );
}

export default Android;
