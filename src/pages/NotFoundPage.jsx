import '../styles/NotFoundPage.css';
import { Link } from 'react-router-dom';
import waifu from '../assets/images/notfound-waifu.png';

export function NotFoundPage () {
  return (
    <section className="error-page">
      <div className="error-page__container">
        <article className='error-page__article'>
          <h2 className="error-page__title">Error 404</h2>
          <h3 className='error-page__subtitle'>Page Not Found </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit eum quo maiores, enim molestias ex corporis laudantium aut? Porro eveniet aliquid repellendus quae quia architecto? Asperiores ad doloremque delectus laborum est, iusto suscipit modi atque nulla ipsa cumque soluta eos similique aperiam temporibus architecto odio reprehenderit exercitationem laudantium ab?</p>
          <button><Link to={'/'}>Volver a Inicio</Link></button>
        </article>
        <article className='error-page__image'>
          <img src={waifu} className='error-page__img'/>
        </article>
      </div>
    </section>
  )
}