import React, { useState } from 'react';
import { ScrollReveal, TiltCard, GlowEffect } from '../effects';
import { Grid, Filter, Search, Eye, Star, Award, ChevronDown } from 'lucide-react';

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

const GALLERY_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    title: 'Japanese Dragon Sleeve',
    artist: 'Maya Chen',
    style: 'Japanese Traditional',
    category: 'sleeve',
    featured: true,
    description: '8-hour masterpiece featuring traditional Koi and dragon elements'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
    title: 'Photorealistic Portrait',
    artist: 'Marcus Rodriguez',
    style: 'Realism',
    category: 'portrait',
    featured: true,
    description: 'Hyperrealistic memorial piece honoring beloved grandmother'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    title: 'Delicate Rose Linework',
    artist: 'Elena Vasquez',
    style: 'Fine-line',
    category: 'floral',
    featured: false,
    description: 'Minimalist botanical design with intricate shading'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    title: 'Geometric Sacred Mandala',
    artist: 'Alex Thompson',
    style: 'Geometric',
    category: 'geometric',
    featured: false,
    description: 'Precision mandala with perfect symmetry and flow'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    title: 'Traditional Oni Mask',
    artist: 'Maya Chen',
    style: 'Japanese Traditional',
    category: 'traditional',
    featured: false,
    description: 'Bold traditional piece with authentic Japanese elements'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
    title: 'Wildlife Portrait Lion',
    artist: 'Marcus Rodriguez',
    style: 'Realism',
    category: 'animal',
    featured: true,
    description: 'Stunning realistic lion portrait with incredible detail'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    title: 'Fine-line Script Quote',
    artist: 'Elena Vasquez',
    style: 'Fine-line',
    category: 'script',
    featured: false,
    description: 'Elegant calligraphy with delicate flourish details'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    title: 'Abstract Watercolor',
    artist: 'Alex Thompson',
    style: 'Watercolor',
    category: 'abstract',
    featured: false,
    description: 'Vibrant watercolor technique with seamless blending'
  }
];

const ARTISTS = [
  { name: 'Maya Chen', specialty: 'Japanese Traditional', experience: '12 years' },
  { name: 'Marcus Rodriguez', specialty: 'Realism', experience: '8 years' },
  { name: 'Elena Vasquez', specialty: 'Fine-line', experience: '6 years' },
  { name: 'Alex Thompson', specialty: 'Geometric & Watercolor', experience: '10 years' }
];

