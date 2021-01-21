import NavBar from './headerComponents/navBar';
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