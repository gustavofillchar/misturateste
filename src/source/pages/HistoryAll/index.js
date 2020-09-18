import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";

import "./style.scss";

export default function Contact() {
  return (
    <div>
      <Header />

      <section className="background-products">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-8 mb-5">
              <h2>Nossa História</h2>
              <p>
                Nossa história teve início no ano de 1998, quando Maria Cecília
                Lemos iniciou a produção de doces de frutas, cristalizados e em
                compotas, de forma artesanal e em pequena escala, arte que
                aprendeu com uma amiga e conterrânea. Desse momento foram
                grandes batalhas, mas com muita perseverança ela conseguiu
                trilhar um caminho de sucesso. Foram 19 anos fazendo doçuras,
                até que em 2017 sua filha Luiza Lemos se juntou a esse sonho e
                fundou a marca Mistura Melada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
