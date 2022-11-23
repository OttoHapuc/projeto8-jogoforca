import './App.css';

function App() {
  return (
    <div>
      <section className="imagemJogo">
      </section>
      <section className="botaoEFrase">
        <button type="button">Escolher Palavra</button>
        <div className="fraseASeAdivinhar">
          _ _ _ _ _ _ _ _
        </div>
      </section>
      <section className="LetraEinput">
        <span className="letra">A</span>
        <div>
          <span>Já sei a palavra!</span>
          <input type="text" className=""></input>
          <button type="button">Chutar</button>
        </div>
      </section>
    </div>
  );
}

export default App;
