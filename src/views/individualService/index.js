import React from "react";
import SubBanner from '../../components/SubBanner';
import Footer from "../../components/Footer";
import bg from '../../assets/subBanner.jpg';
import IndividualService from "../../components/IndividualService";

const individualServices = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Services' subHeading='Home /Services' img={bg}/>
      </section>

      {/* Services Section  */}
      <section>
        <IndividualService />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default individualServices;