/* eslint-disable react/prop-types */
import AboutMe from "./AboutMe"
import LetsFriend from "./LetsFriend"
export default function About({ setShowMessageBoxMabar }) {
  return (
    <section id="about">
      <div className="w-full dark:bg-gradient-to-br from-darkBg to-darkGradient">
        <div className="container mx-auto md:px-12 pt-20 md:pt-24 border-b border-b-slate-300 py-40 dark:border-b-darkBgMuda dark:border-none">
          <div className="flex flex-wrap justify-center items-start">

            <AboutMe setShowMessageBoxMabar={setShowMessageBoxMabar} />
            <LetsFriend />

          </div>
        </div>
      </div>
    </section>
  )
}