import React from "react";
import Footer from "../components/Footer";
import Card from "../components/forms/Card";
import ContactForm from "../components/forms/ContactForm";
import Navbar from "../components/navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h3 className="text-center mt-2 mx-2">Contact us</h3>
        <div className="my-contact my-2 mb-2">
          <ContactForm />
        </div>

        <Card />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
