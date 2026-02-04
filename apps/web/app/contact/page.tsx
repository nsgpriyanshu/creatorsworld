import { ContactForm } from "../../components/contact/contact-form";

const ContactPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
