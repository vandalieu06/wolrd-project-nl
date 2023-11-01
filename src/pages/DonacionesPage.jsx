import imagenLogoYape from '../assets/images/donaciones-logo-yape.png';
import imagenLogoYape2 from '../assets/images/logo.png';

function DonacionesText ( {text, telfnumber} ){
  return (
    <p className="donaciones__text">
      <span className="donaciones__text--bold">
        {text}
      </span>
      <span className='donaciones__text--left'>
        {telfnumber}
      </span>
    </p>
  )
}

export function DonacionesPage () {
  return (
    <section className="donaciones">
      <div className="donaciones__container">
        <article className="donaciones__content">
          <h1 className="donaciones__title">Donaciones</h1>
          <h3 className="donaciones__subtitle">Puede realizar sus donaciones en las siguientes cuentas: </h3>
          <div className="donaciones__paragraph">
            <DonacionesText 
              text="Número de cuenta:"
              telfnumber="191-74592552-0-10"
            />
            <DonacionesText 
              text="Cuenta Interbancaria:"
              telfnumber="002-19117459255201057"
            />
            <DonacionesText 
              text="Yape:"
              telfnumber="+51 950289542"
            />
            <img src={imagenLogoYape2} alt="Logo Yape Bancario" className='donaciones__image--logo'/>
          </div>
        </article>
      </div>
    </section>
  )
}