import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Calendar, ArrowRight, Eye, Palette, Zap } from 'lucide-react';
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

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Marcus Rivera",
      title: "Master Tattoo Artist & Studio Owner",
      specialty: "Realism & Portrait Work",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
      bio: "Award-winning artist featured in Inked Magazine three times. Specializes in photorealistic portraits and memorial pieces. Known for his gentle approach with first-time clients.",
      achievements: ["Inked Magazine Featured Artist", "Best Realism Award 2023", "15,000+ Hours Experience"]
    },
    {
      name: "Yuki Tanaka",
      title: "Traditional Japanese Specialist",
      specialty: "Traditional Japanese & Neo-Japanese",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
      bio: "Trained in traditional Irezumi techniques in Tokyo. Master of flowing compositions and bold, striking designs. Every piece tells a story rooted in centuries of tradition.",
      achievements: ["Tokyo Certification", "Cultural Heritage Specialist", "500+ Large Pieces"]
    },
    {
      name: "Luna Chen",
      title: "Fine Line Artist",
      specialty: "Fine Line & Minimalist Design",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
      bio: "Precision artist known for delicate, intricate fine-line work. Perfect for clients seeking subtle, elegant pieces. Specializes in botanical designs and geometric patterns.",
      achievements: ["Fine Line Specialist", "Botanical Expert", "Perfect Line Consistency"]
    }
  ];

  const styles = {
    hero: {
      minHeight: '70vh',
      background: 'linear-gradient(135deg, rgba(112, 26, 117, 0.95), rgba(74, 4, 78, 0.9)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      textAlign: 'center',
      padding: '0 20px'
    },
    heroContent: {
      maxWidth: '800px'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '56px',
      fontWeight: '600',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '22px',
      opacity: 0.95,
      marginBottom: '30px',
      fontWeight: '300',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaButton: {
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 8px 30px rgba(240, 171, 252, 0.3)',
      transition: 'all 0.3s ease'
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '42px',
      color: THEME.colors.primary,
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: '600'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: THEME.colors.text,
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto 60px',
      opacity: 0.8,
      lineHeight: '1.6'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      marginBottom: '60px'
    },
    teamCard: {
      background: '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(112, 26, 117, 0.1)',
      border: '1px solid rgba(240, 171, 252, 0.2)',
      transition: 'all 0.3s ease'
    },
    teamImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    },
    teamContent: {
      padding: '30px'
    },
    teamName: {
      fontFamily: THEME.fonts.heading,
      fontSize: '28px',
      color: THEME.colors.primary,
      marginBottom: '8px',
      fontWeight: '600'
    },
    teamTitle: {
      fontSize: '16px',
      color: THEME.colors.accent,
      fontWeight: '600',
      marginBottom: '12px'
    },
    teamSpecialty: {
      display: 'inline-block',
      background: THEME.colors.background,
      padding: '8px 16px',
      borderRadius: '25px',
      fontSize: '14px',
      color: THEME.colors.primary,
      marginBottom: '16px',
      fontWeight: '500'
    },
    teamBio: {
      fontSize: '15px',
      lineHeight: '1.6',
      color: THEME.colors.text,
      marginBottom: '20px',
      opacity: 0.8
    },
    achievementsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    achievement: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: THEME.colors.primary,
      marginBottom: '8px',
      fontWeight: '500'
    },
    statsSection: {
      background: THEME.colors.primary,
      color: '#ffffff',
      padding: '80px 20px',
      textAlign: 'center',
      margin: '80px 0'
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
      fontFamily: THEME.fonts.heading,
      fontSize: '48px',
      fontWeight: '700',
      marginBottom: '8px',
      color: THEME.colors.accent
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9,
      fontWeight: '500'
    },
    processSection: {
      background: THEME.colors.background,
      padding: `${THEME.spacing.sectionPadding} 20px`
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    processCard: {
      background: '#ffffff',
      padding: '30px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 8px 30px rgba(112, 26, 117, 0.08)',
      border: '1px solid rgba(240, 171, 252, 0.1)'
    },
    processIcon: {
      width: '60px',
      height: '60px',
      background: THEME.colors.accent,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      color: THEME.colors.primary
    },
    processTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '22px',
      color: THEME.colors.primary,
      marginBottom: '12px',
      fontWeight: '600'
    },
    processDescription: {
      fontSize: '15px',
      lineHeight: '1.6',
      color: THEME.colors.text,
      opacity: 0.8
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #701a75, #4a044e)',
      color: '#ffffff',
      padding: '80px 20px',
      textAlign: 'center'
    },
    ctaTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '36px',
      marginBottom: '16px',
      fontWeight: '600'
    },
    ctaDescription: {
      fontSize: '18px',
      marginBottom: '30px',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto 30px'
    },
    consultationNote: {
      background: 'rgba(240, 171, 252, 0.1)',
      padding: '20px',
      borderRadius: '12px',
      marginTop: '40px',
      textAlign: 'center',
      fontSize: '16px',
      color: THEME.colors.primary,
      fontWeight: '500'
    }
  };

  return (
    <div style={{ fontFamily: THEME.fonts.body }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Meet Our Award-Winning Artists</h1>
          <p style={styles.heroSubtitle}>
            Master craftspeople who transform skin into living art. Featured in Inked Magazine.
          </p>
          <Link to="/booking" style={styles.ctaButton}>
            <Calendar size={20} />
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={12} suffix="+" duration={2} />
              </div>
              <div style={styles.statLabel}>Years Mastering Our Craft</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={2800} suffix="+" duration={2.5} />
              </div>
              <div style={styles.statLabel}>Custom Pieces Created</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={99} suffix="%" duration={2} />
              </div>
              <div style={styles.statLabel}>Client Satisfaction</div>
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

      {/* Team Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Master Artists</h2>
          <p style={styles.sectionSubtitle}>
            Each artist brings decades of experience and unique expertise. We believe in matching you with the perfect artist for your vision.
          </p>
          
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TiltCard key={index}>
                <div style={styles.teamCard}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={styles.teamImage}
                  />
                  <div style={styles.teamContent}>
                    <h3 style={styles.teamName}>{member.name}</h3>
                    <div style={styles.teamTitle}>{member.title}</div>
                    <div style={styles.teamSpecialty}>
                      <Palette size={14} style={{ marginRight: '6px' }} />
                      {member.specialty}
                    </div>
                    <p style={styles.teamBio}>{member.bio}</p>
                    
                    <ul style={styles.achievementsList}>
                      {member.achievements.map((achievement, i) => (
                        <li key={i} style={styles.achievement}>
                          <Star size={14} fill={THEME.colors.accent} color={THEME.colors.accent} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal>
        <section style={styles.processSection}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={styles.sectionTitle}>Our Consultation Process</h2>
            <p style={styles.sectionSubtitle}>
              We believe great tattoos start with great consultations. Every client gets personalized attention and digital mockups before any work begins.
            </p>
            
            <div style={styles.processGrid}>
              <div style={styles.processCard}>
                <div style={styles.processIcon}>
                  <Calendar size={28} />
                </div>
                <h3 style={styles.processTitle}>Free Consultation</h3>
                <p style={styles.processDescription}>
                  Meet with your chosen artist to discuss your vision, placement, and size. All consultations are completely free and pressure-free.
                </p>
              </div>
              
              <div style={styles.processCard}>
                <div style={styles.processIcon}>
                  <Eye size={28} />
                </div>
                <h3 style={styles.processTitle}>Digital Mockup</h3>
                <p style={styles.processDescription}>
                  See exactly how your tattoo will look before committing. We create detailed digital previews positioned on your body.
                </p>
              </div>
              
              <div style={styles.processCard}>
                <div style={styles.processIcon}>
                  <Zap size={28} />
                </div>
                <h3 style={styles.processTitle}>Perfect Execution</h3>
                <p style={styles.processDescription}>
                  Experience our private studio rooms, vegan-friendly inks, and hospital-grade sterilization. Comfort meets artistry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Create Your Masterpiece?</h2>
        <p style={styles.ctaDescription}>
          Whether you're a first-timer or a collector, our artists will bring your vision to life with unmatched skill and care.
        </p>
        <Link to="/booking" style={styles.ctaButton}>
          <ArrowRight size={20} />
          Book Your Free Consultation
        </Link>
        
        <div style={styles.consultationNote}>
          <Award size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          All consultations include digital mockups • No obligation • Meet your artist first
        </div>
      </section>
    </div>
  );
};

export default TeamPage;