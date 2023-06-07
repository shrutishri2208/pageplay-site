import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="m-8 text-center">
      <p>made by Shruti Shrivastava</p>
      <div className="flex gap-8 my-2 justify-center">
        <a href="https://github.com/shrutishri2208" target="_blank">
          <GitHubIcon className="scale-150 rounded-full bg-black text-yellow p-0.5 border-black border-3 hover:bg-transparent hover:text-black hover:transition-all hover:duration-500 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/shruti-shrivastava-676606228/"
          target="_blank"
        >
          <LinkedInIcon className="scale-150 rounded-full bg-black text-yellow p-0.5 border-black border-3 hover:bg-transparent hover:text-black hover:transition-all hover:duration-500 cursor-pointer" />
        </a>
        <a
          href="mailto:shrutishri2208@gmail.com?body=Hello%20there%20profile%20viewer%20:)"
          target="_blank"
        >
          <EmailIcon className="scale-150 rounded-full bg-black text-yellow p-0.5 border-black border-3 hover:bg-transparent hover:text-black hover:transition-all hover:duration-500 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
