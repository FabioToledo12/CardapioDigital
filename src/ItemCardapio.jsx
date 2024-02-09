import { enroladinhoMignon } from "./cardapio"

//ctrl + D -> muda varios textos juntos
//crtl + alt seta baixo -> seleciona + de uma linha 

export function ItemCardapio(props) {
    return <div className="container-item-cardapio" >
        <div>
            <h2> { props.nome } </h2>
            <p> { props.preco } </p>
            <p> { props.descricao } </p>
        </div>
        <img src={ props.imagem } alt="" />
    </div>
}