import './App.css';
import ImagemJogo from "./components/Jogo";
import Letras from "./components/letras";
import Chute from "./components/Chute";
import { useState } from "react";

import forca0 from "./components/assets/forca0.png"
import forca1 from "./components/assets/forca1.png"
import forca2 from "./components/assets/forca2.png"
import forca3 from "./components/assets/forca3.png"
import forca4 from "./components/assets/forca4.png"
import forca5 from "./components/assets/forca5.png"
import forca6 from "./components/assets/forca6.png"

function App() {
  const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [iniciaJo, setJogo] = useState(true);
  const [contador, setContador] = useState(0);  
  const [palavra, setPalavra] = useState("");
  const [palavraEs, setPalavraEs] = useState([]);

  const [avancoPalavra, setAvancoPalavra] = useState([])

  return (
    <div>
      <div className="imagem-frase flex">
        <ImagemJogo
          setJogo={setJogo}
          iniciaJo={iniciaJo}
          alfabeto={alfabeto}
          imagens={imagens}
          contador={contador}
          setPalavra={setPalavra}
          palavra={palavra}
          setPalavraEs={setPalavraEs}
          palavraEs={palavraEs}
          avancoPalavra={avancoPalavra}
          setAvancoPalavra={setAvancoPalavra}
        />
      </div>
      <section className="letraEinput flex flex-column aling-c">
        <Letras 
          iniciaJo={iniciaJo} 
          alfabeto={alfabeto} 
          palavraEs={palavraEs}
          avancoPalavra={avancoPalavra}
          setAvancoPalavra={setAvancoPalavra}
          contador={contador}
          aplicaContagem={setContador}
          />
        <Chute iniciaJo={iniciaJo} />
      </section>
    </div>
  );
}

export default App;
