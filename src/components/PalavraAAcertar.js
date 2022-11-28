export default function PalavraAAcertar(prop) {
    
    return (
        <div className={`fraseASeAdivinhar ${(prop.palavraPerdeu) ? "" : "perdeu"} ${(prop.palavraGanhou) ? "ganhou" : ""}`}>
            {prop.avancoPalavra}
        </div>
    )
}