import React, { useState } from "react";
import "./newsletterForm.styles.scss";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Replace with actual API call
  };

  return (
    <div className="newsletter-form-container">
      <h1>
        JOIN MY
        <br />
        NEWSLETTER
      </h1>
      <p>Subscribe to our newsletter for the latest updates.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
