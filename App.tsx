import React, { useState } from 'react';
import { 
  Menu, X, MapPin, Calendar, Users, ShoppingBag, 
  ChevronRight, Star, ShieldCheck, Mail, Phone, 
  Facebook, Instagram, Twitter, ArrowRight, Sun, Mountain
} from 'lucide-react';
import { Page } from './types';
import { PACKAGES, PRODUCTS, TEAM, BLOGS } from './constants';
import ChatWidget from './components/ChatWidget';

// --- Sub-components defined here for file limit efficiency, 
// usually would be in separate files ---

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

const Navbar = ({ activePage, setPage, isMobileMenuOpen, setIsMobileMenuOpen }: any) => {
  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Packages', value: Page.PACKAGES },
    { label: 'Shop', value: Page.SHOP },
    { label: 'Blog', value: Page.BLOG },
    { label: 'About', value: Page.ABOUT },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setPage(Page.HOME)}>
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 uppercase ${
                  activePage === item.value ? 'text-brand-800' : 'text-gray-500 hover:text-accent-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setPage(Page.CONTACT)}
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-accent-200 transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium border-l-4 ${
                  activePage === item.value 
                    ? 'bg-brand-50 border-brand-600 text-brand-800' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

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
        </div>
      </div>
    </div>
  </div>
);

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ShopSection = () => {
  const categories = ["All", "Gear", "Footwear", "Accessories", "Clothing"];
  const [activeCat, setActiveCat] = useState("All");

  const filteredProducts = activeCat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCat);

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Store</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Gear Up for Adventure</h2>
            <p className="text-gray-500">Professional equipment vetted by our expert guides.</p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCat === cat 
                  ? 'bg-brand-900 text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-white hover:text-brand-600 hover:shadow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:border-brand-100 transition-all">
              <div className="relative bg-gray-50 aspect-[4/5] overflow-hidden p-6 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-gray-900 hover:bg-accent-500 hover:text-white transition-colors transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-accent-600 uppercase mb-1">{product.category}</p>
                <h3 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h3>
                <p className="text-brand-700 font-bold text-xl mt-3">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutSection = () => (
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
        </div>
      </div>
    </div>
  </div>
);

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
          </form>
        </div>

        {/* Map & Info */}
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
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
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
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simple Router Switch
  const renderPage = () => {
    switch (currentPage) {
      case Page.PACKAGES:
        return <PackagesSection />;
      case Page.SHOP:
        return <ShopSection />;
      case Page.BLOG:
        return <BlogSection />;
      case Page.ABOUT:
        return <AboutSection />;
      case Page.CONTACT:
        return <ContactSection />;
      case Page.HOME:
      default:
        return (
          <>
            <Hero setPage={setCurrentPage} />
            <PackagesSection />
            <AboutSection />
            <ShopSection />
            <BlogSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-accent-200 selection:text-brand-900">
      <Navbar 
        activePage={currentPage} 
        setPage={(page: Page) => {
          setCurrentPage(page);
          setIsMobileMenuOpen(false);
          window.scrollTo(0, 0);
        }}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="fade-in">
        {renderPage()}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;