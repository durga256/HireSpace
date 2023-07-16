import './homepage.css';
import iconImg from '../../assets/icons/hirespace-icon.png';
import hamburgerMenu from '../../assets/icons/hamburger-white.png';
import meeting from '../../assets/images/meeting.jpg';

export default function homepage(props) {
    return (
        <div class="wrapper-homepage">
            <div class="header-homepage">
                <img src={iconImg} alt="icon-img"/>
                <img src={hamburgerMenu} class="hamburger-menu" alt="icon-img"/>
                <button class="signup-login" onClick={() => props.setIsLoggedIn(true)}>Signin</button>
            </div>
            <div class="body-homepage">
                <h1>Introducing HIRESPACE</h1>
                <h3>Hirespace bridges the gap between recruiters and candidates in the hiring process. <br /><br />We empower recruiters with valuable insights on candidates, enabling informed decisions. Candidates gain a platform to showcase skills and qualifications effectively. Community engagement, career services, and security clearance checks further benefit our users. </h3>
                <p>Partnering with universities, test conducting platforms, and co-working spaces, we offer a comprehensive solution. With a strong focus on data privacy, <br /><br />HIRESPACE ensures a secure platform for recruiters and candidates. Experience a transformative hiring process with HIRESPACE.</p>
                <img src={meeting} class="hamburger-menu" alt="icon-img"/>
            </div>
        </div>
    );
}