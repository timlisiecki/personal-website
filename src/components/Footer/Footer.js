import React from 'react';

import './Footer.css';

const Footer = (props) => (
	<div className="footer__wrapper">
		<span className="footer__icon">
			<a href="mailto:info@timlisiecki.com">
				<i className="fas fa-envelope-open"></i>
			</a>
		</span>
		<span className="footer__icon">
			<a href="https://github.com/timlisiecki" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>
		</span>
		<span className="footer__icon">
			<a
				href="https://www.linkedin.com/in/timothylisiecki/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-linkedin-in"></i>
			</a>
		</span>
		<p>
			Copyright &copy; {new Date().getFullYear()}. Personal and Resume Website for Tim
			Lisiecki.{' '}
		</p>
	</div>
);

export default Footer;
