import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { Link } from "react-router-dom";

import banner1 from "../../../assets/goiabada/banner1.jpg";

export default function Goiabada() {
  return (
    <div>
      <Header />

      <section className="background-products">
        <div className="container">
          <h2>Goiabada</h2>
          <div className="row">
            <div className="col-lg-6  mt-2">
              <p className="text-justify">
                A goiabada surgiu no Brasil através dos portugueses, partiu da
                necessidade de conservação do fruto da goiaba e como alternativa
                a marmelada, doce feito a base de marmelo. Ela surgiu no estado
                de Minas Gerais e logo se popularizou pelo país, caindo no gosto
                dos brasileiros por sua explosão de sabor e suculência.
              </p>
              <p className="text-justify">
                Uma das combinações mais populares é quando se junta a goiabada
                com o tradicional queijo mineiro, dando origem a famosa
                sobremesa conhecida como Romeu e Julieta, personagens de um
                drama romântico de Shakespeare.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={banner1} className="img-fluid" alt="goiabada" />
            </div>
          </div>
          <p className="text-justify">
            A nossa goiabada é feita artesanalmente preservando toda a arte
            envolvida na fabricação desse doce, o que a diferencia no mercado a
            tornando um de nossos produtos mais desejados pelos nossos clientes.
          </p>
          <div className="text-center mt-2">
            <Link to="/produtos/detalhes/goiabada">
              Clique aqui para ver a linha completa de Goiabada
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
