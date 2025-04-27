"use client";
import   HeroSection from '@/components/hero';
import FloatingNavbar from '@/components/navbar'; 
import InfoCardsSection from '@/components/dev';

export default function Page() {
  return (
    <>
      <FloatingNavbar />
      <HeroSection />
      <InfoCardsSection />
    </>
  );
}