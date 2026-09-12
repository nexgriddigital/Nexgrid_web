export type PortalRole = 'customer' | 'admin';

export interface PortalUser {
  id: string;
  name: string;
  email: string;
  role: PortalRole;
  organization: string;
  title: string;
  avatarInitials: string;
  token: string;
  clearanceLevel: string;
  loginTime: string;
  ipAddress: string;
  sessionExpiresAt: number;
}

export const DEMO_USERS: Record<PortalRole, PortalUser> = {
  customer: {
    id: 'usr_client_94821',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@apexlogistics.io',
    role: 'customer',
    organization: 'Apex Logistics Corp',
    title: 'VP of Product & Technical Operations',
    avatarInitials: 'SJ',
    token: 'nx_tok_cst_892f3a4b901e',
    clearanceLevel: 'Tier 2 (Stakeholder & Approvals)',
    loginTime: 'Just now',
    ipAddress: '192.0.2.44 (Client TLS/SSL)',
    sessionExpiresAt: Date.now() + 1000 * 60 * 60 * 8, // 8 hours
  },
  admin: {
    id: 'usr_adm_10382',
    name: 'Alex Vance',
    email: 'alex.vance@nexgrid.tech',
    role: 'admin',
    organization: 'NexGrid Systems Engineering',
    title: 'Principal Systems Architect & Superadmin',
    avatarInitials: 'AV',
    token: 'nx_tok_adm_77a1c4e902b8',
    clearanceLevel: 'Tier 4 (Zero-Trust Root Infrastructure)',
    loginTime: 'Just now',
    ipAddress: '10.240.12.8 (mTLS VPC Mesh)',
    sessionExpiresAt: Date.now() + 1000 * 60 * 60 * 12, // 12 hours
  }
};
