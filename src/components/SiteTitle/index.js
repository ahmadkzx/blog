import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

class HomeTitle extends React.Component {

  render() {
    return (
      <div className="home-title">
        <Link to="/"><h1 className="home-title__site-name">امروز چه چیزی یاد گرفتم...</h1></Link>
      </div>
    )
  }

}

export default HomeTitle