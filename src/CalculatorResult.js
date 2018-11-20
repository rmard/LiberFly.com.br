import React from 'react'
import ButtonChat from './ButtonChat'
import PlaneAnimation from './components/PlaneAnimation'
import { userHasRight, compensationValue } from './Logic'

class CalculatorResult extends React.Component {
	state = {
		ready: false
	}
	componentDidMount = () => {
		if(localStorage.getItem('thirdPartySeller')===null)
			window.location.href = '/third-party-seller';
		setTimeout(()=>{
			if(userHasRight())
				this.setState({ready: true})
			else
				window.location.href = '/claim';
		}, 6500)
	}

	render = () => {
		if(!this.state.ready)
			return (
				<div className='calculator-result'>
					<div className='row result-title'>
						<div className='col s12'>
							<h4>
								Calculando sua <br/>indenização...
							</h4>
						</div>
					</div>	
					<PlaneAnimation />
					<div 
						className='row blue-section footer'
					>
						<div className='col s12'>
							<p className='font150 bold'>VOCÊ SABIA?</p>
			        		<p className='font120'>
			        			Iniciar sua reclamação não custa nada!
			        			<br/>
			        			<strong>A LiberFly só ganha se você ganhar.</strong>
			        			<br/>
			        			<br/>
			        		</p>   	
						</div>
					</div>										
				</div>			
			);
		else
			return (
				<div className='calculator-result'>
					<div className='row result-title'>
						<div className='col s4'>
							<i className='material-icons title-icon'>check_circle</i>
						</div>
						<div className='col s8'>
							<h4>
								Você tem direito a indenização!
							</h4>
						</div>
					</div>
					<div className='row'>
						<div className='col s12 center-align bold font120'>
							Taxas de sucesso em casos como o seu:
						</div>
						<div className='col s4 result-icons'>
							<i className='material-icons'>query_builder</i>
							<p>90 DIAS</p>
							<p>é o tempo médio que as ações duram</p>
						</div>
						<div className='col s4 result-icons'>
							<i className='material-icons'>money</i>
							<p>{compensationValue()}</p>
							<p>é a indenização média por pessoa</p>
						</div>
						<div className='col s4 result-icons'>
							<i className='material-icons'>check_box</i>
							<p>98%</p>
							<p>é a chance de receber indenização</p>
						</div>										
					</div>
					<div className='row'>
						<div className='col s12 center-align bold font120'>
							Conheça seus direitos:
							<video 
								poster="" 
								autoPlay="0" 
								controls="1" 
								loop="1" 
								muted="1" 
								style={{maxWidth:"100%"}}>
								<source type="video/mp4" src="https://liberfly.com.br/wp-content/uploads/2016/10/LIBERFLY-01FEVEREIRO2017-2.mp4"/>
							</video>						
						</div>
					</div>	
			        <div className='row'>	              	
			          	<div className='col s12'
			          		style={{marginBottom: '75px'}}>
			              	<ButtonChat />      
			          	</div>	              	
			        </div> 	
				    <div className="navbar-fixed footer">
				      <nav className="white z-depth-2">
				        <div className='row'>
				          	<div className='col s12'>
				              	<a href="/claim" 
				                // onClick={()=>this.setState({result: true})}
				                	className='btn-flat btn-large red accent-2 white-text waves-effect waves-light btn-chat'>
				                	<i className="material-icons left">airplanemode_active</i> 
				                	ABRA UMA RECLAMAÇÃO
				              	</a>
				          	</div>
						</div>	
				      </nav>    
				    </div>        						
				</div>
			);
	}
}

export default CalculatorResult