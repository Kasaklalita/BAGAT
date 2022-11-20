import React from 'react';
import cl from "./MainContainer.module.css"

const MainContainer = (props) => {
	return (
		<div className={cl.mainContainer} style={{width: "1139px", margin: "auto"}}>
			{props.children}
		</div>
	);
};

export default MainContainer;