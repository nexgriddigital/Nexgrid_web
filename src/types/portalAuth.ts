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

export const SUPERADMIN_PROFILE: PortalUser = {
  id: 'usr_root_007_amanueal_hailu',
  name: 'Amanueal Hailu',
  email: 'amanuealhailu007@gmail.com',
  role: 'admin',
  organization: 'NexGrid Digital Systems & Core Infrastructure',
  title: 'Owner & Super Admin',
  avatarInitials: 'AH',
  token: 'nx_tok_root_007_amanueal_hailu',
  clearanceLevel: 'Tier 4 (Root Owner & Enterprise Superadmin)',
  loginTime: 'Active Session (Root Owner)',
  ipAddress: '10.240.0.1 (Zero-Trust Root IAM Enclave)',
  sessionExpiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
};

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
  admin: SUPERADMIN_PROFILE
};
