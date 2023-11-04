import { NovelInfoCard } from "../components/NovelInfoCard";
import { datosNovelas } from "../API/novelasAPI";

export function NovelasActivasPage () {
  return (
    <section className="novelas-activas">
      <div className="novelas-activas__background">
        <div className="novelas-activas__container">
          <article className="novelas-activas__header">
            <h1 className="novelas-activas__title">Proyectos Activos</h1>
          </article>
          
          <div className="novelas-activas__content">
            { datosNovelas.map( (novel) => <NovelInfoCard key={novel.id} link={`/novelas-activas/${novel.id}`} tittle={novel.tittle} src={novel.src}/>) }
          </div>
        </div>
      </div>
    </section>
  )
}