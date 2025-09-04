import React from "react";
import Navbar from "../Components/Navbar";
import LandingPage from "../Pages/LandingPage";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <LandingPage />
      </section>
    </>
  );
}

export default MainLayout;
