import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  useHistory,
} from "react-router-dom";

import MainPage from "./source/pages/Main";
import Products from "./source/pages/Products";

import Compotas from "./source/pages/Products/Compotas";
import Cristalizados from "./source/pages/Products/Cristalizados";
import Goiabada from "./source/pages/Products/Goiabada";
import Casquinha from "./source/pages/Products/Casquinha";

import List from "./source/pages/ProductDetails";
import Contact from "./source/pages/Contact";
import HistoryAll from "./source/pages/HistoryAll";
import Sellers from "./source/pages/Sellers";

function Routes() {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/produtos" exact component={Products} />
        <Route path="/produtos/compotas" exact component={Compotas} />
        <Route path="/produtos/goiabada" exact component={Goiabada} />
        <Route path="/produtos/cristalizados" exact component={Cristalizados} />
        <Route path="/produtos/casquinha" exact component={Casquinha} />
        <Route path="/produtos/compotas" exact component={Compotas} />
        <Route path="/produtos/detalhes/:id" exact component={List} />
        <Route path="/contato" exact component={Contact} />
        <Route path="/historia" exact component={HistoryAll} />
        <Route path="/ondeencontrar" exact component={Sellers} />
      </Switch>
    </HashRouter>
  );
}
export default Routes;
