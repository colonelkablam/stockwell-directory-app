import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="container">
      <Header />
      <div className="detailed-card">
        <h1>About this directory</h1>
        <p>This directory has been created to support with community connecting in and around Stockwell, North Lambeth. It includes activities found in online listings, magazines, flyers and on social media. The information contained is not exhaustive and has not been quality assured by the providers.</p>
        <p className="bold-para red-text">Please note: The information provided in this directory is for reference only. Users assume full responsibility for their use of the services listed.</p>
        <p>Activities are not vetted before being added here, and this directory is intended to be used with the support of a provider or community connector.</p> 
        <p className="bold-para green-text">You can 'pin' activities of interest and print them (or copy and translate them online into other languages than English).</p> 
        <p className="bold-para green-text">When using information from listings you should check directly with the provider that the activity is running on the expected day.</p>
        <p className="bold-para green-text">It is hoped that this is a resource that supports with communication and visit planning, analysing local activities to identify opportunities and gaps, and supporting greater service access.</p>
        <p>This project represents a partnership between Hyde Housing, Oval Learning Cluster, Stockwell Partnership, Centric and The Sedulous Collective.</p>
        <p>Queries? Please email Laura Bassett at: <p className="bold-para">&nbsp; bugbearworkshops@gmail.com</p></p>
        <Link to="/" className="nav-link">
          &lt;&lt; Home
        </Link>      
      </div>
    </div>
  );
}

export default Info;

