import React from 'react';
import ButtonChat from '../ButtonChat';

export default () => {
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
    		<div className="my-parallax" style={{backgroundImage: 'url(./site-florian-schneider-470843-unsplash.jpg?query=123)'}}>
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