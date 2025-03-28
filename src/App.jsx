import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './composant/Layout';
import Accueil from './pages/Accueil';
import Annonce from './pages/Annonce';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <Router> 
     
      <Routes>
        <Route path="/" element={<Layout><Accueil /></Layout>} />
        <Route path="/annonce/:id" element={<Layout><Annonce /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="*" element={<Layout><Error /></Layout>} />
      </Routes>

    </Router>
  );
}

export default App;