const CATEGORIES = ['all', 'sleeve', 'portrait', 'floral', 'geometric', 'traditional', 'animal', 'script', 'abstract'];
const STYLES = ['All Styles', 'Japanese Traditional', 'Realism', 'Fine-line', 'Geometric', 'Watercolor'];

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('All Styles');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const styleMatch = selectedStyle === 'All Styles' || item.style === selectedStyle;
    return categoryMatch && styleMatch;
  });

  const featuredItems = GALLERY_ITEMS.filter(item => item.featured);

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: THEME.colors.background
    },
    heroSection: {
      background: 'linear-gradient(135deg, rgba(112, 26, 117, 0.95), rgba(74, 4, 78, 0.9))',
      backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '120px 20px 80px',
      textAlign: 'center',
      color: 'white'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(36px, 8vw, 64px)',
      fontWeight: 300,
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: 1.6,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    featuredBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '8px 16px',
      borderRadius: '25px',
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '30px'
    },
    filtersSection: {
      padding: '60px 20px 40px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0'
    },
    filtersContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    filtersHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
      flexWrap: 'wrap',
      gap: '20px'
    },
    filtersTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '28px',
      color: THEME.colors.text,
      margin: 0
    },
    viewToggle: {
      display: 'flex',
      gap: '10px'
    },
    viewButton: {
      padding: '10px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewButtonActive: {
      borderColor: THEME.colors.primary,
      backgroundColor: THEME.colors.primary,
      color: 'white'
    },
    filtersRow: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    filterGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    filterLabel: {
      fontSize: '14px',
      fontWeight: 600,
      color: THEME.colors.text,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    categoryFilter: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    categoryButton: {
      padding: '8px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '25px',
      backgroundColor: 'white',
      color: THEME.colors.text,
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      textTransform: 'capitalize'
    },
    categoryButtonActive: {
      borderColor: THEME.colors.primary,
      backgroundColor: THEME.colors.primary,
      color: 'white'
    },
    dropdown: {
      position: 'relative',
      minWidth: '180px'
    },
    dropdownButton: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      fontWeight: 500
    },
    gallerySection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: THEME.colors.surface
    },
    galleryContainer: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    resultsHeader: {
      marginBottom: '40px',
      textAlign: 'center'
    },
    resultsCount: {
      fontSize: '18px',
      color: THEME.colors.text,
      marginBottom: '10px'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
      }
    },
    galleryCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    cardContent: {
      padding: '24px'
    },
    cardTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '22px',
      color: THEME.colors.text,
      marginBottom: '8px',
      fontWeight: 400
    },
    cardMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    },
    cardArtist: {
      fontSize: '16px',
      color: THEME.colors.primary,
      fontWeight: 600
    },
    cardStyle: {
      fontSize: '14px',
      color: '#64748b',
      backgroundColor: '#f1f5f9',
      padding: '4px 12px',
      borderRadius: '12px'
    },
    cardDescription: {
      fontSize: '14px',
      color: '#64748b',
      lineHeight: 1.5,
      marginBottom: '16px'
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    viewButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: THEME.colors.primary,
      fontSize: '14px',
      fontWeight: 600,
      textDecoration: 'none',
      padding: '8px 0',
      borderBottom: '2px solid transparent',
      transition: 'border-color 0.3s ease'
    },
    featuredSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: 'white'
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '42px',
      textAlign: 'center',
      color: THEME.colors.text,
      marginBottom: '20px',
      fontWeight: 300
    },
    sectionSubtitle: {
      fontSize: '18px',
      textAlign: 'center',
      color: '#64748b',
      maxWidth: '600px',
      margin: '0 auto 60px',
      lineHeight: 1.6
    },
    featuredGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '40px'
    },
    featuredCard: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      height: '400px',
      background: 'linear-gradient(45deg, rgba(112, 26, 117, 0.1), rgba(240, 171, 252, 0.1))'
    },
    featuredImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    featuredOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      color: 'white',
      padding: '40px 24px 24px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: THEME.colors.primary,
      textAlign: 'center',
      color: 'white'
    },
    ctaTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '36px',
      marginBottom: '20px',
      fontWeight: 300
    },
    ctaSubtitle: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: 'white',
      color: THEME.colors.primary,
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.featuredBadge}>
          <Award size={16} />
          Featured in Inked Magazine
        </div>
        <h1 style={styles.heroTitle}>Artistry Gallery</h1>
        <p style={styles.heroSubtitle}>
          Explore our collection of award-winning tattoo artistry. From intricate Japanese traditional to photorealistic portraits, discover the perfect inspiration for your next piece.
        </p>
      </section>

      {/* Featured Works */}
      <ScrollReveal>
        <section style={styles.featuredSection}>
          <h2 style={styles.sectionTitle}>Award-Winning Pieces</h2>
          <p style={styles.sectionSubtitle}>
            Our most celebrated works showcasing the pinnacle of tattoo artistry and technical excellence
          </p>
          <div style={styles.featuredGrid}>
            {featuredItems.slice(0, 3).map((item, index) => (
              <TiltCard key={item.id}>
                <GlowEffect color={THEME.colors.accent}>
                  <div style={styles.featuredCard}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={styles.featuredImage}
                    />
                    <div style={styles.featuredOverlay}>
                      <h3 style={{ fontSize: '24px', marginBottom: '8px', fontFamily: THEME.fonts.heading }}>{item.title}</h3>
                      <p style={{ fontSize: '16px', marginBottom: '4px', opacity: 0.9 }}>by {item.artist}</p>
                      <p style={{ fontSize: '14px', opacity: 0.8 }}>{item.description}</p>
                    </div>
                  </div>
                </GlowEffect>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Filters Section */}
      <section style={styles.filtersSection}>
        <div style={styles.filtersContainer}>
          <div style={styles.filtersHeader}>
            <h2 style={styles.filtersTitle}>Browse All Work</h2>
            <div style={styles.viewToggle}>
              <button 
                style={{
                  ...styles.viewButton,
                  ...(viewMode === 'grid' ? styles.viewButtonActive : {})
                }}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
            </div>
          </div>
          
          <div style={styles.filtersRow}>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Category</label>
              <div style={styles.categoryFilter}>
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    style={{
                      ...styles.categoryButton,
                      ...(selectedCategory === category ? styles.categoryButtonActive : {})
                    }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Style</label>
              <div style={styles.dropdown}>
                <select 
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  style={styles.dropdownButton}
                >
                  {STYLES.map(style => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <ScrollReveal>
        <section style={styles.gallerySection}>
          <div style={styles.galleryContainer}>
            <div style={styles.resultsHeader}>
              <p style={styles.resultsCount}>
                Showing {filteredItems.length} pieces
              </p>
            </div>
            
            <div style={styles.galleryGrid}>
              {filteredItems.map((item) => (
                <TiltCard key={item.id}>
                  <div 
                    style={styles.galleryCard}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={styles.cardImage}
                    />
                    <div style={styles.cardContent}>
                      <h3 style={styles.cardTitle}>{item.title}</h3>
                      <div style={styles.cardMeta}>
                        <span style={styles.cardArtist}>{item.artist}</span>
                        <span style={styles.cardStyle}>{item.style}</span>
                      </div>
                      <p style={styles.cardDescription}>{item.description}</p>
                      <div style={styles.cardFooter}>
                        <span style={styles.viewButton}>
                          <Eye size={16} />
                          View Details
                        </span>
                        {item.featured && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b' }}>
                            <Star size={16} fill="currentColor" />
                            <span style={{ fontSize: '12px', fontWeight: 600 }}>Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Create Your Masterpiece?</h2>
        <p style={styles.ctaSubtitle}>
          Book a free consultation with one of our award-winning artists. We'll create a digital mockup before any work begins, ensuring your vision comes to life perfectly.
        </p>
        <button style={styles.ctaButton}>
          Book Free Consultation
          <ChevronDown size={20} style={{ transform: 'rotate(-90deg)' }} />
        </button>
      </section>
    </div>
  );
}

export default GalleryPage;