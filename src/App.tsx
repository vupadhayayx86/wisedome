import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="container">
      <div className="content">
      <Navbar />
      <main>
        <Home/>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>
  )
}

export default App