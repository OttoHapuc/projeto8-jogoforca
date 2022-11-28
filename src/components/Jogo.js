import palavras from "./palavras.js"
import PalavraAAcertar from "./PalavraAAcertar.js"
export default function ImagemJogo(prop) {

    function iniciarJogo() {
        prop.setContador(0)
        prop.setPalavraPerdeu(true)
        prop.setJogo(!(prop.iniciaJo))
        let aqui = palavras[Math.floor(Math.random() * palavras.length)]
        prop.setPalavra(aqui)
        prop.setPalavraEs(aqui.split(""))
        
        let nada = []
        for (let i = 0; i < aqui.length; i++) {
            nada.push("_")
        }
        prop.setAvancoPalavra(nada)
    }

    let con = 0
    return (
        <>
            <section className="imagemJogo">
                <img data-test="game-image" src={prop.imagens[prop.contador]}></img>
            </section>
            <section className="botaoEFrase flex flex-column just-b">
                <button onClick={() => iniciarJogo()} data-test="choose-word" type="button">Escolher Palavra</button>
                <div className="flex">
                    {prop.avancoPalavra.map((p) => <PalavraAAcertar
                        key={p + con++}
                        avancoPalavra={p}
                        palavraPerdeu={prop.palavraPerdeu}
                        palavraEs={prop.palavraEs[p]}
                    />)}
                </div>
            </section>
        </>
    )
}
