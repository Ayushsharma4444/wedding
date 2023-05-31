import React from "react";
import './perfectteam.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


const Perfectteam = () => {
  return (
    <div className="team-container">
      <div className="team-heading">
        Perfect <span style={{color:"#c48f56"}}>Team</span>
      </div>
      <div className="team-images">
        <div className="team-img-box">
          <div className="team-img">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/09/portrait-of-handsome-man-with-beard-PKZX75W.jpg" />
          </div>
          <div className="team-text">
            <big>MICHAEL</big>
            <span>project manager</span>
            <div className="team-social-icons">
            <FaFacebook color="#c48f56"  size={18}/>
                <AiFillTwitterCircle color="#c48f56"  size={22}/>
                <AiFillYoutube color="#c48f56" size={22}/>
            </div>
          </div>
        </div>

        <div className="team-img-box">
          <div className="team-img">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/paulo-silva-B2mY4p8GsYo-unsplash-1365x2048.jpg" />
          </div>
          <div className="team-text">
            <big>DANIEL</big>
            <span>Designer</span>
            <div className="team-social-icons">
            <FaFacebook color="#c48f56"  size={18}/>
                <AiFillTwitterCircle color="#c48f56"  size={22}/>
                <AiFillYoutube color="#c48f56" size={22}/>
            </div>
          </div>
        </div>

        <div className="team-img-box">
          <div className="team-img">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/aedrian-jK1X0eyjIlU-unsplash-1463x2048.jpg" />
          </div>
          <div className="team-text">
            <big>FLORRY</big>
            <span>senior manager</span>
            <div className="team-social-icons">
            <FaFacebook color="#c48f56"  size={18}/>
                <AiFillTwitterCircle color="#c48f56"  size={22}/>
                <AiFillYoutube color="#c48f56" size={22}/>
            </div>
          </div>
        </div>

        <div className="team-img-box">
          <div className="team-img">
            <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/portrait-2021-08-29-02-37-46-utc.jpg" />
          </div>
          <div className="team-text">
            <big>CLEVE</big>
            <span>client manager</span>
            <div className="team-social-icons">
                <FaFacebook color="#c48f56"  size={18}/>
                <AiFillTwitterCircle color="#c48f56"  size={22}/>
                <AiFillYoutube color="#c48f56" size={22}/>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Perfectteam;
