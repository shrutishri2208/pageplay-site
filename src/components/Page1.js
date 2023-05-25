import React from "react";
import Header from "./Header";
import Container from "./Container";
import Details from "./Details";
import Footer from "./Footer";

const Page1 = () => {
  return (
    <div className="bg-yellow w-screen  ">
      <Header />
      <Container />
      <Details />
      <Footer />
    </div>
  );
};

export default Page1;
