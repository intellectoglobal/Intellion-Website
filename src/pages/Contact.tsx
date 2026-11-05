import { useEffect, useState } from "react";
import "../components/ContactUs/contactusform.css";
import "../components/ContactUs/contactusmapsection.css";
import "../components/ContactUs/Contactuscommonfile.css";
import contactusintro from "../assets/contactus_intro1.webp";
import contactusaddress from "../assets/contactus_address.webp";
import SocialMediaIcons from '../components/socialmediaicons/socialmedia';

function Contactus() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ContactUsIntroHome />
            <Enrollbox />
            <ContactUsMapSection />
            <SocialMediaIcons />
        </>
    );
}

function ContactUsIntroHome() {
    return (
        <header
            className="intro-section-contact"
            style={{ backgroundImage: `url(${contactusintro})` }}
        >
            <div className="intro-content">
            </div>
            <h1 className="intro-title-contact">
                Contact Us
            </h1>
        </header>
    );
}

function Enrollbox() {
    const iconStyle = {
        width: "20px",
        height: "20px",
        marginRight: "10px",
        verticalAlign: "middle",
    };

    return (
        <div className="enrollcontainer">
            <div className="enroll_section">
                {/* <h2 id="enroll_h2">Contact Us</h2> */}
                <div className="contact-info-box">
                    <p className="contact-line">
                        <span className="icon-label">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/9512/9512315.png"
                                alt="Office Icon"
                                style={iconStyle}
                            />
                            <strong>Office:</strong>
                        </span>
                        <br />
                        <span style={{ marginTop: "0px", paddingLeft: '50px', display: 'inline-block' }} />
                        7/15, 2nd Floor, Velachery Main Road,<br />
                        <span style={{ marginTop: "0px", paddingLeft: '50px', display: 'inline-block' }} />
                        United Colony, Medavakkam,<br />
                        <span style={{ paddingLeft: '50px', display: 'inline-block' }} />
                        Beside Latha Super Bazaar & above Ibaco,<br />
                        <span style={{ paddingLeft: '50px', display: 'inline-block' }} />
                        Chennai, Tamil Nadu : 600100<br />
                    </p>

                    <p className="contact-line">
                        <span className="icon-label">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/483/483947.png"
                                alt="Phone Icon"
                                style={iconStyle}
                            />
                            <strong>Phone:</strong>
                        </span>
                        <br />
                        <span style={{ paddingLeft: '50px', display: 'inline-block' }}>
                            +91 91765 33933
                        </span>
                    </p>

                    <p className="contact-line">
                        <span className="icon-label">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                                alt="Email Icon"
                                style={iconStyle}
                            />
                            <strong>Email:</strong>
                        </span>
                        <br />
                        <span style={{ paddingLeft: '50px', display: 'inline-block' }}>
                            <a href="mailto:hr@intellecto.co.in">hr@intellecto.co.in</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

function ContactUsMapSection() {
    return (
        <div className="enroll_section_text">
            <div className="contactus_imgbox">
                <img
                    src={contactusaddress}
                    alt="Contact Us Illustration"
                    className="contactus_img"
                />
                </div>
                <div className="map-container">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.797705187501!2d80.1859552!3d12.9207197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d86d341ec4f%3A0x8c920afdb82d07de!2sIntellecto%20Global%20Services!5e0!3m2!1sen!2sin!4v1744208644442!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '10px' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
    );
}

export default Contactus;
