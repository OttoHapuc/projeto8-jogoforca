export default function ApresentaLetra(prop) {

    function clicado(p) {
        console.log(prop.palavrasEs)
        let nada = []
        let aa = prop.contador +1
        for (let i = 0; i<prop.avancoPalavra.length; i++) {
            if (p == prop.palavrasEs[i]){
                nada.push(prop.palavrasEs[i])
            }
            else if(prop.avancoPalavra[i] != "_"){
                nada.push(prop.avancoPalavra[i])
            }
            else{
                nada.push("_")
                prop.aplicaContagem(aa)
            }
        }
        prop.setAvancoPalavra(nada)
        nada = []
        console.log(prop.avancoPalavra)
    }
    if (prop.iniciaJo === true) {
        return (
            <span className="letra flex aling-c just-c desligado">{prop.listaAB}</span>
        )
    }
    else {
        return (
            <span onClick={() => clicado(prop.listaAB)} className="letra flex aling-c just-c ligado">{prop.listaAB}</span>
        )
    }
}