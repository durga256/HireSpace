import { Fragment } from "react";
import './previous-achievements.css';
import '../UI/blocks.css';


export default function prevAchievements() {
  return (
    <Fragment>
      <div class="two-header">Previous work achievements</div>
      <div class="two-body">
        <div class="blocks">
          <div class="block-header">Best Team Player</div>
          <div class="block-body">
            Awarded by <a href="https://google.com">John</a> from ABC Inc., in
            the year 2022 for deploying the order management systems.
          </div>
        </div>
        <div class="blocks">
          <div class="block-header">Pitcher Award</div>
          <div class="block-body">
            Awarded by <a href="https://google.com">John</a> from ABC Inc., in
            the year 2022 for deploying the order management systems.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
