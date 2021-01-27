import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";

const NavSearch = () => {
    return ( 
        <Nav>
          <NavContainer>
              <input className="search-input" type="search" placeholder="Que estas buscando?" />
              <div className="search-icon-box">
                <SearchIcon style={{ color: "rgb(167, 167, 167)" }} fontSize="small" />
              </div>
                <p style={linkStyle}>INGRESA O REGISTRATE</p>
                <p style={linkStyle}>Mi compra</p>
          </NavContainer>
        </Nav>
     );

}
export default NavSearch;

const Nav = styled.nav`
    width: 100%;
    display: flex;
`
const NavContainer = styled.nav`
    height: 80px;
    width: 100%;
    background-color: white;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
`;

const linkStyle = {
  margin: 50, 
  color: 'grey',
};
