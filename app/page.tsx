import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import LoanApps from '@/components/LoanApps';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BlogPreview from '@/components/BlogPreview';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero — value prop + CTA above the fold */}
        <Hero />

        {/* 2. Trust bar — stats + SBP-regulated bank badges */}
        <TrustBar />

        {/* 3. Pain Points — agitate the problem */}
        <PainPoints />

        {/* 3. Services — present the solution */}
        <Services />

        {/* 4. Coverage — all loan apps and banks */}
        <LoanApps />

        {/* 5. Process — how it works (3 steps) */}
        <HowItWorks />

        {/* 6. Trust — why choose us */}
        <WhyChooseUs />

        {/* 7. Social Proof — testimonials */}
        <Testimonials />

        {/* 8. FAQ — SEO + LLM knowledge graph */}
        <FAQ />

        {/* 9. Blog preview — expert guides, SEO internal linking */}
        <BlogPreview />

        {/* 10. Final CTA — conversion push */}
        <CTABanner />
      </main>

      <Footer />

      {/* Floating WhatsApp button — always visible */}
      <WhatsAppButton />
    </>
  );
}
