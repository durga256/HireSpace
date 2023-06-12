import "./account-type.css";

export default function account(props) {
  return (
    <div>
      <div class="empty-class"></div>
      <div class="button-center-div">
        <button class="button-center-button" onClick={() => props.setAccountType("recruiter")}>
          Recruiter
        </button>
      </div>
      <div class="button-center-div">
        <button class="button-center-button" onClick={() => props.setAccountType("candidate")}>
          Job Seeker
        </button>
      </div>
    </div>
  );
}
