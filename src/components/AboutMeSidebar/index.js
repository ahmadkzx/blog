import React from 'react'
import './index.scss'
import avatar from '../../assets/img/avatar.jpg'

class AboutMeSideBar extends React.Component {

  render() {
    return (
      <div className="about-me">
        <div className="about-me-header">
          <span className="about-me-header__title">درباره من</span>
        </div>

        <div className="about-me-picture">
          <img src={avatar} alt="im" />
        </div>
        
        <div className="about-me-bio">
          <h4 className="about-me-bio__name">احمد کریم زاده</h4>
          <span className="about-me-bio__skill">Front-End Developer</span>
          <p className="about-me-bio__description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجل
          </p>
        </div>

        <div className="about-me-social">
          <span className="about-me-social__title">شبکه های اجتماعی</span>
          <div className="about-me-social-items">
            <a href="/" className="about-me-social-items__link"><i className="bi-linkedin"></i></a>
            <a href="/" className="about-me-social-items__link"><i className="bi-instagram"></i></a>
            <a href="/" className="about-me-social-items__link"><i className="bi-telegram"></i></a>
          </div>
        </div>
      </div>
    )
  }

}

export default AboutMeSideBar