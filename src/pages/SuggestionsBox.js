import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GOOGLEFORM_SUGGESTION_URL = `https://docs.google.com/forms/d/e/${process.env.REACT_APP_GOOGLEFORM_SUBMIT_SUGGESTION_ID}/viewform?embedded=true`;

function SuggestionsBox() {
  return (
    <div className="container">
      <Header />
        <iframe
        src={GOOGLEFORM_SUGGESTION_URL}
        width="100%"
        height="700px"
        style={{ border: "none"}}
        title="Submit Activity Form"
      >
        Loading…
      </iframe> 
      <Footer />

    </div>
  );
}

export default SuggestionsBox;


