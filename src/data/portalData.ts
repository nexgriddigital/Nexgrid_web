export interface RoleCapability {
  category: string;
  capability: string;
  customerAccess: 'Full Access' | 'View & Approve' | 'Request Only' | 'No Access';
  customerDescription: string;
  staffAdminAccess: 'Full Control' | 'Manage & Assign' | 'Execute & Deploy' | 'Audit';
  staffAdminDescription: string;
}

export const ROLE_CAPABILITIES_MATRIX: RoleCapability[] = [
  {
    category: 'Architecture & Specifications',
    capability: 'System Blueprints & Schema Review',
    customerAccess: 'View & Approve',
    customerDescription: 'Review ER diagrams, schema migration plans, and sign off on technical specs before sprint kickoffs.',
    staffAdminAccess: 'Full Control',
    staffAdminDescription: 'Author database models, generate OpenAPI schemas, design system architecture, and enforce standards.'
  },
  {
    category: 'Project & Sprints',
    capability: 'Milestone Tracking & Sprint Demos',
    customerAccess: 'Full Access',
    customerDescription: 'Inspect real-time burnup charts, sprint progress, and access interactive weekly staging builds.',
    staffAdminAccess: 'Full Control',
    staffAdminDescription: 'Create milestones, reallocate sprint points, log velocity, and publish staging demo builds.'
  },
  {
    category: 'Deployments & Environments',
    capability: 'Environment Promotion (Dev -> Stage -> Prod)',
    customerAccess: 'View & Approve',
    customerDescription: 'Perform User Acceptance Testing (UAT) on Staging and authorize final production cutovers.',
    staffAdminAccess: 'Execute & Deploy',
    staffAdminDescription: 'Trigger automated CI/CD pipelines, execute zero-downtime container deploys, roll back if needed.'
  },
  {
    category: 'Source Code & Repositories',
    capability: 'Git Repositories & IP Transfer',
    customerAccess: 'View & Approve',
    customerDescription: 'Access private GitHub/GitLab repositories, review pull requests, and trigger full IP transfer upon project completion.',
    staffAdminAccess: 'Full Control',
    staffAdminDescription: 'Manage branch protection rules, review code diffs, enforce strict TypeScript linting, and grant developer keys.'
  },
  {
    category: 'Finance & Contracts',
    capability: 'Milestone Invoicing & Approvals',
    customerAccess: 'Full Access',
    customerDescription: 'Inspect line-item milestone invoices, download receipts/contracts, and pay via Stripe/ACH.',
    staffAdminAccess: 'Manage & Assign',
    staffAdminDescription: 'Generate milestone billing schedules, track payment states, verify escrow releases, and issue tax documents.'
  },
  {
    category: 'Support & Change Requests',
    capability: 'Issue Tickets & Scope Additions',
    customerAccess: 'Full Access',
    customerDescription: 'Submit bug reports, request scope expansions, view live SLA countdown timers, and chat with assigned architect.',
    staffAdminAccess: 'Manage & Assign',
    staffAdminDescription: 'Triage incoming tickets, assess complexity/timeline impacts, quote change orders, and deploy hotfixes.'
  },
  {
    category: 'Infrastructure & Security',
    capability: 'Server Telemetry & Key Management',
    customerAccess: 'Request Only',
    customerDescription: 'View high-level uptime SLAs (99.98%), request API sandbox tokens, and inspect SSL certificates.',
    staffAdminAccess: 'Full Control',
    staffAdminDescription: 'Monitor container CPU/RAM utilization, configure Cloud Run / Docker clusters, rotate secrets, and audit access logs.'
  }
];

export interface ClientProject {
  id: string;
  name: string;
  version: string;
  status: 'In Development' | 'Staging Review' | 'Live in Production';
  completionPercent: number;
  currentSprint: string;
  nextMilestoneDate: string;
  stagingUrl: string;
  productionUrl?: string;
  leadArchitect: string;
  milestones: {
    id: string;
    title: string;
    date: string;
    status: 'completed' | 'current' | 'upcoming';
    approvedByClient: boolean;
    deliverable: string;
  }[];
}

export const MOCK_CLIENT_PROJECT: ClientProject = {
  id: 'PRJ-APEX-01',
  name: 'Apex Logistics OS — Fleet Dispatch & Telemetry',
  version: 'v2.4.0-rc1',
  status: 'Staging Review',
  completionPercent: 78,
  currentSprint: 'Sprint 5: Real-Time WebSocket Telemetry & Route Optimization',
  nextMilestoneDate: 'Oct 04, 2026',
  stagingUrl: 'https://staging.apex-logistics.nexgrid.cloud',
  productionUrl: 'https://portal.apexlogistics.io',
  leadArchitect: 'Alex Vance (Senior Systems Architect)',
  milestones: [
    {
      id: 'm1',
      title: 'Phase 1: Architecture Blueprint & PostgreSQL Schema',
      date: 'Aug 14, 2026',
      status: 'completed',
      approvedByClient: true,
      deliverable: 'Database ERD, OpenAPI 3.1 Spec, Security Model'
    },
    {
      id: 'm2',
      title: 'Phase 2: Authentication & Multi-Role RBAC',
      date: 'Aug 28, 2026',
      status: 'completed',
      approvedByClient: true,
      deliverable: 'JWT Sessions, Driver & Dispatcher permission matrices'
    },
    {
      id: 'm3',
      title: 'Phase 3: Dispatch Console & High-Density UI',
      date: 'Sep 12, 2026',
      status: 'completed',
      approvedByClient: true,
      deliverable: 'React 19 Interactive Dispatcher UI with 60 FPS mapping'
    },
    {
      id: 'm4',
      title: 'Phase 4: WebSocket Telemetry & IoT GPS Ingestion',
      date: 'Sep 26, 2026',
      status: 'current',
      approvedByClient: false,
      deliverable: 'Edge Redis Pub/Sub handling 140+ truck GPS feeds'
    },
    {
      id: 'm5',
      title: 'Phase 5: Production Hardening, Load Testing & Cutover',
      date: 'Oct 15, 2026',
      status: 'upcoming',
      approvedByClient: false,
      deliverable: 'Zero-downtime Cloud Run cluster with automated backups'
    }
  ]
};

