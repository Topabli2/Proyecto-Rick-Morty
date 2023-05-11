import './Card.css'

export default function Card({id, name, status, species, 
   gender, origin, image, onClose}) {
   return (
      <div className='cards'>
         <div className='face front'>
            <img src={image} alt='imagen de Rick' />
         </div>

         <div className='face back'>
            <p>{name}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{status}</p>
            <p>{origin}</p>
            <button onClick={() => onClose(id)}>Cerrar</button>
         </div>
      </div>
   );
};