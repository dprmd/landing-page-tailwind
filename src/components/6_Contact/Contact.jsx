import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

export default function Contact() {
  return (
    <section id="contact" className="scroll-smooth">
      <div className="w-full dark:bg-gradient-to-bl from-darkGradient to-darkBg">
        <div className="container mx-auto pt-24 pb-20 border-b border-b-slate-300 dark:border-none">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
