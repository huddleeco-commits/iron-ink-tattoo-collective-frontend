import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Award, Users, Palette, Shield, Eye, Heart } from 'lucide-react';
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

const HomePage = () => {
  const styles = {
    hero: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${THEME.colors.primary}ee, ${THEME.colors.text}dd), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      textAlign: 'center',
      position: 'relative',
      padding: '0 20px'
    },
    heroContent: {
      maxWidth: '800px',
      zIndex: 2
    },
    heroTitle: {
      fontSize: window.innerWidth < 768 ? '36px' : '64px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '24px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      fontWeight: 300,
      letterSpacing: '2px'
    },
    heroSubtitle: {
      fontSize: window.innerWidth < 768 ? '18px' : '24px',
      opacity: 0.9,
      marginBottom: '40px',
      fontFamily: THEME.fonts.body,
      lineHeight: 1.6,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaButton: {
      background: `linear-gradient(45deg, ${THEME.colors.accent}, #e879f9)`,
      color: THEME.colors.text,
      border: 'none',
      padding: '18px 48px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 32px rgba(240, 171, 252, 0.3)'
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    sectionTitle: {
      fontSize: window.innerWidth < 768 ? '32px' : '48px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      textAlign: 'center',
      marginBottom: '60px',
      fontWeight: 300
    },
    stats: {
      background: THEME.colors.surface,
      padding: '60px 20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '20px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: 700,
      color: THEME.colors.primary,
      fontFamily: THEME.fonts.heading,
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    serviceCard: {
      background: '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(112, 26, 117, 0.1)',
      transition: 'all 0.3s ease'
    },
    serviceImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover'
    },
    serviceContent: {
      padding: '30px'
    },
    serviceTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '12px'
    },
    serviceDescription: {
      color: THEME.colors.text,
      opacity: 0.7,
      lineHeight: 1.6,
      marginBottom: '16px'
    },
    servicePrice: {
      fontSize: '20px',
      fontWeight: 700,
      color: THEME.colors.primary,
      fontFamily: THEME.fonts.heading
    },
    artistsSection: {
      background: THEME.colors.background,
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    artistsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    artistCard: {
      textAlign: 'center',
      background: '#ffffff',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 8px 32px rgba(112, 26, 117, 0.1)'
    },
    artistImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 20px',
      border: `4px solid ${THEME.colors.accent}`
    },
    artistName: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '8px'
    },
    artistSpecialty: {
      color: THEME.colors.primary,
      fontWeight: 600,
      marginBottom: '12px'
    },
    artistBio: {
      color: THEME.colors.text,
      opacity: 0.7,
      lineHeight: 1.5,
      fontSize: '14px'
    },
    featuresSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      background: '#ffffff'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    featureCard: {
      textAlign: 'center',
      padding: '30px 20px'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      background: `linear-gradient(45deg, ${THEME.colors.primary}, ${THEME.colors.accent})`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      color: '#ffffff'
    },
    featureTitle: {
      fontSize: '20px',
      fontFamily: THEME.fonts.heading,
      color: THEME.colors.text,
      marginBottom: '12px'
    },
    featureDescription: {
      color: THEME.colors.text,
      opacity: 0.7,
      lineHeight: 1.6
    },
    ctaSection: {
      background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.text})`,
      color: '#ffffff',
      textAlign: 'center',
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    ctaTitle: {
      fontSize: window.innerWidth < 768 ? '32px' : '48px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '20px',
      fontWeight: 300
    },
    ctaDescription: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: THEME.colors.accent,
      color: THEME.colors.text,
      border: 'none',
      padding: '16px 40px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s ease'
    },
    secondaryButton: {
      background: 'transparent',
      color: '#ffffff',
      border: '2px solid #ffffff',
      padding: '16px 40px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s ease'
    }
  };

  const services = [
    {
      title: 'Custom Realism Tattoos',
      description: 'Award-winning photorealistic portraits and nature scenes. Digital mockups included with every consultation.',
      price: '$200-500/hour',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
    },
    {
      title: 'Japanese Traditional',
      description: 'Authentic tebori and machine work. Dragons, koi, samurai, and cherry blossoms with traditional color palettes.',
      price: '$180-400/hour',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800'
    },
    {
      title: 'Fine Line & Minimalist',
      description: 'Delicate script, geometric designs, and botanical illustrations. Perfect for first-time tattoo clients.',
      price: '$150-300/hour',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800'
    }
  ];

  const artists = [
    {
      name: 'Marcus Chen',
      specialty: 'Realism & Portraits',
      experience: '12 years',
      bio: 'Featured in Inked Magazine 2023. Specializes in black & grey photorealism.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
    },
    {
      name: 'Luna Rodriguez',
      specialty: 'Japanese Traditional',
      experience: '9 years',
      bio: 'Trained in Tokyo under master Horiyoshi. Expert in traditional tebori techniques.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800'
    },
    {
      name: 'Kai Thompson',
      specialty: 'Fine Line & Script',
      experience: '7 years',
      bio: 'Gentle approach perfect for first-timers. Specializes in botanical and minimalist designs.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Hospital-Grade Sterilization',
      description: 'Autoclave sterilization and single-use needles ensure the highest safety standards.'
    },
    {
      icon: Eye,
      title: 'Digital Mockups',
      description: 'See your tattoo design on your body before any ink touches skin. Free with consultation.'
    },
    {
      icon: Heart,
      title: 'Vegan-Friendly Inks',
      description: 'Premium plant-based inks that are kinder to your skin and the environment.'
    },
    {
      icon: Users,
      title: 'Private Studio Rooms',
      description: 'Comfortable, private spaces designed for relaxation during longer tattoo sessions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Where Art Meets Skin</h1>
          <p style={styles.heroSubtitle}>
            Award-winning tattoo artists creating custom masterpieces in a welcoming, 
            professional environment. From your first tattoo to your next collector piece.
          </p>
          <Link to="/book" style={styles.ctaButton}>
            <Calendar size={20} />
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={{ background: THEME.colors.background, padding: '60px 20px' }}>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={12} suffix="+" duration={2} />
              </div>
              <div style={styles.statLabel}>Years Creating Art</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={2700} suffix="+" duration={2.5} />
              </div>
              <div style={styles.statLabel}>Happy Clients</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={98} suffix="%" duration={2} />
              </div>
              <div style={styles.statLabel}>Satisfaction Rate</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={3} suffix="" duration={1.5} />
              </div>
              <div style={styles.statLabel}>Master Artists</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Signature Styles</h2>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TiltCard key={index}>
                <div style={styles.serviceCard}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={styles.serviceImage}
                  />
                  <div style={styles.serviceContent}>
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <p style={styles.serviceDescription}>{service.description}</p>
                    <div style={styles.servicePrice}>{service.price}</div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Artists Section */}
      <section style={styles.artistsSection}>
        <h2 style={styles.sectionTitle}>Meet Our Artists</h2>
        <div style={styles.artistsGrid}>
          {artists.map((artist, index) => (
            <GlowEffect key={index} color={THEME.colors.accent}>
              <div style={styles.artistCard}>
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  style={styles.artistImage}
                />
                <h3 style={styles.artistName}>{artist.name}</h3>
                <div style={styles.artistSpecialty}>{artist.specialty}</div>
                <p style={styles.artistBio}>
                  {artist.experience} experience. {artist.bio}
                </p>
              </div>
            </GlowEffect>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <ScrollReveal>
        <section style={styles.featuresSection}>
          <h2 style={styles.sectionTitle}>Why Choose Our Studio</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  <feature.icon size={28} />
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Create Your Masterpiece?</h2>
        <p style={styles.ctaDescription}>
          Every tattoo tells a story. Let our award-winning artists help you tell yours. 
          Free consultations with digital mockups included.
        </p>
        <div style={styles.ctaButtons}>
          <Link to="/book" style={styles.primaryButton}>
            <Calendar size={20} />
            Book Consultation
          </Link>
          <Link to="/portfolio" style={styles.secondaryButton}>
            <Palette size={20} />
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;