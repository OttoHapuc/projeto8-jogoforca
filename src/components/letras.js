import ApresentaLetra from "./ApresentaLeta"
export default function Letras(prop) {
  console.log()
  
  return (
    <div className="aquiTemLetra flex flex-wrap">
      {prop.alfabeto.map((l) => <ApresentaLetra
        key={l}
        iniciaJo={prop.iniciaJo}
        listaAB={l}
        palavrasEs={prop.palavraEs}
        avancoPalavra={prop.avancoPalavra}
        setAvancoPalavra={prop.setAvancoPalavra}
        contador={prop.contador}
        aplicaContagem={prop.aplicaContagem}
      />)}
    </div>
  )
}