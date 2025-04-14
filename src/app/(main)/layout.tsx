'use client';
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MainLayoutContainer } from '@/theme/globalStyles';
import BottomNavigation from '../components/layout/BottomNavigation';
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNavigation />
    </MainLayoutContainer>
  );
}
