// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Host from "../components/Host";
import SuccessStory from "../components/SuccessStory";
import WhyLearn from "../components/WhyLearn";
import WhoThis from "../components/WhoThis";
import HowItWorks from "../components/HowItWorks";
import WhatYouWillLearn from "../components/WhatYouWillLearn";
import Memership from "../components/Memership";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Host />
      <SuccessStory />
      <WhyLearn />
      <WhoThis />
      <HowItWorks />
      <WhatYouWillLearn />
      <Memership />
      <About />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
