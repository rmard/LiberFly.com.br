import React from 'react'
import ButtonChat from './ButtonChat'
import ClaimTextInput from './ClaimTextInput'
import { userHasRight, getDetailsFormatted } from './Logic'

function FormSent() {
	return (
		<div className='form-sent'>
			<div className='row result-title'>
				<div className='col s4'>
					<i className='material-icons title-icon'>check_circle</i>
				</div>
				<div className='col s8 valign-wrapper'>
					<h4>
						Pronto!
					</h4>
				</div>
			</div>		
			<div className='row'>
				<p className='font120'>
					Seu caso será avaliado por um de nossos especialistas. Em breve entraremos em contato!
				</p>
			</div>
    		<div className="parallax-container">
      			<div className="parallax">
					<img
						alt='' 
						src='
						https://images.unsplash.com/photo-1512502600-e4aaa316250d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79e6cd6757f4c938d502cdc94a27cbba&auto=format&fit=crop&w=1500&q=80
					'/>
      			</div>
    		</div>			

		    <div className='row'>
	        	<div className='col s10 offset-s1'>
	        		<p className='font150'>
	        			<strong>Ainda com dúvidas?</strong><br/>
	        			Consulte-nos gratuitamente
	        		</p>
	            	<ButtonChat />   
		            <p>
		            	ou consulte nossa seção<br/><a href='/faq'>perguntas frequentes</a>    		
		            </p>
	        	</div>
	       	</div> 
		</div>
	);
}

class ClaimForm extends React.Component {
	state = {
		formExtended: false,
		name: '',
		email: '',
		tel: '',
		contact: '',
		other: '',
		formSent: false
	}

	extendForm = () => {
		this.setState((prev)=>({formExtended: !prev.formExtended}));
	}

	handleChange = (event) => {
		switch(event.target.id) {
			case 'name':
				this.setState({name: event.target.value});
				break;
			case 'email':
				this.setState({email: event.target.value});
				break;
			case 'tel':
				this.setState({tel: event.target.value});
				break;
			case 'contact':
				this.setState({contact: event.target.value});
				break;
			default:
				break;												
		}
	}
	formHandle = (event) => {
		event.preventDefault();
		let formData = new FormData();
		formData.append('nome', this.state.name);
		formData.append('email', this.state.email);
		formData.append('telefone', this.state.telefone);
		formData.append('relato', `Forma de contato: ${this.state.contact} <br/>${this.state.other}<br/><br/>${getDetailsFormatted()}`);
  		fetch('https://sistema.liberfly.com.br/casos/addreclamacaosite.json', {
    		method: 'POST',
    		body: formData	
  		}).then(res => {
  			this.setState({formSent: true});
  			localStorage.clear();
  		});		
	}
	render = () => {
		let middleForm = (localStorage.issueType && !userHasRight());
		if(this.state.formSent)
			return (<FormSent/>);
		else
			return (
				<div className='claim-form'>
				    {middleForm && (
						<div className='row'>
							<div className='col s10 offset-s1'>
								<p className='font150 bold'>
									Só mais um detalhe...
								</p>
								<p className='justify'>
									Para prosseguir com o cálculo, informe abaixo os seus dados de contato.
								</p>
								{ /*
									<p className='font150 bold'>
										Seu caso será avaliado por um de nossos especialistas!
									</p>
									<p className='justify'>
										Complete o formulário abaixo para que possamos entrar em contato com mais detalhes:
									</p>
									*/
								}
							</div>
						</div>
					)}
					<form 
						onSubmit={this.formHandle}
						className='row blue-section'
					>
						<div className='col s12'>
							<p className='font150'>
								{!middleForm && 
									'FORMULÁRIO DE RECLAMAÇÃO'
								}
							</p>
						</div>
			          	<div className='col s10 offset-s1'>		
							<ClaimTextInput 
								required
								onChange={this.handleChange}
								id='name'
								label='Seu Nome'
							/>       
			          	</div>
			          	<div className='col s10 offset-s1'>		
							<ClaimTextInput 
								required
								onChange={this.handleChange}
								id='email'
								type='email'
								label='Seu email'
							/>          
			          	</div>
			          	<div className='col s10 offset-s1'>		
							<ClaimTextInput 
								onChange={this.handleChange}
								id='tel'
								type='tel'
								label='Seu telefone'
							/>                
			          	</div>    
			          	<div className='col s10 offset-s1 input-field'>
				            <select
				            	id='contact'
				              	defaultValue=''
				              	onChange={(event)=>this.setState({contact: event.target.value})}
				            	>
					              	<option disabled value='' className='disabled'>Forma de contato preferencial</option>
					             	<option>Telefone</option>
					              	<option>Email</option>
				            </select>
			          	</div>  
			          	<div className={`form-extension ${this.state.formExtended ? 'extended' : ''}`}>
				          	<div className='col s10 offset-s1'>		
								<ClaimTextInput 
									onChange={this.handleChange}
									id='other'
									label='Observações'
								/>                
				          	</div>           	
				        </div>
			          	<div className='col s10 offset-s1 center-align'>
			          		<i className={`material-icons form-extension-handle ${this.state.formExtended ? 'clicked' : ''}`}
			          			onClick={this.extendForm}>
			          			chevron_right
			          		</i>
			          	</div>
				        <div className='row'>
				            <div className='col s10 offset-s1'>
				              <br/>
				              <button //href="/results" 
				                // onClick={()=>this.setState({result: true})}
				                className='btn btn-large red accent-2 white-text waves-effect waves-light'>
				                <i className="material-icons left">{middleForm ? 'settings' : 'send'}</i> 
				                {middleForm ? 'Calcule agora!' : 'Envie agora!'}
				              </button>
				            </div>
				        </div>                               
	        		</form>
			        <div className='row'>
			        	<div className='col s10 offset-s1'>
			        		<p className='font150'>
			        			<strong>Ainda com dúvidas?</strong><br/>
			        			Consulte-nos gratuitamente
			        		</p>
			            	<ButtonChat />   
				            <p>
				            	ou consulte nossa seção<br/><a href='/faq'>perguntas frequentes</a>    		
				            </p>
			        	</div>
			       	</div>          	  						
				</div>
			);
	}
}

export default ClaimForm