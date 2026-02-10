import { Settings, Users, Briefcase, Shield, Code, Heart, Building, Factory, Landmark, GraduationCap, ShoppingCart, ArrowLeft, ArrowRight, Check, ChevronRight, ChevronDown, Menu, X, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Quote, Calendar, Clock, Star, Play, Workflow, Home, Type as type, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  settings: Settings,
  users: Users,
  briefcase: Briefcase,
  shield: Shield,
  code: Code,
  heart: Heart,
  building: Building,
  factory: Factory,
  landmark: Landmark,
  "graduation-cap": GraduationCap,
  "shopping-cart": ShoppingCart,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  check: Check,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
  menu: Menu,
  x: X,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  quote: Quote,
  calendar: Calendar,
  clock: Clock,
  star: Star,
  play: Play,
  workflow: Workflow,
  home: Home,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent className={cn("shrink-0", className)} size={size} />
  );
}
