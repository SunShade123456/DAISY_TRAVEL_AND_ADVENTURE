import React, { useState } from 'react';
import { 
  Menu, X, MapPin, Calendar, Users, ShoppingBag, 
  ChevronRight, Star, ShieldCheck, Mail, Phone, 
  Facebook, Instagram, Twitter, ArrowRight
} from 'lucide-react';
import { Page } from './types';
import { PACKAGES, PRODUCTS, TEAM, BLOGS } from './constants';
import ChatWidget from './components/ChatWidget';

// --- Sub-components defined here for file limit efficiency, 
// usually would be in separate files ---

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
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setPage(Page.HOME)}>
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-2 font-serif">N</div>
            <span className="font-serif text-2xl font-bold text-brand-900 tracking-tight">NTB Travels</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-600 ${
                  activePage === item.value ? 'text-brand-600' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setPage(Page.CONTACT)}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-200"
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
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activePage === item.value 
                    ? 'bg-brand-50 text-brand-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
  <div className="relative bg-slate-900 h-[600px] flex items-center">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://picsum.photos/seed/himalayas/1920/1080"
        alt="Himalayas"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="md:w-2/3">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-300 text-sm font-semibold mb-6 border border-brand-500/30">
          Dec 02 - Special Winter Offers
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Experience the <span className="text-brand-500 italic">Unforgettable</span> in Nepal
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
          From the heights of Everest to the jungles of Chitwan. NTB Registration certified. Best packages, secure payments, and expert guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button onClick={() => setPage(Page.PACKAGES)} className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center">
            Explore Packages <ArrowRight size={18} className="ml-2" />
          </button>
          <button onClick={() => setPage(Page.CONTACT)} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full text-base font-medium transition-all flex items-center justify-center">
            Plan My Trip
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PackagesSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Popular Packages</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Curated itineraries designed to give you the authentic Nepalese experience.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-900 flex items-center">
                <Star size={12} className="text-yellow-400 mr-1" fill="currentColor" /> {pkg.rating}
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{pkg.category}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 font-serif">{pkg.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin size={14} className="mr-1" /> {pkg.location}
              </div>
              <div className="flex justify-between items-end border-t border-gray-50 pt-4">
                <div>
                  <span className="text-gray-400 text-xs block">Starting from</span>
                  <span className="text-xl font-bold text-brand-600">${pkg.price}</span>
                </div>
                <div className="text-sm text-gray-500 flex items-center">
                  <Calendar size={14} className="mr-1" /> {pkg.duration}
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
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Travel Shop</h2>
            <p className="text-gray-500">Essential gear for your next adventure.</p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCat === cat 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <div className="relative bg-gray-100 aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-900 hover:bg-brand-600 hover:text-white transition-colors">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-brand-600 font-bold mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Travel Vlogs & Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="flex flex-col md:flex-row gap-6 items-start">
             <div className="w-full md:w-1/2 h-64 rounded-2xl overflow-hidden">
               <img src={blog.image} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
             </div>
             <div className="w-full md:w-1/2">
               <span className="text-brand-600 font-semibold text-sm mb-2 block">{blog.date}</span>
               <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif hover:text-brand-600 transition-colors cursor-pointer">{blog.title}</h3>
               <p className="text-gray-500 mb-4 line-clamp-2">{blog.excerpt}</p>
               <button className="text-brand-600 font-medium text-sm flex items-center hover:underline">
                 Read Article <ChevronRight size={16} />
               </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">About NTB Travels</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a registered tourism agency dedicated to showcasing the breathtaking beauty of Nepal to the world. 
            With over a decade of experience, we specialize in authentic, sustainable, and safe travel experiences.
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-4">
               <div className="bg-brand-100 p-3 rounded-full text-brand-600"><ShieldCheck size={24}/></div>
               <div>
                 <h4 className="font-bold text-gray-900">Secure & Licensed</h4>
                 <p className="text-sm text-gray-500">Fully registered with Nepal Tourism Board.</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="bg-brand-100 p-3 rounded-full text-brand-600"><Users size={24}/></div>
               <div>
                 <h4 className="font-bold text-gray-900">Expert Team</h4>
                 <p className="text-sm text-gray-500">Local guides with deep cultural knowledge.</p>
               </div>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           {TEAM.slice(0, 2).map(member => (
             <div key={member.id} className="relative rounded-2xl overflow-hidden shadow-lg">
               <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                 <p className="text-white font-bold">{member.name}</p>
                 <p className="text-brand-200 text-xs">{member.role}</p>
               </div>
             </div>
           ))}
           <div className="col-span-2 bg-brand-900 rounded-2xl p-8 flex items-center justify-center text-center">
             <div>
               <h3 className="text-4xl font-serif font-bold text-white mb-2">10k+</h3>
               <p className="text-brand-200">Happy Travelers</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Book / Inquiry</h2>
          <p className="text-gray-500 mb-8">Ready for adventure? Send us a message.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Package Interest</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all">
                <option>Select a package</option>
                <option>Everest Base Camp</option>
                <option>Pokhara Retreat</option>
                <option>Chitwan Safari</option>
                <option>Custom Tour</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your travel plans..."></textarea>
            </div>
            <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg">
              Send Inquiry
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
               <ShieldCheck size={14} /> Secure Data Transmission & Privacy Compliant
            </div>
          </form>
        </div>

        {/* Map & Info */}
        <div className="space-y-8">
           <div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden group">
             {/* Mock Map Visual */}
             <div className="absolute inset-0 bg-slate-200">
               <div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
             </div>
             <div className="z-10 bg-white p-4 rounded-xl shadow-xl flex flex-col items-center">
                <MapPin className="text-red-500 mb-2" size={32} />
                <h4 className="font-bold text-gray-900">NTB Head Office</h4>
                <p className="text-xs text-gray-500">Thamel, Kathmandu</p>
                <button className="mt-3 text-xs bg-brand-600 text-white px-3 py-1.5 rounded hover:bg-brand-700">Get Directions</button>
             </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p className="text-gray-500 text-sm mt-1">+977 1 4422334</p>
                <p className="text-gray-500 text-sm">+977 9841000000</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <p className="text-gray-500 text-sm mt-1">info@ntbtravels.np</p>
                <p className="text-gray-500 text-sm">booking@ntbtravels.np</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">NTB Travels</h3>
          <p className="text-sm leading-relaxed">Your trusted partner for exploring the majestic Himalayas. Registered and certified.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-brand-500 transition-colors">Packages</a></li>
            <li><a href="#" className="hover:text-brand-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-500 transition-colors">Secure Payment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 transition-colors"><Twitter size={18} /></a>
          </div>
          <div className="mt-6">
             <p className="text-xs text-slate-500 mb-2">Secure Payments</p>
             <div className="flex gap-2 opacity-50">
               <div className="h-6 w-10 bg-slate-700 rounded"></div>
               <div className="h-6 w-10 bg-slate-700 rounded"></div>
               <div className="h-6 w-10 bg-slate-700 rounded"></div>
             </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} NTB Travels. All rights reserved. Privacy & Security Compliance Verified.
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
    <div className="min-h-screen bg-white font-sans text-gray-900">
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