import React, { useState } from "react";
import "./newsLetterForm.styles.scss";
import useSubscribeMutation from "../../hooks/useSubscribeMutation";
import Spinner from "../Spinner/Spinner";

const NewsletterForm = () => {
  const { data, mutate, isPending } = useSubscribeMutation();
  const [formData, setFormData] = useState({
    name: "david kraku",
    email: "davidkraku69@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className="newsletter-form-container">
      <h1>JOIN MY NEWSLETTER</h1>
      <p>
        Subscribe to our newsletter and be the first to know about new features,
        exclusive updates, and tips delivered straight to your inbox. No
        spam—just useful content to keep you informed.
      </p>

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
