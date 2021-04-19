import React from 'react'
import './index.scss'

class Footer extends React.Component {
  
  render() {
    return (
      <footer className="footer">
        <p className="footer__text">
          ساخته شده با
          <a href="https://fa.wikipedia.org/wiki/%D8%B9%D8%B4%D9%82" className="footer__text__love" target="_blank">عشق</a>
        </p>
      </footer>
    )
  }

}

export default Footer