import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsHouseDoor, BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <article className="first">
          <p>Mental Health Center</p>
          <p>
            Mental Health Center was founded <br /> as a supportive mental
            health clinic.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/RangeMentalHealthCenter"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.youtube.com/watch?v=x__aG44V0VA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaYoutube />
            </a>
          </div>
        </article>
        <article>
          <h4>Sections</h4>
          <Link className="link" to="/home">
            Home
          </Link>
          <Link className="link" to="/services">
            Services
          </Link>
          <Link className="link" to="/blog">
            Blog
          </Link>
          <Link className="link" to="/shop">
            Shop
          </Link>
          <Link className="link" to="/shoppingCart">
            Shopping Cart
          </Link>
        </article>
        <article>
          <h4>Links</h4>
          <a
            className="link"
            href="https://psygen.ro/terapie/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Psygen
          </a>

          <a
            className="link"
            href="https://mental-training.ro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mental Training
          </a>
          <a
            className="link"
            href="https://cosmingiredea.ro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Psycholog Cosmin Giredea
          </a>
          <a
            className="link"
            href="http://carmenileapsiholog.ro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Psycholog Carmen Ilea
          </a>
          <a
            className="link"
            href="https://psiholog-psihoterapeut-cluj.ro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Psycholog Stela Neamt
          </a>
        </article>
        <article>
          <h4>
            {" "}
            <BsHouseDoor />
            Address
          </h4>
          <p>Cluj Napoca, str. Avram Iancu, nr. 454A</p>

          <p>
            {" "}
            <BsTelephoneInbound />
            0741270280
          </p>
          <p>
            <HiOutlineMail />
            cimpeanalexandra28@gmail.com
          </p>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 Mental Health Center @copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
