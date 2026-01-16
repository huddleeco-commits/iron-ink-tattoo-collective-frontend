import React, { useState } from 'react';
import { Calendar, Clock, Award, Shield, Users, Star, ArrowRight, Check, Eye, Heart, Palette, User } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard } from '../effects';

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

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const styles = {
    hero: {
      backgroundImage: `linear-gradient(rgba(112, 26, 117, 0.9), rgba(112, 26, 117, 0.85)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '800px',
      color: 'white'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '56px',
      fontWeight: '300',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '22px',
      opacity: 0.95,
      marginBottom: '40px',
      fontWeight: '300',
      lineHeight: 1.5,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaButton: {
      background: `linear-gradient(135deg, ${THEME.colors.accent}, #e879f9)`,
      color: THEME.colors.text,
      border: 'none',
      padding: '18px 40px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(240, 171, 252, 0.4)',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '42px',
      textAlign: 'center',
      color: THEME.colors.text,
      marginBottom: '20px',
      fontWeight: '300'
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#64748b',
      marginBottom: '60px',
      maxWidth: '600px',
      margin: '0 auto 60px'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    serviceCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(112, 26, 117, 0.1)',
      border: '1px solid rgba(240, 171, 252, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    serviceCardActive: {
      background: `linear-gradient(135deg, ${THEME.colors.background}, white)`,
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(112, 26, 117, 0.15)',
      border: `2px solid ${THEME.colors.accent}`
    },
    serviceIcon: {
      width: '60px',
      height: '60px',
      background: `linear-gradient(135deg, ${THEME.colors.primary}, #a21caf)`,
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      color: 'white'
    },
    serviceTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: THEME.colors.text,
      marginBottom: '10px'
    },
    serviceDescription: {
      color: '#64748b',
      fontSize: '16px',
      lineHeight: 1.6,
      marginBottom: '20px'
    },
    servicePrice: {
      fontSize: '20px',
      fontWeight: '700',
      color: THEME.colors.primary,
      marginBottom: '15px'
    },
    serviceFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    serviceFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      color: '#64748b'
    },
    artistsSection: {
      background: THEME.colors.surface,
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
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    artistCardActive: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(112, 26, 117, 0.15)',
      border: `3px solid ${THEME.colors.accent}`
    },
    artistImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    artistInfo: {
      padding: '25px'
    },
    artistName: {
      fontSize: '22px',
      fontWeight: '700',
      color: THEME.colors.text,
      marginBottom: '8px'
    },
    artistSpecialty: {
      color: THEME.colors.primary,
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '12px'
    },
    artistExperience: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#64748b',
      fontSize: '14px',
      marginBottom: '15px'
    },
    artistRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    statsSection: {
      background: `linear-gradient(135deg, ${THEME.colors.primary}, #a21caf)`,
      color: 'white',
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: '700',
      marginBottom: '10px',
      fontFamily: THEME.fonts.heading
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    processSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    processSteps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    processStep: {
      textAlign: 'center',
      padding: '30px 20px'
    },
    stepNumber: {
      width: '80px',
      height: '80px',
      background: `linear-gradient(135deg, ${THEME.colors.accent}, #e879f9)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '32px',
      fontWeight: '700',
      color: THEME.colors.text
    },
    stepTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: THEME.colors.text,
      marginBottom: '15px'
    },
    stepDescription: {
      color: '#64748b',
      fontSize: '16px',
      lineHeight: 1.6
    },
    finalCTA: {
      background: THEME.colors.background,
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center'
    },
    finalCTATitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '36px',
      color: THEME.colors.text,
      marginBottom: '20px',
      fontWeight: '300'
    },
    finalCTADescription: {
      fontSize: '18px',
      color: '#64748b',
      marginBottom: '40px',
      maxWidth: '500px',
      margin: '0 auto 40px'
    },
    bookButton: {
      background: `linear-gradient(135deg, ${THEME.colors.primary}, #a21caf)`,
      color: 'white',
      border: 'none',
      padding: '20px 50px',
      fontSize: '20px',
      fontWeight: '700',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(112, 26, 117, 0.3)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '15px'
    }
  };

  const services = [
    {
      id: 1,
      icon: <Palette size={24} />,
      title: 'Custom Realism',
      description: 'Photorealistic portraits and nature scenes with incredible detail and depth.',
      price: 'Starting at $200/hour',
      duration: '3-8 hours',
      features: [
        'Free digital mockup consultation',
        'Hospital-grade sterilization',
        'Vegan-friendly inks',
        'Private studio room'
      ]
    },
    {
      id: 2,
      icon: <Heart size={24} />,
      title: 'Japanese Traditional',
      description: 'Authentic Japanese style with bold lines, vibrant colors, and traditional motifs.',
      price: 'Starting at $180/hour',
      duration: '2-6 hours',
      features: [
        'Traditional design consultation',
        'Cultural accuracy guaranteed',
        'Premium Japanese ink',
        'Artist specialization certified'
      ]
    },
    {
      id: 3,
      icon: <Eye size={24} />,
      title: 'Fine Line Work',
      description: 'Delicate, minimalist designs with precise linework and subtle shading.',
      price: 'Starting at $150/hour',
      duration: '1-4 hours',
      features: [
        'Precision needle techniques',
        'Minimal healing time',
        'Perfect for first-timers',
        'Detailed aftercare included'
      ]
    },
    {
      id: 4,
      icon: <Star size={24} />,
      title: 'Cover-Up Specialist',
      description: 'Transform old tattoos into stunning new artwork with expert cover-up techniques.',
      price: 'Starting at $220/hour',
      duration: '4-10 hours',
      features: [
        'Free cover-up consultation',
        'Before/after digital preview',
        'Multi-session planning',
        'Guaranteed satisfaction'
      ]
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Marcus Chen',
      specialty: 'Realism & Portraits',
      experience: '12 Years',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
      bio: 'Award-winning realism specialist featured in Inked Magazine 2023'
    },
    {
      id: 2,
      name: 'Yuki Tanaka',
      specialty: 'Japanese Traditional',
      experience: '15 Years',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
      bio: 'Trained in traditional Japanese techniques, master of irezumi style'
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      specialty: 'Fine Line & Minimalist',
      experience: '8 Years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
      bio: 'Delicate fine line specialist, perfect for first-time clients'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Free Consultation',
      description: 'Discuss your vision, style preferences, and get expert advice on design and placement.'
    },
    {
      number: '2',
      title: 'Digital Mockup',
      description: 'See your tattoo design digitally placed on your body before committing to any work.'
    },
    {
      number: '3',
      title: 'Private Session',
      description: 'Relax in our comfortable private studio rooms with premium amenities and sterile environment.'
    },
    {
      number: '4',
      title: 'Aftercare Support',
      description: 'Comprehensive aftercare instructions and follow-up support for optimal healing.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Where Art Meets Skin</h1>
          <p style={styles.heroSubtitle}>
            Award-winning artists specializing in realism, Japanese traditional, and fine-line work. 
            Featured in Inked Magazine with over 12 years of creating transformative body art.
          </p>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(240, 171, 252, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(240, 171, 252, 0.4)';
            }}
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Signature Styles</h2>
          <p style={styles.sectionSubtitle}>
            Choose from our specialized tattoo styles, each crafted by master artists with years of dedicated experience.
          </p>
          
          <div style={styles.servicesGrid}>
            {services.map((service) => (
              <TiltCard key={service.id}>
                <div
                  style={{
                    ...styles.serviceCard,
                    ...(selectedService === service.id ? styles.serviceCardActive : {})
                  }}
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                  onMouseEnter={(e) => {
                    if (selectedService !== service.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(112, 26, 117, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedService !== service.id) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(112, 26, 117, 0.1)';
                    }
                  }}
                >
                  <div style={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <div style={styles.servicePrice}>{service.price}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', fontSize: '14px', color: '#64748b' }}>
                    <Clock size={16} />
                    <span>Session: {service.duration}</span>
                  </div>
                  <div style={styles.serviceFeatures}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={styles.serviceFeature}>
                        <Check size={16} color={THEME.colors.primary} />
                        <span>{feature}</span>
                      </div>
                    ))}
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
        <p style={styles.sectionSubtitle}>
          Our small team of master tattoo artists brings decades of combined experience and artistic excellence.
        </p>
        
        <div style={styles.artistsGrid}>
          {artists.map((artist) => (
            <TiltCard key={artist.id}>
              <div
                style={{
                  ...styles.artistCard,
                  ...(selectedArtist === artist.id ? styles.artistCardActive : {})
                }}
                onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
              >
                <div
                  style={{
                    ...styles.artistImage,
                    backgroundImage: `url('${artist.image}')`
                  }}
                />
                <div style={styles.artistInfo}>
                  <h3 style={styles.artistName}>{artist.name}</h3>
                  <div style={styles.artistSpecialty}>{artist.specialty}</div>
                  <div style={styles.artistExperience}>
                    <Award size={16} />
                    <span>{artist.experience} Experience</span>
                  </div>
                  <div style={styles.artistRating}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(artist.rating) ? THEME.colors.accent : 'none'}
                        color={THEME.colors.accent}
                      />
                    ))}
                    <span style={{ marginLeft: '8px', fontSize: '14px', color: '#64748b' }}>
                      {artist.rating} ({Math.floor(Math.random() * 50) + 20} reviews)
                    </span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '14px', marginTop: '15px', fontStyle: 'italic' }}>
                    {artist.bio}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <h2 style={{ ...styles.sectionTitle, color: 'white', marginBottom: '60px' }}>
            Trusted by Thousands
          </h2>
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

      {/* Process Section */}
      <ScrollReveal>
        <section style={styles.processSection}>
          <h2 style={styles.sectionTitle}>Our Process</h2>
          <p style={styles.sectionSubtitle}>
            From consultation to completion, we ensure every step delivers an exceptional experience.
          </p>
          
          <div style={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div key={index} style={styles.processStep}>
                <div style={styles.stepNumber}>{step.number}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA Section */}
      <section style={styles.finalCTA}>
        <h2 style={styles.finalCTATitle}>Ready to Transform Your Vision into Art?</h2>
        <p style={styles.finalCTADescription}>
          Book your free consultation today and let our award-winning artists create something extraordinary just for you.
        </p>
        <button
          style={styles.bookButton}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 40px rgba(112, 26, 117, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(112, 26, 117, 0.3)';
          }}
        >
          <Calendar size={20} />
          Book Your Session Now
          <ArrowRight size={20} />
        </button>
        
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}>
            <Shield size={20} color={THEME.colors.primary} />
            <span>Hospital-Grade Sterilization</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}>
            <Users size={20} color={THEME.colors.primary} />
            <span>Private Studio Rooms</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}>
            <Award size={20} color={THEME.colors.primary} />
            <span>Featured in Inked Magazine</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;