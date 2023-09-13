import { Header } from './components/Header.jsx';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { HomePage } from './pages/HomePage.jsx';
  import { DonacionesPage } from './pages/DonacionesPage.jsx';
  import { NovelasActivasPage } from './pages/NovelasActicasPage.jsx';
  import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/donaciones' element={<DonacionesPage />} />
        <Route path='/novelas-activas' element={<NovelasActivasPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
    )
}