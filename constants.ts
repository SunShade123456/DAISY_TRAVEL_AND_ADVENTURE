import { Package, Product, TeamMember, BlogPost, Guide, Testimonial } from './types';

export const GUIDES: Guide[] = [
  {
    id: 1,
    name: "Sabal",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    expertise: ["High Altitude Trekking", "Everest Region"],
    specializations: ["Everest Base Camp Trek", "Everest Three Passes", "Gokyo Lakes Trek"],
    rating: 4.9,
    reviewCount: 203,
    bio: "Sabal is an expert on the Everest region with over 10 years of guiding experience. He has summited multiple peaks and knows every trail in the Khumbu Valley.",
    yearsExperience: 10,
    languages: ["Nepali", "English", "Hindi"],
    certifications: ["UIAGM Certified Mountain Guide", "Wilderness First Responder"]
  },
  {
    id: 2,
    name: "Cherub",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Trekking", "Langtang & Manaslu"],
    specializations: ["Langtang Valley Trek", "Manaslu Circuit", "Tamang Heritage Trail"],
    rating: 4.8,
    reviewCount: 156,
    bio: "Cherub specializes in the Langtang and Manaslu regions. His deep knowledge of Tamang culture and remote trails makes every trek an authentic adventure.",
    yearsExperience: 8,
    languages: ["Nepali", "English", "Tamang"],
    certifications: ["Licensed Trekking Guide", "First Aid Certified"]
  },
  {
    id: 3,
    name: "Gaurav",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Trekking", "Annapurna Region"],
    specializations: ["Annapurna Circuit", "Annapurna Base Camp", "Poon Hill Trek"],
    rating: 4.9,
    reviewCount: 178,
    bio: "Gaurav is the Annapurna expert. From the classic circuit to hidden viewpoints, he brings unmatched expertise to Nepal's most popular trekking region.",
    yearsExperience: 9,
    languages: ["Nepali", "English", "German"],
    certifications: ["TAAN Certified Guide", "Mountain First Aid"]
  },
  {
    id: 4,
    name: "Divya",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    expertise: ["Trekking", "Langtang & Dhaulagiri"],
    specializations: ["Langtang Trek", "Dhaulagiri Circuit", "Dhaulagiri Base Camp"],
    rating: 4.8,
    reviewCount: 142,
    bio: "Divya is one of Nepal's pioneering female guides specializing in Langtang and the challenging Dhaulagiri region. Her expertise in remote trails is unparalleled.",
    yearsExperience: 7,
    languages: ["Nepali", "English", "French"],
    certifications: ["Licensed Trekking Guide", "Wilderness First Responder"]
  },
  {
    id: 5,
    name: "Sumina",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    expertise: ["Trekking", "PanchPokhari"],
    specializations: ["PanchPokhari Trek", "Helambu Circuit", "Sacred Lakes Expedition"],
    rating: 4.7,
    reviewCount: 98,
    bio: "Sumina specializes in the sacred PanchPokhari region. Her spiritual approach and knowledge of local traditions make treks to the five holy lakes truly memorable.",
    yearsExperience: 6,
    languages: ["Nepali", "English", "Hindi"],
    certifications: ["Licensed Trekking Guide", "First Aid Certified"]
  }
];

