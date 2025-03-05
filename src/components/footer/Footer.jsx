import React from "react";
import "../footer/Footer.css";

import { FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <>
      <footer>
        <ul className="links icon-links">

          <li>
            <a
              href="https://www.linkedin.com/in/joseph-acosta/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn />
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/57319478510"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsWhatsapp />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/JotaAllan__"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>

        <div className="container footer-container">
          {/* <!--  --> */}

          <div className="footer-2">
            <h4>Categories</h4>

            <ul className="links">
              <li>
                <a href="/category">Web Development</a>
              </li>
              <li>
                <a href="/category">Programming</a>
              </li>
              <li>
                <a href="/category">Investment</a>
              </li>
           
             

              <li>
                <a href="/category">Entertainment</a>
              </li>

              <li>
                <a href="/category">Politics</a>
              </li>
              <li>
                <a href="/category">Sports</a>
              </li>
            </ul>
          </div>

          <div className="footer-3">
            <h4>Insights</h4>

            <ul className="links">
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Case Studies</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Communities</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-4">
            <h4>Get In Touch</h4>

            <div>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/contact">Support</a>
              </li>
              <li>
                <a href="/contact">Services</a>
              </li>
            </div>
          </div>

          <div className="footer-4">
            <h4>Permalinks</h4>

            <div>
              <li>
                <a href="/category">Investment</a>
              </li>
              <li>
                <a href="/category">Programming</a>
              </li>
              <li>
                <a href="/category">Politics</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/contact">Support</a>
              </li>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <small>&copy; 2025 INFINITYBLOG WEBSITE </small>
      </div>
    </>
  );
};

export default Footer;
