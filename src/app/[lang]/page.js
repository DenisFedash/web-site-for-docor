import { Hero } from "@/components/Hero/Hero";
import { getDictionary } from "./dictionaries";
import { Experience } from "@/components/Experience/Experience";
import { Info } from "@/components/Info/Info";
import { About } from "@/components/About/About";
import { Recommendations } from "@/components/Recommendations/Recomendations";
import { Consultations } from "@/components/Consultations/Consultations";
import { FormMessage } from "@/components/Form/Form";
import { FeedbackForm } from "@/components/FeedbackComp/FeedbackForm";
import { FeedbackList } from "@/components/FeedbackComp/FeedbackList";
import { Socials } from "@/components/Socials/Socials";
import { Footer } from "@/components/Footer/Footer";

export default async function Home({ params: { lang }, feedback }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero textTr={dict.hero} />
      <Experience textTr={dict.experience} />
      <Info textTr={dict.info} />
      <About textTr={dict.about} />
      <Recommendations textTr={dict.recommendations} />
      <Consultations textTr={dict.consultations} />
      <FormMessage textTr={dict.form} />
      <FeedbackList textTr={dict.feedback} />
      <FeedbackForm textTr={dict.feedbackForm} />
      <Socials textTr={dict.socials} />
      <Footer textTr={dict.footer} />
    </main>
  );
}
