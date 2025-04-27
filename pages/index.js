"use client";
import   HeroSection from '@/components/hero';
import FloatingNavbar from '@/components/navbar'; 
import InfoCardsSection from '@/components/dev';
import RealEstateFeature from '@/components/agent';

export default function Page() {
  return (
    <>
      <FloatingNavbar />
      <HeroSection />
      <InfoCardsSection />
      <RealEstateFeature />
    </>
  );
}