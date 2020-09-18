import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { Link } from "react-router-dom";

import banner1 from "../../../assets/compotas/banner-1-a.jpg";
import banner2 from "../../../assets/compotas/banner-2-a.jpg";
import banner3 from "../../../assets/compotas/banner-3-a.jpg";
import banner5 from "../../../assets/compotas/banner-5-a.jpg";
import banner6 from "../../../assets/compotas/banner-6-a.jpg";

export default function Cristalizados() {
  return (
    <div>
      <Header />

      <section className="background-products">
        <div className="container">
          <h2>Doces em Compotas</h2>

          <div className="row mt-5">
            <div className="col-lg-8 text-center align-self-center ">
              <h6>Jabuticaba</h6>
              <p className="text-justify">
                Nossa menina dos olhos, graciosa e esplêndida. A jabuticaba além
                de saborosa é riquíssima em vitaminas e minerais. Nativa da mata
                atlântica, pode ser usada em diversas receitas. Aqui a
                transformamos em uma incrível e charmosa compota, feita com sua
                casca, agrega sabor e peculiaridade em diversos pratos, tanto
                doces quanto salgados.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={banner1} className="img-fluid" alt="Jabuticaba" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4">
              <img src={banner3} className="img-fluid" alt="Pêssego" />
            </div>
            <div className="col-lg-8 text-center align-self-center">
              <h6>Pêssego</h6>
              <p className="text-justify">
                Aveludado e supremo! Esse é o pêssego, um dos nossos doces mais
                apreciados. Diferente de tudo que já se viu, nosso doce de
                pêssego se diferencia pelo formato e sabor, pois é feito com a
                fruta inteira do pêssego, preservando seu formato original,
                garantindo a máxima qualidade. Combina muito bem com uma de
                nossas principais iguarias, nosso famoso e tradicional queijo
                mineiro.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8 text-center align-self-center">
              <h6>Mamão Rolinho</h6>
              <p className="text-justify ">
                De clima tropical o mamão é um velho conhecido, aqui nós
                transformamos essa fruta forte em uma delicada doçura. O doce de
                mamão enroladinho é uma relíquia mineira e com seu toque
                aveludado nos transporta a tempos felizes: casa de vó e
                cheirinho de ternura. Ele pode ser servido com outra iguaria
                mineira muito apreciada, o tradicional doce de leite.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={banner5} className="img-fluid" alt="Mamão Rolinho" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4">
              <img src={banner6} className="img-fluid" alt="Limão" />
            </div>
            <div className="col-lg-8 text-center align-self-center ">
              <h6>Limão</h6>
              <p className="text-justify">
                Que o limão tem inúmeros benefícios todos já sabem, mas o que
                poucos conhecem é que somado a açúcar, água, paciência e
                carinho, se transforma em um delicioso doce. Nossa mais nova
                criação vem percorrendo o Brasil e sendo admirado pelos
                apaixonados por compotas de sabor marcante.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/produtos/detalhes/compotas">
              Clique aqui para ver a linha completa de Doces em Compotas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
