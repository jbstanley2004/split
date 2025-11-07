"use client";

import { CTASection } from "@/components/split/CTASection";
import { Footer } from "@/components/split/Footer";
import { FundingSection } from "@/components/split/FundingSection";
import { Hero } from "@/components/split/Hero";
import { InsightsSection } from "@/components/split/InsightsSection";
import { Navbar } from "@/components/split/Navbar";
import { POSSection } from "@/components/split/POSSection";
import { PaymentsSection } from "@/components/split/PaymentsSection";

import styled from "styled-components";

export function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <FundingSection />
        <PaymentsSection />
        <POSSection />
        <InsightsSection />
        <CTASection />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  padding-top: 68px;
`;
