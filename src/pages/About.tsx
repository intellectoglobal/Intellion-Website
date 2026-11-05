import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import '../components/Home/Aboutus.css';
import "../components/Home/hero.css";
import "../components/AboutUs/introaboutus.css";
import "../components/AboutUs/Howweare.css";
import "../components/AboutUs/informationaboutus.css";
import "../components/AboutUs/ourapproval.css";
import howWeDoItImage from '../assets/about_us_1.webp';
import aboutusintro from '../assets/aboutusintro.webp';
import whyChooseUsImage from '../assets/insuranceimage.webp';
import whatWeDeliverImage from '../assets/about_us_4.webp';
import SocialMediaIcons from '../components/socialmediaicons/socialmedia';

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroHome />
      <InformationAboutus />
      <HowWeAre />
      <SocialMediaIcons />
      <WhyUs />
      <WeDeliver />
      <OurApproval />
    </>
  )

  function IntroHome() {
    return (
      <header
        className="about-intro-section"
            style={{ backgroundImage: `url(${aboutusintro})` }}
        >
        <div className="about-intro-content">
        </div>
        <h1 className="intro-title-about">
          About Us
        </h1>
      </header>
    );
  }

  function InformationAboutus() {
    return (
      <div className="intellion-intro-container">
        <div className="intellion-intro-content">
          <img
            src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg"
            alt="Intellion Technologies"
          />
          <h1 className="intellion-intro-title">We are Intellion Technologies</h1>

          <div className="intellion-intro-text">
            <p>
              Intellion Technologies is a leading software, web, and mobile app development company in the USA. We empower startups and enterprises with innovative software solutions, data-driven marketing, and cloud services. Our agile development process guarantees fast, seamless project delivery and top-quality products that exceed client expectations.

              Founded with a vision to become one of the best IT firms in the USA, our mission is to deliver custom, high-impact, and cost-effective software solutions that fuel business growth globally.</p><p> We focus on building long-term partnerships by understanding your unique challenges and aligning technology with your strategic goals.

                With a talented team of over 50 skilled developers across multiple domains, Intellion Technologies provides expert, tailored solutions worldwide. Our professionals bring diverse industry knowledge and cutting-edge technical expertise to every project. This commitment to excellence has earned us recognition as a top IT service provider in the USA, trusted by clients from startups to Fortune 500 companies.</p>
          </div>
        </div>
      </div>
    );
  }

  function HowWeAre() {
    return (
      <SectionComponent
        title="How We Do It"
        content="At Intellion Technologies, we deliver top-tier software solutions across the USA, with innovation embedded at the heart of everything we do. Guided by strong values, we are committed to helping our clients succeed through smart, scalable, and future-ready technology. We deeply value the people we work with, the long-term partnerships we build, and the positive impact we strive to create. Our collaborative approach, agile mindset, and relentless focus on quality ensure we stay ahead in a fast-changing digital world — driving measurable results, empowering growth, and building lasting value for businesses globally. From ideation to deployment and beyond, we provide end-to-end support to ensure our clients thrive in a competitive market."
        image={howWeDoItImage}
        altText="Our Process"
        reverseLayout={false}
        idPrefix="how"
      />
    );
  }

  function WhyUs() {
    return (
      <SectionComponent
        title="Why Choose Us"
        content="At Intellion Technologies, we are a fast-growing team of skilled and driven IT experts committed to delivering exceptional digital solutions. We empower businesses with high-performance, adaptive, and future-proof services designed to maximize operational efficiency and spark innovation. Our technology offerings are flexible, secure, and strategically engineered to scale with your growth. What sets us apart is our collaborative mindset — we work closely with your team to understand your vision, align with your goals, and deliver results that truly matter. With Intellion, you gain not just a service provider, but a reliable technology partner invested in your success."
        image={whyChooseUsImage}
        altText="Why Choose Us"
        reverseLayout={true}
        idPrefix="why"
      />
    );
  }

  function WeDeliver() {
    return (
      <SectionComponent
        title="What We Deliver"
        content="At Intellion Technologies, our experts craft tailored IT solutions that turn your technology into a powerful engine for business success. We focus on delivering high-performance systems that streamline operations, enhance efficiency, and significantly reduce overhead costs. Our goal is to empower your organization with scalable, secure, and cutting-edge tools that drive real results. By staying ahead with the latest technologies and industry best practices, we help you eliminate bottlenecks, boost productivity, and improve decision-making. With Intellion, you gain the freedom to concentrate on your core business — while we handle the innovation that fuels your growth."
        image={whatWeDeliverImage}
        altText="Our Deliverables"
        reverseLayout={false}
        idPrefix="deliver"
      />
    );
  }
};

