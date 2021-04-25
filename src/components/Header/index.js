import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header-container container">
					<nav className="header-nav">
						<Link to="/" className="header-nav__link">خانه</Link>
						<a href="/" className="header-nav__link">رزومه</a>
					</nav>

					<div className="header-social">
						<a href="/" target="_blank" className="header-social__item">
							<i className="bi-telegram"></i>
						</a>
						<a href="/" target="_blank" className="header-social__item">
							<i className="bi-instagram"></i>
						</a>
						<a href="/" target="_blank" className="header-social__item">
							<i className="bi-linkedin"></i>
						</a>
					</div>

				</div>
			</header>
		)
	}
}

export default Header