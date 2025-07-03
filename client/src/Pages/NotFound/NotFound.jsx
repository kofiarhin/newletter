import React from "react";
import "./notFound.styles.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="code">404</h1>
      <h2 className="title">Page Not Found</h2>
      <p className="text">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
