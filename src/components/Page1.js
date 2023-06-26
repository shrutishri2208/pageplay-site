import React from "react";
import Header from "./Header";
import Container from "./Container";
import Details from "./Details";
import Footer from "./Footer";

const Page1 = ({ page }) => {
  return (
    <div className="bg-yellow shrink-0" style={{ width: "100vw" }}>
      <Header page={page} />
      <Container
        page={page}
        word1={"Watch"}
        word2={"your"}
        word3={"articles"}
        description={"Get article-related YouTube videos with just a click!"}
      />
      <Details page={page} />
      <Footer />
    </div>
  );
};

export default Page1;
