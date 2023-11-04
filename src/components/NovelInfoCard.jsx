import { Link } from "react-router-dom";

export function NovelInfoCard ( {tittle, link, src} ) {
  return (
    <article className="novelCard">
      <img src={src} alt="" className="novelCard__img" />
      <button className="novelCard__button">
        <Link to={link} className="novelCard__link">
          {tittle}
        </Link>
      </button>
    </article>
  )
}