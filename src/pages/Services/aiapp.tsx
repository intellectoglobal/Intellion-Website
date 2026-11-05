import { useEffect, useState } from "react";
import aiprocess from "../../assets/ai_process.webp";
import androidintro from "../../assets/androidintro2.webp";
import aiintro from "../../assets/ai_intro.webp";
import aiwhyus from "../../assets/ai_whyus.webp";
import aiapproach from "../../assets/ai_approach.webp";
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

function AIDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AiAppDev />
      <AndroidIntroPara />
      <AndroidWhyUs />
      <AndroidMethods />
      <AndroidProcess />
      <SocialMediaIcons />
    </>
  );
}

function AiAppDev() {
  return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${androidintro})` }}
      >
      <div id="HS_heading">
        <h1 id="HS_headingtext1">AI Development</h1>
        <p id="HS_headingtext2">Turn Your Ideas Into Engaging AI Developer Experiences</p>
      </div>
    </header>
  );
}

function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={aiintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>AI Development</h1>
        <p>
          At Intellion Technologies Pvt Ltd, we specialize in delivering advanced AI development solutions designed to transform businesses across industries. Our expert team leverages cutting-edge machine learning, natural language processing, deep learning, and predictive analytics to build intelligent systems that drive automation, efficiency, and smarter decision-making.
          From data modeling to real-time deployment, we follow a structured and agile development approach to ensure every AI solution is scalable, secure, and aligned with your long-term business objectives. Whether it's AI-powered chatbots, recommendation engines, computer vision, intelligent document processing, or custom ML models, our solutions are tailored to solve real-world challenges and enhance customer experiences.
          By integrating intelligent automation into your operations, we empower your business to stay competitive, innovate faster, reduce operational costs, and unlock new opportunities in the digital era. Our commitment to innovation ensures that you remain at the forefront of technological excellence.</p>
      </div>
    </section>
  );
}

function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={aiwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          At Intellion Technologies Pvt Ltd, we stand out in the field of AI development by delivering intelligent, business-driven solutions that elevate performance and innovation. Our team of skilled AI engineers utilizes advanced technologies such as machine learning, deep learning, and natural language processing to create smart, adaptive systems tailored to diverse industry needs.
          From initial data analysis and model design to real-time deployment and continuous optimization, we adopt a strategic, end-to-end development approach. Our AI solutions are built for reliability, security, and scalability—ensuring seamless integration with your existing infrastructure.
          By focusing on building intelligent platforms that are accurate, efficient, and highly responsive, we help organizations unlock the full potential of data-driven automation and decision-making. With our proven expertise in artificial intelligence and a strong commitment to innovation, we empower businesses to transform customer experiences, accelerate growth, reduce costs, and maintain a competitive edge in a rapidly evolving digital landscape.
        </p>
      </div>
    </section>
  );
}

function AndroidMethods() {
  const services = [
  {
    title: "AI-Driven App Development",
    description: "Build intelligent Android apps using machine learning and neural networks for real-time decision-making and smart user interactions.",
    icon: customandroid,
  },
  {
    title: "Smart App Monitoring & Support",
    description: "Continuously optimize Android apps with AI-based diagnostics, auto-healing, and predictive maintenance for seamless performance.",
    icon: maintainsandroid,
  },
  {
    title: "AI-Powered Integrations",
    description: "Connect advanced AI services like NLP, vision, and analytics to enrich apps with real-time intelligence and automation.",
    icon: performance,
  },
  {
    title: "Conversational UI/UX Design",
    description: "Create responsive AI interfaces with natural language processing and adaptive behavior for a personalized user journey.",
    icon: security,
  },
  {
    title: "AI in Wearables",
    description: "Develop intelligent wearable apps with AI-based health tracking, anomaly detection, and smart alerts for proactive care.",
    icon: mobile,
  },
  {
    title: "AI Testing & Quality Assurance",
    description: "Validate AI systems within apps for model precision, ethical output, and stable performance under varied conditions.",
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
      <h2>Artificial Intelligent Approach</h2>
      <div className="services-wrapper">
        <img
          src={aiapproach}
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
          Our Step-By-Step <strong>AI Development Process</strong>
        </h2>
        <div className="android-process-cards">
          <div className="process-card">
            <strong>Problem Definition & Data Collection</strong>
            <p>
              We begin by understanding your AI project goals and gathering relevant data for training and analysis.
            </p>
          </div>
          <div className="process-card">
            <strong>Data Preprocessing & Model Selection</strong>
            <p>
              Our team cleans and prepares data, then selects the most suitable AI/ML models tailored to your use case.
            </p>
          </div>
          <div className="process-card">
            <strong>Model Training & Evaluation</strong>
            <p>
              We train the AI models on your data, fine-tune parameters, and rigorously evaluate performance for accuracy and efficiency.
            </p>
          </div>
          <div className="process-card">
            <strong>Deployment & Monitoring</strong>
            <p>
              Finally, we deploy the AI solution into your environment and continuously monitor to ensure optimal performance.
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
          src={aiprocess}
          alt="Android Development Process"
          className="android-process-image"
        />
      </div>
    </div>
  );
}

export default AIDevelopment;
