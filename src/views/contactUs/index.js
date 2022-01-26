import React from "react";
import SubBanner from '../../components/SubBanner';
import ContactUsForm from "../../components/ContactUsForm";
import Footer from "../../components/Footer";
import bg from '../../assets/subBanner.jpg';

const ServicesHome = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Contact Us' subHeading='Home /Contact Us' img={bg}/>
      </section>

      {/* Form Section  */}
      <section>
        <ContactUsForm />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ServicesHome;