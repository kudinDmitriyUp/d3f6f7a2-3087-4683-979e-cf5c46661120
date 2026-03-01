"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { MessageCircle, Sparkles, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="medium"
      background="floatingGradient"
      cardStyle="outline"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="ConversAI"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "process" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Intelligent Conversations, Powered by Advanced AI"
          description="Deliver exceptional customer experiences with our next-generation AI chatbot platform. Seamless integration, intelligent responses, and unmatched conversation quality—all in one elegant solution."
          background={{ variant: "sparkles-gradient" }}
          tag="AI Innovation"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Free Trial", href: "#contact" },
            { text: "Watch Demo", href: "https://example.com/demo" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/a-modern-ai-chatbot-interface-with-a-dar-1772406707338-4db8dea7.png"
          imageAlt="AI Chatbot Interface"
          mediaAnimation="slide-up"
          ariaLabel="AI Chatbot Hero Section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Powerful Features Built for Success"
          description="Everything you need to deploy intelligent conversational AI that understands context, learns from interactions, and delivers measurable business results."
          tag="Core Capabilities"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Natural Language Understanding",              description: "Advanced NLP engine that comprehends context, intent, and nuance across multiple languages with 99.2% accuracy.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/a-sophisticated-visualization-of-natural-1772406708737-0088f718.png",              imageAlt: "Natural Language Processing"
            },
            {
              id: 2,
              title: "Real-Time Response",              description: "Sub-100ms response times ensuring conversational flow feels natural and responsive to end users.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/a-dynamic-real-time-response-visualizati-1772406709891-0e76c7ac.png",              imageAlt: "Real-Time Processing"
            },
            {
              id: 3,
              title: "Seamless Integration",              description: "Integrate with your existing systems via REST API, webhooks, or pre-built connectors for all major platforms.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/a-comprehensive-integration-ecosystem-vi-1772406708087-2845896a.png",              imageAlt: "Integration Ecosystem"
            },
            {
              id: 4,
              title: "Advanced Analytics",              description: "Real-time insights into conversation quality, user satisfaction, and performance metrics to optimize continuously.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/advanced-analytics-dashboard-with-real-t-1772406708592-1eda0749.png",              imageAlt: "Analytics Dashboard"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Industry Leaders"
          description="See the measurable impact of intelligent AI-powered conversations"
          tag="Results"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "2.5M+",              description: "Conversations Processed Daily"
            },
            {
              id: "2",              value: "94%",              description: "User Satisfaction Rate"
            },
            {
              id: "3",              value: "45%",              description: "Cost Reduction for Customers"
            },
            {
              id: "4",              value: "150+",              description: "Enterprise Clients Worldwide"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Clients Say"
          description="Real results from real companies transforming customer engagement with ConversAI"
          tag="Testimonials"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              handle: "@sarahchen_tech",              testimonial: "ConversAI completely transformed our customer support. We reduced response time by 60% while improving satisfaction scores. It's a game-changer.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/professional-headshot-of-a-confident-bus-1772406707551-d84931b3.png",              imageAlt: "Sarah Chen"
            },
            {
              id: "2",              name: "Marcus Rodriguez",              handle: "@m_rodriguez",              testimonial: "The integration was seamless. Our team was productive within hours, not days. The AI understands context better than any solution we've tried.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/professional-headshot-of-a-tech-company--1772406708577-4baeb396.png",              imageAlt: "Marcus Rodriguez"
            },
            {
              id: "3",              name: "Elena Vasquez",              handle: "@elena_tech",              testimonial: "We've cut support costs by nearly 50% while maintaining superior service quality. The ROI was undeniable within the first month.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/professional-headshot-of-a-product-manag-1772406707364-2ba23843.png",              imageAlt: "Elena Vasquez"
            },
            {
              id: "4",              name: "James Mitchell",              handle: "@jmitchell_ops",              testimonial: "Outstanding support team and incredible product. They truly understand enterprise needs and delivered exactly what we needed.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/professional-headshot-of-an-innovative-b-1772406708019-56467a80.png",              imageAlt: "James Mitchell"
            },
            {
              id: "5",              name: "Priya Patel",              handle: "@priya_marketing",              testimonial: "The analytics dashboard gives us insights we never had before. We're now making data-driven decisions about our customer interactions.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/professional-headshot-of-a-marketing-or--1772406707436-060c8fcc.png",              imageAlt: "Priya Patel"
            },
            {
              id: "6",              name: "David Kim",              handle: "@d_kim_cto",              testimonial: "Best AI solution in the market. The natural language understanding is superior, and the API documentation is exceptional.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/professional-headshot-of-a-technology-di-1772406707381-eb1c9cb4.png",              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about ConversAI and deploying intelligent chatbots"
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How long does deployment take?",              content: "Most customers are up and running within 24-48 hours. Our streamlined onboarding process, combined with comprehensive documentation and dedicated support, ensures a smooth deployment. Simple integrations can be live in hours."
            },
            {
              id: "2",              title: "What languages does ConversAI support?",              content: "ConversAI supports 45+ languages including English, Spanish, French, German, Mandarin, Japanese, Arabic, Portuguese, and many more. Natural language understanding works seamlessly across all supported languages."
            },
            {
              id: "3",              title: "Can I customize the AI behavior?",              content: "Yes. You can train the AI on your specific domain, adjust conversation tone, set response parameters, and create custom workflows. Our platform provides extensive customization options without requiring code."
            },
            {
              id: "4",              title: "How is user data protected?",              content: "We maintain SOC 2 Type II compliance, use end-to-end encryption, and never train our models on customer data. All conversations are stored securely with full audit trails and GDPR compliance."
            },
            {
              id: "5",              title: "What's the pricing model?",              content: "We offer flexible pricing based on conversation volume. Includes everything: API access, analytics, integrations, and 24/7 support. No setup fees or hidden charges. Custom enterprise packages available."
            },
            {
              id: "6",              title: "Do you offer API rate limits?",              content: "Plans include tiered API rate limits from 1,000 to 1M+ requests per day. Enterprise customers get unlimited access. Rate limits can be increased anytime as your business grows."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AKDZQtpZ8HQ73PXRvriXIQYy3m/an-abstract-dark-red-and-crimson-gradien-1772406708036-c942364f.png"
          imageAlt="Footer Background"
          logoText="ConversAI"
          copyrightText="© 2025 ConversAI. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "https://example.com/security" },
                { label: "API Docs", href: "https://example.com/docs" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "https://example.com/about" },
                { label: "Blog", href: "https://example.com/blog" },
                { label: "Careers", href: "https://example.com/careers" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms of Service", href: "https://example.com/terms" },
                { label: "Cookie Policy", href: "https://example.com/cookies" },
                { label: "Status Page", href: "https://example.com/status" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}