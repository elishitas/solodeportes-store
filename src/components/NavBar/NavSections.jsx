import styled from "styled-components";

const NavSections = () => {
    return ( 
        <Nav>
          <NavContainer>
              <p style={linkStyle}>Hombre</p>
              <p style={linkStyle}>Mujer</p>
              <p style={linkStyle}>Nene</p>
              <p style={linkStyle}>Nena</p>
              <p style={linkStyle}>Bebes</p>
              <p style={linkStyle}>Marcas</p>
              <p style={linkStyle}>Clubes</p>
              <p style={linkStyle}>Deportes</p>
              <p style={linkStyle}>Accesorios</p>
              <p style={linkStyle}>Oferta</p>
              <p style={linkStyle}>Verano</p>
          </NavContainer>
        </Nav>
     );

}
export default NavSections;

const Nav = styled.nav`
    width: 100%;
    display: flex;
`
const NavContainer = styled.nav`
    height: 50px;
    width: 100%;
    background-color: #2596be;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
`;

const linkStyle = {
  margin: 50, 
  color: 'white',
};