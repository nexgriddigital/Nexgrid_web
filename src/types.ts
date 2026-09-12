export type ProjectCategory = 'all' | 'business-systems' | 'web-apps' | 'ecommerce' | 'corporate';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  idealFor: string;
}

export interface SolutionItem {
  id: string;
  problemTitle: string;
  problemArea: string;
  problemPain: string;
  solutionName: string;
  solutionType: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  keyModules: string[];
  previewUi: {
    title: string;
    status: string;
    kpis: { label: string; value: string; change: string }[];
    recentActivity: { id: string; action: string; time: string; status: 'ok' | 'sync' | 'alert' }[];
  };
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientType: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  mockupType: 'dashboard' | 'ecommerce' | 'portal' | 'booking' | 'system' | 'website';
  isDemo: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  keyAction: string;
}

export interface WhyNexGridAdvantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
  technicalProof: string;
}

export interface ConfiguratorSystemType {
  id: string;
  name: string;
  category: string;
  description: string;
  baseTimelineWeeks: number;
  complexity: 'Standard' | 'Advanced' | 'Enterprise';
  iconName: string;
}

export interface ConfiguratorAddon {
  id: string;
  name: string;
  description: string;
  addedWeeks: number;
  category: 'Security' | 'Integration' | 'Data' | 'Automation';
}

export interface InquiryFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  projectDescription: string;
  selectedModules?: string[];
  preferredTimeline?: string;
}
