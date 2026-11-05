import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../components/Home/Aboutus.css";
import portraitImg from "../assets/portrait.webp";
import "../components/Navbar/Navbar.css";
import "../components/Home/hero.css";
import "../components/Home/methodofint.css";
import "../components/Home/ourservices.css";
import "../components/Home/testimonials.css";
import Mobiledevelopment from "../assets/mobile_development.webp";
import pythondev from "../assets/python_development.webp";
import cybersec from "../assets/cyber_security.avif";
import workwithus from "../assets/workwithus.webp";
import Content_writing from "../assets/Content_writing.png";
import Digital_marketing from "../assets/Digital_marketing.webp";
import Devops from "../assets/Devops.webp";
import IotDev from "../assets/iot_development.webp";
import WebsiteDev from "../assets/web_design.webp";
import SeoImg from "../assets/seo_dev.webp";
import QAtesting from "../assets/QAAutomation_testing.webp";
import AIdev from "../assets/AIdev.webp";
import "../components/Home/Works.css";
import personicon from "../assets/person_icon.webp";
import SocialMediaIcons from "../components/socialmediaicons/socialmedia";
import HeroImageAvif960 from "../assets/Image_8_960.avif";
import HeroImageAvif1920 from "../assets/Image_8_1920.avif";
import HeroImageWebp960 from "../assets/Image_8_960.webp";
import HeroImageWebp1920 from "../assets/Image_8_1920.webp";
import HeroImageJpg960 from "../assets/Image_8_960.jpg";
import HeroImageJpg1920 from "../assets/Image_8_1920.jpg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroHome />
      <AboutUs />
      <Ourservices />
      <Works />
      <SocialMediaIcons />
      <Methodofint />
      <Testimonials />
    </>
  );

  function IntroHome() {
    return (
      <div className="HomeSummary">
        <picture>
          <source
            type="image/avif"
            srcSet={`${HeroImageAvif960} 960w, ${HeroImageAvif1920} 1920w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${HeroImageWebp960} 960w, ${HeroImageWebp1920} 1920w`}
            sizes="100vw"
          />
          <img
            src={HeroImageJpg1920}
            srcSet={`${HeroImageJpg960} 960w, ${HeroImageJpg1920} 1920w`}
            sizes="100vw"
            alt="Intro"
            className="background-video"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="video-overlay" />
        <div id="home_heading">
          <h1 id="home_headingtext1">Intellion Technologies Private Limited</h1>
          <p id="home_headingtext2">
            Empowering businesses through intelligent digital transformation
            solutions.
          </p>
        </div>
      </div>
    );
  }

  function Ourservices() {
    const [showMore, setShowMore] = useState(false);

    return (
      <section className="Ourservices-section">
        <h2 className="Ourservices-title">Our Services</h2>

        <div className="Ourservices-grid">
          <Link to="/android-app-development" className="Ourservices-card">
            <img
              src={Mobiledevelopment}
              alt="Mobile Development"
              loading="lazy"
              decoding="async"
            />
            <div className="Ourservices-overlay">
              <p className="Ourservices-category">Android Development</p>
              <h3 className="Ourservices-name">Android Attendance Tracker</h3>
            </div>
          </Link>

          <Link to="/python-development" className="Ourservices-card">
            <img src={pythondev} alt="Python Dev" loading="lazy" decoding="async" />
            <div className="Ourservices-overlay">
              <p className="Ourservices-category">Python Development</p>
              <h3 className="Ourservices-name">Python Data Processing Tool</h3>
            </div>
          </Link>

          <Link to="/content-writer" className="Ourservices-card">
            <img
              src={Content_writing}
              alt="Content Writing"
              loading="lazy"
              decoding="async"
            />
            <div className="Ourservices-overlay">
              <p className="Ourservices-category">Content Writing</p>
              <h3 className="Ourservices-name">SEO Blog Management System</h3>
            </div>
          </Link>

          <Link to="/cyber-security" className="Ourservices-card">
            <img src={cybersec} alt="Cyber Security" loading="lazy" decoding="async" />
            <div className="Ourservices-overlay">
              <p className="Ourservices-category">Cyber Security</p>
              <h3 className="Ourservices-name">
                Vulnerability Scanner Dashboard
              </h3>
            </div>
          </Link>

          <Link to="/devops" className="Ourservices-card">
            <img src={Devops} alt="DevOps" loading="lazy" decoding="async" />
            <div className="Ourservices-overlay">
              <p className="Ourservices-category">DevOps</p>
              <h3 className="Ourservices-name">CI/CD Automation Pipeline</h3>
            </div>
          </Link>

          <Link to="/digital-marketing" className="Ourservices-card">
            <img
              src={Digital_marketing}
              alt="Digital Marketing"
              loading="lazy"
              decoding="async"
            />
            <div className="Ourservices-overlay">
              <p className="Ourservices-category">Digital Marketing</p>
              <h3 className="Ourservices-name">Ad Campaign Analytics Tool</h3>
            </div>
          </Link>

          {showMore && (
            <>
              <Link to="/iot-development" className="Ourservices-card">
                <img src={IotDev} alt="IoT Development" loading="lazy" decoding="async" />
                <div className="Ourservices-overlay">
                  <p className="Ourservices-category">IoT Development</p>
                  <h3 className="Ourservices-name">Smart Device Integration</h3>
                </div>
              </Link>

              <Link to="/website-development" className="Ourservices-card">
                <img
                  src={WebsiteDev}
                  alt="Website Development"
                  loading="lazy"
                  decoding="async"
                />
                <div className="Ourservices-overlay">
                  <p className="Ourservices-category">Website Development</p>
                  <h3 className="Ourservices-name">React/Next.js Portfolios</h3>
                </div>
              </Link>

              <Link to="/seo" className="Ourservices-card">
                <img src={SeoImg} alt="SEO" loading="lazy" decoding="async" />
                <div className="Ourservices-overlay">
                  <p className="Ourservices-category">SEO</p>
                  <h3 className="Ourservices-name">
                    Ranking Optimization Suite
                  </h3>
                </div>
              </Link>

              <Link to="/qa-automation-testing" className="Ourservices-card">
                <img
                  src={QAtesting}
                  alt="QA Automation & Testing"
                  loading="lazy"
                  decoding="async"
                />
                <div className="Ourservices-overlay">
                  <p className="Ourservices-category">
                    QA Automation and Testing
                  </p>
                  <h3 className="Ourservices-name">
                    Ranking Optimization Suite
                  </h3>
                </div>
              </Link>

              <Link to="/ai-app-development" className="Ourservices-card">
                <img src={AIdev} alt="AI Development" loading="lazy" decoding="async" />
                <div className="Ourservices-overlay">
                  <p className="Ourservices-category">AI Development</p>
                  <h3 className="Ourservices-name">
                    Ranking Optimization Suite
                  </h3>
                </div>
              </Link>
            </>
          )}
        </div>

        <div className="view-more-container">
          <button
            className="view-more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </section>
    );
  }

  function Works() {
    return (
      <section className="workwithus-container">
        <div className="workwithus-image">
          <img src={workwithus} alt="Profile Side" loading="lazy" decoding="async" />
        </div>
        <div className="workwithus-content">
          <h2>Wanna work with us?</h2>
          <p>
            At Intellion Technologies, we partner with forward-thinking
            businesses to create impactful digital solutions that drive
            transformation and growth. Whether you're launching a new product,
            scaling your technology stack, or modernizing legacy systems, we
            bring your vision to life with cutting-edge expertise, agile
            execution, and a relentless commitment to excellence. We don’t just
            build software — we build success stories.
          </p>
          <div className="workwithus-buttons">
            <button
              className="btn-orange"
              onClick={() => navigate("/about-us")}
            >
              VIEW PORTFOLIO
            </button>
            <button
              className="btn-outline"
              onClick={() => navigate("/contact-us")}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    );
  }

  function AboutUs() {
    const navigate = useNavigate();
    const handleReadMore = () => {
      navigate("/about-us");
    };

    return (
      <div className="about-container">
        {/* <div className="blue-circle animate-circle"></div> */}
        <div className="images-wrapper animate-images">
          <img
            src={portraitImg}
            alt="portrait"
            className="portrait-img"
            loading="lazy"
            decoding="async"
          />
          {/* <img src={landscapeImg} alt="landscape" className="landscape-img" /> */}
        </div>
        <div className="about-card">
          <h2>About Us</h2>
          <p>
            At Intellion Technologies, we specialize in software, web, and
            mobile app development, delivering tailor-made solutions that
            empower start-ups and blue-chip enterprises alike. With a focus on
            scalability and performance, we help businesses accelerate growth
            through custom software, data-driven marketing, and cloud-based
            services. Our agile development methodology ensures faster project
            turnarounds, seamless collaboration, and timely delivery of
            high-quality software products. As we continue our journey toward
            becoming one of the leading IT and Software companies in the USA, we
            remain committed to offering cost-effective, reliable, and
            innovative solutions for our offshore clients, always delivering
            excellence within budget......
          </p>
          <button className="learn-more-btn-home" onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
    );
  }

  function Methodofint() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLeft, setHasLeft] = useState(true);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const cards = [
      {
        title: "Design",
        description:
          "To supercharge your digital transformation, Intellion Technologies designs and develops powerful, future-ready solutions using advanced communication technologies. We help you stay connected — with your customers, your teams, and the global marketplace — by building smart digital ecosystems that enhance engagement, streamline collaboration, and accelerate growth.",
        route: "/website-development",
        img: "https://images.pexels.com/photos/9849320/pexels-photo-9849320.jpeg",
      },
      {
        title: "Deploy",
        description:
          "With a global presence and a team of certified technicians, Intellion Technologies delivers reliable, scalable, and secure IT solutions tailored to meet your business needs. Our experts leverage the latest technologies to ensure seamless integration, high performance, and continuous support — empowering your business to thrive in a competitive digital landscape.",
        route: "/devops",
        img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      },
      {
        title: "Manage",
        description:
          "Manage with Confidence Whether you're looking for immediate IT support or long-term technology management, Intellion Technologies offers tailored solutions to keep your systems running smoothly. From proactive monitoring to rapid issue resolution, we ensure your IT infrastructure supports your business goals efficiently and securely.",
        route: "/seo",
        img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
      },
    ];

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasLeft) {
            setIsVisible(true);
            setHasLeft(false);
          } else if (!entry.isIntersecting) {
            setIsVisible(false);
            setHasLeft(true);
          }
        },
        {
          threshold: 0.1,
        }
      );

      const current = wrapperRef.current;
      if (current) observer.observe(current);

      return () => {
        if (current) observer.unobserve(current);
      };
    }, [hasLeft]);

    return (
      <div className="method-section" ref={wrapperRef}>
        <h2 className="method-heading">
          Embrace the Edge with Intellion Technologies
        </h2>
        <div className="method-cards-container">
          <div className="method-row">
            {cards.slice(0, 2).map((card, idx) => (
              <div
                className={`method-card ${isVisible ? "active" : ""}`}
                key={idx}
                id={idx === 0 ? "leftanibox2" : "rightanibox2"}
              >
                <div className="method-card-image-wrapper">
                  <div className="method-card-image">
                    <img
                      src={card.img}
                      alt={`${card.title} Icon`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="blue-stripe"></div>
                </div>
                <div className="method-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <button
                    className="learn-more-btn"
                    onClick={() => (window.location.href = card.route)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="method-row">
            {cards.slice(2).map((card, idx) => (
              <div
                className={`method-card ${isVisible ? "active" : ""}`}
                key={idx}
                id="rightanibox2"
              >
                <div className="method-card-image-wrapper">
                  <div className="method-card-image">
                    <img
                      src={card.img}
                      alt={`${card.title} Icon`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="blue-stripe"></div>
                </div>
                <div className="method-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <button
                    className="learn-more-btn"
                    onClick={() => (window.location.href = card.route)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
      {
        name: "May Smith",
        stars: 5,
        title: "Product Manager",
        text: "Intellion Technologies provided exceptional guidance throughout our application development and cloud transformation journey. Their innovative approach enhanced system performance, minimized costs, and shortened delivery cycles. We strongly recommend Intellion for reliable, next-gen technology solutions.",
        image: personicon,
      },
      {
        name: "Bob Perry",
        stars: 5,
        title: "Web Developer",
        text: "Intellion Technologies delivered remarkable expertise for our software solutions and digital innovation efforts. Their cutting-edge strategies boosted our productivity, optimized expenses, and accelerated timelines. We confidently endorse Intellion for trustworthy and forward-thinking technology partnerships.",
        image: personicon,
      },
      {
        name: "Anika Sharma",
        stars: 4,
        title: "Senior Developer",
        text: "The team at Intellion Systems delivered excellent guidance for our app modernization and automation efforts. Their deep knowledge and unique strategies enhanced our workflows, reduced expenses, and accelerated timelines. We strongly suggest Intellion for dependable and future-ready tech support.",
        image: personicon,
      },
      {
        name: "Marry Hudson",
        stars: 3,
        title: "Digital Marketing",
        text: "Intellion Technologies delivered outstanding support for our software development and digital transformation initiatives. Their deep expertise and innovative solutions enhanced our operational efficiency, reduced costs, and accelerated project delivery. We highly recommend Intellion for dependable and cutting-edge technology solutions.",
        image: personicon,
      },
    ];

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    const getVisibleTestimonials = () => {
      const start = currentIndex;
      const end = (currentIndex + 2) % testimonials.length;
      if (start <= end) {
        return testimonials.slice(start, end + 1);
      }
      return [...testimonials.slice(start), ...testimonials.slice(0, end + 1)];
    };

    return (
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="title_testimonials">How We Help People</h2>
          <p className="subtitle-home">
            With outstanding service, tailored guidance, and a commitment to
            collaborative support, our clients proudly share their success
            stories with us!{" "}
          </p>
          <div className="cards-wrapper">
            <button className="nav-arrow left-arrow" onClick={handlePrev}>
              &#10094;
            </button>

            {getVisibleTestimonials().map((item, index) => (
              <div
                className={`testimonial-card ${
                  index === 1 ? "active" : "inactive"
                }`}
                key={index}
              >
                <div className="stars">
                  {Array.from({ length: item.stars }, (_, i) => (
                    <span key={i} className="star">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">{item.text}</p>
                <div className="profile">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="avatar"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="person-info">
                    <span className="title-home">{item.title}</span>
                    <span className="name">{item.name}</span>
                  </div>
                </div>
              </div>
            ))}

            <button className="nav-arrow right-arrow" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
