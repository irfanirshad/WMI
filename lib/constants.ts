import { LucideIcon, Stethoscope, Factory, Wrench, GraduationCap } from 'lucide-react';

export const COMPANY_NAME = 'Al Watad Medical Est.';
export const SITE_URL = 'https://alwatadmedical.com';
export const SITE_DESCRIPTION = 'Leading provider of medical and industrial products in Saudi Arabia';

export const NAVIGATION_ITEMS = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Services', href: '/services' },
  { title: 'Projects', href: '/projects' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Blog', href: '/blog' },
  { title: 'Team', href: '/team' },
  { title: 'Contact', href: '/contact' },
] as const;

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    title: 'Medical Equipment',
    description: 'State-of-the-art medical devices and equipment for healthcare facilities',
    icon: Stethoscope,
  },
  {
    title: 'Industrial Solutions',
    description: 'Advanced industrial machinery and equipment for various sectors',
    icon: Factory,
  },
  {
    title: 'Technical Support',
    description: '24/7 technical assistance and maintenance services',
    icon: Wrench,
  },
  {
    title: 'Training',
    description: 'Comprehensive training programs for medical and industrial equipment',
    icon: GraduationCap,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Al Watad Medical's equipment and support have significantly improved our hospital's operational efficiency.",
    author: "Dr. Ahmed Al-Sayed",
    role: "Chief of Surgery",
    organization: "King Fahad Medical City"
  },
  {
    quote: "Their industrial solutions have revolutionized our manufacturing processes. Excellent service and support.",
    author: "Eng. Mohammed Al-Rashid",
    role: "Operations Director",
    organization: "Saudi Industrial Development Co."
  },
  {
    quote: "The training programs provided by Al Watad are comprehensive and have greatly benefited our staff.",
    author: "Dr. Sarah Al-Qahtani",
    role: "Medical Director",
    organization: "Al-Noor Specialist Hospital"
  }
] as const;