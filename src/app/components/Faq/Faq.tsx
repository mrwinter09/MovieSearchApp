"use client";

import Link from "next/link";
import "./Faq.css";
import faqData from "./Faq.json";

const Faq = () => {
  return (
    <>
      <div className="faq-page">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          {faqData.Faq.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
          <div className="input-container">
            <Link href="/" passHref>
              <button className="btn btn-style">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
