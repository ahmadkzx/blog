import React from 'react'
import './index.scss'

class PostItem extends React.Component {

  render() {
    return (
      <div className="post-item">
        <a href="/"><h6 className="post-item__title">اولین پست این وبلاگ!</h6></a>
        <p className="post-item__summary">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافی
         است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
        <div className="post-item-footer">
          <span className="post-item-footer__date">7 بهمن 1400</span>
          •
          <span className="post-item-footer__time-to-read">10 دقیقه</span>
        </div>
      </div>
    )
  }

}

export default PostItem