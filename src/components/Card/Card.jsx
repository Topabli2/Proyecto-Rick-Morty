import style from './Card.module.css'

export default function Card({id, name, status, species, 
   gender, origin, image, onClose}) {
   return (
      <div className={style.contenedor}>
         <img className={style.imagen} src={image} alt='imagen de Rick' />
         <h2 className={style.texto}>{name}</h2>
         <h2 className={style.texto}>{species}</h2>
         <h2 className={style.texto}>{gender}</h2>
         <h2 className={style.texto}>{status}</h2>
         <h2 className={style.texto}>{origin}</h2>
         <button onClick={onClose}>X</button>
      </div>
   );
}
