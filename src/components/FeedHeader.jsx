import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeedHeader = () => {
  const [feedTab, setFeedTab] = useState(window.location.pathname);
  return (
    <div className="">
      <ul className="nav justify-content-evenly border-bottom">
        <li className="nav-item">
          <Link
            to={"/"}
            className="nav-link text-dark fw-semibold"
            onClick={() => setFeedTab("/")}
          >
            {feedTab === "/" ? (
              <span className="text-primary">For you</span>
            ) : (
              <span>For you</span>
            )}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/followings"}
            className="nav-link text-dark fw-semibold"
            onClick={() => setFeedTab("/followings")}
          >
            {feedTab === "/followings" ? (
              <span className="text-primary">Following</span>
            ) : (
              <span>Following</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FeedHeader;
