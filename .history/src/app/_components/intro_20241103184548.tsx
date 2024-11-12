import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12 p-4">
      <div>
        <img 
          src="../assets/blog/dynamic-routing/Aether_Logo.png"
          alt="Aether logo"
          className="w-[400px] h-auto"
        />
        <p
          className="mt-2 pl-[135px]"
        >
          Designed and developed by Aether team
        </p>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      Summarize, Simplify, Streamline
      </h4>
    </section>
  );
}