import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="container">
      <nav>
      <Navbar />
      </nav>
      <main>
       <Home />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
   
  )
}

export default App