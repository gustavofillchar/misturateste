import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";

import "./style.scss";

const ProductItem = ({ title, descript, image, id }) => {
  return (
    <Link to={`/produtos/${id}`} className="box-product">
      <div className="button-item">
        <div className="text-item">{title}</div>
      </div>
      <div className="BannerImage">
        <img src={image} key={id} alt="Doces" />
      </div>
    </Link>
  );
};

const productlist = [
  {
    id: "compotas",
    title: "Compotas",
    image: require("../../assets/product-1.png"),
  },
  {
    id: "cristalizados",
    title: "Cristalizados",
    image: require("../../assets/product-2.png"),
  },
  {
    id: "goiabada",
    title: "Goiabada",
    image: require("../../assets/product-3.png"),
  },
  {
    id: "casquinha",
    title: "Casquinha",
    image: require("../../assets/product-4.png"),
  },
];

function getFolder() {
  window.open(
    `https://api.whatsapp.com/send?text=Ol%C3%A1%2C+gostaria+de+receber+o+cat%C3%A1logo+completo+de+voc%C3%AAs.&phone=5535991512927`,
    "_blank"
  );
}

export default function Products() {
  return (
    <div>
      <Header />

      <section className="background-products">
        <div className="container">
          <h2>Nossos Produtos</h2>
          <p>
            Nossos produtos artesanais são versáteis e se harmonizam facilmente
            com diversos pratos. Conheça e aprenda como fazer essas receitas
            clicando aqui.
          </p>
          <div className="product-list">
            {productlist.map((item) => {
              return (
                <ProductItem
                  title={item.title}
                  image={item.image}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className="getListProducts">
            <div className="actionButton" onClick={() => getFolder()}>
              Solicite nosso catálogo completo
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
