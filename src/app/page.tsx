import HeroSection from '@/components/HeroSection'
import CharacterSection from '@/components/CharacterSection'
import TruckSection from '@/components/TruckSection'
import TrailerSection from '@/components/TrailerSection'
import TechSection from '@/components/TechSection'
import ExperienceSection from '@/components/ExperienceSection'
import TechnicalDataSection from '@/components/TechnicalDataSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CharacterSection />
      <TruckSection />
      <TrailerSection />
      <TechSection />
      <ExperienceSection />
      <TechnicalDataSection />
      <ContactSection />
    </main>
  )
}