import NavBar from './headerComponents/navBar'; //importamos todo
import NavHeader from './headerComponents/navHeader';
import NavSearch from './headerComponents/navSearch';

const Header = () => {
    return ( 
        <header id = 'header'>
            <NavHeader />
            <NavSearch /> 
            <NavBar /> 
            
        </header>
     );

}
export default Header;