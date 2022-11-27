import ApresentaLetra from "./ApresentaLeta"
export default function Letras(prop) {
  console.log(prop.palavraEs)
  
  return (
    <div className="aquiTemLetra flex flex-wrap">
      {prop.alfabeto.map((l) => <ApresentaLetra
        key={l}
        iniciaJo={prop.iniciaJo}
        listaAB={l}
        palavrasEs={prop.palavraEs}
        avancoPalavra={prop.avancoPalavra}
        teste={prop.teste}
      />)}
    </div>
  )
}