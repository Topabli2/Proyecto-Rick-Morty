import SearchBar from "../SearchBar/SearchBar";
import './NavBar.css'

const NavBar = ({onSearch}) => {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch}/>
    </div>
  )
};

export default NavBar;