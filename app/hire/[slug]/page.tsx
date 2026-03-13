import GlassmorphicNavbar from "@/components/glassmorphic-navbar";
import HireHero from "@/components/HireHero";
import HireSkills from "@/components/HireSkills";
import Testimonials from "@/components/testimonials";
import { ProfileMarquee } from "@/components/ProfileMarquee";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { getContentBySlug } from "@/lib/data/hire-content";
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const roleMap: Record<string, string> = {
  "full-stack-developer": "Full Stack",
  "frontend-developer": "Frontend",
  "backend-developer": "Backend",
  "mobile-app-developer": "Mobile App",
  "ui-ux-designer": "UI/UX",
  "devops-engineer": "DevOps",
  "data-scientist": "Data Scientist",
  "product-manager": "Product Manager",
  "full-stack-development": "Full Stack",
  "programmers": "Programmer",
  "it": "IT",
  "software": "Software",
  "app": "App",
  "django": "Django",
  "data-analyst": "Data Analyst",
  "automation": "Automation"
};

const formatRole = (slug: string) => {
  if (roleMap[slug]) return roleMap[slug];
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function HireRolePage({ params }: PageProps) {
  const { slug } = await params;
  const roleName = formatRole(slug);
  const content = getContentBySlug(slug);

  const heroHeadline = content.hero.headline.replace('{role}', roleName).replace('{roleStr}', roleName.toLowerCase());
  const heroSubheading = content.hero.subheading.replace('{role}', roleName).replace('{roleStr}', roleName.toLowerCase());
  
  const skillsTitle = content.skillsTitle.replace('{role}', roleName).replace('{roleStr}', roleName.toLowerCase());
  const skillsDescription = content.skillsDescription.replace('{role}', roleName).replace('{roleStr}', roleName.toLowerCase());

  return (
    <main className="min-h-screen bg-white">
      <GlassmorphicNavbar />
      <HireHero 
        role={roleName} 
        headline={heroHeadline}
        subheading={heroSubheading}
        trustBadge={content.hero.trustBadge}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />
      <HireSkills 
        role={roleName} 
        title={skillsTitle}
        description={skillsDescription}
        skills={content.skills}
      />
      <Testimonials />
      <div className="py-10">
        <ProfileMarquee />
      </div>
      <FAQ items={content.faqs} />
      <CTASection />
      <Footer />
    </main>
  );
}
