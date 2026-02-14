// Type definitions for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: number;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'opensource';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
  link?: string;
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  portfolio?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
