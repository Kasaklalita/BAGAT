import React from 'react';
import cl from "./Navbar.module.css"
import MainContainer from "../MainContainer/MainContainer";
import logoUrl from '../../../assets/logo.svg'

const Navbar = () => {
	return (
		<div className={cl.navbar}>
			<MainContainer>
				<img src={logoUrl} alt="" className={cl.navbar__logo}/>
			</MainContainer>
		</div>
	);
};

export default Navbar;