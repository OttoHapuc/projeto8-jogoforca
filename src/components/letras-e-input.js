import ApresentaLetra from "./ApresentaLeta"
export default function LetrasInput() {
  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVXZ"
  const listaAB = abecedario.split("")

  return (
    <section className="letraEinput flex flex-column aling-c">
      <div className="aquiTemLetra flex flex-wrap">
        {listaAB.map((l)=><ApresentaLetra key={l} listaAB={l}/>)}
      </div>
      <div className="fundo flex flex-wrap aling-c">
        <span>Já sei a palavra!</span>
        <input type="text" className=""></input>
        <button className="chutar" type="button">Chutar</button>
      </div>
    </section>
  )
}