export const PACKAGES: Package[] = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    price: 1200,
    duration: "14 Days",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.9,
    guideId: 1,
    highlights: ["Kala Patthar sunrise", "Sherpa culture immersion", "Tengboche Monastery visit"],
    difficulty: "Challenging",
    groupSize: "4-12 people"
  },
  {
    id: 2,
    title: "Everest Three Passes Trek",
    location: "Solukhumbu, Nepal",
    price: 1800,
    duration: "18 Days",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.9,
    guideId: 1,
    highlights: ["Kongma La Pass", "Cho La Pass", "Renjo La Pass", "Gokyo Lakes"],
    difficulty: "Extreme",
    groupSize: "4-8 people"
  },
  {
    id: 3,
    title: "Langtang Valley Trek",
    location: "Langtang, Nepal",
    price: 650,
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.8,
    guideId: 2,
    highlights: ["Kyanjin Gompa", "Langtang Glacier", "Tamang villages"],
    difficulty: "Moderate",
    groupSize: "2-12 people"
  },
  {
    id: 4,
    title: "Manaslu Circuit Trek",
    location: "Manaslu, Nepal",
    price: 1400,
    duration: "14 Days",
    image: "https://images.unsplash.com/photo-1585016495481-91613a3ab5ae?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.8,
    guideId: 2,
    highlights: ["Larkya La Pass", "Manaslu Base Camp views", "Remote Tibetan culture"],
    difficulty: "Challenging",
    groupSize: "4-10 people"
  },
  {
    id: 5,
    title: "Annapurna Circuit",
    location: "Annapurna, Nepal",
    price: 900,
    duration: "12 Days",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.9,
    guideId: 3,
    highlights: ["Thorong La Pass (5,416m)", "Muktinath Temple", "Natural hot springs"],
    difficulty: "Challenging",
    groupSize: "4-12 people"
  },
  {
    id: 6,
    title: "Annapurna Base Camp Trek",
    location: "Annapurna, Nepal",
    price: 700,
    duration: "10 Days",
    image: "https://images.unsplash.com/photo-1503220317266-6e96c34bb77e?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.8,
    guideId: 3,
    highlights: ["Annapurna Sanctuary", "Machapuchare views", "Gurung villages"],
    difficulty: "Moderate",
    groupSize: "2-12 people"
  },
  {
    id: 7,
    title: "Dhaulagiri Circuit Trek",
    location: "Dhaulagiri, Nepal",
    price: 1600,
    duration: "16 Days",
    image: "https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.7,
    guideId: 4,
    highlights: ["French Pass", "Dhaulagiri Base Camp", "Hidden Valley"],
    difficulty: "Extreme",
    groupSize: "4-8 people"
  },
  {
    id: 8,
    title: "Langtang & Gosainkunda Trek",
    location: "Langtang, Nepal",
    price: 800,
    duration: "11 Days",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.8,
    guideId: 4,
    highlights: ["Sacred Gosainkunda Lake", "Laurebina Pass", "Helambu Valley"],
    difficulty: "Moderate",
    groupSize: "2-10 people"
  },
  {
    id: 9,
    title: "PanchPokhari Trek",
    location: "Sindhupalchok, Nepal",
    price: 550,
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    category: "Trekking",
    rating: 4.7,
    guideId: 5,
    highlights: ["Five sacred lakes", "Hindu pilgrimage site", "Pristine alpine meadows"],
    difficulty: "Moderate",
    groupSize: "2-10 people"
  },
  {
    id: 10,
    title: "Helambu Cultural Trek",
    location: "Helambu, Nepal",
    price: 450,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop",
    category: "Cultural",
    rating: 4.6,
    guideId: 5,
    highlights: ["Sherpa villages", "Ancient monasteries", "Mountain views near Kathmandu"],
    difficulty: "Easy",
    groupSize: "2-15 people"
  }
];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Travel Backpack 45L", category: "Gear", price: 85, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" },
  { id: 2, name: "Hiking Boots Pro", category: "Footwear", price: 120, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
  { id: 3, name: "Insulated Water Bottle", category: "Accessories", price: 25, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop" },
  { id: 4, name: "Sleeping Bag (-10°C)", category: "Gear", price: 150, image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop" },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Aarav Sharma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
  { id: 2, name: "Sabal", role: "Head Guide - Everest", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { id: 3, name: "Gaurav", role: "Lead Guide - Annapurna", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
];

export const BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "Complete Guide to Everest Base Camp Trek",
    excerpt: "Everything you need to know about trekking to Everest Base Camp. From preparation to acclimatization tips from our expert guide Sabal...",
    date: "Dec 01, 2024",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop",
    author: "Sabal"
  },
  {
    id: 2,
    title: "Essential Packing List for Himalayan Treks",
    excerpt: "Don't forget these essentials before you hike. Our comprehensive guide covers everything from base layers to emergency gear...",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=400&fit=crop",
    author: "Gaurav"
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "London, UK",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    text: "Sabal was an exceptional guide for our Everest Base Camp trek. His knowledge of the region and calm demeanor at high altitude made our trek unforgettable. Truly a life-changing experience!",
    rating: 5,
    packageId: 1,
    guideId: 1
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "San Francisco, USA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    text: "The Manaslu Circuit with Cherub was incredible. He knew every trail, every village, and shared amazing stories about Tamang culture. Highly recommend!",
    rating: 5,
    packageId: 4,
    guideId: 2
  },
  {
    id: 3,
    name: "Emma Schmidt",
    location: "Berlin, Germany",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    text: "Gaurav made our Annapurna Circuit trek perfect. His expertise on the trails and knowledge of local culture made every day special. The views from Thorong La were breathtaking!",
    rating: 5,
    packageId: 5,
    guideId: 3
  },
  {
    id: 4,
    name: "James Wilson",
    location: "Sydney, Australia",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    text: "Divya led us through the challenging Dhaulagiri Circuit with confidence and expertise. As a female guide, she was an inspiration. The Hidden Valley was absolutely magical!",
    rating: 5,
    packageId: 7,
    guideId: 4
  },
  {
    id: 5,
    name: "Priya Patel",
    location: "Mumbai, India",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    text: "The PanchPokhari trek with Sumina was a spiritual journey. Her knowledge of the sacred lakes and Hindu traditions added so much meaning to our pilgrimage.",
    rating: 5,
    packageId: 9,
    guideId: 5
  }
];
