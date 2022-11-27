export default function Chute(prop) {

    return (
        <div className="fundo flex flex-wrap aling-c">
            <span>Já sei a palavra!</span>
            <input type="text" className="" disabled={prop.iniciaJo} ></input>
            <button className="chutar" type="button">Chutar</button>
        </div>
    )
}