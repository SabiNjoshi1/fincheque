import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
import { Stats } from '@/components/sections/stats'
import { Wheelhouse } from '@/components/sections/wheelhouse'
import { Manifesto } from '@/components/sections/manifesto'
import { OurWork } from '@/components/sections/our-work'
import { IndustriesStrip } from '@/components/sections/industries-strip'
import { KnowledgeBox } from '@/components/sections/knowledge-box'
import { BigCta } from '@/components/sections/big-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <Wheelhouse />
      <Manifesto />
      <OurWork />
      <IndustriesStrip />
      <KnowledgeBox />
      <BigCta />
    </>
  )
}
