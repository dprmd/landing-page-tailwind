import SelfTitle from "./SelfTitle";
import SelfDesc from "./SelfDesc";
import SelfPictureBloob from "./SelfPictureBloob";

export default function Home() {
  return (
    <section id="home">
      <div className="w-full dark:bg-gradient-to-bl from-darkGradient to-darkBg">
        <div className="container py-20 md:pb-40 mx-auto border-b border-b-slate-300 dark:border-none">
          <div className="flex flex-wrap md:justify-around md:items-center">
            <div className="w-full px-4 md:w-1/2">
              <SelfTitle name="Adi Permadi" label="Pelajar & Gamer" />
              <SelfDesc />
            </div>
            <SelfPictureBloob />
          </div>
        </div>
      </div>
    </section>
  );
}
