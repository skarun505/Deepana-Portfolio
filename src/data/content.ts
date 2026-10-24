export interface HeroData {
  eyebrow: string;
  headline: string;
  subline: string;
  primaryCta: {
    label: string;
    href: string;
    download?: boolean;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  quickStats: string[];
}

export interface StatItem {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
}

export interface IndustryItem {
  id: number;
  name: string;
  platforms: string[];
  budget: string;
}

export interface AboutData {
  title: string;
  paragraphs: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl: string;
  tagline: string;
  period: string;
  duration: string;
  location: string;
  aboutSubix: string;
  bullets: string[];
  tools: string;
}

export interface CaseStudyMetric {
  label: string;
  before?: string;
  after?: string;
  change: string;
  isPositive: boolean;
}

export interface CaseStudyItem {
  id: string;
  industry: string;
  title: string;
  platforms: string;
  budget: string;
  goal: string;
  whatIDid: string;
  headlineResult: string;
  results: CaseStudyMetric[];
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  graduationYear: string;
  certifications: string[];
}

export interface ContactData {
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  whatsappPrefilledMessage: string;
  linkedinUrl: string;
  location: string;
  resumeUrl: string;
}

export interface SeoData {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
}

// ==========================================
// CONTENT DEFINITION (Single Source of Truth)
// ==========================================

export const hero: HeroData = {
  eyebrow: "Performance Marketer · Meta · Google · LinkedIn",
  headline: "I turn ad budgets into measurable growth.",
  subline: "Managing ₹25L+ in monthly ad spend across Meta, Google and LinkedIn. Open to Junior and Executive Paid Media roles.",
  primaryCta: {
    label: "Download Resume",
    href: "/resume/Deepana_Chandrasekar_Resume.pdf",
    download: true,
  },
  secondaryCta: {
    label: "Let's Talk",
    href: "#contact",
  },
  quickStats: [
    "₹25L+ / month managed",
    "3 ad platforms",
    "6 months at Subix",
    "8 industries",
  ],
};

export const stats: StatItem[] = [
  {
    value: "₹25L+",
    numericValue: 25,
    prefix: "₹",
    suffix: "L+",
    label: "Monthly Ad Spend",
    sub: "Cumulative across agency clients",
  },
  {
    value: "3",
    numericValue: 3,
    label: "Ad Platforms",
    sub: "Meta, Google, LinkedIn",
  },
  {
    value: "6",
    numericValue: 6,
    suffix: " Mo",
    label: "Months at Subix",
    sub: "White-label execution engine",
  },
  {
    value: "8",
    numericValue: 8,
    label: "Industries Served",
    sub: "eCom to B2B SaaS",
  },
];

export const industries: IndustryItem[] = [
  { id: 1, name: "eCommerce", platforms: ["Meta", "Google"], budget: "₹5.0L" },
  { id: 2, name: "Real Estate", platforms: ["Meta", "Google"], budget: "₹4.5L" },
  { id: 3, name: "Education / Admissions", platforms: ["Meta", "Google"], budget: "₹3.5L" },
  { id: 4, name: "Healthcare / Wellness", platforms: ["Meta", "Google"], budget: "₹3.0L" },
  { id: 5, name: "Fashion / Apparel", platforms: ["Meta", "Google"], budget: "₹2.5L" },
  { id: 6, name: "B2B SaaS / IT Services", platforms: ["LinkedIn", "Google"], budget: "₹2.5L" },
  { id: 7, name: "BFSI (Loans / Insurance)", platforms: ["Google", "Meta"], budget: "₹2.5L" },
  { id: 8, name: "Events / Exhibitions", platforms: ["Meta", "Google"], budget: "₹1.5L" },
];

export const about: AboutData = {
  title: "About Me",
  paragraphs: [
    "I'm Deepana, a performance marketer who learned the craft by running real budgets, not just courses. During my 6-month internship at Subix, India's first PMaaS company, I handled campaigns across Meta, Google and LinkedIn for multiple agency clients, together managing around ₹25 lakh in monthly spend. I care about clean tracking, tight CPL/ROAS, and reports that clients actually read.",
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Platforms",
    skills: [
      "Meta Ads Manager",
      "Google Ads (Search, Display, YouTube, Performance Max)",
      "LinkedIn Campaign Manager",
    ],
  },
  {
    category: "Strategy",
    skills: [
      "Funnel planning",
      "Audience building",
      "Budget allocation",
      "A/B testing",
      "Creative testing",
    ],
  },
  {
    category: "Analytics",
    skills: [
      "GA4",
      "Google Tag Manager",
    ],
  },
  {
    category: "Reporting",
    skills: [
      "Weekly & monthly performance reports",
      "KPI tracking (CPL, CPA, CTR, ROAS)",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Microsoft Excel & Google Sheets",
      "Meta Business Suite",
      "WhatsApp Business Automation",
      "Lead CRM Integration",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Performance Marketing Intern",
    company: "Subix (SUBIX°PMaaS)",
    companyUrl: "https://www.subix.in",
    tagline: "India's 1st Performance Marketing as a Service (PMaaS) company",
    period: "May 2026 – Oct 2026",
    duration: "6 months",
    location: "Bengaluru / Remote",
    aboutSubix:
      "India's 1st Performance Marketing as a Service (PMaaS) company, a white-label Meta and Google Ads engine for agencies — tagline: 'Your clients. Your brand. Our engine.'",
    bullets: [
      "Ran and optimised paid campaigns on Meta, Google and LinkedIn for agency clients under a white-label model",
      "Contributed to a cumulative monthly ad budget of ~₹25 Lakh",
      "Planned, launched and optimised campaigns across 8 industries: eCommerce, Real Estate, Education, Healthcare, B2B SaaS, BFSI, Fashion and Events",
      "Ran A/B tests on creatives, audiences and landing pages to bring down CPL and lift ROAS",
      "Prepared weekly performance reports with CPL, CPA, CTR and ROAS for agency partners",
    ],
    tools: "Meta Ads Manager, Google Ads, LinkedIn Campaign Manager, GA4, Google Sheets",
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: "ecommerce",
    industry: "eCommerce",
    title: "Scaling profitable sales",
    platforms: "Meta (Advantage+ Shopping, retargeting) + Google (Shopping, Performance Max)",
    budget: "₹5.0L/month",
    goal: "Increase purchases at a healthy ROAS",
    whatIDid:
      "Split campaigns into prospecting, retargeting and catalogue. Tested 12 creatives in 3 angles (offer, UGC, product demo). Moved budget to winning ad sets weekly and excluded recent purchasers.",
    headlineResult: "ROAS 2.1 → 3.4 · CPA ↓ 27%",
    results: [
      {
        label: "ROAS",
        before: "2.1",
        after: "3.4",
        change: "+62%",
        isPositive: true,
      },
      {
        label: "CPA",
        change: "↓ 27%",
        isPositive: true,
      },
      {
        label: "Purchases",
        change: "+38%",
        isPositive: true,
      },
    ],
  },
  {
    id: "real-estate",
    industry: "Real Estate",
    title: "Cheaper, better quality leads",
    platforms: "Meta Lead Ads + Google Search",
    budget: "₹4.5L/month",
    goal: "Qualified site-visit leads for a residential project",
    whatIDid:
      "Switched from instant forms to higher-intent forms with budget and BHK questions. Added location-based Search campaigns and negative keywords. Retargeted video viewers.",
    headlineResult: "CPL ₹850 → ₹540 (↓ 36%)",
    results: [
      {
        label: "CPL",
        before: "₹850",
        after: "₹540",
        change: "↓ 36%",
        isPositive: true,
      },
      {
        label: "Qualified Lead Rate",
        before: "18%",
        after: "27%",
        change: "+50%",
        isPositive: true,
      },
      {
        label: "Site Visits",
        change: "+30%",
        isPositive: true,
      },
    ],
  },
  {
    id: "education",
    industry: "Education / Admissions",
    title: "Filling the intake",
    platforms: "Meta + Google Search",
    budget: "₹3.5L/month",
    goal: "Admission enquiries before the deadline",
    whatIDid:
      "Built parent and student audiences separately, ran course-wise ad copy, and set up a WhatsApp click-to-chat flow for faster follow-up.",
    headlineResult: "CPL ₹620 → ₹400 (↓ 35%)",
    results: [
      {
        label: "CPL",
        before: "₹620",
        after: "₹400",
        change: "↓ 35%",
        isPositive: true,
      },
      {
        label: "Enquiries",
        change: "+44%",
        isPositive: true,
      },
      {
        label: "Enquiry-to-Application",
        change: "+19%",
        isPositive: true,
      },
    ],
  },
  {
    id: "healthcare",
    industry: "Healthcare / Wellness",
    title: "Appointment bookings",
    platforms: "Meta + Google Search (local intent)",
    budget: "₹3.0L/month",
    goal: "Consultation and programme bookings",
    whatIDid:
      "Followed ad policy for health claims. Used local geo-targeting, testimonial-style creatives and call extensions. Paused low-intent keywords.",
    headlineResult: "CPL ₹480 → ₹330 (↓ 31%)",
    results: [
      {
        label: "CPL",
        before: "₹480",
        after: "₹330",
        change: "↓ 31%",
        isPositive: true,
      },
      {
        label: "Bookings",
        change: "+33%",
        isPositive: true,
      },
      {
        label: "CTR",
        before: "1.1%",
        after: "1.8%",
        change: "+63%",
        isPositive: true,
      },
    ],
  },
  {
    id: "b2b-saas",
    industry: "B2B SaaS / IT Services",
    title: "Demo requests from LinkedIn",
    platforms: "LinkedIn Ads (Lead Gen Forms) + Google Search",
    budget: "₹2.5L/month",
    goal: "Demo bookings from decision makers",
    whatIDid:
      "Targeted by job title, seniority and company size. Tested document ads vs single-image ads. Added a Google Search layer on high-intent terms.",
    headlineResult: "CPL ₹3,400 → ₹2,350 (↓ 31%)",
    results: [
      {
        label: "CPL",
        before: "₹3,400",
        after: "₹2,350",
        change: "↓ 31%",
        isPositive: true,
      },
      {
        label: "Demo Requests",
        change: "+40%",
        isPositive: true,
      },
      {
        label: "Lead-to-Meeting Rate",
        after: "22%",
        change: "22%",
        isPositive: true,
      },
    ],
  },
  {
    id: "bfsi",
    industry: "BFSI",
    title: "Quality lead generation",
    platforms: "Google Search + Meta",
    budget: "₹2.5L/month",
    goal: "Qualified loan / insurance enquiries",
    whatIDid:
      "Intent-based keyword groups, strict negative keywords, short lead forms with phone validation, and weekly review of lead quality with the sales team.",
    headlineResult: "Cost per qualified lead ↓ 29%",
    results: [
      {
        label: "Cost per Qualified Lead",
        change: "↓ 29%",
        isPositive: true,
      },
      {
        label: "Junk Leads",
        change: "↓ 34%",
        isPositive: true,
      },
      {
        label: "Conversion to Call",
        change: "+21%",
        isPositive: true,
      },
    ],
  },
];

export const services: ServiceItem[] = [
  {
    title: "Campaign Setup",
    description: "End-to-end structure across Meta, Google, and LinkedIn optimized for conversions.",
    iconName: "Sliders",
  },
  {
    title: "Audience & Creative Testing",
    description: "Methodical multivariate testing across angles, hooks, and targeted cohorts.",
    iconName: "Split",
  },
  {
    title: "Budget Scaling",
    description: "Safely pushing winning ad sets and campaigns without destabilizing CPA/ROAS.",
    iconName: "TrendingUp",
  },
  {
    title: "Conversion Tracking Setup",
    description: "Accurate tracking with Meta Pixel, CAPI, Google Ads tags, and GA4 events.",
    iconName: "Activity",
  },
  {
    title: "Weekly Reporting",
    description: "Actionable dashboards and performance breakdowns that clients actually read.",
    iconName: "BarChart3",
  },
  {
    title: "Landing Page Feedback",
    description: "Conversion rate optimization insights to turn clicks into qualified leads.",
    iconName: "Layout",
  },
];

export const education: EducationData = {
  degree: "B.E. Electronics and Communication Engineering (ECE)",
  institution: "Sri Shanmugha College of Engineering",
  graduationYear: "2027",
  certifications: [
    "Google Ads Search Certification",
    "Meta Certified Digital Marketing Associate",
    "Google Analytics Individual Qualification (GA4)",
  ],
};

export const contact: ContactData = {
  email: "deepanachandraseker@gmail.com",
  phone: "+91 96598 59886",
  phoneDisplay: "+91 96598 59886",
  whatsappUrl: "https://wa.me/919659459886?text=Hi%20Deepana%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.",
  whatsappPrefilledMessage: "Hi Deepana, I saw your portfolio and would like to talk.",
  linkedinUrl: "https://www.linkedin.com/in/deepana-chandrasekar-29419b3a7/",
  location: "Bengaluru, India",
  resumeUrl: "/resume/Deepana_Chandrasekar_Resume.pdf",
};

export const seo: SeoData = {
  title: "Deepana Chandrasekar | Performance Marketer, Meta, Google and LinkedIn Ads",
  description: "Performance Marketer managing ₹25L+ monthly ad budget across Meta, Google and LinkedIn. Open to Junior and Executive Paid Media roles.",
  url: "https://deepana-portfolio.vercel.app",
  ogImage: "/images/og-image.png",
  author: "Deepana Chandrasekar",
};
