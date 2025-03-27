import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOOGLEFORM_SUBMIT_ACTIVITY_URL = `https://docs.google.com/forms/d/e/${process.env.REACT_APP_GOOGLEFORM_SUBMIT_ACTIVITY_ID}/viewform?embedded=true`;

function SubmitActivity() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/.netlify/functions/validatePassword", {
        method: "POST",
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        setAuthenticated(true);
        setError("");
      } else {
        setError("Incorrect password.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container">
      <Header />
      {!authenticated ? (
        <form onSubmit={handleSubmit} className="password-form">
          <label htmlFor="password">Enter password to access activity submission form:</label><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Unlock Form</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      ) : (
        <iframe
          src={GOOGLEFORM_SUBMIT_ACTIVITY_URL}
          width="100%"
          height="700px"
          style={{ border: "none" }}
          title="Submit Activity Form"
        >
          Loading…
        </iframe>
      )}
      <Footer />
    </div>
  );
}

export default SubmitActivity;
