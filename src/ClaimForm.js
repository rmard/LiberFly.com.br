import React from 'react'
import ButtonChat from './ButtonChat'
import ClaimTextInput from './ClaimTextInput'

class ClaimForm extends React.Component {
	state = {
		formExtended: false,
		name: '',
		email: '',
		tel: '',
		contact: '',
		other: ''
	}

	extendForm = () => {
		/*
		let handle = document.getElementsByClassName("form-extension-handle")[0];
		if(this.state.formExtended)
			handle.className = handle.className.replace(" clicked", "");
		else
			handle.className += " clicked";
		*/
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
		}
	}
	render = () => {
		return (
			<div className='claim-form'>
				<div className='row blue-section'>
					<div className='col s12'>
						<p className='font150'>
							FORMULÁRIO DE RECLAMAÇÃO
						</p>
					</div>
          	<div className='col s10 offset-s1'>		
				<ClaimTextInput 
					onChange={this.handleChange}
					id='name'
					label='Seu Nome'
				/>       
          	</div>
          	<div className='col s10 offset-s1'>		
				<ClaimTextInput 
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
              <a href="/results" 
                // onClick={()=>this.setState({result: true})}
                className='btn btn-large red accent-2 white-text waves-effect waves-light'>
                <i className="material-icons left">send</i> 
                ENVIE AGORA!
              </a>
            </div>
          </div>                                  
        </div>
        <div className='row'>
        	<div className='col s10 offset-s1'>
        		<p className='font150'>
        			<strong>Ainda com dúvidas?</strong><br/>
        			Consulte-nos gratuitamente
        		</p>
            <ButtonChat />       		
        	</div>
       	</div>          	  						
			</div>
		);
	}
}

export default ClaimForm