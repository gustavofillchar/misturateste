import React from "react";
import "./footer.scss";
import logo from "../../assets/logo-b.svg";
import front from "../../assets/front.jpg";
import heart from "../../assets/heart.svg";

export default function Footer() {
  return (
    <div>
      <div className="footer-background">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-4 align-self-center">
              <img className="imgLogoFooter" alt="Mistura Melada" src={logo} />
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-4 mb-md-0 mb-3">
              <p className="title">Nossa Loja Física:</p>
              <p>Rua Dr. Monte Raso, 117 - Centro - Carmo do Rio Claro, MG.</p>
              <p>
                (35) 3561-2030 |{"  "}
                <a href="https://api.whatsapp.com/send?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+produto+de+voc%C3%AAs.&phone=5535991512927">
                  (35) 99151-2927 <span>WhatsApp</span>
                </a>
              </p>
              <p>
                <a href="mailto:comercial@misturamelada.com.br">
                  comercial@misturamelada.com.br
                </a>
              </p>
              <p>CNPJ: 16.619.823/0001-30</p>
            </div>

            <div class="col-md-4 mt-md-0 mt-3">
              <img
                className="imgFront"
                alt="Mistura Melada Fachada"
                src={front}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="barMade">
        <div className="text">Feito com</div>
        <img alt="Amor" src={heart} />
        <div className="text">em Carmo do Rio Claro, Minas Gerais</div>
      </div>
    </div>
  );
}
