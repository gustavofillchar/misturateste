import React from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { Link } from "react-router-dom";

import banner1 from "../../../assets/goiabada/banner1.jpg";
import bannerlaranja from "../../../assets/cristalizados/bannerlaranja.jpg";
import bannerabobora from "../../../assets/cristalizados/bannerabobora.png";
import bannerfigo from "../../../assets/cristalizados/bannerfigo.jpg";
import bannermamao from "../../../assets/cristalizados/bannermamao.jpg";

export default function Cristalizados() {
  return (
    <div>
      <Header />

      <section className="background-products">
        <div className="container">
          <h2>Doces Cristalizados</h2>
          <p className="text-justify">
            As frutas cristalizadas são cuidadosamente preparadas por mãos
            habilidosas que, adicionando apenas água, açúcar e uma pitada de
            amor, as transformam em verdadeiras obras de arte.
          </p>
          <div className="row">
            <div className="col-lg-8 text-center align-self-center ">
              <h6>Figo</h6>
              <p className="text-justify">
                O figo é uma fruta versátil que pode ser transformado em doces
                saborosos e elegantes. Depois de cristalizado ele se transforma
                em um doce suculento por dentro e sequinho por fora. Ele sem
                dúvida é o nosso queridinho, pois além de ter um sabor único,
                podemos combina-lo com outros ingredientes, como nozes e doce de
                leite, que o deixa ainda mais espetacular! Com o seu verde
                brilhante, ele além de surpreender com o seu sabor, ainda irá
                agregar beleza à sua mesa
              </p>
            </div>
            <div className="col-lg-4">
              <img src={bannerfigo} className="img-fluid" alt="goiabada" />
            </div>
          </div>

          <div className="row  mt-5">
            <div className="col-lg-4">
              <img src={bannermamao} className="img-fluid" alt="goiabada" />
            </div>
            <div className="col-lg-8 text-center align-self-center ">
              <h6>Mamão Bordado</h6>
              <p className="text-justify">
                O mamão tem origem tropical no noroeste da América do Sul e se
                adaptou muito bem ao Brasil, e os estados que se destacam na sua
                produção são Bahia, Espirito Santo e Pará.
              </p>
              <p className="text-justify">
                Nossos doces são produzidos com o mamão ainda verde, pois usamos
                sua polpa firme e sua casca verde para esculpir os desenhos
                manualmente pelas mãos das bordadeiras da cidade. Conseguimos
                dar várias formas ao doce de mamã que com seu sabor suave e sua
                delicadeza encanta a todos que o experimentam.
              </p>
            </div>
          </div>

          <div className="row mt-4 ">
            <div className="col-lg-8  text-center  align-self-center  ">
              <h6>Abóbora</h6>
              <p className="text-justify">
                A abobora é símbolo de abundancia e prosperidade, e aqui não é
                diferente, pois o nosso doce de abóbora é uma de nossas receitas
                mais tradicionais, que remete a lembranças da infância. Dono de
                um sabor peculiar e marcante, a florzinha de abóbora é um dos
                produtos mais apreciados por nossos clientes, um trabalho que
                requer paciência e muito amor.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={bannerabobora} className="img-fluid" alt="goiabada" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={bannerlaranja}
                className="img-fluid"
                alt="laranja kinkan"
              />
            </div>
            <div className="col-lg-8 text-center align-self-center ">
              <h6>Laranja Kinkan</h6>
              <p className="text-justify">
                A pequenina laranja kinkan é inesquecível! Saborosa, única e
                inigualável. A fruta é conhecida como laranjinha de ouro e
                encanta por sua aparência graciosa e sabor marcante. De pele
                macia pode ser usada em muitas receitas, a laranja kinkan é
                símbolo de felicidade.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/produtos/detalhes/cristalizados">
              Clique aqui para ver a linha completa de Doces Cristalizados
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
