import { z } from "zod";

// Navigation Types
export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  children: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
        description: z.string().optional(),
      })
    )
    .optional(),
});

export type NavItem = z.infer<typeof NavItemSchema>;

// Service Types
export const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  href: z.string(),
});

export type Service = z.infer<typeof ServiceSchema>;

// Team Member Types
export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  image: z.string(),
  bio: z.string().optional(),
  linkedin: z.string().url().optional(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;

// Testimonial Types
export const TestimonialSchema = z.object({
  id: z.string(),
  content: z.string(),
  author: z.string(),
  role: z.string(),
  company: z.string(),
  avatar: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;

// Blog Post Types
export const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string().optional(),
  image: z.string(),
  author: z.string(),
  date: z.string(),
  category: z.string(),
  slug: z.string(),
  readTime: z.string().optional(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

// Job Position Types
export const JobPositionSchema = z.object({
  id: z.string(),
  title: z.string(),
  department: z.string(),
  location: z.string(),
  type: z.enum(["Full-time", "Part-time", "Contract", "Remote"]),
  description: z.string(),
  requirements: z.array(z.string()),
  slug: z.string(),
});

export type JobPosition = z.infer<typeof JobPositionSchema>;

// Industry Solution Types
export const IndustrySolutionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  href: z.string(),
});

export type IndustrySolution = z.infer<typeof IndustrySolutionSchema>;

// FAQ Types
export const FAQItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export type FAQItem = z.infer<typeof FAQItemSchema>;

// Contact Form Types
export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Newsletter Form Types
export const NewsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>;

// Timeline Types
export const TimelineItemSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
});

export type TimelineItem = z.infer<typeof TimelineItemSchema>;

// Stats Types
export const StatSchema = z.object({
  value: z.string(),
  label: z.string(),
  suffix: z.string().optional(),
});

export type Stat = z.infer<typeof StatSchema>;
