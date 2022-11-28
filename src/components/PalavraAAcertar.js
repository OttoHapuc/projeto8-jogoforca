export default function PalavraAAcertar(prop) {
    
    return (
        <div className={`fraseASeAdivinhar ${(prop.palavraPerdeu) ? "" : "perdeu"}`}>
            {prop.avancoPalavra}
        </div>
    )
}