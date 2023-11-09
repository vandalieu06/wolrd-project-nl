import './styles/main.css';
import { Header } from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { HomePage } from './pages/HomePage.jsx';
  import { DonacionesPage } from './pages/DonacionesPage.jsx';
  import { NovelasActivasPage } from './pages/NovelasActicasPage.jsx';
  import { NotFoundPage } from './pages/NotFoundPage.jsx';
    import { InfoNovel } from './pages/InfoNovelPage.jsx';
import { Footer } from './components/Footer.jsx';

export function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/donaciones' element={<DonacionesPage />} />
        <Route path='/novelas-activas' element={<NovelasActivasPage />} />
          <Route path='/novelas-activas/:id' element={<InfoNovel />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
    )
}