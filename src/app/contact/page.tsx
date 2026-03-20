import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Actrotech",
  description: "Get in touch with Actrotech for your software development needs and inquiries.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="At ActroTech, we deliver innovative and reliable software solutions tailored to your business needs. Our team is here to support your projects, ideas, and collaboration goals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
