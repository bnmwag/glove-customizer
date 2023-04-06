import CNVS from './canvas/CNVS'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

function App() {
  return (
    <main className="app transition-all">

      <nav className='absolute left-16 xl:left-60 md:left-30 top-20'>
        <img src="./pmdr.svg" alt="pmdr logo" />
      </nav>

      <Home />
      <Customizer />
      <CNVS />
    </main>
  )
}

export default App
