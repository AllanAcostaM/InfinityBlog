import React from "react";
import Image from "../../images/about achievements.svg";
import "../achievement/Achievement.css"


const Achievement = () => {
  return (
    <section className="achievements">
      <div className="container achievements-container">
        {/* Left Section: Illustration */}
        <div className="achievement-left">
          <img src={Image} alt="Achievements Illustration" />
        </div>

        {/* Right Section: Achievements */}
        <div className="achievement-right">
          <div>
            <h2>Our Achievements</h2>
            <p className="achievement-right-description">
              Over the years, we’ve achieved remarkable milestones that reflect
              our dedication, impact, and excellence. These accomplishments
              inspire us to continue pushing boundaries and delivering value to
              our community.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="achievement-cards">
            {/* Card 1 */}
            <div className="achievement-card">
              <span className="achievement-card-icon">
                <i className="uil uil-book-open"></i>
              </span>
              <h3>450+</h3>
              <small>Articles Published</small>
            </div>

            {/* Card 2 */}
            <div className="achievement-card">
              <span className="achievement-card-icon">
                <i className="uil uil-users-alt"></i>
              </span>
              <h3>79,000+</h3>
              <small>Engaged Readers Worldwide</small>
            </div>

            {/* Card 3 */}
            <div className="achievement-card">
              <span className="achievement-card-icon">
                <i className="uil uil-trophy"></i>
              </span>
              <h3>26+</h3>
              <small>Awards Received</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
