export default function Chute(prop) {

    return (
        <div className="fundo flex flex-wrap aling-c">
            <span>Já sei a palavra!</span>
            <input type="text" data-test="guess-input" className="" disabled={prop.iniciaJo} ></input>
            <button data-test="guess-button" className="chutar" type="button">Chutar</button>
        </div>
    )
}