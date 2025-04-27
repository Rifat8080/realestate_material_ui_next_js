"use client";
import   HeroSection from '@/components/hero';
import FloatingNavbar from '@/components/navbar'; 
import InfoCardsSection from '@/components/dev';
import {RealEstateAssets, RealEstateFeature, RealEstateMarketing, RealEstateServices, RealEstateVideo} from '@/components/agent';

export default function Page() {
  return (
    <>
      <FloatingNavbar />
      <HeroSection />
      <InfoCardsSection />
      <RealEstateFeature />
      <RealEstateServices />
      <RealEstateAssets/>
      <RealEstateMarketing/>
      <RealEstateVideo/>
    </>
  );
}