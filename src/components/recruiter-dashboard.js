import "./dashboard.css";
import iconImg from '../assets/icons/hirespace-icon.png';
import hamburgerMenu from '../assets/icons/hamburger-white.png';
import profilepic from '../assets/images/profile-pic-recruiter.jpg';

export default function recruiter(props){
    return (
        <div class="wrapper">
        <div class="zero">
          <img src={iconImg} alt="icon-img" />
          <img src={hamburgerMenu} class="hamburger-menu" alt="icon-img" onClick={() => {props.setIsLoggedIn(false); props.setAccountType('');}}/>
        </div>
        <div class="one">
          <img src={profilepic} alt="icon-img" class="profile-pic" />
          <div class="candidate-details">
            <h3>Jane Doe</h3>
            <p>University of Ottawa</p>
          </div>
        </div>
        <div class="two">
          <div class="two-header">Positions to be filled</div>
          <div class="two-body">
            <div class="blocks">
              <div class="block-header">ABC Inc., Tech Dept</div>
              <div class="block-body">Software developer, Onboarding team</div>
            </div>
            <div class="blocks">
              <div class="block-header">ABC Inc., Sales Dept</div>
              <div class="block-body">Sales manager Ottawa</div>
            </div>
            <div class="blocks">
              <div class="block-header">XYZ Inc., Tech Dept</div>
              <div class="block-body">Software developer, Onboarding team</div>
            </div>
          </div>
        </div>
        <div class="three">
          <div class="two-header">Upcoming Interviews</div>
          <div class="two-body">
            <div class="blocks">
              <div class="block-header">Software developer, Onboarding team</div>
              <div class="block-body">
                Candidate: <a href="https://google.com">Tim Kane</a>
              </div>
            </div>
            <div class="blocks">
              <div class="block-header">Software developer, Onboarding team</div>
              <div class="block-body">
                Candidate: <a href="https://google.com">Tim Kane</a>
              </div>
            </div>
            <div class="blocks">
              <div class="block-header">Software developer, Onboarding team</div>
              <div class="block-body">
                Candidate: <a href="https://google.com">Tim Kane</a>
              </div>
            </div>
          </div>
        </div>
        <div class="four">
          <div class="two-header">Previous Interviews</div>
          <div class="two-body">
            <div class="blocks">
              <div class="block-header"><a href="https://google.com">Tim Kane</a></div>
              <div class="block-body">
                Interviewer: <a href="https://google.com">Jane</a>
              </div>
              <div class="block-body"> "A very capable Java developer..."</div>
            </div>
            <div class="blocks">
              <div class="block-header"><a href="https://google.com">Tina Kip</a></div>
              <div class="block-body">
                Interviewer: <a href="https://google.com">John</a>
              </div>
              <div class="block-body"> "Excellent problem solving skills..."</div>
            </div>
          </div>
        </div>
        <div class="five">
          <div class="two-header">Current Applications</div>
          <div class="two-body">
            <div class="blocks">
              <div class="block-header"> QA Lead - PQY Inc.,</div>
              <div class="block-body">Pending: Submit verification docs</div>
            </div>
            <div class="blocks">
              <div class="block-header"> QA Lead - XYZ Inc.,</div>
              <div class="block-body">Pending: Behavioral Interview</div>
            </div>
            <div class="blocks">
              <div class="block-header"> QA Lead - MN Inc.,</div>
              <div class="block-body">Pending: Technical Interview</div>
            </div>
          </div>
        </div>
      </div>
    );
}