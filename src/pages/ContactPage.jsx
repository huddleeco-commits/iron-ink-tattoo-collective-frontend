import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Award, Users, Calendar, Instagram, Facebook } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, GlowEffect } from '../effects';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tattooType: '',
    size: '',
    placement: '',
    description: '',
    hasExistingTattoos: '',
    preferredArtist: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation request submitted:', formData);
    // Handle form submission
  };

  const THEME = {
    colors: { 
      primary: '#701a75', 
      accent: '#f0abfc', 
      background: '#fdf4ff', 
      text: '#4a044e', 
      surface: '#f8fafc' 
    },
    fonts: { heading: "'Cormorant Garamond', Georgia, serif", body: "'Lato', system-ui, sans-serif" },
    spacing: { sectionPadding: '80px' }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${THEME.colors.background} 0%, #f3e8ff 100%)`,
      fontFamily: THEME.fonts.body
    },
    hero: {
      background: `linear-gradient(rgba(112, 26, 117, 0.9), rgba(112, 26, 117, 0.95)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '120px 20px 80px',
      textAlign: 'center',
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroTitle: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '20px',
      fontWeight: '400'
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    mainContent: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      maxWidth: '1400px',
      margin: '0 auto'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '60px',
      alignItems: 'start'
    },
    formSection: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '50px',
      boxShadow: '0 20px 40px rgba(112, 26, 117, 0.1)',
      border: `1px solid ${THEME.colors.accent}40`
    },
    formTitle: {
      fontSize: '32px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '10px'
    },
    formSubtitle: {
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px',
      lineHeight: '1.5'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: THEME.colors.text,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    input: {
      padding: '15px 20px',
      border: `2px solid #e5e7eb`,
      borderRadius: '10px',
      fontSize: '16px',
      background: '#fafafa',
      transition: 'all 0.3s ease',
      fontFamily: THEME.fonts.body,
      outline: 'none'
    },
    inputFocus: {
      borderColor: THEME.colors.primary,
      background: '#ffffff',
      boxShadow: `0 0 0 3px ${THEME.colors.primary}20`
    },
    textarea: {
      padding: '15px 20px',
      border: `2px solid #e5e7eb`,
      borderRadius: '10px',
      fontSize: '16px',
      background: '#fafafa',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: THEME.fonts.body,
      outline: 'none'
    },
    select: {
      padding: '15px 20px',
      border: `2px solid #e5e7eb`,
      borderRadius: '10px',
      fontSize: '16px',
      background: '#fafafa',
      fontFamily: THEME.fonts.body,
      outline: 'none'
    },
    submitButton: {
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #9333ea 100%)`,
      color: '#ffffff',
      border: 'none',
      padding: '18px 40px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    businessSection: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '50px',
      boxShadow: '0 20px 40px rgba(112, 26, 117, 0.1)',
      border: `1px solid ${THEME.colors.accent}40`,
      height: 'fit-content'
    },
    businessTitle: {
      fontSize: '32px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '30px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '30px',
      padding: '20px',
      background: THEME.colors.background,
      borderRadius: '12px',
      border: `1px solid ${THEME.colors.accent}30`
    },
    contactIcon: {
      width: '50px',
      height: '50px',
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #9333ea 100%)`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      flexShrink: 0
    },
    contactText: {
      flex: 1
    },
    contactLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '5px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '600'
    },
    contactValue: {
      fontSize: '18px',
      color: THEME.colors.text,
      fontWeight: '500'
    },
    statsSection: {
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #9333ea 100%)`,
      padding: '60px 20px',
      marginTop: '80px',
      borderRadius: '20px',
      color: '#ffffff',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '700',
      marginBottom: '10px',
      display: 'block'
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    artistsSection: {
      marginTop: '60px'
    },
    artistsTitle: {
      fontSize: '28px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '30px'
    },
    artistGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px'
    },
    artistCard: {
      background: THEME.colors.background,
      borderRadius: '15px',
      padding: '25px',
      border: `1px solid ${THEME.colors.accent}30`,
      textAlign: 'center'
    },
    artistName: {
      fontSize: '20px',
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '8px'
    },
    artistSpecialty: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '5px'
    },
    socialSection: {
      marginTop: '40px',
      paddingTop: '40px',
      borderTop: `1px solid ${THEME.colors.accent}30`
    },
    socialTitle: {
      fontSize: '20px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.primary,
      marginBottom: '20px'
    },
    socialGrid: {
      display: 'flex',
      gap: '20px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 20px',
      background: THEME.colors.background,
      borderRadius: '10px',
      border: `1px solid ${THEME.colors.accent}30`,
      textDecoration: 'none',
      color: THEME.colors.text,
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <ScrollReveal>
          <h1 style={styles.heroTitle}>Begin Your Art Journey</h1>
          <p style={styles.heroSubtitle}>
            Ready to transform your vision into stunning body art? Our award-winning artists are here to guide you through every step of the process.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Content */}
      <section style={styles.mainContent}>
        <div style={styles.contentGrid}>
          {/* Consultation Form */}
          <ScrollReveal>
            <GlowEffect color={THEME.colors.primary}>
              <div style={styles.formSection}>
                <h2 style={styles.formTitle}>Free Consultation</h2>
                <p style={styles.formSubtitle}>
                  Tell us about your tattoo vision. We'll create a digital mockup and discuss your ideas in our comfortable studio environment.
                </p>

                <form style={styles.form} onSubmit={handleSubmit}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Tattoo Style Preference</label>
                    <select
                      name="tattooType"
                      value={formData.tattooType}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">Select a style</option>
                      <option value="realism">Realism</option>
                      <option value="japanese">Japanese Traditional</option>
                      <option value="fineline">Fine Line</option>
                      <option value="blackwork">Blackwork</option>
                      <option value="watercolor">Watercolor</option>
                      <option value="geometric">Geometric</option>
                      <option value="traditional">American Traditional</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Approximate Size</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">Select size</option>
                      <option value="small">Small (2-4 inches)</option>
                      <option value="medium">Medium (4-8 inches)</option>
                      <option value="large">Large (8-12 inches)</option>
                      <option value="sleeve">Sleeve/Large Piece</option>
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Placement on Body</label>
                    <input
                      type="text"
                      name="placement"
                      value={formData.placement}
                      onChange={handleInputChange}
                      style={styles.input}
                      placeholder="e.g., forearm, shoulder, back"
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Describe Your Vision</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      style={styles.textarea}
                      placeholder="Tell us about your tattoo idea, inspiration, colors, themes, or any reference images you have..."
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Do you have existing tattoos?</label>
                    <select
                      name="hasExistingTattoos"
                      value={formData.hasExistingTattoos}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">Please select</option>
                      <option value="first">This will be my first tattoo</option>
                      <option value="few">I have 1-3 tattoos</option>
                      <option value="collector">I'm a tattoo collector (4+)</option>
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Preferred Artist (Optional)</label>
                    <select
                      name="preferredArtist"
                      value={formData.preferredArtist}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">No preference</option>
                      <option value="maya">Maya Chen - Realism Specialist</option>
                      <option value="diego">Diego Rodriguez - Japanese Traditional</option>
                      <option value="alex">Alex Thompson - Fine Line & Geometric</option>
                      <option value="zara">Zara Kim - Watercolor & Abstract</option>
                    </select>
                  </div>

                  <button type="submit" style={styles.submitButton}>
                    Book Free Consultation
                  </button>
                </form>
              </div>
            </GlowEffect>
          </ScrollReveal>

          {/* Business Information */}
          <ScrollReveal>
            <div style={styles.businessSection}>
              <h2 style={styles.businessTitle}>Visit Our Studio</h2>

              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <MapPin size={24} />
                </div>
                <div style={styles.contactText}>
                  <div style={styles.contactLabel}>Address</div>
                  <div style={styles.contactValue}>
                    847 Art District Boulevard<br />
                    Portland, OR 97205
                  </div>
                </div>
              </div>

              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Phone size={24} />
                </div>
                <div style={styles.contactText}>
                  <div style={styles.contactLabel}>Call or Text</div>
                  <div style={styles.contactValue}>(503) 555-SKIN</div>
                </div>
              </div>

              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Mail size={24} />
                </div>
                <div style={styles.contactText}>
                  <div style={styles.contactLabel}>Email</div>
                  <div style={styles.contactValue}>hello@artmeetsskin.studio</div>
                </div>
              </div>

              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Clock size={24} />
                </div>
                <div style={styles.contactText}>
                  <div style={styles.contactLabel}>Studio Hours</div>
                  <div style={styles.contactValue}>
                    Tuesday - Saturday: 11am - 8pm<br />
                    Sunday - Monday: Closed
                  </div>
                </div>
              </div>

              {/* Featured Artists */}
              <div style={styles.artistsSection}>
                <h3 style={styles.artistsTitle}>Our Award-Winning Artists</h3>
                <div style={styles.artistGrid}>
                  <div style={styles.artistCard}>
                    <div style={styles.artistName}>Maya Chen</div>
                    <div style={styles.artistSpecialty}>Realism & Portraits</div>
                    <div style={styles.artistSpecialty}>12 years experience</div>
                  </div>
                  <div style={styles.artistCard}>
                    <div style={styles.artistName}>Diego Rodriguez</div>
                    <div style={styles.artistSpecialty}>Japanese Traditional</div>
                    <div style={styles.artistSpecialty}>15 years experience</div>
                  </div>
                  <div style={styles.artistCard}>
                    <div style={styles.artistName}>Alex Thompson</div>
                    <div style={styles.artistSpecialty}>Fine Line & Geometric</div>
                    <div style={styles.artistSpecialty}>8 years experience</div>
                  </div>
                  <div style={styles.artistCard}>
                    <div style={styles.artistName}>Zara Kim</div>
                    <div style={styles.artistSpecialty}>Watercolor & Abstract</div>
                    <div style={styles.artistSpecialty}>10 years experience</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div style={styles.socialSection}>
                <h3 style={styles.socialTitle}>Follow Our Work</h3>
                <div style={styles.socialGrid}>
                  <a href="#" style={styles.socialLink}>
                    <Instagram size={20} />
                    <span>@artmeetsskin</span>
                  </a>
                  <a href="#" style={styles.socialLink}>
                    <Facebook size={20} />
                    <span>Art Meets Skin</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <ScrollReveal>
          <div style={styles.statsSection}>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <AnimatedCounter end={12} suffix="+" duration={2} style={styles.statNumber} />
                <div style={styles.statLabel}>Years Creating Art</div>
              </div>
              <div style={styles.statItem}>
                <AnimatedCounter end={2800} suffix="+" duration={2.5} style={styles.statNumber} />
                <div style={styles.statLabel}>Satisfied Clients</div>
              </div>
              <div style={styles.statItem}>
                <AnimatedCounter end={4} suffix="" duration={1.5} style={styles.statNumber} />
                <div style={styles.statLabel}>Master Artists</div>
              </div>
              <div style={styles.statItem}>
                <AnimatedCounter end={99} suffix="%" duration={2} style={styles.statNumber} />
                <div style={styles.statLabel}>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ContactPage;