import { getDictionary } from "@/lib/dictionary";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Resume dict={dict.resume} />
      <Projects dict={dict.projects} />
    </>
  );
}
