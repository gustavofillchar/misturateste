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
              <h2>Fale Conosco</h2>
              <p>
                Estamos à total disposição para esclarecer dúvidas, pedidos de
                orçamentos ou qualquer outra coisa que pudermos lhe ajudar.
              </p>
              <form>
                <div className="row ">
                  <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                      <label>Seu nome</label>
                      <input
                        placeholder="Digite seu nome"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                      <label>Telefone ou WhatsApp</label>
                      <input
                        placeholder="Ex.: (XX) XXXX-XXXXX"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label>E-mail</label>
                  <input
                    placeholder="Ex.: seuemail@gmail.com"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Assunto</label>
                  <input
                    placeholder="Ex.: Pedido de Orçamento, Dúvida"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Como podemos lhe ajudar?</label>
                  <textarea
                    placeholder="Digite aqui sua mensagem..."
                    class="form-control"
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-lg btn-success btn-block">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
