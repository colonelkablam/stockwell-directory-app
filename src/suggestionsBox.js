import React from "react";
import Header from "./header";
import Footer from "./footer";
import {GOOGLE_FORM_SUGGESTION_EMBEDDED_LINK} from "./config";

function SuggestionsBox() {
  return (
    <div className="container">
      <Header />
        <iframe
        src={GOOGLE_FORM_SUGGESTION_EMBEDDED_LINK}
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


