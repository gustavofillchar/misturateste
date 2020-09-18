import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./styles.scss";

import doce from "../../assets/jov.png";

import Footer from "../../components/footer";
import Header from "../../components/header";

import listCandies from "./test.json";

export default function List() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [titleProduct, setTitleProduct] = useState("");
  const [textsub, setTextSub] = useState("");
  const [bannerOne, setBannerOne] = useState("");
  const [bannerTwo, setBannerTwo] = useState();

  useEffect(() => {
    listCandies.items.map((items, index) => {
      if (id === items.key) {
        setData(items.data);
        setTitleProduct(items.description);
        setTextSub(items.textsub);
        setBannerOne(items["banner-01"]);
        setBannerTwo(items["banner-02"]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function ListItems() {
    return (
      <div>
        {data?.map((items, index) => {
          return (
            <div className="boxItem">
              <div className="boxImage">
                <img
                  className="img-fluid"
                  src={require(`../../assets/${items.image}.png`)}
                  alt="Imagem do doce"
                />
              </div>
              <h6>{items.title}</h6>
              {/* <p className="cardDescription">{items.description}</p> */}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className="bgcolorwrap">
      <Header />
      <div className="container">
        <div className="productListView">
          {/* <h2 className="titleList">{titleProduct}</h2>

          {Object.keys(textsub).map((key, index) => {
            console.log();
            return <p>{textsub[key]}</p>;
          })}

          <div className="boxPreviewProducts">
            <div className="itemProduct">
              {bannerOne && (
                <img
                  src={require(`../../assets/${bannerOne}.png`)}
                  alt="Banner"
                />
              )}
            </div>

            <div className="itemProduct">
              {bannerTwo && (
                <img
                  src={require(`../../assets/${bannerTwo}.png`)}
                  alt="Banner"
                />
              )}
            </div>
          </div> */}

          <h6>Linha completa de {titleProduct}</h6>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            cursus, nisl a placerat auctor, quam diam volutpat nunc, eget
            vulputate ex mauris a elit. In maximus tempus nulla, vel eleifend
            lorem vehicula non.
          </p> */}
          <div className="listView">
            <ListItems />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
