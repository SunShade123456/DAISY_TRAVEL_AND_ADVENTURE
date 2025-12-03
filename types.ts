export interface Package {
  id: number;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  category: string;
  rating: number;
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

export enum Page {
  HOME = 'home',
  PACKAGES = 'packages',
  SHOP = 'shop',
  BLOG = 'blog',
  ABOUT = 'about',
  CONTACT = 'contact'
}