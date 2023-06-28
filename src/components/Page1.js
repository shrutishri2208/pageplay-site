import React from "react";
import Header from "./Header";
import Container from "./Container";
import Details from "./Details";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Page1 = ({ page }) => {
  const activePage = useSelector((state) => state.activePage.activePage);

  return (
    <div
      className={`bg-yellow shrink-0 ${
        activePage === "page1" ? "no-translate-page" : "translate-page"
      }`}
      style={{ width: "100vw" }}
    >
      <Header page={page} />
      <Container
        page={page}
        word1={"Watch"}
        word2={"your"}
        word3={"articles"}
        description={"Get article-related YouTube videos with just a click!"}
      />
      <Details page={page} />
      <Footer page={page} />
    </div>
  );
};

export default Page1;
