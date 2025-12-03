import { Package, Product, TeamMember, BlogPost } from './types';

export const PACKAGES: Package[] = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    price: 1200,
    duration: "14 Days",
    image: "https://picsum.photos/seed/everest/800/600",
    category: "Trekking",
    rating: 4.9
  },
  {
    id: 2,
    title: "Pokhara Lakeside Retreat",
    location: "Pokhara, Nepal",
    price: 400,
    duration: "4 Days",
    image: "https://picsum.photos/seed/pokhara/800/600",
    category: "Leisure",
    rating: 4.7
  },
  {
    id: 3,
    title: "Chitwan Jungle Safari",
    location: "Chitwan, Nepal",
    price: 350,
    duration: "3 Days",
    image: "https://picsum.photos/seed/chitwan/800/600",
    category: "Wildlife",
    rating: 4.8
  },
  {
    id: 4,
    title: "Annapurna Circuit",
    location: "Annapurna, Nepal",
    price: 900,
    duration: "12 Days",
    image: "https://picsum.photos/seed/annapurna/800/600",
    category: "Trekking",
    rating: 4.6
  }
];

export const PRODUCTS: Product[] = [
  { id: 1, name: "Travel Backpack 45L", category: "Gear", price: 85, image: "https://picsum.photos/seed/bag/400/400" },
  { id: 2, name: "Hiking Boots Pro", category: "Footwear", price: 120, image: "https://picsum.photos/seed/boots/400/400" },
  { id: 3, name: "Insulated Water Bottle", category: "Accessories", price: 25, image: "https://picsum.photos/seed/bottle/400/400" },
  { id: 4, name: "Sleeping Bag (-10°C)", category: "Gear", price: 150, image: "https://picsum.photos/seed/sleep/400/400" },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Aarav Sharma", role: "Founder & CEO", image: "https://picsum.photos/seed/ceo/300/300" },
  { id: 2, name: "Priya Karki", role: "Senior Guide", image: "https://picsum.photos/seed/guide/300/300" },
  { id: 3, name: "Rohan Thapa", role: "Travel Consultant", image: "https://picsum.photos/seed/consultant/300/300" },
];

export const BLOGS: BlogPost[] = [
  { id: 1, title: "Top 10 Hidden Gems in Mustang", excerpt: "Discover the forbidden kingdom's secrets...", date: "Dec 01, 2023", image: "https://picsum.photos/seed/mustang/800/400", author: "Priya Karki" },
  { id: 2, title: "Packing List for Trekking", excerpt: "Don't forget these essentials before you hike...", date: "Nov 28, 2023", image: "https://picsum.photos/seed/packing/800/400", author: "Rohan Thapa" },
];