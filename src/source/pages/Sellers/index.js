import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";

import "./style.scss";
import clients from "./clients.json";

export default function Sellers() {
  const SalesPlaces = ({ google }) => {
    const [stateSelect, setStateSelect] = useState("Minas Gerais");

    return (
      <div className="sallers">
        {/* <div className="title">Onde encontrar</div> */}
        <section className="background-products">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <h2>Onde Encontrar</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="stateSelection">
            <div>Exibir por estado</div>
            <select
              value={stateSelect}
              onChange={(e) => setStateSelect(e.target.value)}
            >
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Goiás">Goiás</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Paraná">Paraná</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Todos">Todos os estados</option>
            </select>
          </div>

          <div className="boxAdressess table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Loja</th>
                  <th scope="col">Localização</th>
                  <th scope="col">Contato</th>
                </tr>
              </thead>
              <tbody>
                {clients.items?.map((items, index) => {
                  if (items.state === stateSelect) {
                    return (
                      <tr>
                        <td>{items.name}</td>
                        <td>{items.city}</td>
                        <td>{items.contact}</td>
                      </tr>
                    );
                  } else if (stateSelect === "Todos") {
                    return (
                      <tr>
                        <td>{items.name}</td>
                        <td>{items.city}</td>
                        <td>{items.contact}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />

      <SalesPlaces />

      <Footer />
    </div>
  );
}
