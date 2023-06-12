import './homepage.css';
import iconImg from '../../assets/icons/hirespace-icon.png';
import hamburgerMenu from '../../assets/icons/hamburger-white.png';

export default function homepage(props) {
    return (
        <div class="wrapper-homepage">
            <div class="header-homepage">
                <img src={iconImg} alt="icon-img"/>
                <img src={hamburgerMenu} class="hamburger-menu" alt="icon-img"/>
                <button class="signup-login" onClick={() => props.setIsLoggedIn(true)}>Signup</button>
            </div>
            <div class="body-homepage">
            </div>
        </div>
    );
}