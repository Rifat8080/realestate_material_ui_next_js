"use client";
import   HeroSection from '@/components/hero';
import FloatingNavbar from '@/components/navbar'; 
import InfoCardsSection from '@/components/dev';
import {RealEstateAssets, RealEstateFeature, RealEstateMarketing, RealEstateServices, RealEstateVideo} from '@/components/agent';
import RewardsSection from '@/components/rewards';
import FAQ from '@/components/faq'; 
import Footer from '@/components/footer';

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
      <RewardsSection />
      <FAQ/>
      <Footer/>
    </>
  );
}