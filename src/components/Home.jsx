import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import {
  navLinks,
  stats,
  aboutCards,
  features,
  services,
  useCases,
  testimonials,
  contactInfo,
  teamMembers,
  pricingPlans,
  faqs
} from './homeData';
import './Home.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className={`navbar ${darkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="logo-container">
            <div className="nav-logo">
              <img src="./zentro_logo.jpg" alt="logo" className='logo-icon' />
            </div>
            <span className="logo-text">Zentron.Lab</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${darkMode ? 'dark' : 'light'} ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button
              className="mobile-nav-link"
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Ultimate <span>Data Labeling</span> Platform
            </h1>
            <p className="hero-description">
              Accurate data labeling services at the most competitive rates in the global marketplace.
              Power your AI models with high-quality annotated data.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('services')}
              >
                Learn More
              </button>
            </div>
            <div className="hero-trust-badges">
              <div className="trust-badge">
                <span>✓</span> ISO 27001 Certified
              </div>
              <div className="trust-badge">
                <span>✓</span> GDPR Compliant
              </div>
              <div className="trust-badge">
                <span>✓</span> 99.5% Accuracy
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <video 
                ref={videoRef}
                poster="https://via.placeholder.com/600x400"
                className="hero-video"
                loop
                muted
              >
                <source src="https://example.com/demo-video.mp4" type="video/mp4" />
              </video>
              <button 
                className="video-play-btn"
                onClick={toggleVideo}
              >
                {isVideoPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <h2 className="section-title">Trusted By Industry Leaders</h2>
          <div className="clients-grid">
            <div className="client-logo">TechAuto</div>
            <div className="client-logo">MediScan</div>
            <div className="client-logo">AgriVision</div>
            <div className="client-logo">RetailAI</div>
            <div className="client-logo">Urban Robotics</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Zentron.Lab</h2>
          <p className="about-description">
            Zentron.Lab is a premier data annotation company specializing in high-quality training data 
            for AI and machine learning applications across various industries. With over 5 years of 
            experience, we've helped more than 50 clients worldwide to accelerate their AI development.
          </p>
          <div className="about-cards">
            {aboutCards.map((card, index) => (
              <div key={index} className="about-card">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Leadership</h2>
          <p className="section-subtitle">
            Our team combines deep technical expertise with industry knowledge to deliver exceptional results.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  {member.linkedin && <a href={member.linkedin}><FaLinkedin /></a>}
                  {member.twitter && <a href={member.twitter}><FaTwitter /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why-us" className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Zentron.Lab</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.emoji}</div>
                <h3>{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive data annotation solutions tailored to your specific needs.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="service-pricing">
                  Starting at ${service.startingPrice}/image
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="section use-cases-section">
        <div className="container">
          <h2 className="section-title">Industry Applications</h2>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card">
                <h3>{useCase.title}</h3>
                <p>{useCase.content}</p>
                <div className="use-case-examples">
                  <h4>Example Projects:</h4>
                  <ul>
                    {useCase.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Flexible plans to fit projects of any size
          </p>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="featured-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">${plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="price-description">{plan.description}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            ))}
          </div>
          <div className="pricing-custom">
            <h3>Need a custom solution?</h3>
            <p>Contact us for enterprise pricing and volume discounts</p>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>Still have questions? We're happy to help!</p>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-method">
                <div className="contact-icon"><FaPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Address</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              <div className="contact-hours">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" className="form-input" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-textarea" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for the latest in AI and data labeling</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-col">
              <div className="footer-logo">
                <div className="footer-logo-icon">ZL</div>
                <span>Zentron.Lab</span>
              </div>
              <p className="footer-description">
                Accelerating AI development through high-quality data annotation services.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><FaLinkedin /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaFacebook /></a>
                <a href="#" className="social-link"><FaGithub /></a>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-links-title">Quick Links</h3>
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-links-title">Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-links-title">Contact</h3>
              <ul className="footer-links">
                <li><a href={`tel:${contactInfo.phone}`} className="footer-link">{contactInfo.phone}</a></li>
                <li><a href={`mailto:${contactInfo.email}`} className="footer-link">{contactInfo.email}</a></li>
                <li><a href="#" className="footer-link">{contactInfo.address}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Zentron.Lab. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;