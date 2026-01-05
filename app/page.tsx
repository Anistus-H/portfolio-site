import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { EngineerStats } from '@/components/sections/EngineerStats';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { GridOverlay } from '@/components/ui/GridOverlay';
import { HUDLayout } from '@/components/ui/HUDLayout';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <GridOverlay />

      <HUDLayout>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="stats"><EngineerStats /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </HUDLayout>
    </main>
  );
}
