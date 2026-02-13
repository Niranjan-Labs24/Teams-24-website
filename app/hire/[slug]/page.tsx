import GlassmorphicNavbar from "@/components/glassmorphic-navbar";
import HireHero from "@/components/HireHero";
import HireSkills from "@/components/HireSkills";
import Testimonials from "@/components/testimonials";
import { ProfileMarquee } from "@/components/ProfileMarquee";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

interface PageProps {
  params: {
    slug: string;
  };
}

const roleMap: Record<string, string> = {
  "full-stack-developer": "Full Stack",
  "frontend-developer": "Frontend",
  "backend-developer": "Backend",
  "mobile-app-developer": "Mobile App",
  "ui-ux-designer": "UI/UX",
  "devops-engineer": "DevOps",
  "data-scientist": "Data Scientist",
  "product-manager": "Product Manager"
};

export default function HireRolePage({ params }: PageProps) {
  const roleName = roleMap[params.slug] || "Fullstack";

  return (
    <main className="min-h-screen bg-white">
      <GlassmorphicNavbar />
      <HireHero role={roleName} />
      <HireSkills role={roleName} />
      <Testimonials />
      <div className="py-10">
        <ProfileMarquee />
      </div>
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
