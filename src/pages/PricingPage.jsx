import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Shield, Star, Users, Clock, Palette, Eye, Sparkles } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

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

const PricingPage = () => {
  const styles = {
    container: {
      fontFamily: THEME.fonts.body,
      color: THEME.colors.text,
      backgroundColor: THEME.colors.background,
      minHeight: '100vh'
    },
    hero: {
      background: 'linear-gradient(135deg, rgba(112, 26, 117, 0.95), rgba(74, 4, 78, 0.9))',
      backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative'
    },
    heroContent: {
      maxWidth: '900px',
      padding: '0 20px',
      zIndex: 2
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '64px',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      letterSpacing: '-1px'
    },
    heroSubtitle: {
      fontSize: '24px',
      color: '#ffffff',
      opacity: 0.9,
      marginBottom: '40px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.4
    },
    heroCta: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '18px 40px',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 8px 25px rgba(240, 171, 252, 0.3)'
    },
    statsBar: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '30px 0',
      marginTop: '60px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '30px'
    },
    stat: {
      textAlign: 'center',
      color: '#ffffff'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '700',
      display: 'block',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.8,
      marginTop: '5px'
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '48px',
      fontWeight: '300',
      textAlign: 'center',
      marginBottom: '20px',
      color: THEME.colors.primary
    },
    sectionSubtitle: {
      fontSize: '18px',
      textAlign: 'center',
      opacity: 0.7,
      marginBottom: '60px',
      maxWidth: '600px',
      margin: '0 auto 60px'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginBottom: '80px'
    },
    serviceCard: {
      backgroundColor: THEME.colors.surface,
      borderRadius: '20px',
      padding: '40px',
      border: '2px solid transparent',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    serviceCardPremium: {
      background: 'linear-gradient(135deg, #701a75, #a21caf)',
      color: '#ffffff',
      transform: 'scale(1.05)',
      boxShadow: '0 20px 40px rgba(112, 26, 117, 0.3)'
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '30px'
    },
    serviceIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      backgroundColor: THEME.colors.accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: THEME.colors.primary
    },
    serviceTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '28px',
      fontWeight: '400',
      margin: 0
    },
    serviceDescription: {
      fontSize: '16px',
      opacity: 0.8,
      marginBottom: '30px',
      lineHeight: 1.6
    },
    priceRange: {
      fontSize: '32px',
      fontWeight: '700',
      color: THEME.colors.accent,
      marginBottom: '30px',
      fontFamily: THEME.fonts.heading
    },
    serviceFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 30px 0'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '12px',
      fontSize: '15px'
    },
    featureIcon: {
      width: '20px',
      height: '20px',
      color: THEME.colors.accent
    },
    bookingCta: {
      width: '100%',
      padding: '15px',
      backgroundColor: 'transparent',
      border: `2px solid ${THEME.colors.accent}`,
      color: THEME.colors.accent,
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center'
    },
    premiumBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '8px 15px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    artistsSection: {
      backgroundColor: THEME.colors.surface,
      margin: '0 -20px',
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    artistsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    artistCard: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    artistImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover'
    },
    artistInfo: {
      padding: '25px'
    },
    artistName: {
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      fontWeight: '400',
      marginBottom: '8px',
      color: THEME.colors.primary
    },
    artistSpecialty: {
      fontSize: '14px',
      color: THEME.colors.accent,
      fontWeight: '600',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    artistExperience: {
      fontSize: '15px',
      opacity: 0.7,
      lineHeight: 1.5
    },
    consultationSection: {
      backgroundColor: THEME.colors.primary,
      color: '#ffffff',
      textAlign: 'center',
      padding: '80px 20px',
      margin: '0 -20px'
    },
    consultationTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '42px',
      fontWeight: '300',
      marginBottom: '20px'
    },
    consultationText: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    consultationCta: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '20px 50px',
      borderRadius: '50px',
      fontSize: '20px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginTop: '60px'
    },
    featureCard: {
      textAlign: 'center',
      padding: '30px 20px'
    },
    featureCardIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: THEME.colors.accent,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      color: THEME.colors.primary
    },
    featureCardTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '20px',
      marginBottom: '15px',
      color: THEME.colors.primary
    },
    featureCardText: {
      fontSize: '15px',
      opacity: 0.7,
      lineHeight: 1.5
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Artistry. Precision. Your Story.</h1>
          <p style={styles.heroSubtitle}>
            Award-winning tattoo artists specializing in realism, Japanese traditional, and fine-line work. 
            Featured in Inked Magazine with 12+ years of transforming skin into masterpieces.
          </p>
          <Link to="/book" style={styles.heroCta}>
            <Calendar size={20} />
            Book Free Consultation
          </Link>
          
          <div style={styles.statsBar}>
            <div style={styles.stat}>
              <AnimatedCounter end={12} suffix="+" duration={2} style={styles.statNumber} />
              <div style={styles.statLabel}>Years Experience</div>
            </div>
            <div style={styles.stat}>
              <AnimatedCounter end={2700} suffix="+" duration={2.5} style={styles.statNumber} />
              <div style={styles.statLabel}>Satisfied Clients</div>
            </div>
            <div style={styles.stat}>
              <AnimatedCounter end={4} suffix="" duration={1.5} style={styles.statNumber} />
              <div style={styles.statLabel}>Award-Winning Artists</div>
            </div>
            <div style={styles.stat}>
              <AnimatedCounter end={98} suffix="%" duration={2} style={styles.statNumber} />
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tattoo Services</h2>
          <p style={styles.sectionSubtitle}>
            Premium custom tattoo work with free digital mockups, vegan-friendly inks, and hospital-grade sterilization in private studio rooms.
          </p>
          
          <div style={styles.servicesGrid}>
            <TiltCard>
              <div style={styles.serviceCard}>
                <div style={styles.serviceHeader}>
                  <div style={styles.serviceIcon}>
                    <Palette size={24} />
                  </div>
                  <h3 style={styles.serviceTitle}>Small Pieces</h3>
                </div>
                <p style={styles.serviceDescription}>
                  Perfect for first-timers or adding to your collection. Simple designs, symbols, text, and small detailed work.
                </p>
                <div style={styles.priceRange}>$150 - $400</div>
                <ul style={styles.serviceFeatures}>
                  <li style={styles.featureItem}>
                    <Star style={styles.featureIcon} size={16} />
                    2-4 hours session time
                  </li>
                  <li style={styles.featureItem}>
                    <Eye style={styles.featureIcon} size={16} />
                    Free digital mockup
                  </li>
                  <li style={styles.featureItem}>
                    <Shield style={styles.featureIcon} size={16} />
                    Vegan-friendly inks
                  </li>
                  <li style={styles.featureItem}>
                    <Users style={styles.featureIcon} size={16} />
                    Private studio room
                  </li>
                </ul>
                <Link to="/book" style={styles.bookingCta}>Book Consultation</Link>
              </div>
            </TiltCard>

            <TiltCard>
              <GlowEffect color={THEME.colors.accent}>
                <div style={{...styles.serviceCard, ...styles.serviceCardPremium}}>
                  <div style={styles.premiumBadge}>Most Popular</div>
                  <div style={styles.serviceHeader}>
                    <div style={{...styles.serviceIcon, backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff'}}>
                      <Award size={24} />
                    </div>
                    <h3 style={styles.serviceTitle}>Medium Pieces</h3>
                  </div>
                  <p style={styles.serviceDescription}>
                    Detailed artwork with shading, color work, and intricate designs. Our specialty in realism and fine-line techniques.
                  </p>
                  <div style={{...styles.priceRange, color: '#ffffff'}}>$400 - $800</div>
                  <ul style={styles.serviceFeatures}>
                    <li style={styles.featureItem}>
                      <Star style={{...styles.featureIcon, color: '#ffffff'}} size={16} />
                      4-6 hours session time
                    </li>
                    <li style={styles.featureItem}>
                      <Eye style={{...styles.featureIcon, color: '#ffffff'}} size={16} />
                      Detailed digital mockup
                    </li>
                    <li style={styles.featureItem}>
                      <Shield style={{...styles.featureIcon, color: '#ffffff'}} size={16} />
                      Premium color palette
                    </li>
                    <li style={styles.featureItem}>
                      <Clock style={{...styles.featureIcon, color: '#ffffff'}} size={16} />
                      Priority booking
                    </li>
                  </ul>
                  <Link to="/book" style={{...styles.bookingCta, backgroundColor: '#ffffff', color: THEME.colors.primary, border: '2px solid #ffffff'}}>Book Consultation</Link>
                </div>
              </GlowEffect>
            </TiltCard>

            <TiltCard>
              <div style={styles.serviceCard}>
                <div style={styles.serviceHeader}>
                  <div style={styles.serviceIcon}>
                    <Sparkles size={24} />
                  </div>
                  <h3 style={styles.serviceTitle}>Large Pieces</h3>
                </div>
                <p style={styles.serviceDescription}>
                  Full sleeves, back pieces, and large-scale masterpieces. Multi-session projects with our master artists.
                </p>
                <div style={styles.priceRange}>$800 - $2500+</div>
                <ul style={styles.serviceFeatures}>
                  <li style={styles.featureItem}>
                    <Star style={styles.featureIcon} size={16} />
                    Multiple sessions
                  </li>
                  <li style={styles.featureItem}>
                    <Eye style={styles.featureIcon} size={16} />
                    Complete design package
                  </li>
                  <li style={styles.featureItem}>
                    <Award style={styles.featureIcon} size={16} />
                    Master artist exclusive
                  </li>
                  <li style={styles.featureItem}>
                    <Shield style={styles.featureIcon} size={16} />
                    Extended aftercare support
                  </li>
                </ul>
                <Link to="/book" style={styles.bookingCta}>Book Consultation</Link>
              </div>
            </TiltCard>
          </div>
        </section>
      </ScrollReveal>

      {/* Artists Section */}
      <ScrollReveal>
        <section style={styles.artistsSection}>
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            <h2 style={styles.sectionTitle}>Meet Our Artists</h2>
            <p style={styles.sectionSubtitle}>
              Award-winning tattoo artists with 12+ years of experience, each specializing in unique styles and techniques.
            </p>
            
            <div style={styles.artistsGrid}>
              <TiltCard>
                <div style={styles.artistCard}>
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800" 
                    alt="Marcus Chen - Realism Specialist"
                    style={styles.artistImage}
                  />
                  <div style={styles.artistInfo}>
                    <h3 style={styles.artistName}>Marcus Chen</h3>
                    <div style={styles.artistSpecialty}>Realism Specialist</div>
                    <p style={styles.artistExperience}>
                      15+ years creating photorealistic portraits and nature scenes. Featured in Inked Magazine 2022 for innovative shading techniques.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard>
                <div style={styles.artistCard}>
                  <img 
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800" 
                    alt="Yuki Tanaka - Japanese Traditional"
                    style={styles.artistImage}
                  />
                  <div style={styles.artistInfo}>
                    <h3 style={styles.artistName}>Yuki Tanaka</h3>
                    <div style={styles.artistSpecialty}>Japanese Traditional</div>
                    <p style={styles.artistExperience}>
                      Authentic Irezumi master trained in Tokyo. Specializes in dragons, koi, and traditional Japanese symbolism with bold, clean lines.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard>
                <div style={styles.artistCard}>
                  <img 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800" 
                    alt="Sofia Rivera - Fine Line Artist"
                    style={styles.artistImage}
                  />
                  <div style={styles.artistInfo}>
                    <h3 style={styles.artistName}>Sofia Rivera</h3>
                    <div style={styles.artistSpecialty}>Fine Line & Minimalist</div>
                    <p style={styles.artistExperience}>
                      Delicate fine-line work and geometric designs. Known for intricate botanical pieces and minimalist compositions that age beautifully.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Complete Experience</h2>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureCardIcon}>
                <Eye size={28} />
              </div>
              <h3 style={styles.featureCardTitle}>Free Digital Mockups</h3>
              <p style={styles.featureCardText}>
                See your tattoo before the needle touches skin. Complete digital visualization included with every consultation.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureCardIcon}>
                <Shield size={28} />
              </div>
              <h3 style={styles.featureCardTitle}>Hospital-Grade Safety</h3>
              <p style={styles.featureCardText}>
                Autoclave sterilization, single-use needles, and vegan-friendly inks. Your safety is our highest priority.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureCardIcon}>
                <Users size={28} />
              </div>
              <h3 style={styles.featureCardTitle}>Private Studio Rooms</h3>
              <p style={styles.featureCardText}>
                Comfortable, private spaces designed for relaxation during your tattoo session. No crowds, just art.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureCardIcon}>
                <Award size={28} />
              </div>
              <h3 style={styles.featureCardTitle}>Award-Winning Artists</h3>
              <p style={styles.featureCardText}>
                Featured in Inked Magazine with recognition for innovative techniques and artistic excellence.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA Section */}
      <section style={styles.consultationSection}>
        <h2 style={styles.consultationTitle}>Ready to Begin Your Journey?</h2>
        <p style={styles.consultationText}>
          Book your free consultation today. We'll discuss your vision, create digital mockups, and plan your perfect tattoo experience.
        </p>
        <Link to="/book" style={styles.consultationCta}>
          <Calendar size={24} />
          Schedule Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default PricingPage;