function SectionComponent({
  title,
  content,
  image,
  altText,
  reverseLayout,
  idPrefix
}: {
  title: string;
  content: string;
  image: string;
  altText: string;
  reverseLayout?: boolean;
  idPrefix: string;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        target.classList.toggle("section-active", entry.isIntersecting);
        target.classList.toggle("section-inactive", !entry.isIntersecting);
      });
    }, { threshold: 0.3 });

    const elements = [
      document.getElementById(`${idPrefix}-text-box`),
      document.getElementById(`${idPrefix}-image-box`)
    ].filter(Boolean);

    elements.forEach(el => observer.observe(el!));

    return () => observer.disconnect();
  }, [idPrefix]);

  return (
    <div className={`section-container ${reverseLayout ? 'alt-layout' : ''}`}>
      <div className="section-content-wrapper">
        <div className="section-text">
          <div className="text-box" id={`${idPrefix}-text-box`}>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </div>
        <div className="section-image">
          <div className="image-box" id={`${idPrefix}-image-box`}>
            <img
              src={image}
              alt={altText}
              className="section-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/fallback-image.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


const cardData = [
  {
    title: "24/7 Dedicated Support",
    description: "Our dedicated support team is available 24/7 to address your queries, resolve issues, and ensure your business operations run smoothly without disruption. Day or night, we’re just a message away.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2..." fill="#2E5BFF" />
      </svg>
    )
  },
  {
    title: "Accelerated Delivery",
    description: "We prioritize promptness and reliability. Our team works diligently to ensure every project or product is delivered ahead of schedule, helping you gain a competitive edge and reduce time to market.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M19 7H18V6..." fill="#2E5BFF" />
      </svg>
    )
  },
  {
    title: "Expert Leadership Team",
    description: "Led by a team of seasoned professionals, our management ensures strategic oversight, operational excellence, and results-driven execution to deliver success on every project, regardless of size or complexity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2..." fill="#2E5BFF" />
      </svg>
    )
  },
  {
    title: "Rigorous Quality Assurance",
    description: "Quality is ingrained in our process. We implement thorough checks, testing protocols, and continuous improvements to ensure every solution meets the highest standards and exceeds client expectations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#2E5BFF" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Client-Centric Approach",
    description: "Our clients are at the heart of everything we do. From start to finish, we listen, adapt, and deliver services that not only meet your goals but exceed them — ensuring long-term satisfaction and trust.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" stroke="#2E5BFF" strokeWidth="2" />
      </svg>
    )
  },
];

function OurApproval() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < cardData.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const visibleCards = cardData.slice(startIndex, startIndex + visibleCount);

  return (
    <div className='approval_container'>
      <div className="section-header">
        <h1>Our Approach</h1>
        <p className="intro-text">
          There I was on the ship over to America who boon at sea for months now
          and the conditions aren't getting any better? It's just terrible out from
          it's always.
        </p>

        <div className="cards-wrapper">
          <button className="nav-arrow left-arrow" onClick={handlePrev} disabled={startIndex === 0}>
            &#10094;
          </button>

          <div className="services-grid">
            {visibleCards.map((card, idx) => (
              <div key={idx} className="service-card-about-approval slide-in">
                {/* <div className="service-icon">{card.icon}</div> */}
                <div className="service-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-arrow right-arrow" onClick={handleNext} disabled={startIndex + visibleCount >= cardData.length}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
