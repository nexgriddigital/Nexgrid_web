import { 
  ServiceItem, 
  SolutionItem, 
  CaseStudyItem, 
  ProcessStep, 
  WhyNexGridAdvantage,
  ConfiguratorSystemType,
  ConfiguratorAddon
} from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-engineering',
    title: 'Web Engineering',
    subtitle: 'High-Impact Digital Frontlines',
    description: 'Custom websites, corporate websites, landing pages, and high-performance web experiences engineered for speed, conversion, and brand authority.',
    badge: 'Performance & Conversion',
    iconName: 'Globe',
    features: [
      'Engineered with modern frameworks (Next.js / React / Vite)',
      'Sub-second load times & 100/100 Core Web Vitals target',
      'Fluid responsive layouts across mobile, tablet & desktop',
      'Headless CMS integration (Sanity, Strapi, Contentful)'
    ],
    deliverables: [
      'Custom Responsive Frontend',
      'Content Management Setup',
      'Technical SEO Optimization',
      'Analytics & Conversion Tracking',
      'Global Edge CDN Deployment'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel / Cloudflare Edge'],
    idealFor: 'Businesses needing a serious, authoritative brand presence that drives customer trust and inbound leads.'
  },
  {
    id: 'business-systems',
    title: 'Business Systems',
    subtitle: 'Tailored Operational Engines',
    description: 'Custom software built around company workflows and operational requirements, eliminating spreadsheet chaos and manual errors.',
    badge: 'Operational Efficiency',
    iconName: 'Cpu',
    features: [
      'Tailored business logic matching your exact operational rules',
      'Unified data pipelines connecting multiple departments',
      'Custom automated triggers and background job processors',
      'Granular audit trails and compliance logging'
    ],
    deliverables: [
      'Bespoke Enterprise Database Schema',
      'Operational Flow Engine',
      'Departmental Access Control (RBAC)',
      'Automated Workflow Triggers',
      'Internal Documentation & Staff Training'
    ],
    techStack: ['Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'GraphQL / REST'],
    idealFor: 'Growing enterprises outgrowing off-the-shelf software with proprietary workflows requiring dedicated logic.'
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    subtitle: 'SaaS Platforms & Customer Portals',
    description: 'Complex applications, dashboards, portals, authentication, APIs, and database-driven platforms built for high security and concurrent traffic.',
    badge: 'Full-Stack Scalability',
    iconName: 'AppWindow',
    features: [
      'Robust JWT / OAuth2 authentication with multi-factor support',
      'High-density data grids with instant search, sorting & batch actions',
      'Real-time WebSocket event streams for concurrent users',
      'End-to-end type safety across client and server'
    ],
    deliverables: [
      'Production-Ready Full-Stack Web App',
      'Secure Auth & Session Management',
      'REST & GraphQL API Endpoints',
      'Automated Test Suites (Unit & E2E)',
      'Cloud Architecture on AWS / GCP'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind'],
    idealFor: 'Technology startups, SaaS founders, and enterprises launching dedicated internal tools or customer-facing platforms.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'High-Volume Transaction Systems',
    description: 'Online stores, product catalogs, customer accounts, order management, and integrations engineered for friction-free purchasing.',
    badge: 'Revenue Architecture',
    iconName: 'ShoppingBag',
    features: [
      'Lightning-fast cart and headless checkout pipelines',
      'Multi-currency, tax calculation, and automated invoice delivery',
      'Real-time inventory synchronization and warehouse alerts',
      'Customer account portals with order tracking and refunds'
    ],
    deliverables: [
      'Custom Storefront & Product Engine',
      'Stripe / Adyen Payment Gateway Integration',
      'Inventory Sync & Warehouse Webhooks',
      'Customer Account Management Hub',
      'PCI-DSS Compliant Security Setup'
    ],
    techStack: ['React', 'Next.js Commerce', 'Shopify Storefront API', 'Stripe', 'PostgreSQL'],
    idealFor: 'Retailers and B2B manufacturers requiring seamless multi-channel purchasing and reliable high-volume processing.'
  },
  {
    id: 'management-systems',
    title: 'Management Systems',
    subtitle: 'ERP, CRM, Inventory & Booking',
    description: 'ERP, CRM, inventory, HR, property, booking, administration, and operational systems unifying company command into one interface.',
    badge: 'Unified Control',
    iconName: 'Layers',
    features: [
      'Multi-module architecture tailored to departmental roles',
      'Multi-calendar scheduling with automated notifications & SMS',
      'Dynamic inventory tracking with SKU barcodes & re-order alerts',
      'Financial ledger, invoice generation & billing reconciliations'
    ],
    deliverables: [
      'Centralized Management Cockpit',
      'Resource & Schedule Engine',
      'Inventory & Asset Tracker',
      'Role-based Permission Matrix',
      'Custom Exportable PDF / Excel Reports'
    ],
    techStack: ['TypeScript', 'React', 'Express / NestJS', 'PostgreSQL', 'Tailwind CSS'],
    idealFor: 'Multi-location operations, clinic networks, property managers, and logistics agencies needing centralized command.'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'Workflow Modernization & Automation',
    description: 'Technology solutions that replace inefficient manual processes with scalable digital workflows, custom integrations, and data pipelines.',
    badge: 'Process Automation',
    iconName: 'Wrench',
    features: [
      'Third-party software bridge connecting legacy tools to modern APIs',
      'Automated ETL pipelines processing millions of rows daily',
      'Custom webhook routers and event bus architectures',
      'Security audits, performance profiling and code modernization'
    ],
    deliverables: [
      'Custom Middleware & Microservices',
      'Data Migration Scripts & Validation',
      'API Connector Libraries',
      'System Health Monitoring & Logging',
      'SLA & Ongoing Technical Maintenance'
    ],
    techStack: ['Go / Node.js', 'Python', 'Docker', 'Kubernetes', 'Cloudflare Workers'],
    idealFor: 'Businesses facing unique data hurdles, fragmented systems, or needing seamless bridge connectors between vendors.'
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'company-ops',
    problemTitle: 'Company Operations',
    problemArea: 'Operations & Workflow',
    problemPain: 'Disconnected spreadsheets, manual status updates, and lack of real-time visibility across internal departments.',
    solutionName: 'Custom Management Dashboard',
    solutionType: 'Centralized Operations Cockpit',
    description: 'A unified single-pane-of-glass dashboard that aggregates operational data, automates task routing, and provides executive-level insight in real time.',
    impactMetrics: [
      { label: 'Manual Reporting Saved', value: '18 hrs/wk' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Cross-Team Visibility', value: '100%' }
    ],
    keyModules: ['Live Operational KPIs', 'Automated Task Dispatch', 'Departmental Activity Feed', 'Audit Trail & Permissions'],
    previewUi: {
      title: 'Enterprise Ops Cockpit v3.4',
      status: 'SYS:OPTIMAL',
      kpis: [
        { label: 'Active Workflows', value: '142', change: '+12% today' },
        { label: 'Automated Routing', value: '94.2%', change: 'Zero errors' },
        { label: 'Avg Cycle Time', value: '38 min', change: '-41% reduced' }
      ],
      recentActivity: [
        { id: 'ACT-902', action: 'Dispatch order #4819 routed to Fleet B', time: '1m ago', status: 'ok' },
        { id: 'ACT-903', action: 'Cross-department sync: Sales & Logistics', time: '3m ago', status: 'sync' },
        { id: 'ACT-904', action: 'Weekly automated reconciliation completed', time: '12m ago', status: 'ok' }
      ]
    }
  },
  {
    id: 'customer-management',
    problemTitle: 'Customer Management',
    problemArea: 'Client Relations & Pipeline',
    problemPain: 'Lost client leads, forgotten follow-ups, scattered email chains, and inflexible generic CRM subscriptions.',
    solutionName: 'Custom CRM Platform',
    solutionType: 'Dedicated Relationship Engine',
    description: 'A custom CRM engineered around your exact sales cycle, customer touchpoints, automated contract generation, and client lifetime metrics.',
    impactMetrics: [
      { label: 'Lead Response Time', value: '< 5 min' },
      { label: 'Pipeline Conversion', value: '+34%' },
      { label: 'SaaS Subscription Saved', value: '$1.2k/mo' }
    ],
    keyModules: ['Visual Deal Pipeline', 'Automated Follow-up Sequences', 'Contract & Proposal Generator', 'Full Customer Timeline'],
    previewUi: {
      title: 'Client Relationship Pipeline',
      status: 'DEAL STAGE: ACTIVE',
      kpis: [
        { label: 'Qualified Pipeline', value: '$480,000', change: '18 active' },
        { label: 'Proposal Win Rate', value: '46.8%', change: '+8.4% YoY' },
        { label: 'Avg Deal Velocity', value: '14 days', change: '-6 days' }
      ],
      recentActivity: [
        { id: 'CRM-101', action: 'Proposal sent to Global Logistics Ltd', time: '4m ago', status: 'ok' },
        { id: 'CRM-102', action: 'Automated 48h check-in triggered for Acme Corp', time: '9m ago', status: 'sync' },
        { id: 'CRM-103', action: 'Deal won: Tier 1 Retainer ($48,000/yr)', time: '22m ago', status: 'ok' }
      ]
    }
  },
  {
    id: 'sales-ecommerce',
    problemTitle: 'Sales & Purchasing',
    problemArea: 'Digital Transactions & Cart',
    problemPain: 'Slow storefront checkout, high cart abandonment, manual payment reconciliation, and poor mobile purchasing.',
    solutionName: 'Modern E-Commerce Platform',
    solutionType: 'Headless Transaction Engine',
    description: 'Custom e-commerce platforms engineered for fast load speeds, friction-free one-click checkouts, and seamless payment reconciliation.',
    impactMetrics: [
      { label: 'Checkout Load Time', value: '0.4 sec' },
      { label: 'Cart Abandonment Drop', value: '-28%' },
      { label: 'Mobile Conversion', value: '+42%' }
    ],
    keyModules: ['One-Click Checkout', 'Instant Search & Filter', 'Automated Invoicing & Taxes', 'Real-Time Stock Reserve'],
    previewUi: {
      title: 'Storefront Transactions Node',
      status: 'GATEWAY: ONLINE',
      kpis: [
        { label: 'Gross Volume Today', value: '$14,890', change: '+22.4%' },
        { label: 'Avg Order Value', value: '$142.50', change: 'Steady' },
        { label: 'Checkout Success', value: '99.4%', change: 'Stripe 3DS' }
      ],
      recentActivity: [
        { id: 'ORD-8812', action: 'Checkout settled: $389.00 (Apple Pay)', time: '30s ago', status: 'ok' },
        { id: 'ORD-8813', action: 'Warehouse stock reserved: SKU-B42', time: '2m ago', status: 'sync' },
        { id: 'ORD-8814', action: 'Automated VAT invoice dispatched to customer', time: '5m ago', status: 'ok' }
      ]
    }
  },
  {
    id: 'inventory-ops',
    problemTitle: 'Inventory & Stock',
    problemArea: 'Stockroom & Supply Chain',
    problemPain: 'Stockouts during peak demand, manual warehouse counting errors, and untracked returns or damaged goods.',
    solutionName: 'Inventory Management System',
    solutionType: 'Live Asset & Stock Engine',
    description: 'Real-time multi-warehouse inventory tracker with automated re-order thresholds, barcode scanning, and supplier dispatch automation.',
    impactMetrics: [
      { label: 'Stockout Incidents', value: '-85%' },
      { label: 'Picking Accuracy', value: '99.8%' },
      { label: 'Re-order Automation', value: 'Instant' }
    ],
    keyModules: ['Multi-Warehouse Tracking', 'Barcode & QR Scanner API', 'Predictive Reorder Thresholds', 'Supplier Purchase Orders'],
    previewUi: {
      title: 'Central Stock & Supply Stream',
      status: 'SYNC: 4 WAREHOUSES',
      kpis: [
        { label: 'Tracked SKUs', value: '8,420', change: '100% active' },
        { label: 'Low Stock Alerts', value: '2 items', change: 'PO auto-sent' },
        { label: 'Turnover Ratio', value: '6.8x', change: '+1.2x YoY' }
      ],
      recentActivity: [
        { id: 'INV-441', action: 'Shipment received: 500 units SKU-9901', time: '1m ago', status: 'ok' },
        { id: 'INV-442', action: 'Automated PO created for Supplier North', time: '8m ago', status: 'sync' },
        { id: 'INV-443', action: 'Inter-warehouse transfer: Dock A -> Hub B', time: '14m ago', status: 'ok' }
      ]
    }
  },
  {
    id: 'appointments-booking',
    problemTitle: 'Appointments & Booking',
    problemArea: 'Scheduling & Client Booking',
    problemPain: 'Double-bookings, manual phone confirmation overhead, high no-show rates, and calendar sync errors.',
    solutionName: 'Custom Booking System',
    solutionType: 'Real-Time Reservation Platform',
    description: 'Frictionless customer booking interface with calendar sync, automated SMS reminders, deposit collection, and staff capacity planning.',
    impactMetrics: [
      { label: 'No-Show Reduction', value: '-62%' },
      { label: 'Phone Booking Hours Saved', value: '15 hrs/wk' },
      { label: 'Self-Serve Booking', value: '88%' }
    ],
    keyModules: ['Real-Time Time Slot Engine', 'Integrated Deposit Payments', 'Two-Way Google/Outlook Sync', 'Automated SMS / Email Alerts'],
    previewUi: {
      title: 'Reservation & Schedule Manager',
      status: 'SLOTS: REAL-TIME',
      kpis: [
        { label: 'Bookings This Week', value: '284', change: '94% filled' },
        { label: 'Attendance Rate', value: '96.2%', change: '+14% boost' },
        { label: 'Deposits Collected', value: '$8,520', change: 'Automated' }
      ],
      recentActivity: [
        { id: 'BKG-771', action: 'New booking: Dr. Henderson (Tue 10:00 AM)', time: '2m ago', status: 'ok' },
        { id: 'BKG-772', action: 'SMS reminder delivered (24h before appt)', time: '6m ago', status: 'ok' },
        { id: 'BKG-773', action: 'Reschedule request resolved in 1 click', time: '11m ago', status: 'sync' }
      ]
    }
  },
  {
    id: 'property-management',
    problemTitle: 'Property & Real Estate',
    problemArea: 'Tenants, Leases & Assets',
    problemPain: 'Scattered lease documents, delayed maintenance dispatch, manual rent reminders, and tenant communication friction.',
    solutionName: 'Property Management Platform',
    solutionType: 'Asset & Tenant Management Hub',
    description: 'Central platform for residential and commercial property portfolios: online tenant portal, automated rent collections, maintenance tickets, and owner yields.',
    impactMetrics: [
      { label: 'On-Time Rent Payouts', value: '98.5%' },
      { label: 'Maintenance Resolution', value: '2.4 days' },
      { label: 'Portfolio Scalability', value: '500+ units' }
    ],
    keyModules: ['Tenant Self-Service Portal', 'Automated Direct Debit Rent', 'Maintenance Ticket Triage', 'Landlord Financial Yields'],
    previewUi: {
      title: 'Portfolio Control Console',
      status: 'OCCUPANCY: 97.4%',
      kpis: [
        { label: 'Managed Units', value: '412', change: '12 properties' },
        { label: 'Collected This Month', value: '$384,200', change: '98.5% on-time' },
        { label: 'Open Maintenance', value: '3 urgent', change: 'Dispatched' }
      ],
      recentActivity: [
        { id: 'PRP-201', action: 'Rent direct debit confirmed: Unit 402', time: '1m ago', status: 'ok' },
        { id: 'PRP-202', action: 'Maintenance ticket #91: Plumber assigned', time: '7m ago', status: 'sync' },
        { id: 'PRP-203', action: 'Annual lease renewal contract e-signed', time: '19m ago', status: 'ok' }
      ]
    }
  },
  {
    id: 'employees-hr',
    problemTitle: 'Employees & HR',
    problemArea: 'People Ops & Administration',
    problemPain: 'Manual leave request approvals, messy document storage, fragmented performance notes, and payroll onboarding bottlenecks.',
    solutionName: 'HR Management System',
    solutionType: 'Internal People Operations Platform',
    description: 'Custom HR platform with secure employee directories, automated leave management, document e-signing, and departmental onboarding workflows.',
    impactMetrics: [
      { label: 'Onboarding Speed', value: '3x Faster' },
      { label: 'Admin Paperwork', value: '-90%' },
      { label: 'Compliance Score', value: '100%' }
    ],
    keyModules: ['Employee Self-Service Hub', 'Leave & PTO Auto-Approval', 'Digital Document Vault', 'Custom Review Cycles'],
    previewUi: {
      title: 'People Operations Hub',
      status: 'STAFF: 86 ACTIVE',
      kpis: [
        { label: 'Active Personnel', value: '86', change: '5 teams' },
        { label: 'Leave Coverage', value: '100%', change: 'No clashes' },
        { label: 'Doc Compliance', value: '99.2%', change: 'All signed' }
      ],
      recentActivity: [
        { id: 'HR-310', action: 'New engineer onboarding checklist 100% complete', time: '3m ago', status: 'ok' },
        { id: 'HR-311', action: 'PTO request approved: Marketing team', time: '10m ago', status: 'ok' },
        { id: 'HR-312', action: 'Security certificate compliance refreshed', time: '25m ago', status: 'sync' }
      ]
    }
  },
  {
    id: 'custom-requirements',
    problemTitle: 'Custom Requirements',
    problemArea: 'Proprietary Business Logic',
    problemPain: 'Off-the-shelf software cannot bend to your business model, creating manual workarounds and expensive technical debt.',
    solutionName: 'Custom Software Solution',
    solutionType: 'Bespoke Digital System',
    description: 'Purpose-built software architected around your unique operational rules, proprietary formulas, customer flows, and integrations.',
    impactMetrics: [
      { label: 'Workflow Fit', value: '100% Exact' },
      { label: 'Process Bottlenecks', value: 'Eliminated' },
      { label: 'Operational Scalability', value: 'Uncapped' }
    ],
    keyModules: ['Custom Business Logic Engine', 'Multi-System Event Bridges', 'Role-Specific UIs', 'Tailored Analytics'],
    previewUi: {
      title: 'Proprietary System Console',
      status: 'LOGIC: BESPOKE ACTIVE',
      kpis: [
        { label: 'Engine Rules', value: '64 Custom', change: '100% automated' },
        { label: 'Cycle Velocity', value: '3.2x faster', change: 'Optimized' },
        { label: 'System Uptime', value: '99.99%', change: 'Zero drift' }
      ],
      recentActivity: [
        { id: 'CST-01', action: 'Custom pricing formula executed for Tier-3 partner', time: '1m ago', status: 'ok' },
        { id: 'CST-02', action: 'Proprietary workflow validation passed without manual review', time: '5m ago', status: 'sync' },
        { id: 'CST-03', action: 'Real-time telemetry synchronized to executive cluster', time: '14m ago', status: 'ok' }
      ]
    }
  }
];

export const CONFIGURATOR_SYSTEM_TYPES: ConfiguratorSystemType[] = [
  {
    id: 'website',
    name: 'Website',
    category: 'Digital Presence',
    description: 'High-performance brand flagship, conversion landing pages, CMS integration, and technical SEO foundation.',
    baseTimelineWeeks: 3,
    complexity: 'Standard',
    iconName: 'Globe'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    category: 'Commerce',
    description: 'Headless storefront, inventory sync, multi-currency checkout, and order management pipeline.',
    baseTimelineWeeks: 6,
    complexity: 'Advanced',
    iconName: 'ShoppingBag'
  },
  {
    id: 'crm',
    name: 'CRM',
    category: 'Operations',
    description: 'Tailored lead pipeline, automated client follow-ups, contract management, and sales tracking.',
    baseTimelineWeeks: 6,
    complexity: 'Advanced',
    iconName: 'Users'
  },
  {
    id: 'erp',
    name: 'ERP',
    category: 'Operations',
    description: 'Central company operating system linking finance, logistics, inventory, and cross-department workflows.',
    baseTimelineWeeks: 10,
    complexity: 'Enterprise',
    iconName: 'Cpu'
  },
  {
    id: 'management',
    name: 'Management System',
    category: 'Operations',
    description: 'Bespoke operational platform unifying department workflows, approvals, and executive visibility.',
    baseTimelineWeeks: 8,
    complexity: 'Enterprise',
    iconName: 'Layers'
  },
  {
    id: 'booking',
    name: 'Booking System',
    category: 'Customer Service',
    description: 'Multi-calendar scheduling, staff capacity planning, automated SMS notifications, and upfront deposits.',
    baseTimelineWeeks: 5,
    complexity: 'Standard',
    iconName: 'Calendar'
  },
  {
    id: 'inventory',
    name: 'Inventory System',
    category: 'Logistics',
    description: 'Multi-warehouse stock tracking, SKU barcodes, automated supplier re-orders, and dispatch logging.',
    baseTimelineWeeks: 7,
    complexity: 'Advanced',
    iconName: 'Layers'
  },
  {
    id: 'webapp',
    name: 'Custom Web Application',
    category: 'Software',
    description: 'Full-stack software platform with role-based auth, custom database architecture, and REST/GraphQL APIs.',
    baseTimelineWeeks: 8,
    complexity: 'Enterprise',
    iconName: 'AppWindow'
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    category: 'Analytics',
    description: 'High-density operational analytics, real-time KPI streams, automated alerts, and custom executive reporting.',
    baseTimelineWeeks: 4,
    complexity: 'Standard',
    iconName: 'BarChart3'
  },
  {
    id: 'portal',
    name: 'Customer Portal',
    category: 'Customer Service',
    description: 'Secure self-service account hub for client deliverables, billing history, support tickets, and files.',
    baseTimelineWeeks: 5,
    complexity: 'Standard',
    iconName: 'ShieldCheck'
  },
  {
    id: 'other',
    name: 'Other',
    category: 'Bespoke Scoping',
    description: 'Custom digital system or software architecture designed around unique business specifications.',
    baseTimelineWeeks: 6,
    complexity: 'Advanced',
    iconName: 'Wrench'
  }
];

export const CONFIGURATOR_ADDONS: ConfiguratorAddon[] = [
  {
    id: 'rbac',
    name: 'Role-Based Access Control (RBAC)',
    description: 'Granular permissions, multi-tier staff roles, and audit security logging.',
    addedWeeks: 1,
    category: 'Security'
  },
  {
    id: 'payments',
    name: 'Payment & Billing Engine',
    description: 'Stripe integration, recurring subscriptions, automated invoices, and payment webhooks.',
    addedWeeks: 1.5,
    category: 'Integration'
  },
  {
    id: 'websockets',
    name: 'Real-Time Data Streaming',
    description: 'Instant WebSocket live updates, collaboration indicators, and push notifications.',
    addedWeeks: 1.5,
    category: 'Data'
  },
  {
    id: 'multitenant',
    name: 'Multi-Tenant Architecture',
    description: 'Isolated customer workspaces, custom domain routing, and shared infrastructure scaling.',
    addedWeeks: 2,
    category: 'Security'
  },
  {
    id: 'thirdparty',
    name: 'Third-Party API Integrations',
    description: 'Two-way synchronization with Salesforce, QuickBooks, HubSpot, Slack, or ERPs.',
    addedWeeks: 1,
    category: 'Integration'
  },
  {
    id: 'pwa',
    name: 'PWA & Mobile Optimization',
    description: 'Offline-ready Progressive Web App support, home screen installation, and responsive UI.',
    addedWeeks: 1,
    category: 'Integration'
  },
  {
    id: 'automations',
    name: 'Automated Background Workflows',
    description: 'Scheduled cron jobs, email/SMS drip triggers, and conditional logic dispatchers.',
    addedWeeks: 1,
    category: 'Automation'
  },
  {
    id: 'reports',
    name: 'Custom Reporting & Exports',
    description: 'Automated PDF generation, CSV/Excel data streams, and scheduled executive digests.',
    addedWeeks: 0.5,
    category: 'Data'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Deep Operational Diagnostic',
    description: 'We analyze your business model, interview key stakeholders, map out existing workflow bottlenecks, and establish clear technical requirements.',
    deliverables: ['Operational Bottleneck Analysis', 'Technical Requirements Document (TRD)', 'Scope & Feasibility Blueprint'],
    timeline: 'Week 1',
    keyAction: 'Understanding how your business operates before writing code'
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Architecture & System Roadmap',
    description: 'We define the database schema, API contracts, security posture, infrastructure stack, and milestone-driven delivery schedule.',
    deliverables: ['System Architecture Diagram', 'Database Schema Specification', 'Interactive Wireframes & Sprints'],
    timeline: 'Week 2',
    keyAction: 'Designing an unshakeable technical blueprint'
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'UI/UX & Visual Engineering',
    description: 'We craft high-fidelity, high-density interfaces focused on clarity, speed, error prevention, and user delight across every viewport.',
    deliverables: ['Figma High-Fidelity Prototypes', 'Complete Design System & Components', 'Micro-Interaction Specifications'],
    timeline: 'Week 3 - 4',
    keyAction: 'Transforming complex data into effortless interfaces'
  },
  {
    step: '04',
    title: 'Develop',
    subtitle: 'Clean Code & Full-Stack Build',
    description: 'Our engineers construct frontend and backend systems with strict type safety, modular architecture, comprehensive automated testing, and CI/CD pipelines.',
    deliverables: ['Production TypeScript Codebase', 'API Endpoints & Database Migrations', 'Automated Test Suite (Unit & E2E)'],
    timeline: 'Week 4 - 8',
    keyAction: 'Writing clean, scalable code built for high concurrency'
  },
  {
    step: '05',
    title: 'Launch',
    subtitle: 'Deployment & Ongoing Partnership',
    description: 'Zero-downtime deployment, staff onboarding sessions, monitoring telemetry, and long-term technical support to ensure your system scales.',
    deliverables: ['Production Edge Deployment', 'System Health Telemetry Setup', 'Staff Training & Ongoing SLA Support'],
    timeline: 'Week 8+',
    keyAction: 'Powering your operations with long-term reliability'
  }
];

export const ADVANTAGES: WhyNexGridAdvantage[] = [
  {
    id: 'custom',
    title: 'Custom-Built Solutions',
    description: 'We do not sell fragile page builder themes or force cookie-cutter templates. Every system is purpose-built to fit your exact business workflows.',
    iconName: 'Layers',
    technicalProof: '100% custom TypeScript codebases with zero unnecessary template bloat'
  },
  {
    id: 'modern-tech',
    title: 'Modern Technology Stack',
    description: 'We build with battle-tested modern tools like React, Next.js, Node.js, PostgreSQL, and TypeScript, delivering longevity and easy maintenance.',
    iconName: 'Cpu',
    technicalProof: 'Strict end-to-end type safety and clean modular architecture'
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    description: 'Every interface is engineered from the ground up to operate seamlessly across high-density desktop monitors, tablets, and smartphones.',
    iconName: 'Smartphone',
    technicalProof: 'Fluid typography, responsive grids, and touch-optimized 44px+ hit targets'
  },
  {
    id: 'scalable',
    title: 'Scalable Architecture',
    description: 'Designed from day one to handle traffic spikes, database growth, and expanding employee counts without performance degradation.',
    iconName: 'TrendingUp',
    technicalProof: 'Stateless backend services, Redis caching, and optimized SQL indexes'
  },
  {
    id: 'performance',
    title: 'Performance-Focused Development',
    description: 'Speed directly drives conversion and operational velocity. We engineer every bundle to load in milliseconds with minimal JavaScript overhead.',
    iconName: 'Zap',
    technicalProof: 'Targeting 100/100 Core Web Vitals and <150ms server response times'
  },
  {
    id: 'security',
    title: 'Security-Conscious Development',
    description: 'Enterprise-grade security principles applied at every layer: sanitized inputs, role-based access control, encrypted storage, and CSRF protection.',
    iconName: 'Shield',
    technicalProof: 'OWASP standards, encrypted tokens, parameterized queries, and strict CORS'
  },
  {
    id: 'business-mindset',
    title: 'Business-Oriented Thinking',
    description: 'We measure success in saved employee hours, increased sales conversion, reduced operational errors, and clear return on investment.',
    iconName: 'Target',
    technicalProof: 'Direct alignment between software architecture and measurable business KPIs'
  },
  {
    id: 'support',
    title: 'Long-Term Technical Support',
    description: 'We don’t abandon projects post-launch. NexGrid acts as your dedicated ongoing technology partner for maintenance, updates, and feature expansion.',
    iconName: 'HeartHandshake',
    technicalProof: 'Dedicated SLAs, continuous dependency patching, and rapid response channels'
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'apex-logistics',
    title: 'Apex Logistics Operating System',
    clientType: 'Freight & Fleet Management',
    category: 'business-systems',
    tagline: 'Centralized Fleet Dispatch & Automated Manifest Tracking',
    description: 'A custom enterprise dashboard that eliminated 6 disparate spreadsheet systems, coordinating 140+ active transport vehicles with real-time dispatching.',
    challenge: 'Dispatchers spent 3+ hours every morning manually reconciling paper trip logs and route updates across separate phone channels.',
    solution: 'Engineered a unified real-time operations dashboard with GPS route synchronization, driver status updates, and automated customer notifications.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'WebSockets'],
    features: [
      'Interactive fleet dispatch map with real-time status',
      'Automated bill-of-lading PDF generator',
      'Driver mobile portal for instant trip sign-offs',
      'Role-based access for dispatchers, drivers, and accountants'
    ],
    metrics: [
      { label: 'Dispatch Time', value: '-65%' },
      { label: 'Active Fleet', value: '140+ Units' },
      { label: 'Paperwork Eliminated', value: '100%' }
    ],
    mockupType: 'dashboard',
    isDemo: true
  },
  {
    id: 'lumina-retail',
    title: 'Lumina Global Commerce',
    clientType: 'High-Growth Direct-to-Consumer Brand',
    category: 'ecommerce',
    tagline: 'Headless Global E-Commerce with 0.3s Checkout',
    description: 'A high-speed headless e-commerce store with multi-currency checkout, dynamic product bundles, and real-time warehouse inventory sync.',
    challenge: 'Their existing monolithic platform suffered from 4.8s page load times and frequent checkout crashes during peak holiday marketing drops.',
    solution: 'Re-architected the storefront using Next.js on edge infrastructure with headless Stripe payment flows and real-time inventory reservation.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe Elements', 'Cloudflare Edge', 'Redis'],
    features: [
      'Sub-second edge rendered catalog pages',
      'One-click digital wallet checkout (Apple Pay & Google Pay)',
      'Multi-currency auto-detection for 32 countries',
      'Automated warehouse packing slip dispatch'
    ],
    metrics: [
      { label: 'Load Time', value: '0.4s' },
      { label: 'Conversion Lift', value: '+38.4%' },
      { label: 'Cart Drop-off', value: '-24%' }
    ],
    mockupType: 'ecommerce',
    isDemo: true
  },
  {
    id: 'haven-property',
    title: 'Haven & Co Portfolio Hub',
    clientType: 'Commercial & Residential Property Agency',
    category: 'business-systems',
    tagline: 'Unified Property & Tenant Management Platform',
    description: 'A tailored property management platform managing 600+ rental units, automating rent collection, maintenance dispatch, and lease compliance.',
    challenge: 'Scattered landlord emails, late rent payments, and untracked emergency plumbing and electrical repair tickets caused high tenant turnover.',
    solution: 'Constructed an all-in-one tenant and property portal with integrated Stripe direct-debit rent payments and maintenance photo tickets.',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'AWS S3', 'Stripe Billing'],
    features: [
      'Tenant self-service portal with one-click payment history',
      'Automated maintenance triage and contractor dispatch',
      'Automated lease expiry alerts and e-signature renewals',
      'Landlord revenue and yield calculation reports'
    ],
    metrics: [
      { label: 'On-Time Rent', value: '98.2%' },
      { label: 'Managed Units', value: '620' },
      { label: 'Repair Resolution', value: '48 hrs' }
    ],
    mockupType: 'system',
    isDemo: true
  },
  {
    id: 'strata-capital',
    title: 'Strata Capital Partner Portal',
    clientType: 'Private Equity & Venture Advisory',
    category: 'corporate',
    tagline: 'Institutional Corporate Website & Deal Data Room',
    description: 'A prestigious institutional web presence paired with a gated, encrypted investor data room for deal documentation and fund performance metrics.',
    challenge: 'A dated WordPress site failed to reflect the firm’s $200M+ portfolio caliber and raised security concerns among prospective institutional limited partners.',
    solution: 'Crafted a bespoke, minimalist, high-typography web presence with biometric-ready MFA authentication for the secure investor document vault.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Auth0', 'Vercel Edge'],
    features: [
      'Institutional typography and dark-neutral aesthetic',
      'End-to-end encrypted investor data room',
      'Interactive fund performance charts and historical returns',
      'Strict audit log tracking of all document downloads'
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Security Grade', value: 'A+' },
      { label: 'Investor Engagement', value: '+72%' }
    ],
    mockupType: 'website',
    isDemo: true
  },
  {
    id: 'omnicare-health',
    title: 'OmniCare Multi-Clinic Booking',
    clientType: 'Specialist Medical Network',
    category: 'web-apps',
    tagline: 'Multi-Location Patient Scheduling & Triage System',
    description: 'A compliant reservation system managing appointments, practitioner availability, and secure pre-visit intake across 8 clinic locations.',
    challenge: 'Front desk receptionists spent 6 hours daily handling phone cancellations and manual re-bookings, leading to frequent slot vacancies.',
    solution: 'Developed a real-time reservation platform allowing patients to book verified appointments, pay co-pays, and complete medical forms online.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Twilio SMS', 'Tailwind'],
    features: [
      'Multi-practitioner calendar sync preventing overlap',
      'Automated two-way SMS reminder & confirmation bot',
      'HIPAA/GDPR-compliant encrypted intake forms',
      'Real-time waitlist backfill when slots open up'
    ],
    metrics: [
      { label: 'No-Show Rate', value: '3.8%' },
      { label: 'Self-Serve Bookings', value: '82%' },
      { label: 'Staff Hours Saved', value: '25 hrs/wk' }
    ],
    mockupType: 'booking',
    isDemo: true
  },
  {
    id: 'pulsedesk-crm',
    title: 'PulseDesk Sales & Pipeline CRM',
    clientType: 'B2B Industrial Equipment Supplier',
    category: 'web-apps',
    tagline: 'Custom B2B Sales Cockpit with Automated Quote Engine',
    description: 'A bespoke CRM system built specifically for complex B2B machinery sales with multi-tier approvals, custom CPQ quotes, and commission tracking.',
    challenge: 'Off-the-shelf CRM tools required $80/seat/mo while remaining completely incapable of handling their multi-tiered machinery discount formulas.',
    solution: 'Engineered a dedicated sales CRM with visual Kanban stages, automated PDF quotation rendering, and customer timeline synchronization.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    features: [
      'Drag-and-drop deal pipeline with probability scoring',
      'Automated 1-click complex quotation calculation',
      'Full communication timeline syncing emails and calls',
      'Custom commission tier calculation for 18 sales reps'
    ],
    metrics: [
      { label: 'Quote Speed', value: '5 min' },
      { label: 'Close Rate', value: '+26%' },
      { label: 'Software Fees Saved', value: '$18k/yr' }
    ],
    mockupType: 'portal',
    isDemo: true
  }
];
