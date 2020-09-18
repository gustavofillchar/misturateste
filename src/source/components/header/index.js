import React from "react";
import logo from "../../assets/logo.png";
import insta from "../../assets/instagram.svg";
import face from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import down from "../../assets/down.svg";
import { Link } from "react-router-dom";

import "./header-components.scss";

function openSocial(name) {
  if (name === "instagram") {
    window.open("https://www.instagram.com/misturamelada/", "_blank");
  } else if (name === "facebook") {
    window.open("https://www.facebook.com/misturameladadoces/", "_blank");
  } else if (name === "whatsapp") {
    window.open(
      `https://api.whatsapp.com/send?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+produto+de+voc%C3%AAs.&phone=5535991512927`,
      "_blank"
    );
  }
}

export default function Header() {
  return (
    <div>
      <section>
        <div className="header-component">
          <div className="container">
            <div className="headerbar">
              <div className="logobox">
                <Link to="/">
                  <img alt="Mistura Melada" src={logo}></img>
                </Link>
              </div>

              <div className="navigationbar">
                <div className="navitem">
                  <Link to="/" className="link-select">
                    Início
                  </Link>
                </div>
                <div className="navitem">
                  <Link to="/produtos" className="link-select">
                    Produtos
                  </Link>
                </div>
                <div className="navitem">
                  <Link to="/contato" className="link-select">
                    Contato
                  </Link>
                </div>
              </div>

              <div className="menu-mobile">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="navbar-brand">
                    <img alt="Mistura Melada" height="60" src={logo}></img>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto mt-3">
                      <li className="nav-item">
                        <Link to="/" className="link-select">
                          Início
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/produtos" className="link-select">
                          Produtos
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a className="link-select" href="#">
                          <Link to="/contato" className="link-select">
                            Contato
                          </Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="socialitems">
                <div className="itemsocial">
                  <img
                    alt="Instagram Mistura Melada"
                    onClick={() => openSocial("instagram")}
                    src={insta}
                  ></img>
                </div>
                <div className="itemsocial">
                  <img
                    alt="Facebook Mistura Melada"
                    onClick={() => openSocial("facebook")}
                    src={face}
                  ></img>
                </div>

                <div className="itemsocial">
                  <img
                    alt="WhatsApp Mistura Melada"
                    onClick={() => openSocial("whatsapp")}
                    src={whatsapp}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
