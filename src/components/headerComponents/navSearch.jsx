
import SearchIcon from '@material-ui/icons/Search';
const NavSearch = () => {
    return ( 
        <nav>
          <div className="App-search-bar">
            <input className="search-input" type="search" placeholder="Que estas buscando?" />
            <div className="search-icon-box">
              <SearchIcon style={{ color: "rgb(167, 167, 167)" }} fontSize="small" />
            </div>
            <ul>
                <li><a href>INGRESA O REGISTRATE</a></li>
                <li><a href>MI COMPRA</a></li>
            </ul>
          </div>

        </nav>
     );

}
export default NavSearch;