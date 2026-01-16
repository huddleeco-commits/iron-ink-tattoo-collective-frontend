import React from 'react';
import { Star, Quote, ArrowRight, Calendar, Award, Users } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      name: "Sarah M.",
      piece: "Cherry Blossom Sleeve",
      artist: "Maya Chen",
      rating: 5,
      text: "Maya transformed my vision into something beyond my wildest dreams. The detail in each petal, the way the colors flow - it's pure artistry. The private studio made me feel completely at ease for my first tattoo.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
      date: "3 months ago"
    },
    {
      name: "Marcus R.",
      piece: "Japanese Dragon Back Piece",
      artist: "Kenji Nakamura",
      rating: 5,
      text: "Three sessions, 18 hours total, and worth every minute. Kenji's traditional Japanese technique is flawless. The digital mockup process was incredible - I knew exactly what I was getting before we started.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
      date: "6 months ago"
    },
    {
      name: "Elena V.",
      piece: "Fine-Line Portrait",
      artist: "David Rodriguez",
      rating: 5,
      text: "David captured my grandmother's essence perfectly in fine-line work. The consultation process was thorough, and the vegan inks were important to me. This studio sets the bar high.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
      date: "2 months ago"
    }
  ];

  const recentReviews = [
    {
      name: "Alex T.",
      piece: "Geometric Mandala",
      rating: 5,
      text: "The attention to detail is incredible. Every line is perfect, and the healing process was smooth thanks to their aftercare guidance.",
      date: "2 weeks ago"
    },
    {
      name: "Jordan K.",
      piece: "Realistic Wolf Portrait",
      rating: 5,
      text: "I've been to many shops, but this is different. The artistry level here is museum-quality. Featured in Inked Magazine for good reason.",
      date: "1 month ago"
    },
    {
      name: "Sam Chen",
      piece: "Fine-Line Flowers",
      rating: 5,
      text: "First tattoo experience and they made it perfect. The private room was comfortable, and the artist walked me through everything.",
      date: "3 weeks ago"
    },
    {
      name: "Riley M.",
      piece: "Traditional Rose",
      rating: 5,
      text: "Bold, clean lines and vibrant colors. The healing was better than expected - their sterilization protocols are clearly top-notch.",
      date: "5 weeks ago"
    }
  ];

  const awards = [
    { title: "Featured Studio", source: "Inked Magazine", year: "2024" },
    { title: "Best Realism Work", source: "Tattoo Convention", year: "2023" },
    { title: "Excellence in Japanese Traditional", source: "International Tattoo Awards", year: "2023" },
    { title: "Client Choice Award", source: "Local Arts Community", year: "2024" }
  ];

  const styles = {
    page: {
      fontFamily: "'Lato', system-ui, sans-serif",
      lineHeight: 1.6,
      color: '#4a044e'
    },
    hero: {
      background: 'linear-gradient(135deg, rgba(112, 26, 117, 0.95), rgba(74, 4, 78, 0.9))',
      backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '120px 20px 80px',
      textAlign: 'center',
      color: 'white',
      position: 'relative'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroTitle: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '48px',
      fontWeight: 600,
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      marginBottom: '30px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    statsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '60px auto 0',
      padding: '0 20px'
    },
    statItem: {
      textAlign: 'center',
      color: 'white'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    section: {
      padding: '80px 20px'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '42px',
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: '60px',
      color: '#4a044e'
    },
    featuredGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      marginBottom: '80px'
    },
    featuredCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(112, 26, 117, 0.1)',
      border: '1px solid rgba(240, 171, 252, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '25px'
    },
    avatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #f0abfc'
    },
    clientInfo: {
      flex: 1
    },
    clientName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#4a044e',
      marginBottom: '4px'
    },
    pieceInfo: {
      fontSize: '14px',
      color: '#701a75',
      marginBottom: '4px'
    },
    artistInfo: {
      fontSize: '12px',
      color: '#9333ea',
      opacity: 0.8
    },
    rating: {
      display: 'flex',
      gap: '2px'
    },
    testimonialText: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: '#4a044e',
      marginBottom: '20px',
      fontStyle: 'italic'
    },
    quoteIcon: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: '#f0abfc',
      opacity: 0.3,
      width: '40px',
      height: '40px'
    },
    date: {
      fontSize: '12px',
      color: '#9333ea',
      opacity: 0.7
    },
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px'
    },
    reviewCard: {
      background: '#fdf4ff',
      borderRadius: '16px',
      padding: '30px',
      border: '1px solid rgba(240, 171, 252, 0.3)'
    },
    reviewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    reviewInfo: {
      flex: 1
    },
    reviewName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#4a044e',
      marginBottom: '4px'
    },
    reviewPiece: {
      fontSize: '14px',
      color: '#701a75'
    },
    reviewText: {
      fontSize: '14px',
      lineHeight: 1.5,
      color: '#4a044e',
      marginBottom: '15px'
    },
    awardsSection: {
      background: 'linear-gradient(135deg, #f8fafc, #fdf4ff)',
      borderRadius: '24px',
      padding: '60px 40px',
      marginTop: '80px'
    },
    awardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px'
    },
    awardCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(112, 26, 117, 0.08)'
    },
    awardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#4a044e',
      marginBottom: '8px'
    },
    awardSource: {
      fontSize: '14px',
      color: '#701a75',
      marginBottom: '4px'
    },
    awardYear: {
      fontSize: '12px',
      color: '#9333ea',
      opacity: 0.7
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #701a75, #4a044e)',
      borderRadius: '24px',
      padding: '60px 40px',
      textAlign: 'center',
      color: 'white',
      marginTop: '80px'
    },
    ctaTitle: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: '36px',
      fontWeight: 600,
      marginBottom: '20px'
    },
    ctaText: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '30px',
      maxWidth: '600px',
      margin: '0 auto 30px'
    },
    ctaButton: {
      background: '#f0abfc',
      color: '#4a044e',
      padding: '15px 40px',
      borderRadius: '50px',
      border: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Stories in Ink</h1>
          <p style={styles.heroSubtitle}>
            Real experiences from our clients who chose to make their vision permanent
          </p>
        </div>
        
        <ScrollReveal>
          <div style={styles.statsSection}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={12} suffix="+" duration={2} />
              </span>
              <span style={styles.statLabel}>Years Experience</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={850} suffix="+" duration={2.5} />
              </span>
              <span style={styles.statLabel}>Masterpieces Created</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={99} suffix="%" duration={2} />
              </span>
              <span style={styles.statLabel}>Client Satisfaction</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>
                <AnimatedCounter end={4} suffix="" duration={1.5} />
              </span>
              <span style={styles.statLabel}>Award-Winning Artists</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <ScrollReveal>
            <h2 style={styles.sectionTitle}>Featured Client Stories</h2>
            
            <div style={styles.featuredGrid}>
              {featuredTestimonials.map((testimonial, index) => (
                <TiltCard key={index}>
                  <GlowEffect color="#f0abfc">
                    <div style={styles.featuredCard}>
                      <Quote style={styles.quoteIcon} />
                      
                      <div style={styles.cardHeader}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          style={styles.avatar}
                        />
                        <div style={styles.clientInfo}>
                          <div style={styles.clientName}>{testimonial.name}</div>
                          <div style={styles.pieceInfo}>{testimonial.piece}</div>
                          <div style={styles.artistInfo}>Artist: {testimonial.artist}</div>
                        </div>
                        <div style={styles.rating}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#f0abfc" color="#f0abfc" />
                          ))}
                        </div>
                      </div>

                      <p style={styles.testimonialText}>"{testimonial.text}"</p>
                      
                      <div style={styles.date}>
                        <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        {testimonial.date}
                      </div>
                    </div>
                  </GlowEffect>
                </TiltCard>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 style={styles.sectionTitle}>Recent Reviews</h2>
            
            <div style={styles.reviewsGrid}>
              {recentReviews.map((review, index) => (
                <div key={index} style={styles.reviewCard}>
                  <div style={styles.reviewHeader}>
                    <div style={styles.reviewInfo}>
                      <div style={styles.reviewName}>{review.name}</div>
                      <div style={styles.reviewPiece}>{review.piece}</div>
                    </div>
                    <div style={styles.rating}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#701a75" color="#701a75" />
                      ))}
                    </div>
                  </div>
                  
                  <p style={styles.reviewText}>"{review.text}"</p>
                  
                  <div style={styles.date}>
                    <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {review.date}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={styles.awardsSection}>
              <h3 style={{ ...styles.sectionTitle, marginBottom: '40px', color: '#4a044e' }}>
                Recognition & Awards
              </h3>
              
              <div style={styles.awardsGrid}>
                {awards.map((award, index) => (
                  <div key={index} style={styles.awardCard}>
                    <Award color="#701a75" size={32} style={{ margin: '0 auto 15px' }} />
                    <div style={styles.awardTitle}>{award.title}</div>
                    <div style={styles.awardSource}>{award.source}</div>
                    <div style={styles.awardYear}>{award.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={styles.ctaSection}>
              <h2 style={styles.ctaTitle}>Ready to Create Your Story?</h2>
              <p style={styles.ctaText}>
                Join our community of satisfied clients. Book your free consultation today and let's discuss your vision with our award-winning artists.
              </p>
              <button style={styles.ctaButton}>
                Book Free Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;