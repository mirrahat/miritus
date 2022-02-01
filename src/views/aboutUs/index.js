import React from "react";
import bg from '../../assets/aboutUs/banner.png';
import SubBanner from '../../components/SubBanner';
import Footer from "../../components/Footer";
import Top from "../../components/AboutUs/Top";

const aboutUs = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='About Us' subHeading='Home /About Us' img={bg}/>
      </section>

      {/* Top Section  */}
      <section>
        <Top />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default aboutUs;