export interface ClientInvoice {
  id: string;
  number: string;
  milestone: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Pending Approval' | 'Upcoming';
  invoiceDate: string;
}

export const MOCK_CLIENT_INVOICES: ClientInvoice[] = [
  {
    id: 'inv-01',
    number: 'INV-2026-081',
    milestone: 'Phase 1: Architecture & Initial Schema',
    amount: '$14,500.00',
    dueDate: 'Aug 20, 2026',
    status: 'Paid',
    invoiceDate: 'Aug 14, 2026'
  },
  {
    id: 'inv-02',
    number: 'INV-2026-104',
    milestone: 'Phase 2 & 3: RBAC & Core Dispatch UI',
    amount: '$18,000.00',
    dueDate: 'Sep 18, 2026',
    status: 'Paid',
    invoiceDate: 'Sep 12, 2026'
  },
  {
    id: 'inv-03',
    number: 'INV-2026-128',
    milestone: 'Phase 4: WebSocket Ingestion & Staging Review',
    amount: '$12,500.00',
    dueDate: 'Oct 02, 2026',
    status: 'Pending Approval',
    invoiceDate: 'Sep 26, 2026'
  }
];

export interface PortalTicket {
  id: string;
  title: string;
  category: 'Feature Request' | 'Bug' | 'Performance' | 'Question';
  priority: 'Critical (4h SLA)' | 'High (12h SLA)' | 'Normal (24h SLA)';
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
  author: string;
  assignedEngineer: string;
  messagesCount: number;
}

export const MOCK_TICKETS: PortalTicket[] = [
  {
    id: 'TCK-402',
    title: 'Add custom CSV export for multi-stop route manifests',
    category: 'Feature Request',
    priority: 'Normal (24h SLA)',
    status: 'In Progress',
    createdAt: '2 hours ago',
    author: 'Sarah Jenkins (Client)',
    assignedEngineer: 'Alex Vance (Lead Architect)',
    messagesCount: 3
  },
  {
    id: 'TCK-398',
    title: 'Map marker cluster flicker when filtering on Firefox',
    category: 'Bug',
    priority: 'High (12h SLA)',
    status: 'Resolved',
    createdAt: 'Yesterday',
    author: 'Michael Chang (Ops Lead)',
    assignedEngineer: 'Elena Rostova (Frontend Eng)',
    messagesCount: 5
  }
];

export interface AdminTelemetry {
  activeContainers: number;
  totalRequestsPerMin: string;
  averageLatencyMs: number;
  errorRatePercent: number;
  cpuUtilization: number;
  databaseConnections: number;
  lastDeployment: string;
  activeClientCount: number;
}

export const MOCK_ADMIN_TELEMETRY: AdminTelemetry = {
  activeContainers: 14,
  totalRequestsPerMin: '48,290 req/m',
  averageLatencyMs: 38,
  errorRatePercent: 0.012,
  cpuUtilization: 34,
  databaseConnections: 68,
  lastDeployment: '34 minutes ago (v2.4.0-rc1)',
  activeClientCount: 8
};

export const MOCK_ALL_PROJECTS = [
  {
    id: 'PRJ-APEX',
    client: 'Apex Logistics Corp',
    name: 'Apex Logistics OS',
    status: 'Staging Demo',
    branch: 'release/v2.4',
    health: '100% Healthy',
    tech: 'React 19, Go, PostgreSQL',
    nextDelivery: 'Oct 04, 2026',
    slaTier: 'Enterprise 24/7'
  },
  {
    id: 'PRJ-LUMINA',
    client: 'Lumina Global Brands',
    name: 'Headless E-Commerce Engine',
    status: 'Production Live',
    branch: 'main',
    health: '100% Healthy',
    tech: 'Next.js, Medusa, Redis Edge',
    nextDelivery: 'Nov 12, 2026',
    slaTier: 'Priority Business'
  },
  {
    id: 'PRJ-STRATA',
    client: 'Strata Capital Partners',
    name: 'Investor Vault & Portal',
    status: 'Dev Sprint 3',
    branch: 'feature/mfa-auth',
    health: 'Build Passing',
    tech: 'TypeScript, Express, S3 Vault',
    nextDelivery: 'Oct 18, 2026',
    slaTier: 'Enterprise 24/7'
  }
];

export const MOCK_SECURITY_AUDIT_LOGS = [
  {
    id: 'sec-01',
    event: 'mTLS Handshake Mutual Verification',
    target: 'api.nexgrid.cloud/v2/telemetry',
    sourceIp: '198.51.100.42 (Apex Gateway)',
    time: '2 mins ago',
    status: 'AUTHORIZED'
  },
  {
    id: 'sec-02',
    event: 'Repository Access Token Generated',
    target: 'github.com/nexgrid/apex-logistics-os',
    sourceIp: 'Staff: Alex Vance',
    time: '14 mins ago',
    status: 'SUCCESS'
  },
  {
    id: 'sec-03',
    event: 'Staging Environment Promotion',
    target: 'staging.apex-logistics.nexgrid.cloud',
    sourceIp: 'CI/CD Pipeline #842',
    time: '34 mins ago',
    status: 'DEPLOYED'
  }
];
