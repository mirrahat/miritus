import React from "react";
import ProjectDetails from '../../components/ProjectDetails';
import Footer from "../../components/Footer";

const individualServices = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <ProjectDetails />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default individualServices;