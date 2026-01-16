import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, Star, ArrowRight, Shield, Eye, Heart, Sparkles } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, ParallaxSection, TiltCard } from '../effects';

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

const AboutPage = () => {
  const styles = {
    hero: {
      background: `linear-gradient(rgba(112, 26, 117, 0.9), rgba(112, 26, 117, 0.8)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      textAlign: 'center',
      padding: '0 20px'
    },
    heroContent: {
      maxWidth: '800px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(36px, 5vw, 64px)',
      fontWeight: '400',
      marginBottom: '20px',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: 'clamp(18px, 2.5vw, 24px)',
      opacity: 0.95,
      marginBottom: '30px',
      fontWeight: '300'
    },
    ctaButton: {
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '15px 40px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 0`,
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    storySection: {
      padding: `${THEME.spacing.sectionPadding} 0`,
      backgroundColor: THEME.colors.background
    },
    storyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '20px',
      paddingRight: '20px'
    },
    storyContent: {
      order: 1
    },
    storyImage: {
      order: 2,
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(112, 26, 117, 0.1)'
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(28px, 4vw, 42px)',
      color: THEME.colors.text,
      marginBottom: '30px',
      textAlign: 'center'
    },
    pullQuote: {
      backgroundColor: THEME.colors.primary,
      color: '#ffffff',
      padding: `${THEME.spacing.sectionPadding} 0`,
      textAlign: 'center',
      position: 'relative'
    },
    pullQuoteText: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(24px, 4vw, 48px)',
      fontWeight: '400',
      fontStyle: 'italic',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 20px',
      lineHeight: 1.3
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      textAlign: 'center',
      margin: '60px 0'
    },
    statItem: {
      padding: '30px 20px'
    },
    statNumber: {
      fontFamily: THEME.fonts.heading,
      fontSize: '48px',
      fontWeight: '600',
      color: THEME.colors.primary,
      marginBottom: '10px'
    },
    statLabel: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8,
      fontWeight: '500'
    },
    valuesSection: {
      backgroundColor: THEME.colors.surface,
      padding: `${THEME.spacing.sectionPadding} 0`
    },
    valuesList: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px'
    },
    valueItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      marginBottom: '40px',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(112, 26, 117, 0.05)',
      border: '1px solid rgba(240, 171, 252, 0.2)'
    },
    valueIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: THEME.colors.accent,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    valueContent: {
      flex: 1
    },
    valueTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      color: THEME.colors.text,
      marginBottom: '10px'
    },
    valueText: {
      fontSize: '16px',
      color: THEME.colors.text,
      opacity: 0.8,
      lineHeight: 1.6
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px'
    },
    teamCard: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(112, 26, 117, 0.08)',
      transition: 'all 0.3s ease'
    },
    teamImage: {
      width: '100%',
      height: '280px',
      objectFit: 'cover'
    },
    teamInfo: {
      padding: '30px 25px'
    },
    teamName: {
      fontFamily: THEME.fonts.heading,
      fontSize: '22px',
      color: THEME.colors.text,
      marginBottom: '8px'
    },
    teamRole: {
      fontSize: '16px',
      color: THEME.colors.primary,
      fontWeight: '600',
      marginBottom: '12px'
    },
    teamBio: {
      fontSize: '14px',
      color: THEME.colors.text,
      opacity: 0.7,
      lineHeight: 1.5,
      marginBottom: '15px'
    },
    specialties: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    specialty: {
      backgroundColor: THEME.colors.background,
      color: THEME.colors.primary,
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500'
    },
    finalCta: {
      backgroundColor: THEME.colors.primary,
      color: '#ffffff',
      padding: `${THEME.spacing.sectionPadding} 0`,
      textAlign: 'center'
    },
    finalCtaTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(28px, 4vw, 42px)',
      marginBottom: '20px'
    },
    finalCtaText: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    whiteButton: {
      backgroundColor: '#ffffff',
      color: THEME.colors.primary,
      padding: '15px 40px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    }
  };

  const values = [
    {
      icon: <Shield size={28} color={THEME.colors.primary} />,
      title: "Safety & Sterilization",
      text: "Hospital-grade sterilization protocols and single-use needles ensure your safety is never compromised. We exceed industry standards for cleanliness and hygiene."
    },
    {
      icon: <Eye size={28} color={THEME.colors.primary} />,
      title: "Artistic Vision",
      text: "Every tattoo is a collaboration between artist and client. We listen to your vision, offer creative input, and create digital mockups before any ink touches skin."
    },
    {
      icon: <Heart size={28} color={THEME.colors.primary} />,
      title: "Comfort First",
      text: "Private studio rooms, soothing atmosphere, and artists who prioritize your comfort throughout the entire process. First-timers feel welcomed and at ease."
    },
    {
      icon: <Sparkles size={28} color={THEME.colors.primary} />,
      title: "Premium Materials",
      text: "Vegan-friendly inks, top-tier equipment, and the finest materials ensure your tattoo looks vibrant today and beautiful for years to come."
    }
  ];

  const team = [
    {
      name: "Marcus Rivera",
      role: "Master Artist & Owner",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
      bio: "Specializing in photorealistic portraits and fine-line work. Featured artist in Inked Magazine 2023.",
      specialties: ["Realism", "Portraits", "Fine Line"]
    },
    {
      name: "Yuki Tanaka",
      role: "Traditional Japanese Artist",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
      bio: "Trained in traditional Tebori techniques in Osaka. Brings authentic Japanese artistry to every piece.",
      specialties: ["Japanese Traditional", "Tebori", "Large Pieces"]
    },
    {
      name: "Sofia Chen",
      role: "Fine Line Specialist",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
      bio: "Delicate, intricate designs with surgical precision. Perfect for first-timers seeking elegant, minimalist work.",
      specialties: ["Fine Line", "Minimalist", "Botanical"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Where Art Meets Skin</h1>
          <p style={styles.heroSubtitle}>Award-winning artists crafting timeless tattoos in a luxurious, welcoming environment</p>
          <Link to="/booking" style={styles.ctaButton}>
            Book Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section style={styles.storySection}>
        <ScrollReveal>
          <div style={styles.storyGrid}>
            <div style={styles.storyContent}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <p style={{ fontSize: '18px', lineHeight: 1.7, marginBottom: '25px', color: THEME.colors.text }}>
                Founded in 2012 by master artist Marcus Rivera, our studio began with a simple vision: to elevate tattooing from a service to an art form. What started as a single chair in a small space has grown into a premier destination for tattoo collectors and first-timers alike.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.7, marginBottom: '25px', color: THEME.colors.text }}>
                We've been featured in Inked Magazine for our innovative approach to customer comfort and artistic excellence. Our private studio rooms, digital mockup process, and commitment to using only the finest vegan-friendly inks set us apart in the industry.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.7, color: THEME.colors.text }}>
                Today, our small but mighty team of specialized artists continues to push boundaries, creating everything from delicate fine-line pieces to bold traditional Japanese works.
              </p>
            </div>
            <div style={styles.storyImage}>
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800" 
                alt="Tattoo studio interior"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Mission Pull Quote */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920"
        height="60vh"
      >
        <div style={styles.pullQuote}>
          <blockquote style={styles.pullQuoteText}>
            "We believe every tattoo should be a masterpiece that tells your unique story. Art isn't just what we do—it's who we are."
          </blockquote>
        </div>
      </ParallaxSection>

      {/* Stats */}
      <ScrollReveal>
        <div style={styles.section}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={12} suffix="+" duration={2} />
              </div>
              <div style={styles.statLabel}>Years Experience</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={3200} suffix="+" duration={2.5} />
              </div>
              <div style={styles.statLabel}>Tattoos Created</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={98} suffix="%" duration={2} />
              </div>
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={3} suffix=" " duration={1.5} />
              </div>
              <div style={styles.statLabel}>Master Artists</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Values */}
      <section style={styles.valuesSection}>
        <ScrollReveal>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Values</h2>
            <div style={styles.valuesList}>
              {values.map((value, index) => (
                <div key={index} style={styles.valueItem}>
                  <div style={styles.valueIcon}>
                    {value.icon}
                  </div>
                  <div style={styles.valueContent}>
                    <h3 style={styles.valueTitle}>{value.title}</h3>
                    <p style={styles.valueText}>{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Meet the Artists */}
      <section style={styles.section}>
        <ScrollReveal>
          <h2 style={styles.sectionTitle}>Meet Our Artists</h2>
          <div style={styles.teamGrid}>
            {team.map((artist, index) => (
              <TiltCard key={index}>
                <div style={styles.teamCard}>
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    style={styles.teamImage}
                  />
                  <div style={styles.teamInfo}>
                    <h3 style={styles.teamName}>{artist.name}</h3>
                    <p style={styles.teamRole}>{artist.role} • {artist.experience}</p>
                    <p style={styles.teamBio}>{artist.bio}</p>
                    <div style={styles.specialties}>
                      {artist.specialties.map((specialty, idx) => (
                        <span key={idx} style={styles.specialty}>{specialty}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section style={styles.finalCta}>
        <div style={styles.section}>
          <h2 style={styles.finalCtaTitle}>Ready to Create Your Masterpiece?</h2>
          <p style={styles.finalCtaText}>
            Start with a free consultation where we'll discuss your vision, create digital mockups, and plan your perfect tattoo experience.
          </p>
          <Link to="/booking" style={styles.whiteButton}>
            <Calendar size={20} />
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;