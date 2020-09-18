/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import TextLoop from "react-text-loop";
import "./scss/story.scss";
import "./scss/header.scss";
import "./scss/products.scss";
import "./scss/footer.scss";
import "./scss/whatsapp.scss";
import "./scss/mapbox.scss";

import logo from "../../assets/logo.svg";
import insta from "../../assets/instagram.svg";
import face from "../../assets/facebook.svg";
import down from "../../assets/down.svg";
import whatsapp from "../../assets/whatsapp.svg";

import gluten from "../../assets/gluten.svg";
import lactose from "../../assets/lactose.svg";
import pan from "../../assets/pan.svg";

import ScrollAnimation from "react-animate-on-scroll";
import { configureAnchors } from "react-scrollable-anchor";

import { Link } from "react-router-dom";

import Footer from "../../components/footer";

import clients from "./clients.json";

import bnd1 from "../../assets/img-banner/banner-1.png";
import bnd2 from "../../assets/img-banner/banner-2.png";
import bnd3 from "../../assets/img-banner/banner-3.png";
import bnd4 from "../../assets/img-banner/banner-4.png";

import cr1 from "../../assets/banners-float/000.jpg";
import cr2 from "../../assets/banners-float/001.jpg";
import cr3 from "../../assets/banners-float/002.jpg";
import cr4 from "../../assets/banners-float/003.jpg";
import cr5 from "../../assets/banners-float/004.jpg";

import MapIn from "./Map";

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: 0, scrollDuration: 200 });

const text1 =
  "Nossa história teve início no ano de 1998, quando Maria Cecília Lemos iniciou a produção de doces de frutas, cristalizados e em compotas, de forma artesanal e em pequena escala, arte que aprendeu com uma amiga e conterrânea. Desse momento foram grandes batalhas, mas com muita perseverança ela conseguiu trilhar um caminho de sucesso.";

const text2 =
  "Foram 19 anos fazendo doçuras, até que em 2017 sua filha Luiza Lemos se juntou a esse sonho e fundou a marca Mistura Melada. Conheça mais sobre a nossa história ";

const Story = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" delay={0.2}>
      <div className="storybackground" id="stories">
        <div className="container">
          <div className="boxhistory">
            <div className="itemhistory">
              <div className="historyText">
                <h1>História</h1>
                <p>{text1}</p>
                <p>
                  {text2}
                  <Link to="/historia">clicando aqui.</Link>
                </p>
              </div>
            </div>

            <div className="itemhistory ">
              <div className="photo"></div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Products = () => {
  return (
    <div className="productsBackground">
      <div className="container">
        <div className="titleproduct">
          <h2>Produtos</h2>
        </div>
        <div className="boxProdutcsList">
          <div className="boxitem">
            <div className="icon">
              <img alt="Sem Glútem" src={gluten} />
            </div>
            <div className="titleProduct">Sem Glútem</div>
            <div className="textProduct">
              O glúten é uma mistura de proteínas e carboidratos que resulta em
              uma grande molécula formada principalmente por glutenina e
              gliadina, proteínas presentes nos alimentos com glúten. O glúten
              possui difícil digestão e pode provocar uma série de disfunções em
              qualquer pessoa que a consome regularmente.
            </div>
          </div>

          <div className="boxitem">
            <div className="icon">
              <img alt="Sem Glútem" src={lactose} />
            </div>
            <div className="titleProduct">Sem Lactose</div>
            <div className="textProduct">
              Eles são destinados a pessoas que têm dificuldade em digerir a
              lactose, portanto, que são intolerantes à lactose. É importante
              ressaltar que o procedimento utilizado pelo fabricante não altera
              a composição do leite, promovendo a conservação de suas
              características.
            </div>
          </div>

          <div className="boxitem">
            <div className="icon">
              <img alt="Sem Glútem" src={pan} />
            </div>
            <div className="titleProduct">Artesanal</div>
            <div className="textProduct">
              O principal ingrediente dos nossos produtos é com certeza o amor
              que colocamos em cada um deles. A nossa fabricação é artesanal com
              cada detalhe é feito a mão. Fazemos assim na intenção de
              transmitir a nossa essência para cada uma das pessoas que
              experimentarem as nossas delícias.
            </div>
          </div>
        </div>

        <div className="boxPreviewProducts">
          <div className="itemProduct">
            <img src={bnd1} alt="Doces" />
          </div>

          <div className="itemProduct">
            <img src={bnd2} alt="Doces" />
          </div>
        </div>

        <div className="boxPreviewProducts">
          <div className="itemProduct">
            <img src={bnd3} alt="Doces" />
          </div>

          <div className="itemProduct">
            <img src={bnd4} alt="Doces" />
          </div>
        </div>

        <div className="buttonbox">
          <Link to="/produtos" className="buttonAction">
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </div>
  );
};

const WhatsApp = () => {
  function sendMessage() {
    const phone = "123456789";

    window.open(
      `https://api.whatsapp.com/send?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+produto+de+voc%C3%AAs.&phone=${phone}`,
      "_blank"
    );
  }

  return (
    <div class="bloco-wthats" id="whatsappbtn">
      <a onClick={() => sendMessage()} class="link-whats w-inline-block"></a>
      <div class="aura" data-ix="new-interaction"></div>
    </div>
  );
};

const SalesPlaces = ({ google }) => {
  const [stateSelect, setStateSelect] = useState("Minas Gerais");

  return (
    <div className="salesPlaceBox">
      <Link to="/ondeencontrar">
        <div className="btnSaleBox">Onde encontrar</div>
      </Link>
      <Link to="/contato">
        <div className="btnSaleBox">Seja um revendedor</div>
      </Link>

      <div className="btnDelivery">* Entregamos em todo Brasil</div>
    </div>
  );
};

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

function MainPage() {
  const [data, setData] = useState(null);

  return (
    <section>
      <div className="background">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <div className="blackfade">
          <div className="container">
            <div className="headerbar">
              <div className="navigationbar">
                {/* <Link to="/produtos" className="link-select">
                  <div className="navitem">História</div>
                </Link> */}
                <Link to="/historia" className="link-select">
                  <div className="navitem">Nossa História</div>
                </Link>
                <Link to="/produtos" className="link-select">
                  <div className="navitem">Produtos</div>
                </Link>

                <Link to="/contato" className="link-select">
                  <div className="navitem">Contato</div>
                </Link>
              </div>

              <div className="menu-mobile">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="navbar-brand">
                    <img alt="Mistura Melada" height="80" src={logo}></img>
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
                        <Link to="/historia" className="link-select">
                          Nossa História
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/produtos" className="link-select">
                          Produtos
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/contato" className="link-select">
                          Contato
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="socialitems">
                <div
                  className="itemsocial"
                  onClick={() => openSocial("instagram")}
                >
                  <img alt="Instagram Mistura Melada" src={insta}></img>
                </div>
                <div className="itemsocial">
                  <img
                    alt="Facebook Mistura Melada"
                    src={face}
                    onClick={() => openSocial("facebook")}
                  ></img>
                </div>
                <div className="itemsocial">
                  <img
                    alt="WhatsApp Mistura Melada"
                    src={whatsapp}
                    onClick={() => openSocial("whatsapp")}
                  ></img>
                </div>
              </div>
            </div>
            <div className="centermessage">
              <div className="borderLogo">
                <img
                  className="img_logo_home"
                  alt="Mistura Melada"
                  src={logo}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Story />
      <Products />
      <SalesPlaces />
      <Footer />
    </section>
  );
}

export default MainPage;
