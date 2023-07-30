import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../redux/page/pageActions";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Header = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between  mb-8">
      <h1
        className={` sm:text-3xl text-2xl sm:leading-6 leading-5 m-8 font-bold ${
          page === "page1" ? "text-black logo1" : "text-yellow logo2"
        } `}
      >
        page <br /> play
      </h1>

      {page === "page1" ? (
        <button
          className="scale-125"
          onClick={() => dispatch(setActivePage("page2"))}
        >
          <div className="sm:mr-14 mr-8 mt-4">
            <PlayArrowIcon
              style={{ padding: "0.15rem" }}
              className={`p-0.5 z-0 scale-150  text-yellow bg-black rounded-full border-3 border-black hover:bg-yellow hover:text-black hover:transition-all hover:duration-500`}
            />
            <p className=" text-xs text-black leading-3 bg-white border-2 border-black rounded-md p-0.5">
              coming soon!
            </p>
          </div>
        </button>
      ) : (
        <button
          className="scale-125"
          onClick={() => dispatch(setActivePage("page1"))}
        >
          <ArticleIcon
            style={{ padding: "0.15rem" }}
            className={`mr-14 p-0.5 scale-150  text-black bg-yellow rounded-full border-2 border-yellow hover:bg-black hover:text-yellow hover:transition-all hover:duration-500`}
          />
        </button>
      )}
    </div>
  );
};

export default Header;
