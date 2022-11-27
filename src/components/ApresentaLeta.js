export default function ApresentaLetra(prop) {

    
    function clicado(p) {
        
        for (let i = 0; i < prop.palavrasEs.length; i++) {
            if(p == prop.palavrasEs[i]){
                prop.teste.push(prop.palavrasEs[i])
            }
            else{
                prop.teste.push("_")
            }
        }
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