import Footer from "@/components/footer";
import AboutSection from "@/components/home-page/about-section";
import BlogSection from "@/components/home-page/blog-section";
import ContactSection from "@/components/home-page/contact-section";
import EducationSection from "@/components/home-page/education-section";
import ExperienceSection from "@/components/home-page/experience-section";
import HeroSection from "@/components/home-page/hero-section";
import ProjectsSection from "@/components/home-page/projects-section";
import SkillsSection from "@/components/home-page/skills-section";
import { getAllData } from "@/lib/api";

export default async function Home() {
  const {
    profile,
    about,
    education,
    career_summary,
    experience,
    skills,
    projects,
    blog,
    contact,
  } = await getAllData();

  console.log(contact);
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection data={profile} />
      <AboutSection data={about} />
      <EducationSection data={education} />
      <ExperienceSection
        data={{
          career_summary,
          experience,
        }}
      />
      <SkillsSection data={skills} />
      <ProjectsSection data={projects} />
      <BlogSection data={blog} />
      <ContactSection data={contact} />
      <Footer />
    </main>
  );
}
