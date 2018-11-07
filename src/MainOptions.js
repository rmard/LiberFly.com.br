import React from 'react'
import CalculatorTitle from './CalculatorTitle'

class MainOptions extends React.Component {
	render = () => (
		<div>
			<CalculatorTitle />
	    <div className="main-options-wrapper">
	      <a 
	        href='/delayed-flight' 
	        className="main-option waves-effect waves-light"
	      >
	        ATRASO DE VÔO
	      </a>
	      <a
	      	href='/cancelled-flight' 
	      	className="main-option waves-effect waves-light"
	      >
	        CANCELAMENTO DE VÔO
	      </a>
	      <a
	      	href='/boarding-denied' 
	      	className="main-option waves-effect waves-light">
	        NÃO PUDE EMBARCAR
	      </a>  
	      <a
	      	href='/luggage-issues' 
	      	className="main-option waves-effect waves-light">
	        PROBLEMAS COM A BAGAGEM
	      </a>  
	      <a
	      	href='/another-issues' 
	      	className="main-option waves-effect waves-light">
	        OUTROS PROBLEMAS
	      </a>                  
	    </div> 
	  </div>
	)
}

export default MainOptions