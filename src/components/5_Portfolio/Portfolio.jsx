import PortfolioCard from "./PortfolioCard";
import PortfolioHeader from "./PortfolioHeader";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="w-full dark:bg-gradient-to-br from-darkBg to-darkGradient">
        <div className="container mx-auto py-36 px-4 border-b border-b-slate-300 dark:border-none">
          <PortfolioHeader />

          <div className="flex flex-wrap px-4 mt-20 md:justify-around lg:justify-between gap-2 lg:gap-y-6">
            <PortfolioCard
              title="Express Contact App"
              desc="Express Contact App adalah web sederhana sebagai implementasi
              ilmu yang saya dapatkan setelah belajar nodejs, expressjs, dan
              tailwindcss."
              github="https://github.com/dprmd/express-contact-app"
            />

            <PortfolioCard
              title="Gallery Tailwind"
              desc="Gallery Tailwind adalah project membuat gallery untuk
              mengerjakan tugas ke-1 dari channel telegram KelasFullStack."
              github="https://github.com/dprmd/gallery-tailwind"
              chrome="https://dprmd.github.io/gallery-tailwind"
            />

            <PortfolioCard
              title="Landing Page Tailwind"
              desc="Landing Page Tailwind adalah web portfolio sederhana dengan
              mengikuti tutorial pak sandhika galih."
              github="https://github.com/dprmd/landing-page-tailwind"
              chrome="https://dprmd.github.io/landing-page-tailwind"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
