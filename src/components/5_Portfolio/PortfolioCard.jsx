/* eslint-disable react/prop-types */

import GithubLink from "./GithubLink";
import ChromeLink from "./ChromeLink";

export default function PortfolioCard({ title, desc, github, chrome }) {
  return (
    <div className="portfolio-card">
      <div className="w-full overflow-hidden shadow">
        <img src="img/express-contact-app.png" className="portfolio-img" />
      </div>

      <div className="px-5 pt-6 pb-20">
        <h2 className="dark:text-light font-medium text-lg">{title}</h2>
        <p className="desc">{desc}</p>
      </div>

      <div className="link-to-project">
        {github && <GithubLink href={github} />}
        {chrome && <ChromeLink href={chrome} />}
      </div>
    </div>
  );
}
