import './App.css';
import ImagemJogo from "./components/imagemJogo";
import BotaoFrase from "./components/botao-e-frase";
import LetrasInput from "./components/letras-e-input"

function App() {
  return (
    <div>
      <div className="imagem-frase flex">
        <ImagemJogo/>
        <BotaoFrase/>
      </div>
      <LetrasInput/>
    </div>
  );
}

export default App;
