export default function ApresentaLetra(prop) {

    function clicado(p) {
        let nada = [];
        let aa = 0;
        let seiBem = 0
        for (let i = 0; i<prop.avancoPalavra.length; i++) {
            if (p == prop.palavrasEs[i]){
                nada.push(prop.palavrasEs[i])
                seiBem+=1;
                console.log(seiBem)
            }
            else if(prop.avancoPalavra[i] != "_"){
                nada.push(prop.avancoPalavra[i])
            }
            else{
                nada.push("_")
            }
        }
        if (seiBem == 0){
            aa = prop.contador +1
            prop.aplicaContagem(aa)
            seiBem=0
            console.log("aqui")
        }

        if(aa === 6){
            prop.setJogo(!(prop.iniciaJo))
            prop.setAvancoPalavra(prop.palavrasEs)
            prop.setPalavraPerdeu(false)
        }else{
            prop.setAvancoPalavra(nada)
            nada = []
        }
        
    }
        return (
            <span onClick={() => clicado(prop.listaAB)} data-test="letter" className={`letra flex aling-c just-c ${(prop.iniciaJo) ? "desligado" : "ligado"}`} disabled={prop.iniciaJo}>{prop.listaAB}</span>
        )
    }