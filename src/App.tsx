/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { InquiryProvider } from './context/InquiryContext';
import { PortalAuthProvider } from './context/PortalAuthContext';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { WorkPage } from './pages/WorkPage';
import { ConfiguratorPage } from './pages/ConfiguratorPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortalsPage } from './pages/PortalsPage';
import { PortalSignInPage } from './pages/PortalSignInPage';
import { PortalSignUpPage } from './pages/PortalSignUpPage';
import { CustomerPortalPage } from './pages/CustomerPortalPage';
import { StaffPortalPage } from './pages/StaffPortalPage';

export default function App() {
  return (
    <InquiryProvider>
      <PortalAuthProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-[#080b11] text-[#e2e8f0] selection:bg-cyan-500/20 selection:text-cyan-300 font-sans flex flex-col justify-between">
            {/* Top Sticky Navigation */}
            <Navbar />

            {/* Multi-Page Routes */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/configurator" element={<ConfiguratorPage />} />
                <Route path="/why-us" element={<WhyUsPage />} />
                <Route path="/process" element={<WhyUsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Dedicated Portal Ecosystem Routes */}
                <Route path="/portals" element={<PortalsPage />} />
                <Route path="/portal" element={<PortalsPage />} />
                <Route path="/portal/signin" element={<PortalSignInPage />} />
                <Route path="/portal/login" element={<PortalSignInPage />} />
                <Route path="/portal/signup" element={<PortalSignUpPage />} />
                <Route path="/portal/register" element={<PortalSignUpPage />} />
                <Route path="/portal/customer" element={<CustomerPortalPage />} />
                <Route path="/portal/client" element={<CustomerPortalPage />} />
                <Route path="/portal/staff" element={<StaffPortalPage />} />
                <Route path="/portal/admin" element={<StaffPortalPage />} />

                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />
          </div>
        </HashRouter>
      </PortalAuthProvider>
    </InquiryProvider>
  );
}
