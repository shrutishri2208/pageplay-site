import React from "react";
import Header from "./Header";
import Container from "./Container";
import Details from "./Details";
import Footer from "./Footer";

const Page2 = ({ page }) => {
  return (
    <div className="bg-black shrink-0" style={{ width: "100vw" }}>
      <Header page={page} />
      <Container
        page={page}
        word1={"Read"}
        word2={"your"}
        word3={"videos"}
        description={"Get video related articles with just a click!"}
      />
      <Details page={page} />
      <Footer />
    </div>
  );
};

export default Page2;
