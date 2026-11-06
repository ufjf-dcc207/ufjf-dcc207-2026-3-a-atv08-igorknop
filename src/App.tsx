import './App.css'
import ListagemDePacotes from './ListagemDePacotes'
import { PacoteProvider } from './PacoteContext'


function App() {
  return (
    <PacoteProvider>
      <section>
        <h2>Pacotes</h2>
        <ListagemDePacotes />
      </section>
    </PacoteProvider>
  )
}

export default App
