import { useState } from "react";

import restaurante from "./assets/restaurante.webp";
import "./App.css";
import { Navegacao } from "./assets/Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";
import React from "react";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={restaurante} alt="" className=".capa" />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
