import ContactHero from "../../components/contact/contact-hero";
import { ContactForm } from "../../components/contact/contact-form";

const ContactPage = () => {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <section className="w-full">
        <ContactHero />
      </section>
      <section className="w-full">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
