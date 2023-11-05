import { useParams } from "react-router-dom";
import { datosNovelas } from "../API/novelasAPI";
import { VolumeDownload } from "../components/VolumeDownloadCard";
import { NotFoundPage } from "../pages/NotFoundPage";

export function InfoNovel () {
  const { id } = useParams();
  const novelId = parseInt(id, 10);
  const novel = datosNovelas.find( (n) => n.id === novelId );

  if (!novel){
    return <div>Error en el enlace, le agradeceria que nos infromara sobre el enlaçe que teine el error al siguiente correo: claurejhonny188@gmail.com</div>
  } else if (!novel.volumes){
    return <NotFoundPage />
  }

  return (
    <section className="novel-info">
      <div className="novel-info__container">
        <article className="novel-info__textcontent">
          <h2 className="novel-info__tittle">{novel.tittle}</h2>
          <p className="novel-info__description">{novel.description}</p>
        </article>  
        <article className="novel-info__volumes">
          {novel.volumes.map( (volume) => <VolumeDownload link={volume.src} tittle={volume.name} src={novel.src} /> )}           
        </article>      
      </div>
    </section>
  )
}