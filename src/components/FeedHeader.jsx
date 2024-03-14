import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define the FeedHeader component
const FeedHeader = () => {
  // Initialize state for active feed tab
  const [feedTab, setFeedTab] = useState(window.location.pathname);

  return (
    <div className="">
      {/* Navigation tabs for different feed sections */}
      <ul className="nav justify-content-evenly border-bottom">
        <li className="nav-item">
          {/* Link to 'For You' feed section */}
          <Link
            to={"/"}
            className="nav-link text-dark fw-semibold"
            onClick={() => setFeedTab("/")}
          >
            {feedTab === "/" ? ( // Display 'For You' tab as active if current feed tab is '/'
              <span className="text-primary">For you</span>
            ) : (
              <span>For you</span>
            )}
          </Link>
        </li>
        <li className="nav-item">
          {/* Link to 'Following' feed section */}
          <Link
            to={"/followings"}
            className="nav-link text-dark fw-semibold"
            onClick={() => setFeedTab("/followings")}
          >
            {feedTab === "/followings" ? ( // Display 'Following' tab as active if current feed tab is '/followings'
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

// Export the FeedHeader component
export default FeedHeader;
