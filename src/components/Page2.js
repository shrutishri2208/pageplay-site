import React from "react";
import Header from "./Header";
import Container from "./Container";
import Details from "./Details";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Registration from "./Registration";

const Page2 = ({ page }) => {
  const activePage = useSelector((state) => state.activePage.activePage);

  return (
    <div
      className={`bg-black shrink-0 ${
        activePage === "start"
          ? "translate-start"
          : activePage === "page1"
          ? "translate-right"
          : "translate-left"
      }`}
      style={{ width: "100vw" }}
    >
      <Header page={page} />
      <Container
        page={page}
        word1={"Read"}
        word2={"your"}
        word3={"videos"}
        description={"Get video related articles with just a click!"}
      />
      <Details page={page} />
      <Footer page={page} />
      <Registration />
    </div>
  );
};

export default Page2;
