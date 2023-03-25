import CoreTracks from "@/components/widgets/CoreTracks"
import Hero from "@/components/widgets/Hero"
import SpecializedTracks from "@/components/widgets/SpecializedTracks"

export default function page() {
  return (
    <>
    <main>
      <Hero />
      <CoreTracks />
      <SpecializedTracks />
    </main>
    </>
  )
}
