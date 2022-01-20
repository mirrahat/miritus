import React from "react";
import SubBanner from '../../components/SubBanner';
import Services from '../../components/Services';
import Footer from "../../components/Footer";

const ServicesHome = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Services' subHeading='Home /Services'/>
      </section>

      {/* Services Section  */}
      <section>
        <Services/>
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ServicesHome;