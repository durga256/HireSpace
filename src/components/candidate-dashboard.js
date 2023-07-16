import "./dashboard.css";
import iconImg from "../assets/icons/hirespace-icon.png";
import hamburgerMenu from "../assets/icons/hamburger-white.png";
import profilepic from "../assets/images/profile-pic-recruiter.jpg";
import PrevAchievements from "../components/Candidate/previous-achievements";

export default function candidate(props) {
  let endResult = (
    <div class="zero">
      <img src={iconImg} alt="icon-img" />
      <img
        src={hamburgerMenu}
        class="hamburger-menu"
        alt="icon-img"
        onClick={() => {
          props.setIsLoggedIn(false);
          props.setAccountType("");
        }}
      />
    </div>
  );
  // if (props.accountType === 'candidate') {

  // }
  return (
    <div class="wrapper">
      {endResult}
      <div class="one">
        <img src={profilepic} alt="icon-img" class="profile-pic" />
        <div class="candidate-details">
          <h3>Jane Doe</h3>
          <p>University of Ottawa</p>
        </div>
      </div>
      <div class="two">
        <PrevAchievements />
      </div>
      <div class="three">
        <div class="two-header">Test Scores</div>
        <div class="two-body">
          <div class="blocks">
            <div class="block-header">IKM Python test - 98%</div>
            <div class="block-body">
              Sent by <a href="https://google.com">Jane</a> from ABC Inc., for
              their QA systems role during 2022
            </div>
          </div>
          <div class="blocks">
            <div class="block-header">AMCAT Java test - 88%</div>
            <div class="block-body">
              Sent by <a href="https://google.com">Jane</a> from ABC Inc., for
              their QA systems role during 2022
            </div>
          </div>
          <div class="blocks">
            <div class="block-header">Hackerrank C++ test - 90%</div>
            <div class="block-body">
              Sent by <a href="https://google.com">Jane</a> from ABC Inc., for
              their QA systems role during 2022
            </div>
          </div>
        </div>
      </div>
      <div class="four">
        <div class="two-header">Interviews</div>
        <div class="two-body">
          <div class="blocks">
            <div class="block-header">Interview by ABC Inc.., QA</div>
            <div class="block-body">
              {" "}
              Interviewer: <a href="https://google.com">Jane</a>
            </div>
            <div class="block-body"> "A very capable Java developer..."</div>
          </div>
          <div class="blocks">
            <div class="block-header">Interview by XYZ Inc.., QA</div>
            <div class="block-body">
              {" "}
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
