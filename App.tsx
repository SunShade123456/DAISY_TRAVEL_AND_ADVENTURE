<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, MapPin, Calendar, Users, ShoppingBag,
  ChevronRight, ChevronDown, Star, ShieldCheck, Mail, Phone,
  Facebook, Instagram, Twitter, ArrowRight, Award,
  Globe, Heart, Quote, Mouse
=======
import React, { useState } from 'react';
import { 
  Menu, X, MapPin, Calendar, Users, ShoppingBag, 
  ChevronRight, Star, ShieldCheck, Mail, Phone, 
  Facebook, Instagram, Twitter, ArrowRight, Sun, Mountain
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
} from 'lucide-react';
import { Page } from './types';
import { PACKAGES, PRODUCTS, BLOGS, GUIDES, TESTIMONIALS } from './constants';
import ChatWidget from './components/ChatWidget';

// --- Animated Section Component ---
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Navbar Component ---
=======
const Logo = () => (
  <div className="flex items-center gap-3">
    {/* CSS/SVG Composition for Logo: Sun rising behind a mountain */}
    <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
      {/* Sun */}
      <div className="absolute top-1 right-2 w-6 h-6 bg-accent-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)] z-0"></div>
      {/* Mountain */}
      <div className="absolute bottom-0 w-full text-brand-900 z-10">
         <Mountain size={44} fill="currentColor" strokeWidth={1.5} />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-serif text-xl font-bold text-brand-900 leading-none tracking-tight">DAISY</span>
      <span className="font-sans text-xs font-bold text-accent-600 tracking-widest">TRAVEL & ADVENTURE</span>
    </div>
  </div>
);

>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
const Navbar = ({ activePage, setPage, isMobileMenuOpen, setIsMobileMenuOpen }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Packages', value: Page.PACKAGES },
    { label: 'Shop', value: Page.SHOP },
    { label: 'Blog', value: Page.BLOG },
    { label: 'About', value: Page.ABOUT },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => setPage(Page.HOME)}>
            <img
              src="./IMG_2714.PNG"
              alt="Daisy Travel Logo"
              className="w-12 h-12 object-contain mr-3 group-hover:scale-105 transition-transform"
            />
            <div>
              <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>Daisy Travel</span>
              <span className={`block text-xs font-medium -mt-1 transition-colors ${
                isScrolled ? 'text-brand-500' : 'text-brand-300'
              }`}>& Adventure</span>
            </div>
=======
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setPage(Page.HOME)}>
            <Logo />
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
<<<<<<< HEAD
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activePage === item.value
                    ? 'bg-brand-500 text-white'
                    : isScrolled
                      ? 'text-neutral-600 hover:text-brand-500 hover:bg-brand-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
=======
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 uppercase ${
                  activePage === item.value ? 'text-brand-800' : 'text-gray-500 hover:text-accent-600'
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setPage(Page.CONTACT)}
<<<<<<< HEAD
              className="bg-brand-gradient hover:shadow-lg hover:shadow-brand-500/30 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
=======
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-accent-200 transform hover:-translate-y-0.5"
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
            >
              Book Adventure <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
<<<<<<< HEAD
        <div className="md:hidden glass-white border-t border-neutral-100 shadow-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
=======
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsMobileMenuOpen(false);
                }}
<<<<<<< HEAD
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activePage === item.value
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-neutral-600 hover:bg-neutral-50'
=======
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium border-l-4 ${
                  activePage === item.value 
                    ? 'bg-brand-50 border-brand-600 text-brand-800' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setPage(Page.CONTACT); setIsMobileMenuOpen(false); }}
              className="w-full mt-2 bg-brand-gradient text-white px-4 py-3 rounded-xl text-base font-semibold"
            >
              Book Adventure
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

