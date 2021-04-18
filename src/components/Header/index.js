import React from 'react'
import './index.scss'

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header-container container">
					<nav className="header-nav">
						<a href="/" className="header-nav__link">خانه</a>
						<a href="/" className="header-nav__link">رزومه</a>
					</nav>

					<div className="header-social">
						<a href="/" target="_blank" className="header-social__item">
							<i className="bi-linkedin"></i>
						</a>
						<a href="/" target="_blank" className="header-social__item">
							<i className="bi-instagram"></i>
						</a>
						<a href="/" target="_blank" className="header-social__item">
							<i className="bi-telegram"></i>
						</a>
					</div>

				</div>
			</header>
		)
	}
}

export default Header