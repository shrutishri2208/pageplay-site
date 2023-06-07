import React from "react";
import Header from "./Header";
import Container from "./Container";
import Details from "./Details";
import Footer from "./Footer";

const Page2 = () => {
  return (
    <div className="bg-black w-screen  ">
      <Header />
      <Container
        title={"Read your videos"}
        description={"Get video related articles with just a click!"}
      />
      <Details />
      <Footer />
    </div>
  );
};

export default Page2;
