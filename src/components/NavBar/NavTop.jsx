import styled from "styled-components";


const NavTop = () => { //funcion
    return ( //multilinea
        <Nav>
            <NavContainer>
                <li style={linkStyle}>Contactenos</li>
                <p style={linkStyle}>0800 222 solo(7656)</p>
                <p style={linkStyleBlue}>ENVIO GRATIS para compras mayores a $5999</p>
                <p style={linkStyle}>Como comprar?</p>
                <p style={linkStyle}>Sucursales</p>
            </NavContainer>
        </Nav>
     );

}
export default NavTop;

const Nav = styled.nav`
    width: 100%;
    display: flex;    
`
const NavContainer = styled.nav`
    height: 25px;
    width: 100%;
    background-color: #c2c2c2;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between; 

`;

const linkStyle = {
    margin: 10, 
    color: 'grey',
};

const linkStyleBlue = {
    color: 'blue',
};