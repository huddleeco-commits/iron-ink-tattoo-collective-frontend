import React, { useState } from 'react';
import { ChevronDown, Users, Award, Shield, Calendar, Star, Clock, CreditCard } from 'lucide-react';
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

const FaqPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    {
      title: "First-Time Clients",
      icon: Users,
      color: THEME.colors.primary,
      questions: [
        {
          id: 1,
          question: "Is this really my first consultation free?",
          answer: "Absolutely! We believe in building trust through transparency. Your initial consultation includes a detailed discussion of your vision, digital mockup creation, and pricing breakdown—all at no charge. We want you to feel completely confident before making any commitment."
        },
        {
          id: 2,
          question: "What should I expect during my first visit?",
          answer: "Your first visit is all about getting to know each other. We'll discuss your tattoo ideas, show you our portfolio, create digital mockups, and explain our process. You'll tour our private studio rooms and meet your potential artist. No pressure, no needles—just honest conversation about bringing your vision to life."
        },
        {
          id: 3,
          question: "How do I know if I'm ready for a tattoo?",
          answer: "Great question! We recommend taking time to think about placement, meaning, and long-term satisfaction. During your consultation, we'll discuss sizing, placement options, and provide honest feedback. Remember, good tattoos aren't cheap, and cheap tattoos aren't good—we're here to guide you toward the right decision."
        }
      ]
    },
    {
      title: "Our Process & Safety",
      icon: Shield,
      color: '#059669',
      questions: [
        {
          id: 4,
          question: "What makes your sterilization hospital-grade?",
          answer: "We use autoclave sterilization systems that exceed state requirements, single-use needles that are opened in front of you, and EPA-approved disinfectants. All equipment is sterilized between clients, and we maintain detailed sterilization logs. Your safety is never compromised."
        },
        {
          id: 5,
          question: "Are your inks really vegan-friendly?",
          answer: "Yes! We exclusively use vegan ink formulations that contain no animal-derived ingredients or bone char. Our inks are also free from heavy metals and meet the highest safety standards. We can provide ingredient lists for any specific allergies or concerns."
        },
        {
          id: 6,
          question: "Can I see the digital mockup process?",
          answer: "Definitely! We create digital mockups using professional software, allowing you to see exactly how your tattoo will look on your body. We can adjust size, placement, and details until it's perfect. This process typically takes 30-60 minutes and prevents any surprises on tattoo day."
        }
      ]
    },
    {
      title: "Booking & Pricing",
      icon: Calendar,
      color: '#dc2626',
      questions: [
        {
          id: 7,
          question: "How far in advance should I book?",
          answer: "Our award-winning artists typically book 6-12 weeks out for custom pieces. Small tattoos or touch-ups may be available sooner. We recommend booking your consultation 2-3 weeks in advance to ensure adequate time for design development."
        },
        {
          id: 8,
          question: "What's your pricing structure?",
          answer: "Pricing varies by artist, style complexity, and size. Small pieces start around $150, medium pieces $400-800, and large custom work $1000+. We provide detailed quotes during your free consultation. Remember, you're investing in award-winning artistry that will last a lifetime."
        },
        {
          id: 9,
          question: "Do you require a deposit?",
          answer: "Yes, we require a 50% deposit to secure your appointment and begin custom design work. Deposits are non-refundable but fully applied to your final cost. We accept cash, card, and digital payments for your convenience."
        }
      ]
    },
    {
      title: "Our Artists & Specialties",
      icon: Award,
      color: '#7c3aed',
      questions: [
        {
          id: 10,
          question: "How do I choose the right artist for my style?",
          answer: "Each of our artists specializes in specific styles—realism, Japanese traditional, or fine-line work. During consultation, we'll match you with the artist whose expertise aligns with your vision. You can view each artist's portfolio and discuss their approach to your piece."
        },
        {
          id: 11,
          question: "What does 'award-winning' mean for your studio?",
          answer: "We've been featured in Inked Magazine and our artists have won multiple tattoo convention awards for technical excellence and artistic innovation. Our realism specialist won 'Best of Show' at the 2023 Northeast Tattoo Expo, and our Japanese traditional artist trained under masters in Kyoto."
        },
        {
          id: 12,
          question: "Can I request a specific artist?",
          answer: "Absolutely! Many clients have artist preferences based on style or previous work. We'll do our best to accommodate requests, though popular artists may have longer wait times. During consultation, we'll discuss availability and ensure the perfect artist-client match."
        }
      ]
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const stats = [
    { number: 12, suffix: "+ Years", label: "Award-Winning Experience" },
    { number: 2700, suffix: "+ Clients", label: "Masterpieces Created" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 4, suffix: " Artists", label: "Master Specialists" }
  ];

  const styles = {
    page: {
      fontFamily: THEME.fonts.body,
      color: THEME.text,
      lineHeight: 1.6
    },
    hero: {
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #4c1d95 100%)`,
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '800px',
      padding: '0 20px',
      zIndex: 2
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '36px' : '56px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '20px',
      fontWeight: 400,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      marginBottom: '40px',
      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
    },
    decorativeShape: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, rgba(240, 171, 252, 0.1), rgba(240, 171, 252, 0.05))',
      top: '-150px',
      right: '-150px',
      zIndex: 1
    },
    statsSection: {
      padding: `${THEME.spacing.sectionPadding}px 20px`,
      background: THEME.colors.background,
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    statCard: {
      textAlign: 'center',
      padding: '30px 20px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(112, 26, 117, 0.1)',
      border: `1px solid ${THEME.colors.accent}20`
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 700,
      color: THEME.colors.primary,
      marginBottom: '10px',
      fontFamily: THEME.fonts.heading
    },
    statLabel: {
      fontSize: '14px',
      color: THEME.text,
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    faqSection: {
      padding: `${THEME.spacing.sectionPadding}px 20px`,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '42px',
      fontFamily: THEME.fonts.heading,
      textAlign: 'center',
      marginBottom: '20px',
      color: THEME.colors.primary
    },
    sectionSubtitle: {
      fontSize: '18px',
      textAlign: 'center',
      marginBottom: '60px',
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 auto 60px'
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '40px'
    },
    categoryCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(112, 26, 117, 0.08)',
      border: `1px solid ${THEME.colors.accent}20`
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
      paddingBottom: '20px',
      borderBottom: `2px solid ${THEME.colors.background}`
    },
    categoryIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
      color: 'white'
    },
    categoryTitle: {
      fontSize: '24px',
      fontFamily: THEME.fonts.heading,
      fontWeight: 600,
      color: THEME.colors.primary
    },
    faqItem: {
      marginBottom: '20px',
      border: `1px solid ${THEME.colors.background}`,
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    faqQuestion: {
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      background: THEME.colors.surface,
      transition: 'all 0.3s ease',
      fontSize: '16px',
      fontWeight: 600,
      color: THEME.colors.primary
    },
    faqAnswer: {
      padding: '0 24px 24px',
      fontSize: '15px',
      lineHeight: 1.7,
      color: THEME.text,
      opacity: 0.9,
      background: 'white'
    },
    chevron: {
      transition: 'transform 0.3s ease',
      color: THEME.colors.accent
    },
    ctaSection: {
      padding: `${THEME.spacing.sectionPadding}px 20px`,
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #581c87 100%)`,
      textAlign: 'center',
      color: 'white'
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    ctaTitle: {
      fontSize: '36px',
      fontFamily: THEME.fonts.heading,
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaText: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '40px',
      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'white',
      color: THEME.colors.primary,
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    secondaryButton: {
      background: 'transparent',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 600,
      border: '2px solid white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.decorativeShape}></div>
        <div style={styles.heroContent}>
          <ScrollReveal>
            <h1 style={styles.heroTitle}>Frequently Asked Questions</h1>
            <p style={styles.heroSubtitle}>
              Everything you need to know about our award-winning tattoo artistry and personalized experience
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          {stats.map((stat, index) => (
            <TiltCard key={index}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2 + index * 0.2} 
                  />
                </div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            </TiltCard>
          ))}
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <ScrollReveal>
          <h2 style={styles.sectionTitle}>Your Questions, Answered</h2>
          <p style={styles.sectionSubtitle}>
            Our small team has curated answers to the most common questions about our custom tattoo process, safety standards, and artistic specialties.
          </p>
        </ScrollReveal>

        <div style={styles.categoriesGrid}>
          {faqCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex}>
              <GlowEffect color={category.color}>
                <div style={styles.categoryCard}>
                  <div style={styles.categoryHeader}>
                    <div style={{
                      ...styles.categoryIcon,
                      background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`
                    }}>
                      <category.icon size={24} />
                    </div>
                    <h3 style={styles.categoryTitle}>{category.title}</h3>
                  </div>

                  {category.questions.map((faq) => (
                    <div 
                      key={faq.id} 
                      style={{
                        ...styles.faqItem,
                        boxShadow: openFaq === faq.id ? `0 5px 20px ${category.color}20` : 'none',
                        borderColor: openFaq === faq.id ? category.color : THEME.colors.background
                      }}
                    >
                      <div
                        style={{
                          ...styles.faqQuestion,
                          background: openFaq === faq.id ? `${category.color}10` : styles.faqQuestion.background
                        }}
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={20}
                          style={{
                            ...styles.chevron,
                            transform: openFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            color: openFaq === faq.id ? category.color : THEME.colors.accent
                          }}
                        />
                      </div>
                      {openFaq === faq.id && (
                        <div style={styles.faqAnswer}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GlowEffect>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
            <p style={styles.ctaText}>
              Join the thousands who've trusted our award-winning artists to transform their vision into permanent art. Your free consultation is just one click away.
            </p>
            <div style={styles.ctaButtons}>
              <button 
                style={styles.primaryButton}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Calendar size={18} />
                Book Free Consultation
              </button>
              <button 
                style={styles.secondaryButton}
                onMouseOver={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = THEME.colors.primary;
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                <Star size={18} />
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default FaqPage;