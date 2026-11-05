import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import digitalprocess from "../../assets/digitalprocess.webp";
import digitalintro from "../../assets/devopsintro.webp";
import digitalwhyus from "../../assets/digitalwhyus.webp";
import digitalapproach from "../../assets/digitalapproach.webp";
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

function Digital_Marketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <DigitalMarketing />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function DigitalMarketing() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">Digital Marketing</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging Digital Marketing Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={digitalintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>Digital Marketing</h1>
<p>
  Intellion Technologies excels in delivering high-quality Android app development solutions tailored to meet diverse business needs. Our team of expert developers leverages the latest technologies to design and build user-centric, feature-rich applications that enhance customer engagement. From conceptualization to deployment, we follow a systematic approach to ensure seamless performance, security, and scalability of your app. We cater to various industries, offering customized solutions such as e-commerce apps, healthcare platforms, and enterprise mobility tools. By focusing on delivering apps that are visually appealing, responsive, and robust, we empower businesses to enhance their digital presence and drive growth in a competitive market. Additionally, our digital marketing strategies utilize data-driven insights, SEO, social media campaigns, and content marketing to maximize brand visibility, engage target audiences effectively, and deliver measurable ROI for sustained business growth.
</p>
      </div>
    </section>
  );
}

  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={digitalwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies Pvt Ltd specializes in delivering innovative digital marketing solutions designed to meet diverse business goals. Our team of marketing experts utilizes the latest tools and data-driven strategies to create campaigns that boost brand awareness and customer engagement.
  From market research and content creation to SEO, social media management, and paid advertising, we follow a strategic, results-oriented approach to ensure maximum reach, ROI, and business growth. We serve multiple industries, tailoring campaigns to target specific audiences with precision and creativity.
  By focusing on measurable outcomes, continuous optimization, and engaging content, we empower businesses to strengthen their online presence and outperform competitors. With our deep expertise in digital marketing, we help organizations stay ahead by delivering impactful campaigns that drive conversions, loyalty, and long-term success. Our commitment to innovation, transparent reporting, and personalized support ensures each client receives solutions that align perfectly with their unique vision and market demands.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website’s visibility and drive organic traffic through on-page, off-page, and technical SEO strategies.",
    icon: customandroid,
  },
  {
    title: "Social Media Marketing (SMM)",
    description: "Engage your audience and grow your brand across platforms like Facebook, Instagram, LinkedIn, and Twitter with targeted campaigns.",
    icon: maintainsandroid,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Maximize ROI with data-driven Google Ads and Bing Ads campaigns tailored to reach the right customers at the right time.",
    icon: performance,
  },
  {
    title: "Content Marketing",
    description: "Create compelling content strategies including blogs, videos, and infographics to attract and retain your target audience.",
    icon: security,
  },
  {
    title: "Email Marketing",
    description: "Build customer loyalty and drive conversions with personalized, automated, and performance-tracked email campaigns.",
    icon: mobile,
  },
  {
    title: "Analytics & Conversion Optimization",
    description: "Track performance using tools like Google Analytics and optimize landing pages to improve user experience and conversion rates.",
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
      <h2>Digital Marketing Approach</h2>
      <div className="services-wrapper">
        <img
          src={digitalapproach}
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
    Our Step-By-Step <strong>Digital Marketing Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Research and Strategy</strong>
      <p>
        We begin by understanding your brand, target audience, and goals to craft a tailored marketing strategy.
      </p>
    </div>
    <div className="process-card">
      <strong>Content Creation and Campaign Setup</strong>
      <p>
        Next, we develop compelling content and design campaigns across various digital channels to maximize engagement.
      </p>
    </div>
    <div className="process-card">
      <strong>Monitoring and Optimization</strong>
      <p>
        Our team continuously tracks campaign performance, analyzing data to optimize for better reach and conversions.
      </p>
    </div>
    <div className="process-card">
      <strong>Reporting and Scaling</strong>
      <p>
        Finally, we provide detailed reports and scale successful campaigns to boost your ROI and brand presence.
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
    src={digitalprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>
    </div>
  );
}

export default Digital_Marketing;
