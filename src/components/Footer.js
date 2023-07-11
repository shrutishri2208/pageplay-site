import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = ({ page }) => {
  return (
    <div className="m-8 mb-8 text-center 2xl:top-24 xl:top-24 lg:top-24 md:top-20 sm:top-4 -top-16">
      <p className={`${page === "page1" ? "text-black" : "text-yellow"}`}>
        made by Shruti Shrivastava
      </p>
      <div className="flex gap-8 my-2 justify-center">
        <a href="https://github.com/shrutishri2208" target="_blank">
          <GitHubIcon
            className={`scale-150 rounded-full p-0.5  border-3 cursor-pointer hover:transition-all hover:duration-500 ${
              page === "page1"
                ? "border-black bg-black text-yellow hover:text-black hover:bg-white "
                : "border-yellow bg-yellow text-black hover:text-yellow"
            } `}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shruti-shrivastava-676606228/"
          target="_blank"
        >
          <LinkedInIcon
            className={`scale-150 rounded-full p-0.5  border-3  cursor-pointer hover:transition-all hover:duration-500 ${
              page === "page1"
                ? "border-black bg-black text-yellow hover:text-black hover:bg-white "
                : "border-yellow bg-yellow text-black hover:text-yellow"
            } `}
          />
        </a>
        <a
          href="mailto:shrutishri2208@gmail.com?body=Hello%20there%20profile%20viewer%20:)"
          target="_blank"
        >
          <EmailIcon
            className={`scale-150 rounded-full p-0.5  border-3  cursor-pointer hover:transition-all hover:duration-500 ${
              page === "page1"
                ? "border-black bg-black text-yellow hover:text-black hover:bg-white "
                : "border-yellow bg-yellow text-black hover:text-yellow"
            } `}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
