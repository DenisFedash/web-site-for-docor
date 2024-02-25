import { Hero } from "@/components/Hero/Hero";
import { getDictionary } from "./dictionaries";
import { Experience } from "@/components/Experience/Experience";
import { Info } from "@/components/Info/Info";
import { About } from "@/components/About/About";
import { Recommendations } from "@/components/Recommendations/Recomendations";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <Hero textTr={dict.hero} />
      <Experience textTr={dict.experience} />
      <Info textTr={dict.info} />
      <About textTr={dict.about} />
      <Recommendations textTr={dict.recommendations} />
    </main>
  );
}
