import { useEffect, useState } from "react";
import contentprocess from "../../assets/content_process.webp";
import contactusintro from "../../assets/androidintro2.webp";
import contentintro from "../../assets/content_intro.webp";
import contentwhyus from "../../assets/content_whyus.webp";
import contentapproach from "../../assets/content_approach.webp";
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

function Content() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContentWriter />
      <AndroidIntroPara />
      <AndroidWhyUs />
      <AndroidMethods />
      <AndroidProcess />
      <SocialMediaIcons />
    </>
  );
}

function ContentWriter() {
  return (
    <header
      className="intro-section"
      style={{ backgroundImage: `url(${contactusintro})` }}
    >
      <div id="HS_heading">
        <h1 id="HS_headingtext1">Content Writing</h1>
        <p id="HS_headingtext2">Turn Your Ideas Into Engaging Content Writing Experiences</p>
      </div>
    </header>
  );
}

function AndroidIntroPara() {
  return (
    <section className="android-app-container">
      <div className="android-app-image">
        <img src={contentintro} alt="Android one image" />
      </div>
      <div className="android-app-content">
        <h1>Content Writer</h1>
        <p>
          At Intellion Technologies Pvt Ltd, we excel in providing high-quality content writing services tailored to meet the unique needs of diverse industries. Our team of skilled writers crafts compelling, clear, and engaging content that effectively communicates your brand’s message and resonates with your target audience. From website copy and blog posts to technical documentation, whitepapers, and marketing materials, we follow a strategic approach to ensure accuracy, relevance, and SEO optimization. We serve a variety of sectors, including technology, healthcare, finance, and e-commerce, delivering customized content solutions that enhance your digital presence and support sustainable business growth. By focusing on well-researched, persuasive, and audience-focused writing, we empower organizations to build trust, increase engagement, and drive measurable results in a competitive marketplace. Our commitment to quality and originality ensures every piece of content strengthens your brand’s voice and drives meaningful customer connections.
        </p>
      </div>
    </section>
  );
}

function AndroidWhyUs() {
  return (
    <section className="android-app-container reverse-layout">
      <div className="android-app-image">
        <img src={contentwhyus} alt="Android Development" />
      </div>
      <div className="android-app-content">
        <h1>Why Us?</h1>
        <p>
          At Intellion Technologies Pvt Ltd, we excel in delivering innovative and high-quality technology solutions tailored to address diverse business challenges. Our team of seasoned experts leverages the latest technologies to design and develop user-centric, feature-rich applications that boost customer engagement, operational efficiency, and digital transformation.
          From initial concept through to deployment and maintenance, we follow a methodical and agile development process that ensures seamless performance, robust security, and scalable architecture. We serve multiple industries, offering customized solutions including enterprise software, cloud platforms, AI-driven applications, and mobile solutions designed to meet evolving market demands.
          By focusing on creating solutions that are visually appealing, responsive, and highly reliable, we empower businesses to strengthen their digital presence and achieve sustainable growth in competitive markets. Our commitment to excellence and innovation enables organizations to stay ahead by delivering exceptional user experiences, measurable business results, and long-term value.
        </p>
      </div>
    </section>
  );
}

function AndroidMethods() {
const services = [
  {
    title: "Strategic Content Development",
    description: "We craft tailored content strategies and compelling narratives that reflect your brand voice and connect with your target audience.",
    icon: customandroid,
  },
  {
    title: "Content Maintenance & Optimization",
    description: "Deliver consistent content updates and SEO enhancements to keep your digital presence fresh, relevant, and engaging.",
    icon: maintainsandroid,
  },
  {
    title: "Cross-Platform Content Integration",
    description: "Amplify your reach by integrating content across blogs, newsletters, social media, and third-party platforms for unified messaging.",
    icon: performance,
  },
  {
    title: "UX-Focused Copywriting",
    description: "Craft concise, user-driven copy that complements UI design, guiding users intuitively and encouraging meaningful interaction.",
    icon: security,
  },
  {
    title: "Content for Wearables & Micro Interfaces",
    description: "Write clear, impactful micro-content tailored for wearables and compact devices, ensuring effective communication in limited space.",
    icon: mobile,
  },
  {
    title: "Content QA & Consistency",
    description: "Ensure editorial excellence through meticulous proofreading, consistency checks, and content audits across all touchpoints.",
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
      <h2>Content Writing Approach</h2>
      <div className="services-wrapper">
        <img
          src={contentapproach}
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
    Our Step-By-Step <strong>Content Writing Process</strong>
  </h2>
  <div className="android-process-cards">
    <div className="process-card">
      <strong>Research And Ideation</strong>
      <p>
        We begin by understanding your target audience, researching the topic, and brainstorming ideas to craft compelling content.
      </p>
    </div>
    <div className="process-card">
      <strong>Writing And Drafting</strong>
      <p>
        Our writers create engaging, clear, and original content aligned with your goals and brand voice.
      </p>
    </div>
    <div className="process-card">
      <strong>Editing And Proofreading</strong>
      <p>
        The content is thoroughly reviewed to ensure it is error-free, coherent, and optimized for SEO.
      </p>
    </div>
    <div className="process-card">
      <strong>Delivery And Revisions</strong>
      <p>
        We deliver the final content on time and make revisions based on your feedback to ensure full satisfaction.
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
          src={contentprocess}
          alt="Android Development Process"
          className="android-process-image"
        />
      </div>
    </div>
  );
}

export default Content;
