import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { Link } from "react-router-dom";

import banner1 from "../../../assets/casquinhas/banner1.png";

export default function Casquinha() {
  return (
    <div>
      <Header />

      <section className="background-products">
        <div className="container">
          <h2>Casquinha De Fruta</h2>
          <div className="row">
            <div className="col-lg-12  mt-2">
              <p>
                Crocante e Irresistível, ela adoça a vida e o café! A casquinha
                de laranja e de limão é um produto feito a base da combinação da
                casca de frutas e açúcar, e acompanha muito bem cafés, chás e
                também podem ser consumidas sozinhas. Elas são cuidadosamente
                preparadas para proporcionar um sabor surpreendente que irá
                ficar na marcado na sua memória com gostinho de quero mais.
              </p>
            </div>
            <div className="col-lg-12 text-center">
              <img src={banner1} className="img-fluid" alt="goiabada" />
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/produtos/detalhes/casquinha">
              Clique aqui para ver a linha completa de Casquinha de Fruta
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
