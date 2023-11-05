import { SiMediafire, SiGoogledrive } from 'react-icons/si';

export function VolumeDownload( {link, tittle, src} ) {
	return (
		<div className="volume-download">
			<img src={src} className="volume-download__img"/>
			<span className="volume-download__tittle">{tittle}</span>
			<button className="volume-download__btn">
				<a href={link} className="volume-download__link">
					<SiMediafire fontSize={'30px'}/>
					Mediafire
				</a>
			</button>
			<button className="volume-download__btn">
				<a href={link} className="volume-download__link">
					<SiGoogledrive fontSize={'20px'} />
					Drive
				</a>
			</button>
		</div>
	)
}