import React from 'react'

function CollapsibleItem(props) {
	return (
		<li>
			<div className="collapsible-header waves-effect"><i className="material-icons">{props.icon}</i>{props.title}</div>
			<div className="collapsible-body"><span>
				{props.children}
			</span></div>
		</li>		
	)
}

export default () => {
	return (
		<div className='faq row'>
		    <div className="title-wrapper">
		      	<i className="material-icons">airplanemode_active</i>
		      	<h1 className="title-line">
		        	Perguntas frequentes
		      	</h1>
		      	<h2 className="title-line">
		        	Clique nos títulos para saber mais:
		      	</h2>		      	
		    </div>	
		    <div className='background'>
	  			<ul className="collapsible justify">	  			
	    			<CollapsibleItem icon='attach_money' title='Quanto custa?'>
	    				<p>
							Cobramos 30% pela taxa do nosso serviço pelo processamento de reclamações. Se não ganharmos a indenização você não precisará pagara nada!
						</p>
						<p>
							Só paga se receber – é simples!
						</p>
					</CollapsibleItem>	
	    			<CollapsibleItem icon='money' title='Tenho direito a receber que valor?'>
	    				<p>
							O valor da indenização depende do problema ocorrido. De R$1.500,00 até R$10.000,00!
						</p>
					</CollapsibleItem>	
	    			<CollapsibleItem icon='help_outline' title='Tenho direito a indenização?'>
	    				<p>
							Se esteve num voo cancelado; atrasado; teve dano ou extravio de bagagem; ou overbooking; você poderá ter direito a indenização.
						</p>
					</CollapsibleItem>	
	    			<CollapsibleItem icon='library_add' title='Existem custos adicionais quando houver necessidade de ação legal?'>
	    				<p>
							A Liberfly não possui autorização para representar o cliente perante o poder judiciário. Atuamos exclusivamente na esfera administrativa buscando a conciliação entre as partes
						</p>
					</CollapsibleItem>	
				</ul>
				<ul className="collapsible justify">
	    			<CollapsibleItem icon='airplanemode_active' title='Como a LiberFly pode me ajudar?'>
	    				<p>
							É rápido e fácil descobrir se você tem direitos. Conte-nos brevemente o ocorrido e nos envie os documentos necessários
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='group' title='Por que a LiberFly?'>
	    				<p>
							O nosso serviço é completamente grátis se não receber a indenização! Se companhia aérea se recusar a fazer um acordo, você não tem que nos pagar nada. Só ganhamos quando você ganhar! Além disso, contamos com um time especializado na solução deste tipo de demandas!
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='public' title='O que faz a LiberFly?'>
	    				<p>
							Tratamos de toda a burocracia e contatos com a companhia aérea, de forma ágil, fácil e transparente.
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='money_off' title='O meu pedido de indenização foi anteriormente recusado pela companhia aérea. Posso voltar a tentar com a LiberFly?'>
	    				<p>
							Sim, nós poderemos tratar do caso independentemente de recusa prévia pelas companhias aéreas.
						</p>
					</CollapsibleItem>
				</ul>
				<ul className="collapsible justify">
					<CollapsibleItem icon='send' title='Como poderei submeter uma reclamação com a LiberFly?'>
	    				<p>
							No nosso próprio site. https://liberfly.com.br/reclamacao/ 
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='access_time' title='Quanto tempo demora para realizar a reclamação?'>
	    				<p>
							Aproximadamente 3 minutos.
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='attach_money' title='Quanto custa?'>
	    				<p>
							Em caso de êxito, 30% do valor recebido.
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='computer' title='Como posso verificar o estado da minha reclamação?'>
	    				<p>
							Em no máximo 48 horas receberá um e-mail informando se sua reclamação foi aceita ou não.
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='local_phone' title='O que deverei fazer se a companhia aérea me contactar diretamente depois de ter submetido a minha reclamação através da Liberfly?'>
	    				<p>
							Nos contactar rapidamente, via telefone, e-mail ou através do nosso facebook. contato@liberfly.com.br https://www.facebook.com/LiberFlyBR/ +55 (27) 3024-8609
						</p>
					</CollapsibleItem>
				</ul>
				<ul className="collapsible justify">
					<CollapsibleItem icon='how_to_reg' title='O que é a Cessão de Direitos?'>
	    				<p>
	    					É a transferência de direitos e obrigações de uma pessoa para outra, através de um acordo celebrado entre ambas as partes.
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='inbox' title='Que documentos são necessários?'>
	    				<p>
							São necessários os seguintes documentos: I - Identidade. II - CPF. III - Comprovante de residência. IV - Itinerário de voo. V- Documentos ou Fotos que provem o alegado. VI - Outros que se fizerem necessários.
						</p>
					</CollapsibleItem>
					<CollapsibleItem icon='cloud' title='O que acontece com os documentos enviados?'>
	    				<p>
							São armazenados no servidor da LiberFly, de acordo com nossa política.
						</p>
					</CollapsibleItem>				
	  			</ul>	
	  		</div>  
		    <div className="navbar-fixed footer">
		      	<nav className="white z-depth-4">
		        	<div className='row'>
		          		<div className='col s12'>
		              		<a href="/" 
		                		className='btn-flat btn-large red accent-2 white-text waves-effect waves-light btn-chat'>
		                		<i className="material-icons left">airplanemode_active</i> 
		                		CALCULE SUA INDENIZAÇÃO
		              		</a>
		          		</div>
					</div>	
		      	</nav>    
		    </div> 	  		  
		</div>		
	);
}