<<<<<<< HEAD
// --- Hero Section ---
const Hero = ({ setPage }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 300);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-32 left-10 lg:left-20 opacity-10 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <Globe size={80} className="text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 glass text-white text-sm font-medium mb-6 border border-white/20">
              <Star size={14} className="text-brand-400" fill="currentColor" />
              Rated 4.9/5 by 10,000+ travelers
            </span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="block">Discover Nepal</span>
            <span className="block mt-2">with <span className="gradient-text italic">Expert Guides</span></span>
          </h1>

          <p className={`text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            From the heights of Everest to the jungles of Chitwan. Experience authentic adventures with our certified local guides who know Nepal like no one else.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => setPage(Page.PACKAGES)}
              className="bg-brand-gradient hover:shadow-xl hover:shadow-brand-500/30 text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              Explore Packages
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setPage(Page.CONTACT)}
              className="glass border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Plan My Trip
            </button>
          </div>

          {/* Trust Badges */}
          <div className={`flex flex-wrap items-center gap-6 mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center gap-2 text-white/70">
              <ShieldCheck size={20} className="text-brand-400" />
              <span className="text-sm">Nepal Tourism Board Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Award size={20} className="text-brand-400" />
              <span className="text-sm">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fades out on scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <div className="flex flex-col items-center text-white/50">
          <Mouse size={20} className="mb-2" />
          <span className="text-xs mb-1">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
=======
const Hero = ({ setPage }: any) => (
  <div className="relative bg-brand-950 h-[650px] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://picsum.photos/seed/himalayas_sunrise/1920/1080"
        alt="Himalayas Sunrise"
        className="w-full h-full object-cover opacity-60"
      />
      {/* Gradient Overlay matching brand */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/50 to-transparent"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left z-10">
      <div className="md:w-2/3 lg:w-1/2">
        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-accent-500/20 text-accent-300 text-xs font-bold uppercase tracking-wider mb-6 border border-accent-500/40 backdrop-blur-sm">
          <Sun size={14} className="text-accent-400" />
          <span>The Mountains Are Calling</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight text-shadow">
          Your Journey to the <span className="text-accent-400 italic">Top of the World</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
          Experience the majesty of Nepal with <strong className="text-white">Daisy Travel & Adventure</strong>. Curated expeditions, authentic culture, and memories that last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button onClick={() => setPage(Page.PACKAGES)} className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-accent-900/30 flex items-center justify-center group">
            Find Your Trek <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => setPage(Page.CONTACT)} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center">
            Custom Itinerary
          </button>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
// --- Trust Indicators Section ---
const TrustIndicators = () => {
  const stats = [
    { value: '10,000+', label: 'Happy Travelers', icon: Heart },
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Unique Destinations', icon: MapPin },
    { value: '4.9/5', label: 'Average Rating', icon: Star },
  ];

  return (
    <div className="py-16 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-500 mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-neutral-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Guides Section ---
const GuidesSection = ({ onSelectGuide }: { onSelectGuide?: (guideId: number) => void }) => (
  <div className="py-20 bg-neutral-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">Meet Our Team</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2">Expert Local Guides</h2>
        <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
          Our certified guides bring decades of combined experience and deep local knowledge to every adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {GUIDES.map((guide) => (
          <div
            key={guide.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer border border-neutral-100"
            onClick={() => onSelectGuide?.(guide.id)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={guide.photo}
                alt={guide.name}
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center shadow-sm">
                <Star className="text-yellow-400 w-4 h-4" fill="currentColor" />
                <span className="ml-1 text-sm font-bold text-neutral-800">{guide.rating}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-wrap gap-1">
                  {guide.languages.slice(0, 3).map((lang, idx) => (
                    <span key={idx} className="text-xs bg-white/90 text-neutral-700 px-2 py-0.5 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold font-serif text-neutral-900">{guide.name}</h3>
              <p className="text-brand-500 text-sm font-medium">{guide.expertise.join(' & ')}</p>
              <p className="text-neutral-400 text-sm mt-1">{guide.yearsExperience} years experience</p>

              <div className="mt-3 flex flex-wrap gap-1">
                {guide.specializations.slice(0, 2).map((spec, idx) => (
                  <span key={idx} className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
=======
const PackagesSection = () => (
  <div className="py-24 bg-white relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 z-0 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <span className="text-accent-600 font-bold uppercase tracking-widest text-xs mb-2 block">Destinations</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-4">Curated Adventures</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">From the Annapurna Circuit to the jungles of Chitwan, we guide you every step of the way.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <div>
                   <span className="text-xs font-bold bg-accent-500 text-white px-2 py-0.5 rounded mb-1 inline-block">{pkg.category}</span>
                   <div className="flex items-center text-xs opacity-90">
                    <MapPin size={12} className="mr-1" /> {pkg.location}
                  </div>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-md px-2 py-1 rounded text-xs font-bold">
                  <Star size={10} className="text-accent-400 mr-1" fill="currentColor" /> {pkg.rating}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif leading-tight group-hover:text-brand-700 transition-colors">{pkg.title}</h3>
              <div className="flex justify-between items-center pt-2">
                <div>
                  <span className="text-gray-400 text-xs block uppercase tracking-wider">From</span>
                  <span className="text-2xl font-bold text-brand-700">${pkg.price}</span>
                </div>
                <div className="text-sm font-medium text-gray-500 flex items-center bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <Calendar size={14} className="mr-2 text-brand-500" /> {pkg.duration}
                </div>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
              </div>

              <button className="mt-4 w-full py-2.5 text-sm font-semibold text-brand-500 border-2 border-brand-200 rounded-xl group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all">
                View {PACKAGES.filter(p => p.guideId === guide.id).length} Packages
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Packages Section ---
const PackagesSection = ({ selectedGuideId, setSelectedGuideId }: { selectedGuideId?: number | null, setSelectedGuideId?: (id: number | null) => void }) => {
  const [activeGuideFilter, setActiveGuideFilter] = useState<number | null>(selectedGuideId || null);

  useEffect(() => {
    if (selectedGuideId !== undefined) {
      setActiveGuideFilter(selectedGuideId);
    }
  }, [selectedGuideId]);

  const filteredPackages = activeGuideFilter
    ? PACKAGES.filter(p => p.guideId === activeGuideFilter)
    : PACKAGES;

  const selectedGuide = activeGuideFilter
    ? GUIDES.find(g => g.id === activeGuideFilter)
    : null;

  const handleFilterChange = (guideId: number | null) => {
    setActiveGuideFilter(guideId);
    setSelectedGuideId?.(guideId);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">Our Adventures</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2">
            {selectedGuide ? `${selectedGuide.name}'s Tours` : 'Popular Packages'}
          </h2>
          {selectedGuide && (
            <p className="text-neutral-500 mt-2">{selectedGuide.expertise.join(' & ')} Specialist</p>
          )}
        </div>

        {/* Guide Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleFilterChange(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              !activeGuideFilter
                ? 'bg-brand-gradient text-white shadow-lg shadow-brand-500/30'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All Packages
          </button>
          {GUIDES.map(guide => (
            <button
              key={guide.id}
              onClick={() => handleFilterChange(guide.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeGuideFilter === guide.id
                  ? 'bg-brand-gradient text-white shadow-lg shadow-brand-500/30'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <img src={guide.photo} className="w-6 h-6 rounded-full object-cover" alt="" />
              {guide.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPackages.map((pkg) => {
            const guide = GUIDES.find(g => g.id === pkg.guideId);
            return (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 card-hover border border-neutral-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-700 shadow-sm">
                    {pkg.category}
                  </span>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center shadow-sm">
                    <Star className="text-yellow-400 w-3.5 h-3.5" fill="currentColor" />
                    <span className="ml-1 text-xs font-bold text-neutral-800">{pkg.rating}</span>
                  </div>

                  <span className={`absolute bottom-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    pkg.difficulty === 'Easy' ? 'bg-green-500 text-white' :
                    pkg.difficulty === 'Moderate' ? 'bg-yellow-500 text-white' :
                    pkg.difficulty === 'Challenging' ? 'bg-orange-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {pkg.difficulty}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold font-serif text-neutral-900 group-hover:text-brand-500 transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center text-neutral-500 text-sm mt-2">
                    <MapPin size={14} className="mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{pkg.location}</span>
                  </div>

                  {guide && (
                    <div className="flex items-center mt-3 pt-3 border-t border-neutral-100">
                      <img src={guide.photo} className="w-8 h-8 rounded-full object-cover" alt={guide.name} />
                      <div className="ml-2">
                        <p className="text-xs font-semibold text-neutral-700">Led by {guide.name}</p>
                        <p className="text-xs text-neutral-400">{guide.expertise[0]} Specialist</p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-end mt-4 pt-4 border-t border-neutral-100">
                    <div>
                      <span className="text-xs text-neutral-400 block">From</span>
                      <span className="text-2xl font-bold gradient-text">${pkg.price}</span>
                    </div>
                    <div className="text-sm text-neutral-500 flex items-center">
                      <Calendar size={14} className="mr-1" /> {pkg.duration}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Testimonials Section ---
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentIndex];
  const guide = GUIDES.find(g => g.id === currentTestimonial.guideId);

  return (
    <div className="py-20 bg-accent-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote size={120} className="text-white" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-brand-300 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-12">What Travelers Say</h2>

        <div className="relative min-h-[280px]">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${
                idx === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-6 h-6" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl font-serif italic text-white mb-8 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img src={testimonial.photo} className="w-14 h-14 rounded-full border-2 border-white/30" alt={testimonial.name} />
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                  {guide && (
                    <p className="text-xs text-brand-300 mt-1">Traveled with {guide.name}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Shop Section ---
const ShopSection = () => {
  const categories = ["All", "Gear", "Footwear", "Accessories"];
  const [activeCat, setActiveCat] = useState("All");

  const filteredProducts = activeCat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCat);

  return (
<<<<<<< HEAD
    <div className="py-20 bg-neutral-50">
=======
    <div className="py-24 bg-slate-50">
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
<<<<<<< HEAD
            <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">Gear Up</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2">Travel Shop</h2>
            <p className="text-neutral-500 mt-2">Essential gear for your next adventure.</p>
=======
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Store</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Gear Up for Adventure</h2>
            <p className="text-gray-500">Professional equipment vetted by our expert guides.</p>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
<<<<<<< HEAD
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCat === cat
                  ? 'bg-brand-gradient text-white shadow-lg'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
=======
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCat === cat 
                  ? 'bg-brand-900 text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-white hover:text-brand-600 hover:shadow'
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
<<<<<<< HEAD
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-hover border border-neutral-100">
              <div className="relative bg-neutral-100 aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover img-zoom" />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-neutral-700 hover:bg-brand-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
=======
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:border-brand-100 transition-all">
              <div className="relative bg-gray-50 aspect-[4/5] overflow-hidden p-6 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-gray-900 hover:bg-accent-500 hover:text-white transition-colors transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="p-5">
<<<<<<< HEAD
                <span className="text-xs text-neutral-400 uppercase tracking-wider">{product.category}</span>
                <h3 className="font-semibold text-neutral-900 mt-1 group-hover:text-brand-500 transition-colors">{product.name}</h3>
                <p className="text-xl font-bold gradient-text mt-2">${product.price}</p>
=======
                <p className="text-xs font-bold text-accent-600 uppercase mb-1">{product.category}</p>
                <h3 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h3>
                <p className="text-brand-700 font-bold text-xl mt-3">${product.price}</p>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Blog Section ---
const BlogSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
      <div className="text-center mb-12">
        <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">From Our Blog</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2">Travel Stories & Tips</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="group flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/2 h-64 rounded-2xl overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover img-zoom" />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-brand-500 font-semibold text-sm">{blog.date}</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-2 mb-3 font-serif group-hover:text-brand-500 transition-colors cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-neutral-500 mb-4 line-clamp-3">{blog.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-400">By {blog.author}</span>
                <button className="text-brand-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ChevronRight size={16} />
                </button>
              </div>
            </div>
=======
      <div className="flex justify-center items-center mb-12 flex-col">
         <Mountain className="text-brand-200 mb-4" size={48} />
         <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 text-center">Stories from the Summit</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="flex flex-col md:flex-row gap-6 items-center group cursor-pointer">
             <div className="w-full md:w-1/2 h-64 rounded-2xl overflow-hidden shadow-lg relative">
               <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="w-full md:w-1/2">
               <div className="flex items-center text-xs font-bold text-gray-400 mb-3 space-x-2">
                  <span className="text-accent-600">{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
               </div>
               <h3 className="text-2xl font-bold text-brand-900 mb-3 font-serif group-hover:text-accent-600 transition-colors leading-tight">{blog.title}</h3>
               <p className="text-gray-500 mb-4 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
               <button className="text-brand-700 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                 Read Full Story <ChevronRight size={16} className="ml-1" />
               </button>
             </div>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- About Section ---
const AboutSection = () => (
<<<<<<< HEAD
  <div className="py-20 bg-neutral-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2 mb-6">Daisy Travel & Adventure</h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-6">
            We are a registered tourism agency dedicated to showcasing the breathtaking beauty of Nepal to the world.
            With over 15 years of experience, we specialize in authentic, sustainable, and safe travel experiences led by expert local guides.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-xl text-brand-500 flex-shrink-0">
                <ShieldCheck size={24}/>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900">Licensed & Certified</h4>
                <p className="text-sm text-neutral-500">Fully registered with Nepal Tourism Board with all certifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-xl text-brand-500 flex-shrink-0">
                <Users size={24}/>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900">Expert Local Guides</h4>
                <p className="text-sm text-neutral-500">Certified guides with deep cultural and geographical knowledge.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-brand-100 p-3 rounded-xl text-brand-500 flex-shrink-0">
                <Award size={24}/>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900">Award Winning Service</h4>
                <p className="text-sm text-neutral-500">Recognized for excellence in sustainable tourism practices.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {GUIDES.slice(0, 2).map(guide => (
            <div key={guide.id} className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img src={guide.photo} alt={guide.name} className="w-full h-64 object-cover img-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold">{guide.name}</p>
                <p className="text-brand-300 text-sm">{guide.expertise[0]} Expert</p>
              </div>
            </div>
          ))}
          <div className="col-span-2 bg-brand-gradient rounded-2xl p-8 flex items-center justify-center text-center">
            <div>
              <h3 className="text-5xl font-serif font-bold text-white mb-2">10k+</h3>
              <p className="text-brand-100">Happy Travelers Since 2009</p>
            </div>
          </div>
=======
  <div className="py-24 bg-brand-900 text-white relative overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-accent-400 font-bold uppercase tracking-widest text-xs mb-2 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Authentic Himalayan Experiences since 2010</h2>
          <p className="text-brand-100 text-lg leading-relaxed mb-8">
            <strong className="text-white">Daisy Travel & Adventure</strong> is more than just a travel agency; we are a family of mountaineers and culture enthusiasts. We are dedicated to showcasing the breathtaking beauty of Nepal to the world through sustainable and safe travel experiences.
          </p>
          <div className="space-y-6">
             <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
               <div className="bg-accent-500 p-3 rounded-full text-white shadow-lg"><ShieldCheck size={24}/></div>
               <div>
                 <h4 className="font-bold text-white text-lg">Govt. Registered & Licensed</h4>
                 <p className="text-sm text-brand-200 mt-1">Fully registered with Nepal Tourism Board and Govt of Nepal.</p>
               </div>
             </div>
             <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
               <div className="bg-accent-500 p-3 rounded-full text-white shadow-lg"><Users size={24}/></div>
               <div>
                 <h4 className="font-bold text-white text-lg">Local Sherpa Experts</h4>
                 <p className="text-sm text-brand-200 mt-1">Our guides are born in the mountains, offering deep cultural insights and safety.</p>
               </div>
             </div>
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-2 gap-6">
           {TEAM.slice(0, 2).map((member, idx) => (
             <div key={member.id} className={`relative rounded-3xl overflow-hidden shadow-2xl ${idx === 1 ? 'mt-12' : ''}`}>
               <img src={member.image} alt={member.name} className="w-full h-full object-cover aspect-[3/4]" />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                 <p className="text-white font-bold text-lg font-serif">{member.name}</p>
                 <p className="text-accent-400 text-xs uppercase tracking-wider font-bold">{member.role}</p>
               </div>
             </div>
           ))}
           <div className="col-span-2 mt-[-20px] bg-accent-500 rounded-3xl p-8 flex items-center justify-between shadow-2xl relative z-20">
             <div>
               <h3 className="text-5xl font-serif font-bold text-white mb-1">10k+</h3>
               <p className="text-accent-100 font-medium">Happy Travelers</p>
             </div>
             <Star size={48} className="text-white opacity-50" />
           </div>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
        </div>
      </div>
    </div>
  </div>
);

// --- Contact Section ---
const ContactSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-4">Start Your Journey</h2>
        <p className="text-gray-500">Have questions? Our team is ready to help you plan the perfect trip.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-slate-50 rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
        {/* Form */}
        <div>
<<<<<<< HEAD
          <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-2 mb-2">Book Your Adventure</h2>
          <p className="text-neutral-500 mb-8">Ready for the journey of a lifetime? Send us a message.</p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="floating-label">
                <input
                  type="text"
                  placeholder=" "
                  className="w-full px-4 py-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white"
                />
                <label>Your Name</label>
              </div>
              <div className="floating-label">
                <input
                  type="email"
                  placeholder=" "
                  className="w-full px-4 py-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white"
                />
                <label>Email Address</label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Guide</label>
                <select className="w-full px-4 py-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white">
                  <option value="">Any Guide</option>
                  {GUIDES.map(guide => (
                    <option key={guide.id} value={guide.id}>{guide.name} - {guide.expertise[0]}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Package Interest</label>
                <select className="w-full px-4 py-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white">
                  <option value="">Select a package</option>
                  {PACKAGES.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>{pkg.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="floating-label">
              <textarea
                rows={4}
                placeholder=" "
                className="w-full px-4 py-4 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white resize-none"
              ></textarea>
              <label>Tell us about your travel plans...</label>
            </div>
            <button className="w-full bg-brand-gradient hover:shadow-xl hover:shadow-brand-500/30 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              Send Inquiry <ArrowRight size={18} />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 mt-4">
              <ShieldCheck size={14} /> Secure Data Transmission & Privacy Compliant
            </div>
=======
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Send us a message</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Package Interest</label>
              <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-gray-700">
                <option>Select a package</option>
                <option>Everest Base Camp</option>
                <option>Pokhara Retreat</option>
                <option>Chitwan Safari</option>
                <option>Custom Tour</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your travel plans..."></textarea>
            </div>
            <button className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-brand-900/20 text-lg">
              Send Inquiry
            </button>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
          </form>
        </div>

        {/* Map & Info */}
<<<<<<< HEAD
        <div className="space-y-6">
          <div className="bg-neutral-100 rounded-2xl h-72 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-500/5">
              <div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(circle, #F97316 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
            </div>
            <div className="z-10 bg-white p-6 rounded-2xl shadow-xl text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-brand-500" size={28} />
              </div>
              <h4 className="font-bold text-neutral-900 text-lg">Daisy Head Office</h4>
              <p className="text-sm text-neutral-500 mt-1">Thamel, Kathmandu, Nepal</p>
              <button className="mt-4 text-sm bg-brand-gradient text-white px-5 py-2 rounded-full hover:shadow-lg transition-all">
                Get Directions
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-500 mb-4">
                <Phone size={24} />
              </div>
              <h4 className="font-bold text-neutral-900">Phone</h4>
              <p className="text-neutral-500 text-sm mt-2">+977 1 4422334</p>
              <p className="text-neutral-500 text-sm">+977 9841000000</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-500 mb-4">
                <Mail size={24} />
=======
        <div className="space-y-8 flex flex-col justify-between">
           <div className="bg-white rounded-3xl h-64 flex items-center justify-center relative overflow-hidden group shadow-inner border border-gray-200">
             {/* Mock Map Visual */}
             <div className="absolute inset-0 bg-slate-100">
               <div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(circle, #b45309 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
             </div>
             <div className="z-10 bg-white p-5 rounded-2xl shadow-xl flex flex-col items-center border border-gray-100">
                <div className="bg-red-50 p-2 rounded-full mb-2"><MapPin className="text-red-500" size={24} /></div>
                <h4 className="font-bold text-gray-900">Daisy Head Office</h4>
                <p className="text-xs text-gray-500 text-center">Thamel Marg, Kathmandu<br/>Nepal</p>
                <button className="mt-3 text-xs bg-brand-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-brand-700 transition-colors">Get Directions</button>
             </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-600 mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                <p className="text-gray-500 text-sm mt-1">+977 1 4422334</p>
                <p className="text-gray-500 text-sm">+977 9841000000</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-accent-600 mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                <p className="text-gray-500 text-sm mt-1">info@daisytravel.np</p>
                <p className="text-gray-500 text-sm">booking@daisytravel.np</p>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
              </div>
              <h4 className="font-bold text-neutral-900">Email</h4>
              <p className="text-neutral-500 text-sm mt-2">info@daisytravel.com</p>
              <p className="text-neutral-500 text-sm">booking@daisytravel.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Footer ---
const Footer = () => (
<<<<<<< HEAD
  <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg mr-3">
              D
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white">Daisy Travel</span>
              <span className="block text-xs text-brand-400 -mt-1">& Adventure</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">Your trusted partner for exploring the majestic Himalayas. Nepal Tourism Board registered and certified since 2009.</p>
          <div className="flex space-x-3 mt-6">
            <a href="#" className="bg-neutral-800 p-2.5 rounded-full hover:bg-brand-500 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="bg-neutral-800 p-2.5 rounded-full hover:bg-brand-500 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="bg-neutral-800 p-2.5 rounded-full hover:bg-brand-500 transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Packages</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Our Guides</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Our Guides</h4>
          <ul className="space-y-3 text-sm">
            {GUIDES.map(guide => (
              <li key={guide.id}>
                <a href="#" className="hover:text-brand-400 transition-colors">{guide.name}</a>
                <span className="text-neutral-500 text-xs block">{guide.expertise[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Newsletter</h4>
          <p className="text-sm text-neutral-400 mb-4">Subscribe for travel tips and exclusive offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-l-xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-500 text-sm"
            />
            <button className="bg-brand-gradient px-5 py-3 rounded-r-xl hover:shadow-lg transition-all">
              <ArrowRight size={18} className="text-white" />
            </button>
          </div>
          <div className="mt-6">
            <p className="text-xs text-neutral-500 mb-2">Certifications</p>
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-neutral-800 rounded flex items-center justify-center text-xs text-neutral-500">NTB</div>
              <div className="h-8 w-16 bg-neutral-800 rounded flex items-center justify-center text-xs text-neutral-500">TAAN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Daisy Travel & Adventure. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
=======
  <footer className="bg-brand-950 text-slate-300 py-16 border-t border-brand-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
             <div className="bg-accent-500 p-1.5 rounded-full"><Mountain size={20} className="text-white" /></div>
             <span className="font-serif text-2xl font-bold text-white">DAISY</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            Your trusted partner for exploring the majestic Himalayas. We specialize in creating unforgettable memories through safe, sustainable, and authentic travel experiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-brand-900 p-2.5 rounded-full hover:bg-accent-500 text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="bg-brand-900 p-2.5 rounded-full hover:bg-accent-500 text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="bg-brand-900 p-2.5 rounded-full hover:bg-accent-500 text-white transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 font-serif text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Home</a></li>
            <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Packages</a></li>
            <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Blog</a></li>
            <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 font-serif text-lg">Destinations</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-accent-400 transition-colors">Everest Region</a></li>
            <li><a href="#" className="hover:text-accent-400 transition-colors">Annapurna Region</a></li>
            <li><a href="#" className="hover:text-accent-400 transition-colors">Langtang Region</a></li>
            <li><a href="#" className="hover:text-accent-400 transition-colors">Chitwan National Park</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 font-serif text-lg">Newsletter</h4>
          <p className="text-xs text-slate-500 mb-4">Subscribe for latest offers and travel tips.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email Address" className="bg-brand-900 border border-brand-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-accent-500" />
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-3 py-2 rounded-lg transition-colors"><ArrowRight size={18} /></button>
          </div>
          <div className="mt-8">
             <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">We Accept</p>
             <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
               <div className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs font-bold text-brand-900 italic">VISA</div>
               <div className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs font-bold text-red-600">MC</div>
               <div className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">Amex</div>
             </div>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Daisy Travel & Adventure. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGuideId, setSelectedGuideId] = useState<number | null>(null);

  const handleGuideSelect = (guideId: number) => {
    setSelectedGuideId(guideId);
    setCurrentPage(Page.PACKAGES);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.PACKAGES:
        return (
          <>
            <div className="pt-20" />
            <AnimatedSection>
              <PackagesSection selectedGuideId={selectedGuideId} setSelectedGuideId={setSelectedGuideId} />
            </AnimatedSection>
          </>
        );
      case Page.SHOP:
        return (
          <>
            <div className="pt-20" />
            <AnimatedSection>
              <ShopSection />
            </AnimatedSection>
          </>
        );
      case Page.BLOG:
        return (
          <>
            <div className="pt-20" />
            <AnimatedSection>
              <BlogSection />
            </AnimatedSection>
          </>
        );
      case Page.ABOUT:
        return (
          <>
            <div className="pt-20" />
            <AnimatedSection>
              <AboutSection />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <GuidesSection onSelectGuide={handleGuideSelect} />
            </AnimatedSection>
          </>
        );
      case Page.CONTACT:
        return (
          <>
            <div className="pt-20" />
            <AnimatedSection>
              <ContactSection />
            </AnimatedSection>
          </>
        );
      case Page.HOME:
      default:
        return (
          <>
            <Hero setPage={setCurrentPage} />
            <AnimatedSection>
              <TrustIndicators />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <GuidesSection onSelectGuide={handleGuideSelect} />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <PackagesSection selectedGuideId={selectedGuideId} setSelectedGuideId={setSelectedGuideId} />
            </AnimatedSection>
            <AnimatedSection>
              <TestimonialsSection />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <AboutSection />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <ShopSection />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <BlogSection />
            </AnimatedSection>
            <AnimatedSection>
              <ContactSection />
            </AnimatedSection>
          </>
        );
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <Navbar
        activePage={currentPage}
=======
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-accent-200 selection:text-brand-900">
      <Navbar 
        activePage={currentPage} 
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
        setPage={(page: Page) => {
          setCurrentPage(page);
          setIsMobileMenuOpen(false);
          if (page !== Page.PACKAGES) {
            setSelectedGuideId(null);
          }
          window.scrollTo(0, 0);
        }}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        {renderPage()}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
