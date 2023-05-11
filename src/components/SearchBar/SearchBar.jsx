import './SearchBar.css';
import { useState } from 'react'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
   <div className="contenedor">
      <input className="input" clastype='search' onChange={handleChange} value={id} />
      <button className="btn" onClick={ () => {onSearch(id); setId('')}}>Agregar</button>
   </div>
   );
}
