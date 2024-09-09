import React from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import footerData from "./Footer.json";
import Link from "next/link";

const icons = {
  FaLinkedinIn,
};

interface Link {
  label: string;
  url: string;
  icon?: keyof typeof icons;
}

interface Section {
  title: string;
  links: Link[];
}

interface FooterData {
  Footer: Record<string, Section>;
}

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="col col-1">
            <h1>
              Mo<span className="primary">Se</span>
            </h1>
          </div>
          {Object.entries(footerData.Footer as FooterData["Footer"]).map(
            ([key, section]) => (
              <div key={key} className="col">
                <h5>{section.title}</h5>
                <span className="bar"></span>
                {section.links.map((link, index) =>
                  link.url.startsWith("http") ? (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer">
                      {link.icon
                        ? React.createElement(icons[link.icon], {
                            className: "icon",
                          })
                        : link.label}
                    </a>
                  ) : (
                    <Link key={index} href={link.url} passHref legacyBehavior>
                      <a>
                        {link.icon
                          ? React.createElement(icons[link.icon], {
                              className: "icon",
                            })
                          : link.label}
                      </a>
                    </Link>
                  )
                )}
              </div>
            )
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
