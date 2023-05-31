import React from "react";
import "./latest.css";
const Latest = () => {
  return (
    <div className="news-container">
      <div className="news-heading">
        Latest <span style={{ color: "#c48f56" }}>news</span>
      </div>
      <div className="news-team-container">
        <div className="news-box">
          <div className="news-box-image">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/09/people-are-watching-photos-on-photo-camera-768x512.jpg" />
          </div>
          <div className="news-text-box">
            <big>Sonic live</big><br/>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut
              rerum consectetur possimus deserunt, blanditiis molestiae ex rem
              corrupti veritatis, consequatur est repudiandae aliquid eligendi
              dignissimos? Aliquam incidunt a id.
            </small>
          </div>
        </div>


        <div className="news-box">
          <div className="news-box-image">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/09/reporter-is-taking-a-photo-at-photo-studio-768x512.jpg" />
          </div>
          <div className="news-text-box">
            <big>Sonic live</big><br/>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut
              rerum consectetur possimus deserunt, blanditiis molestiae ex rem
              corrupti veritatis, consequatur est repudiandae aliquid eligendi
              dignissimos? Aliquam incidunt a id.
            </small>
          </div>
        </div>


        <div className="news-box">
          <div className="news-box-image">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/09/portrait-TKVL7TW-768x543.jpg" />
          </div>
          <div className="news-text-box">
            <big>Sonic live</big><br/>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut
              rerum consectetur possimus deserunt, blanditiis molestiae ex rem
              corrupti veritatis, consequatur est repudiandae aliquid eligendi
              dignissimos? Aliquam incidunt a id.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
