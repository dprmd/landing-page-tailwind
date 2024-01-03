import UsedTech from "./UsedTech";
import FooterNavigation from "./FooterNavigation";
import FooterLabel from "./FooterLabel";

export default function Footer() {
  return (
    <div className="w-full dark:bg-gradient-to-br from-darkBg to-darkGradient">
      <footer>
        <div className="container mx-auto pt-10 pb-5 dark:border-b-darkBgMuda">
          <div className="flex flex-wrap px-4 md:justify-around">
            <UsedTech />
            <FooterNavigation />
          </div>
          <FooterLabel />
        </div>
      </footer>
    </div>
  );
}
