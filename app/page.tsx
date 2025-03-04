import AboutMe from "@/components/about-me";
import Intro from "@/components/intro";

export default function Page() {
  return (
    <section className="mt-10 flex flex-col gap-20">
      <Intro />
      <AboutMe />
    </section>
  );
}
