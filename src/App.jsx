import {Header} from './components/Header.jsx';
//import { Board } from './components/TicTacToe.jsx';
import './styles/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  import { HomePage } from './pages/HomePage.jsx';
  import { DonacionesPage } from './pages/DonacionesPage.jsx';
  import { NovelasActivasPage } from './pages/NovelasActicasPage.jsx';
  import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/react-header/' element={<HomePage />} />
        <Route path='/react-header/donaciones' element={<DonacionesPage />} />
        <Route path='/react-header/novelas-activas' element={<NovelasActivasPage />} />
        <Route path='/react-header/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
    )
}