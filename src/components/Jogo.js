import palavras from "./palavras.js"
import PalavraAAcertar from "./PalavraAAcertar.js"
export default function ImagemJogo(prop) {

    function iniciarJogo() {
        prop.setJogo(!(prop.iniciaJo))
        let aqui = palavras[Math.floor(Math.random() * palavras.length)]
        prop.setPalavra(aqui)
        prop.setPalavraEs(aqui.split(""))
    }
    if (prop.iniciaJo === true) {
        return (
            <>
                <section className="imagemJogo">
                </section>
                <section className="botaoEFrase flex flex-column just-b">
                    <button onClick={() => iniciarJogo()} type="button">Escolher Palavra</button>
                    <div className="fraseASeAdivinhar">
                        _ _ _ _ _ _ _ _
                    </div>
                </section>
            </>
        )
    }
    else {
        return (
            <>
                <section className="imagemJogo">
                    <img src={prop.imagens[prop.contador]}></img>
                </section>
                <section className="botaoEFrase flex flex-column just-b">
                    <button onClick={() => iniciarJogo()} type="button">Escolher Palavra</button>
                    <div className="flex">
                        {prop.avancoPalavra.map((p) => <PalavraAAcertar 
                            key={p} 
                            avancoPalavra={p}
                            />)}
                    </div>
                </section>
            </>
        )
    }
}