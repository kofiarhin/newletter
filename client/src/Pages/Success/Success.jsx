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
      <p className="highlight">You have successfully subscribed</p>
      <p>check your email to activate account.</p>
      <p>Thank you for joining</p>

      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default Success;
