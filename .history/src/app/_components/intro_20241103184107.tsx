import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <img 
        src="../assets/blog/dynamic-routing/Aether_Logo.png"
        alt="Aether logo"
      />
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      Summarize, Simplify, Streamline
      </h4>
    </section>
  );
}
