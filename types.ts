export interface Guide {
  id: number;
  name: string;
  photo: string;
  expertise: string[];
  specializations: string[];
  rating: number;
  reviewCount: number;
  bio: string;
  yearsExperience: number;
  languages: string[];
  certifications: string[];
}

export interface Package {
  id: number;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  category: string;
  rating: number;
  guideId: number;
  highlights: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
  groupSize: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  photo: string;
  text: string;
  rating: number;
  packageId: number;
  guideId: number;
}

export enum Page {
  HOME = 'home',
  PACKAGES = 'packages',
  SHOP = 'shop',
  BLOG = 'blog',
  ABOUT = 'about',
  CONTACT = 'contact'
}
