import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

class PostItem extends React.Component {

  render() {
    return (
      <div className="post-item">
        <Link to={`/post/${this.props.id}`}><h6 className="post-item__title">{ this.props.title }</h6></Link>
        <p className="post-item__summary">{ this.props.summary }</p>
        <div className="post-item-footer">
          <span className="post-item-footer__date">{ this.props.date }</span>
          •
          <span className="post-item-footer__time-to-read">{ this.props.timeToRead } دقیقه</span>
        </div>
      </div>
    )
  }

}

export default PostItem