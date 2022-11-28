export default function ApresentaLetra(prop) {

    function clicado(p) {
        let nada = [];
        let aa = 0;
        let seiBem = 0
        console.log(prop.palavrasEs)
        for (let i = 0; i < prop.avancoPalavra.length; i++) {
            if (p == prop.palavrasEs[i]) {
                nada.push(prop.palavrasEs[i])
                seiBem += 1;
            }
            else if (prop.avancoPalavra[i] != "_") {
                nada.push(prop.avancoPalavra[i])
            }
            else {
                nada.push("_")
            }
        }
        if (seiBem == 0) {
            aa = prop.contador + 1
            prop.aplicaContagem(aa)
            seiBem = 0
        }

        let ganhou = 0
        for (let w=0; w<nada.length; w++) {
            if (nada[w] == prop.palavrasEs[w]) {
                ganhou++
            }
        }
        if(ganhou == nada.length) {
            prop.setPalavraGanhou(!prop.palavraGanhou)
        }
        

        if (aa === 6) {
            prop.setJogo(!(prop.iniciaJo))
            prop.setAvancoPalavra(prop.palavrasEs)
            prop.setPalavraPerdeu(false)
        } else {
            prop.setAvancoPalavra(nada)
            nada = []
        }



    }

    if (prop.iniciaJo) {
        return (
            <span data-test="letter" className="letra flex aling-c just-c desligado">{prop.listaAB}</span>
        )
    }
    else {
        return (
            <span onClick={() => clicado(prop.listaAB)} data-test="letter" className="letra flex aling-c just-c ligado">{prop.listaAB}</span>
        )
    }

}