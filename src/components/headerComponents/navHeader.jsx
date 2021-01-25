import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

const NavHeader = () => { //funcion
    return ( //multilinea
        <nav>
            <ul>
                <Button
                    startIcon={<SaveIcon />}
                    size= "large"
                    variant = "contained"
                    color= "secondary">
                    Probando Boton de Material UI  
                </Button>
                <li><a href>Contactenos</a></li>
                <li><a href>0800 222 solo(7656)</a></li>
                <li><a href>ENVIO GRATIS para compras mayores a $5999</a></li>
                <li><a href>Como comprar?</a></li>
                <li><a href>Sucursales</a></li>
            </ul>
        </nav>
     );

}
export default NavHeader;