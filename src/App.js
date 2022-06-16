import Header from "./Components/Header/Header";
import Posts from "./Posts";

import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts
            autor="Matheus Mendes"
            conteudo="Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript."
          />
          <Posts
            autor="Felipe Mendes"
            conteudo="Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
