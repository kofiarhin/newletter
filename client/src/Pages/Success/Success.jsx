import React from "react";
import { useNavigate } from "react-router-dom";
import "./success.styles.scss";

const Success = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="success-container">
      <h1>🎉 Success!</h1>
      <p className="highlight">Your account has been successfully activated.</p>
      <p>
        You're now subscribed to our newsletter and will start receiving
        exclusive updates, helpful tips, and curated content directly in your
        inbox.
      </p>
      <p>
        Thanks for joining the community — we're excited to have you on board!
      </p>

      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default Success;
