export interface PortalFeatureDetail {
  id: string;
  title: string;
  category: 'Security & Documents' | 'Sprint Governance' | 'Support & SLAs' | 'Real-Time Observability' | 'Source Code & IP' | 'Finance & Invoicing';
  tagline: string;
  iconName: 'FolderLock' | 'Layers' | 'MessageSquare' | 'Activity' | 'GitBranch' | 'CreditCard';
  badge: string;
  overview: string;
  customerCapabilities: {
    title: string;
    description: string;
    actionLabel?: string;
  }[];
  staffCapabilities: {
    title: string;
    description: string;
    actionLabel?: string;
  }[];
  technicalSpecifications: {
    label: string;
    value: string;
  }[];
  interactiveSample: {
    type: 'file_sharing' | 'progress_tracker' | 'ticket_sla' | 'activity_feed' | 'git_repo' | 'billing_escrow';
    data: any;
  };
}

export const PORTAL_FEATURES: PortalFeatureDetail[] = [
  {
    id: 'secure-file-sharing',
    title: 'Secure File Sharing & Document Vault',
    category: 'Security & Documents',
    tagline: 'Encrypted document repository for technical specs, legal IP pacts, and deliverable assets.',
    iconName: 'FolderLock',
    badge: 'AES-256 ENCRYPTED',
    overview: 'An isolated, tamper-proof repository replacing ad-hoc email attachments and consumer cloud drives. Every contract, schema diagram, architectural blueprint, and release artifact is encrypted and backed by verifiable audit logs.',
    customerCapabilities: [
      {
        title: 'Cryptographic Architecture Blueprint Downloads',
        description: 'Access complete PostgreSQL ERD diagrams, OpenAPI 3.1 specs, and system sequence workflows directly from the vault.',
        actionLabel: 'Download Spec PDF'
      },
      {
        title: 'Time-Expiring Signed URLs',
        description: 'File links use pre-signed cryptographic tokens valid for 15 minutes, preventing unauthorized URL forwarding or scraping.',
        actionLabel: 'Generate Secure Token'
      },
      {
        title: 'Legal & IP Transfer Execution',
        description: 'Review and sign mutual NDAs, Master Service Agreements (MSAs), and verified Intellectual Property handoff deeds.',
        actionLabel: 'Inspect Signed Deeds'
      },
      {
        title: 'Paid Invoices & Tax Receipts',
        description: 'Download itemized receipts, sales tax summaries, and milestone proof-of-work certificates for company accounting.',
        actionLabel: 'Export All Receipts'
      }
    ],
    staffCapabilities: [
      {
        title: 'Automated CI/CD Artifact Publishing',
        description: 'Build runners automatically upload compiled distribution bundles and schema migration diffs upon successful test completion.'
      },
      {
        title: 'Granular Visibility & RBAC Enforcement',
        description: 'Tag files with client clearance tiers (Executive Signatory, Technical Lead, General Reviewer, or Staff-Only).'
      },
      {
        title: 'Real-Time Access & Download Audit Trails',
        description: 'Log every client download event with verified UTC timestamp, client identity, IP address, and SHA-256 file checksum.'
      },
      {
        title: 'Bulk Asset Staging & Delivery Packs',
        description: 'Package design tokens, UI components, seed database scripts, and deployment runbooks into one-click client packages.'
      }
    ],
    technicalSpecifications: [
      { label: 'Storage Encryption', value: 'AES-256-GCM at rest & in transit' },
      { label: 'Integrity Check', value: 'SHA-256 cryptographic checksum' },
      { label: 'Access Protocol', value: 'Pre-Signed HMAC-SHA256 tokens' },
      { label: 'Token Lifespan', value: '15 Minutes (auto-revoking)' }
    ],
    interactiveSample: {
      type: 'file_sharing',
      data: {
        vaultName: 'Apex Logistics OS // Secure Deliverables Vault',
        totalFiles: 6,
        vaultSize: '142.8 MB',
        files: [
          {
            name: 'Apex_Architecture_Blueprint_v2.4.pdf',
            type: 'PDF Specification',
            size: '14.2 MB',
            checksum: 'sha256:8f9a...c291',
            updated: 'Yesterday',
            clearance: 'All Client Roles',
            status: 'Verified'
          },
          {
            name: 'PostgreSQL_Schema_Migration_v2.4.sql',
            type: 'Database Migration',
            size: '184 KB',
            checksum: 'sha256:3d11...70e4',
            updated: '2 days ago',
            clearance: 'Technical Leads',
            status: 'Signed Off'
          },
          {
            name: 'OpenAPI_3.1_Dispatch_Endpoints.json',
            type: 'API Contract',
            size: '890 KB',
            checksum: 'sha256:99bc...04a2',
            updated: 'Sep 10, 2026',
            clearance: 'Developers & Leads',
            status: 'Verified'
          },
          {
            name: 'NexGrid_Mutual_NDA_Signed.pdf',
            type: 'Legal Pact',
            size: '2.1 MB',
            checksum: 'sha256:12e8...fa09',
            updated: 'Aug 14, 2026',
            clearance: 'Executive Signatory',
            status: 'Legally Binding'
          }
        ]
      }
    }
  },
  {
    id: 'project-progress-tracking',
    title: 'Project Progress & Milestone Tracking',
    category: 'Sprint Governance',
    tagline: 'Real-time burnup transparency, milestone sign-off controls, and live staging sandbox previews.',
    iconName: 'Layers',
    badge: 'STAGE-GATED DELIVERY',
    overview: 'Eliminates vague weekly status emails. Clients inspect interactive staging builds, track burnup velocity against contractual delivery targets, and formally sign off on each milestone before funds are released.',
    customerCapabilities: [
      {
        title: 'Verifiable Milestone Completion Progress',
        description: 'Track granular completion percentages (e.g. 78%) across phased deliverables with clear critical-path milestones.'
      },
      {
        title: 'Milestone Deliverable Sign-Off Gateway',
        description: 'Approve or request revisions on database models, high-density dispatcher consoles, and telemetry pipelines.'
      },
      {
        title: 'One-Click Staging Sandboxes',
        description: 'Launch isolated preview environments (e.g. staging.apex-logistics.nexgrid.cloud) populated with realistic seed data.'
      },
      {
        title: 'Sprint Scope & Critical Dependencies',
        description: 'Inspect current sprint backlog items, technical acceptance criteria, and expected milestone delivery dates.'
      }
    ],
    staffCapabilities: [
      {
        title: 'Sprint Velocity & Burndown Modeling',
        description: 'Allocate engineering points across frontend, backend, and infrastructure pods with automated completion forecasts.'
      },
      {
        title: 'Deliverable Gating & Stage Promotion',
        description: 'Prevent staging cutover until automated test suites, accessibility audits, and vulnerability scans pass 100%.'
      },
      {
        title: 'Milestone Timeline Adjustment Engine',
        description: 'Simulate schedule adjustments when client scope changes occur and automatically update milestone forecasts.'
      },
      {
        title: 'Git Commit & PR Association',
        description: 'Every milestone deliverable links directly to merge commits and deployment hashes for technical auditing.'
      }
    ],
    technicalSpecifications: [
      { label: 'Update Frequency', value: 'Continuous CI/CD deployment' },
      { label: 'Staging Environment', value: 'Isolated container on Cloud Run' },
      { label: 'Gating Standard', value: '100% Automated test pass requirement' },
      { label: 'Sign-off Audit', value: 'Cryptographic client approval stamp' }
    ],
    interactiveSample: {
      type: 'progress_tracker',
      data: {
        projectName: 'Apex Logistics OS — Fleet Dispatch & Telemetry',
        overallProgress: 78,
        activeSprint: 'Sprint 5: Real-Time WebSocket Telemetry',
        targetDate: 'Oct 15, 2026',
        milestones: [
          { phase: 'Phase 1', name: 'Architecture Blueprint & PostgreSQL Schema', status: 'Approved', date: 'Aug 14, 2026', progress: 100 },
          { phase: 'Phase 2', name: 'Authentication & Multi-Role RBAC', status: 'Approved', date: 'Aug 28, 2026', progress: 100 },
          { phase: 'Phase 3', name: 'Dispatch Console & High-Density UI', status: 'Approved', date: 'Sep 12, 2026', progress: 100 },
          { phase: 'Phase 4', name: 'WebSocket Telemetry & IoT GPS Ingestion', status: 'Under Review', date: 'Sep 26, 2026', progress: 85 },
          { phase: 'Phase 5', name: 'Production Hardening & Final Cutover', status: 'Upcoming', date: 'Oct 15, 2026', progress: 20 }
        ]
      }
    }
  },
  {
    id: 'ticket-management-slas',
    title: 'Ticket Management & Priority SLA Triage',
    category: 'Support & SLAs',
    tagline: 'Direct engineering collaboration with contractual response timers and guaranteed resolution turnarounds.',
    iconName: 'MessageSquare',
    badge: 'GUARANTEED SLA TIMERS',
    overview: 'Direct access to senior software architects without gatekeeping support representatives. Every ticket comes with contractual turnaround SLAs, automatic severity classification, and full commit resolution traceability.',
    customerCapabilities: [
      {
        title: 'One-Click Ticket Submission Form',
        description: 'File feature requests, bug reports, performance investigations, or general questions with attachment uploads.'
      },
      {
        title: 'Contractual SLA Countdown Clocks',
        description: 'Track active turnaround clocks: Critical incidents (4h SLA), High bugs (12h SLA), and Standard items (24h SLA).'
      },
      {
        title: 'Direct Senior Lead Architect Channel',
        description: 'Discuss technical details directly with assigned systems engineers like Alex Vance, avoiding outsourced call centers.'
      },
      {
        title: 'Transparent Resolution History',
        description: 'Review historical tickets, pull request commits, regression test results, and release patch notes.'
      }
    ],
    staffCapabilities: [
      {
        title: 'Unified Multi-Tenant Triage Cockpit',
        description: 'Centralized engineering queue with automated severity scoring, SLA breach alarms, and workload balancing.'
      },
      {
        title: 'Engineer Assignment & Skill Routing',
        description: 'Assign tickets to specific frontend, backend, or cloud architects based on codebase subsystem ownership.'
      },
      {
        title: 'Internal Scratchpad vs Client Responses',
        description: 'Collaborate with teammates via internal private staff notes before publishing formal client responses.'
      },
      {
        title: 'Direct Sprint Backlog Conversion',
        description: 'Promote approved client feature requests into scoped sprint backlog stories with timeline estimations.'
      }
    ],
    technicalSpecifications: [
      { label: 'Critical SLA', value: '< 4 Hours (Dedicated On-Call)' },
      { label: 'High Priority SLA', value: '< 12 Hours' },
      { label: 'Standard SLA', value: '< 24 Hours' },
      { label: 'Communication Channel', value: 'Threaded WebSocket real-time chat' }
    ],
    interactiveSample: {
      type: 'ticket_sla',
      data: {
        activeTicketsCount: 2,
        avgResponseMinutes: 24,
        tickets: [
          {
            id: 'TCK-402',
            title: 'Add custom CSV export for multi-stop route manifests',
            category: 'Feature Request',
            priority: 'Normal (24h SLA)',
            slaRemaining: '18h 42m',
            status: 'In Progress',
            assignedTo: 'Alex Vance (Lead Architect)',
            lastMessage: 'Schema draft completed. Integrating into CSV export stream.'
          },
          {
            id: 'TCK-398',
            title: 'Map marker cluster flicker when filtering on Firefox',
            category: 'Bug Fix',
            priority: 'High (12h SLA)',
            slaRemaining: 'Resolved in 2h 15m',
            status: 'Resolved',
            assignedTo: 'Elena Rostova (Frontend Eng)',
            lastMessage: 'Debounced viewport change listener deployed to staging cluster.'
          }
        ]
      }
    }
  },
  {
    id: 'real-time-activity-feed',
    title: 'Real-Time Activity Feeds & Audit Telemetry',
    category: 'Real-Time Observability',
    tagline: 'Instant operational notifications, container telemetry streams, and security audit handshakes.',
    iconName: 'Activity',
    badge: 'SUB-SECOND STREAMING',
    overview: 'Complete observability into every system event as it happens. Customers see milestone handoffs, staging releases, and billing receipts; engineering staff monitor container metrics, error spikes, and mTLS mutual authentication handshakes.',
    customerCapabilities: [
      {
        title: 'Real-Time Milestone & Deployment Notifications',
        description: 'Instant notification stream when new staging builds are deployed or pull requests are merged.'
      },
      {
        title: 'Sign-Off & Approvals Timeline',
        description: 'Audit record of all client approvals, invoice receipts, and contract amendments in one chronologically sorted feed.'
      },
      {
        title: 'Staging Build Hash Verification',
        description: 'Verify that the preview version currently running matches the signed Git release tag.'
      }
    ],
    staffCapabilities: [
      {
        title: 'Live Container & Infrastructure Telemetry',
        description: 'Real-time telemetry stream monitoring P95 latency (38ms), request throughput (48k req/m), and Postgres pool usage.'
      },
      {
        title: 'Zero-Trust Security & Audit Logs',
        description: 'Live log of mTLS handshakes, OTP session initializations, token revocations, and IP address origins.'
      },
      {
        title: 'Automated Exception & Error Tracking',
        description: 'Immediate capture of unhandled runtime errors with full stack traces, browser user-agent, and container ID.'
      },
      {
        title: 'CI/CD Pipeline Telemetry',
        description: 'Follow build step outputs, container image compilation, unit tests, and edge cache purges live.'
      }
    ],
    technicalSpecifications: [
      { label: 'Stream Protocol', value: 'Server-Sent Events (SSE) & WebSocket' },
      { label: 'Latency', value: '< 200ms real-time propagation' },
      { label: 'Log Retention', value: '365 Days immutable audit storage' },
      { label: 'Compliance', value: 'SOC-2 & ISO-27001 audit standards' }
    ],
    interactiveSample: {
      type: 'activity_feed',
      data: {
        streamStatus: 'ONLINE (Sub-200ms sync)',
        events: [
          {
            id: 'evt-01',
            type: 'DEPLOY',
            title: 'Staging Environment Promoted',
            desc: 'CI/CD Pipeline #842 deployed v2.4.0-rc1 to staging.apex-logistics.nexgrid.cloud',
            time: '2 mins ago',
            audience: 'Both Customer & Staff'
          },
          {
            id: 'evt-02',
            type: 'SECURITY',
            title: 'mTLS Mutual Verification Verified',
            desc: 'Authorized API gateway handshake from 198.51.100.42 (Apex Logistics Head Office)',
            time: '8 mins ago',
            audience: 'Staff Only'
          },
          {
            id: 'evt-03',
            type: 'MILESTONE',
            title: 'Phase 3 Deliverable Signed Off',
            desc: 'Sarah Jenkins (VP Ops) approved Dispatch Console high-density UI',
            time: '32 mins ago',
            audience: 'Both Customer & Staff'
          },
          {
            id: 'evt-04',
            type: 'TELEMETRY',
            title: 'Edge Ingestion Metric Alert Normal',
            desc: 'Redis Pub/Sub successfully processed 140 concurrent vehicle GPS telemetry packets',
            time: '45 mins ago',
            audience: 'Staff Only'
          }
        ]
      }
    }
  },
  {
    id: 'git-repo-code-ownership',
    title: 'Private Git Repository & IP Ownership Escrow',
    category: 'Source Code & IP',
    tagline: 'Direct code visibility, branch protection guarantees, and full intellectual property handoff.',
    iconName: 'GitBranch',
    badge: '100% CLIENT IP OWNERSHIP',
    overview: 'Unlike traditional agencies that trap you in proprietary proprietary tools, NexGrid provides full access to your private GitHub or GitLab repository throughout development, with complete ownership transfer upon project completion.',
    customerCapabilities: [
      {
        title: 'Private Repository Read/Pull Access',
        description: 'Inspect repository commits, pull request discussions, and clean TypeScript codebase architecture in real time.'
      },
      {
        title: 'Branch Protection Standards',
        description: 'Verify that strict code reviews, CI linting, and automated tests are enforced before code enters main.'
      },
      {
        title: 'Full Intellectual Property Escrow Deed',
        description: 'Receive 100% unrestricted intellectual property ownership of all schemas, code, and deployment configs upon completion.'
      }
    ],
    staffCapabilities: [
      {
        title: 'Deploy Key & Secret Rotation',
        description: 'Provision and rotate fine-grained developer PATs, container registry tokens, and encrypted environment secrets.'
      },
      {
        title: 'Branch Automation & Webhook Ingestion',
        description: 'Automate staging container builds upon every merged pull request with automatic regression suite execution.'
      },
      {
        title: 'IP Transfer Automation',
        description: 'Execute automated repository ownership transfer to the client’s organization upon final milestone release.'
      }
    ],
    technicalSpecifications: [
      { label: 'Code Hosting', value: 'Private GitHub Enterprise / GitLab' },
      { label: 'Type Safety', value: 'Strict TypeScript 5.8 with 0 lint errors' },
      { label: 'Testing Gate', value: 'Vitest, Playwright E2E coverage' },
      { label: 'IP Warranty', value: '100% Written legal transfer agreement' }
    ],
    interactiveSample: {
      type: 'git_repo',
      data: {
        repoName: 'github.com/nexgrid/apex-logistics-os',
        branch: 'release/v2.4.0',
        latestCommit: 'f892a1c — Merge PR #42: Real-time route telemetry stream',
        author: 'Alex Vance (Lead Architect)',
        status: 'Passing (All 142 Unit & E2E tests green)'
      }
    }
  },
  {
    id: 'milestone-billing-escrow',
    title: 'Milestone Invoicing & Escrow Approvals',
    category: 'Finance & Invoicing',
    tagline: 'Transparent milestone-linked invoices with Stripe/ACH payments and automated proof-of-work receipts.',
    iconName: 'CreditCard',
    badge: 'MILESTONE-LINKED ESCROW',
    overview: 'Never pay for promises or hourly guesses. NexGrid ties every billing milestone directly to verifiable software deliverables. Funds are held in escrow and only released once your team inspects and approves the milestone.',
    customerCapabilities: [
      {
        title: 'Itemized Milestone Billing Breakdown',
        description: 'Inspect exact scope deliverables tied to every invoice line item before authorizing payment.'
      },
      {
        title: 'Instant Stripe & ACH Settlements',
        description: 'Pay securely via major credit cards, corporate ACH bank transfers, or wire transfer with instant confirmation.'
      },
      {
        title: 'Automated Tax Documentation & Proof of Work',
        description: 'Download signed receipts, W-9/tax compliance records, and milestone completion attestations.'
      }
    ],
    staffCapabilities: [
      {
        title: 'Milestone Schedule Creation',
        description: 'Structure custom phased billing milestones aligned with project specifications and delivery phases.'
      },
      {
        title: 'Escrow Release Triggering',
        description: 'Automatically trigger billing state transitions once client provides digital deliverable sign-off.'
      },
      {
        title: 'Project Budget & Margin Analytics',
        description: 'Track engineering hours versus milestone budgets to maintain project profitability and timeliness.'
      }
    ],
    technicalSpecifications: [
      { label: 'Payment Gateway', value: 'Stripe Tier-1 PCI-DSS certified' },
      { label: 'Payment Methods', value: 'ACH, Wire, Visa, Mastercard, Amex' },
      { label: 'Billing Schedule', value: 'Phase-gated escrow releases' },
      { label: 'Receipt Generation', value: 'Instant cryptographic PDF invoice' }
    ],
    interactiveSample: {
      type: 'billing_escrow',
      data: {
        totalContract: '$45,000.00',
        paidToDate: '$32,500.00',
        pendingEscrow: '$12,500.00',
        nextPaymentDue: 'Oct 02, 2026 (Phase 4 Deliverable Sign-Off)'
      }
    }
  }
];
