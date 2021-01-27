import styled from "styled-components";

const NavSections = () => {
    const categories = [
      { name: "Hombre" },
      { name: "Mujer" },
      { name: "Nene" },
      { name: "Nena" },
      { name: "Bebes" },
      { name: "Marcas" },
      { name: "Clubes" },
      { name: "Deportes" },
      { name: "Accesorios" },
      { name: "Oferta" },
      { name: "Verano" },
    ]
    return ( 
      <Nav>
        <NavContainer>
          {categories.map((category, index)=> {
            return <p style={linkStyle} key={index}>{category.name}</p>
          })}
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