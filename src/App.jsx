import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">

        {/* Navigation Bar */}
        <nav className="navbar">

          <div className="logo">
            <a href="#home">
              <img src="/sss-logo.png" alt="SSS Services" />
            </a>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            <span>BUILDING SURE, SAFE & SECURE FUTURE</span>
          </h1>
          <h3>
            <span>Integrated Security, Surveillance, Solar Energy
            and IT Infrastructure Solutions.</span>
          </h3>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="about-section">
         <div className="about-section">
    <h2> <span>About Us</span></h2>
  </div>

        <p>
    At SSS SERVICES PVT. LTD., we are more than just a business – we are a
    team dedicated to delivering innovative IT and technology-driven
    solutions. Established in 2007, we specialize in IT Services, SLA
    Ticketing Tools, Network Solutions, Data Centre Solutions, IT Operations,
    Security and Surveillance, and Facility Management Services. With a
    strong commitment to innovation and excellence, we have been delivering
    reliable solutions to our esteemed clients across India.
        </p>

        <h3>Our Mission</h3>

        <p>
    Our mission is to empower businesses and organizations with reliable,
    innovative, and technology-driven solutions that enhance operational
    efficiency, security, and business growth. We strive to exceed client
    expectations through quality service delivery, professional expertise,
    reliability, and long-term value.
        </p>

        <h3>Who We Are</h3>

        <p>
    SSS SERVICES PVT. LTD. is backed by a team of experienced and highly
    skilled professionals with extensive expertise in the IT and
    infrastructure industry. From technical specialists and project
    professionals to dedicated support teams, every member contributes
    towards delivering quality services and ensuring customer satisfaction.
    Our commitment to technology, teamwork, and continuous improvement
    drives us to achieve excellence in every project we undertake.
        </p>

        <h3>What We Do</h3>

        <p>
    We provide a comprehensive range of IT, security, and infrastructure
    solutions designed to meet the evolving requirements of businesses,
    government organizations, and institutions.
        </p>

        <p>
    <strong>SLA Ticketing Tools Services:</strong> We provide efficient
    SLA-based ticketing and service management solutions to streamline
    operations, monitor service requests, ensure timely issue resolution,
    and enhance customer satisfaction.
        </p>

        <p>
    <strong>Network Solution Services:</strong> We design, implement,
    optimize, and secure network infrastructure through customized
    networking solutions that meet the specific requirements of
    organizations.
        </p>

        <p>
    <strong>Data Centre Solutions:</strong> We offer comprehensive data
    centre solutions, including design, deployment, integration, and
    management, ensuring scalability, reliability, security, and
    operational performance.
        </p>

        <p>
    <strong>IT Operations Services:</strong> We help organizations maintain
    seamless IT operations through proactive monitoring, maintenance,
    technical support, and infrastructure management.
  </p>

  <p>
    <strong>Security and Surveillance:</strong> We deliver advanced CCTV
    surveillance, integrated security, and monitoring solutions to protect
    people, assets, and infrastructure through reliable technology and
    professional support.
  </p>

  <p>
    <strong>Facility Management Services:</strong> We provide comprehensive
    facility management solutions focused on improving operational
    efficiency, infrastructure maintenance, service reliability, and
    overall facility performance.
  </p>

  <h3>Why Choose Us</h3>

  <p>
    <strong>Expertise:</strong> With nearly two decades of industry
    experience and a team of qualified professionals, we bring the technical
    knowledge and project management capabilities required to deliver
    successful solutions.
  </p>

  <p>
    <strong>Innovation:</strong> We continuously adopt emerging technologies
    and innovative approaches to provide modern, efficient, and future-ready
    solutions.
  </p>

  <p>
    <strong>Customer Focus:</strong> Customer satisfaction is at the core
    of our business. We believe in understanding client requirements and
    providing customized solutions with dedicated support.
  </p>

  <p>
    <strong>Reliability:</strong> We are committed to delivering dependable,
    high-quality services while maintaining transparency, accountability,
    and long-term client relationships.
  </p>

  <h3>Our Values</h3>

  <p>
    At SSS SERVICES PVT. LTD., our business is guided by the core values of
    integrity, professionalism, transparency, teamwork, and commitment to
    excellence. We believe in building lasting relationships through trust,
    responsible business practices, quality service delivery, and continuous
    improvement.
  </p>

  <h3>Our Journey and Achievements</h3>

  <p>
    Established in 2007, SSS SERVICES PVT. LTD. has steadily expanded its
    presence in the IT, technology, and security surveillance industry.
    Over the years, we have built a strong client base of more than 50
    satisfied clients and developed a workforce of approximately 1,500
    employees on our rolls.
  </p>

  <p>
    Our operational presence extends across multiple states and regions
    in India, including Delhi, Haryana, Uttar Pradesh, Uttarakhand,
    Himachal Pradesh, Maharashtra, Punjab, Karnataka, Tamil Nadu,
    Jammu & Kashmir, West Bengal, Tripura, Odisha, Sikkim, and Bihar.
  </p>

  <p>
    Our commitment to quality, information security, and process excellence
    is supported by our certifications and registrations, including
    ISO 9001:2015, ISO/IEC 27001:2013, CMMI Maturity Level 3, EPF Act
    registration, and ESIC Act registration.
  </p>

  <p>
    Furthermore, we maintain adequate banking facilities and financial
    arrangements, including Performance Bank Guarantees (PBG), Financial
    Bank Guarantees (FBG), and Letters of Credit (LC), through reputed
    banking institutions to support our business operations and project
    commitments.
  </p>
</section>
      {/* Services Section */}
      <section id="services" className="content-section">
        <h2>Our Services</h2>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section">
        <h2>Our Projects</h2>
      </section>
     

{/* Contact Us Section */}
<section id="contact" className="contact-section">

  <div className="contact-heading">
    <h2>Contact <span>Us</span></h2>
  </div>

  <div className="contact-container">

    {/* Left Column - Corporate Address */}
    <div className="contact-column">
      <div className="contact-icon">📍</div>
      <h3>Corporate Office</h3>
      <p><strong>SSS Services Private Limited</strong></p>
      <p>
        Plot-55, Second Floor,<br />
        Sukhrali Enclave, Sector-17,<br />
        Near Atul Kataria Chowk,<br />
        Gurgaon, Haryana – 122001
      </p>
    </div>

    {/* Right Column - Contact Information */}
    <div className="contact-column">

      <div className="contact-icon">📞</div>
      <h3>Call Us</h3>
      <p>+91-124-4236832</p>

      <h3>Toll Free No.</h3>
      <p>18008907242</p>

      <div className="contact-icon">✉️</div>
      <h3>Email Us</h3>
      <p>
        <a href="mailto:project@sssservices.com">
          project@sssservices.com
        </a>
      </p>

    </div>

  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} SSS Services Pvt. Ltd.
      All Rights Reserved.
    </p>
    <p>Designed & Developed by SSS Services Pvt. Ltd.</p>
  </div>

</section>

    </>
  );
}
export default App;
