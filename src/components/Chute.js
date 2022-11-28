export default function Chute(prop) {

    function acertou() {
        
        const oi = prop.chutee.split("");
        prop.setAvancoPalavra(prop.palavraEs);
        let acerto = 0;
        let errado = 0;
        for (let i=0; i<prop.palavraEs.length; i++) {
            if(oi[i] == prop.palavraEs[i]) {
                acerto++;
            }
            else{
                errado++;
            }
        }
        if(errado ==0){
            prop.setPalavraganhou(true)
            prop.setJogo(true)
        }
        else{
            prop.setPalavraPerdeu(false)
            prop.setJogo(true)
            prop.setContador(6)
        }
        prop.setChutee("")
    }

    return (
        <div className="fundo flex flex-wrap aling-c">
            <span>Já sei a palavra!</span>
            <input
                type="text"
                data-test="guess-input"
                className="" disabled={prop.iniciaJo}
                placeholder="Digite aqui seu chute"
                onChange={(event) => prop.setChutee(event.target.value)}
                value={prop.chutee}
            ></input>
            {(prop.iniciaJo) ? <button 
            data-test="guess-button" 
            className="chutar" 
            type="button"
            >Chutar</button> : <button 
            onClick={acertou} 
            data-test="guess-button" 
            className="chutar" 
            type="button"
            >Chutar</button>
            }
        </div>
    )
}