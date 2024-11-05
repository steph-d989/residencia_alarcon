import React from "react";
import CardFAQ from "./CardFAQ"; 
import './../../../styles/components/_FAQ.scss';

const FAQ = () => {
  return (
    <>
      <h4>Lo que necesitas saber...</h4>
      <div className="card-container">
        <CardFAQ />
      </div>
    </>
  );
};

export default FAQ;
