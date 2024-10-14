import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Services from './componentes/Services';
import Modelos from './componentes/Modelos';
import Footer from './componentes/Footer';
import Contact from './componentes/Contact';

function App() {
  return (
    <Router>
      <div className="App font-mono ">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicos' element={<Services />} />
          <Route path='/modelos' element={<Modelos />} />
          <Route path='/contatos' element={<Contact />} />
          <Route path='/sobre' element={<Footer />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
