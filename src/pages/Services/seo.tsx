import { useEffect, useState } from "react";
import contactusintro from "../../assets/androidintro2.webp";
import seoprocess from "../../assets/seoprocess.webp";
import seointro from "../../assets/seointro.webp";
import seowhyus from "../../assets/seowhyus.webp";
import seoapproach from "../../assets/seoapproach.webp";
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

function SEODevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO />
            <AndroidIntroPara />
            <AndroidWhyUs />
            <AndroidMethods />
            <AndroidProcess />
            <SocialMediaIcons />
        </>
    );
}

function SEO() {
    return (
      <header
        className="intro-section"
        style={{ backgroundImage: `url(${contactusintro})` }}
      >
            <div id="HS_heading">
                <h1 id="HS_headingtext1">SEO</h1>
                <p id="HS_headingtext2">Turn Your Ideas Into Engaging SEO Experiences</p>
            </div>
      </header>
    );
  }

  function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={seointro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>SEO Development</h1>
<p>
  Intellion Technologies excels in delivering high-quality SEO solutions tailored to meet diverse business goals. Our team of expert strategists leverages the latest tools and best practices to optimize websites for search engines, improving visibility and driving organic traffic. From detailed keyword research to on-page and off-page optimization, we follow a systematic approach to ensure higher rankings, better user engagement, and measurable ROI. We cater to various industries, offering customized SEO strategies such as local SEO, e-commerce SEO, and content marketing tailored to your business needs. By focusing on data-driven tactics and continuous performance tracking, we empower businesses to enhance their online presence and achieve sustainable growth in a competitive digital landscape. We utilize advanced analytics and competitor analysis to tailor strategies that boost your website’s authority and relevance. Our continuous monitoring and adjustments ensure lasting improvements in search rankings and user engagement.
</p>
      </div>
    </section>
  );
}


  function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={seowhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
<p>
  Intellion Technologies specializes in delivering effective SEO solutions designed to improve your website’s visibility and drive targeted organic traffic. Our team of SEO experts utilizes the latest techniques and best practices to optimize your site for search engines and user experience.
  From thorough keyword research to on-page optimization, content strategy, and link building, we follow a data-driven approach to maximize your rankings and ROI. We serve clients across industries, tailoring SEO strategies to align with unique business goals and market demands.
  By focusing on sustainable SEO growth, transparent reporting, and continuous performance improvements, we empower businesses to dominate search results, enhance brand authority, and achieve measurable digital marketing success in competitive environments. Our SEO team stays updated with ever-changing algorithms to ensure your website maintains top rankings. We combine technical expertise with creative strategies to boost conversions and foster long-term online growth and brand loyalty.
</p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "On-Page SEO",
    description: "Optimize individual pages for better rankings with keyword-rich content, meta tags, and improved HTML structure.",
    icon: customandroid,
  },
  {
    title: "Technical SEO",
    description: "Boost crawlability and indexing with structured data, optimized site architecture, and performance enhancements.",
    icon: maintainsandroid,
  },
  {
    title: "Off-Page SEO",
    description: "Improve domain authority through high-quality backlinks, influencer outreach, and content promotion strategies.",
    icon: performance,
  },
  {
    title: "Local SEO",
    description: "Enhance visibility for local searches through Google Business Profile optimization, citations, and reviews.",
    icon: security,
  },
  {
    title: "SEO Audits",
    description: "Conduct comprehensive audits to identify issues and opportunities for improving your website’s search performance.",
    icon: mobile,
  },
  {
    title: "Content Strategy",
    description: "Create high-quality, keyword-targeted content that attracts organic traffic and engages your audience.",
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
      <h2>Search Engine Optimization Approach</h2>
      <div className="services-wrapper">
        <img
          src={seoapproach}
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
    Our Step-By-Step <strong>SEO Optimization Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Research And Analysis</strong>
      <p>
        We begin by researching your industry, competitors, and target keywords to build a strong SEO strategy.
      </p>
    </div>
    <div className="process-card">
      <strong>On-Page Optimization</strong>
      <p>
        Next, we optimize your website’s content, meta tags, URL structure, and internal linking to improve search visibility.
      </p>
    </div>
    <div className="process-card">
      <strong>Technical SEO & Content</strong>
      <p>
        Our team addresses site speed, mobile-friendliness, schema markup, and produces high-quality content to boost rankings.
      </p>
    </div>
    <div className="process-card">
      <strong>Monitoring & Reporting</strong>
      <p>
        Finally, we monitor your SEO performance with analytics tools and provide regular reports with actionable insights.
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
    src={seoprocess}
    alt="Android Development Process"
    className="android-process-image"
  />
</div>

    </div>
  );
}

export default SEODevelopment;
