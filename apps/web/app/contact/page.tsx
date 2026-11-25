import { Suspense } from "react";
import ContactHero from "../../features/contact/components/contact-hero";
import { ContactForm } from "../../features/contact/components/contact-form";

const ContactPage = () => {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <section className="w-full">
        <ContactHero />
      </section>
      <section className="w-full">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </section>
    </div>
  );
};

export default ContactPage;
