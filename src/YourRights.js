import React from 'react'

export default () => {
	return (
		<div className='your-rights row'>
		    <div className="title-wrapper">
		      	<i className="material-icons">airplanemode_active</i>
		      	<h1 className="title-line">
		        	Conheça seus direitos!
		      	</h1>
		      	<h2 className="title-line">
		        	Clique nos títulos para saber mais:
		      	</h2>		      	
		    </div>	
		    <div className='background'>
	  			<ul className="collapsible justify">
	    			<li>
	      				<div className="collapsible-header waves-effect"><i className="material-icons">group_add</i>Overbooking</div>
	      				<div className="collapsible-body"><span>
	      					<p>
							O overbooking é uma expressão em inglês que significa excesso de reservas, que acontece quando a venda ou reserva de bilhetes ou passagens fica acima do número de lugares realmente disponíveis na aeronave.
							É uma prática recorrente das companhias aéreas, e pode ocorrer de diversas formas.
							</p>
							<p className='bold'>Abaixo citamos alguns exemplos:</p>
							<p>
								&bull; &ensp;<strong>Troca não programada de aeronaves:</strong> Considerada como a causa mais comum, consiste em problemas técnicos com a aeronave disponibilizada para o trecho. Desta forma, a companhia aérea disponibiliza outra aeronave de menor porte para realizar o trecho. Caso todos os passageiros não sejam acomodados na nova aeronave por falta de espaço, estará configurado o overbooking.
							</p>
							<p>
								&bull; &ensp;<strong>Junção de voos:</strong> Ocorre quando a companhia aérea por questões climáticas ou operacionais junta dois ou mais trechos de voos em apenas um. Caso haja mais passageiros do que a capacidade da nova aeronave disponibilizada, ocorrerá o overbooking.
							</p>
							<p>
								&bull; &ensp;<strong>Perda da Conexão devido a atrasos da companhia aérea:</strong> Caso o passageiro perca a conexão devido a atrasos ocorridos por questões climáticas ou operacionais, a empresa aérea deverá acomodá-lo em outro voo para seu destino final. Caso o voo esteja lotado, a empresa aérea poderá realizar o overbooking para atender os passageiros em trânsito, preterindo o embarque dos passageiros que embarcariam no local. Estes últimos estão aptos a requererem compensação financeira pelos transtornos sofridos.
							</p>
							<p>
								&bull; &ensp;<strong>Vendas de passagens acima da capacidade da aeronave:</strong> As companhias aéreas possuem uma média calculada relacionada ao No Show (quando o passageiro não se apresenta par ao embarque) em cada rota, voo e data. Desta forma, vendem esse percentual de assentos adicionalmente à capacidade do avião. O problema ocorre quando erra-se o cálculo e mais pessoas do que a capacidade da aeronave aparecem para embarque.
							</p>
							<p>
								&bull; &ensp;<strong>Atrasos de passageiros:</strong> Ocorre quando o passageiro se apresenta no balcão de embarque com menos de 40 (quarenta) minutos para voos domésticos ou 60 (sessenta) minutos para voos internacionais. Neste caso as empresas costumam operar acionar a lista de espera ou cancelar a passagem do passageiro atrasado para atender outros clientes.
								Essa pratica tem prejudicado muitos consumidores, pois afronta as garantias previstas no Código de Defesa do Consumidor, o qual é plenamente aplicável às relações entre passageiros (consumidores) e companhias aéreas (fornecedores).      					
							</p>
	      				</span></div>
	    			</li>
	    			<li>
	      				<div className="collapsible-header waves-effect"><i className="material-icons">access_time</i>Atrasos e cancelamentos</div>
	      				<div className="collapsible-body"><span>
	      					<p>
								Nos casos de atraso e cancelamento de voo, os passageiros têm direito à assistência material, afim de minimizar o desconforto dos passageiros enquanto aguardam seu voo. São elas a assistência de comunicação, além de acomodação.
								A assistência deverá ser oferecida gradualmente pela empresa aérea, conforme abaixo disposto:
							</p>
							<p>
								&bull; &ensp;1 Hora de atraso: A companhia aérea deverá fornecer de forma gratuita um meio de comunicação, como por exemplo internet e telefone.
							</p>
							<p>
								&bull; &ensp;2 Horas de atraso: A companhia aérea deverá fornecer alimentação de forma gratuita. Podendo ser lanches, bebidas, vouchers e etc.
							</p>
							<p>
								&bull; &ensp;3 Horas de atraso: Caso o passageiro perca a conexão devido a atrasos ocorridos por questões climáticas ou operacionais, a empresa aérea deverá acomodá-lo em outro voo para seu destino final. Caso o voo esteja lotado, a empresa aérea poderá realizar o overbooking para atender os passageiros em trânsito, preterindo o embarque dos passageiros que embarcariam no local. Estes últimos estão aptos a requererem compensação financeira pelos transtornos sofridos.
							</p>
							<p>
								&bull; &ensp;4 Horas ou mais de atraso: A companhia aérea deverá fornecer de forma gratuita acomodação ou hospedagem, e transporte do aeroporto ao local de acomodação. Se você estiver no local de seu domicílio, a empresa poderá oferecer apenas o transporte para sua residência e desta para o aeroporto.
							</p>	      					
	      				</span></div>
	    			</li>
	    			<li>
	      					<div className="collapsible-header waves-effect"><i className="material-icons">directions_car</i>Atrasos de passageiros</div>
	      					<div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
	    			</li>
	    			<li>
	      					<div className="collapsible-header waves-effect"><i className="material-icons">work_off</i>Extravio de bagagem</div>
	      					<div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
	    			</li>
	    			<li>
	      					<div className="collapsible-header waves-effect"><i className="material-icons">work</i>Bagagem danificada</div>
	      					<div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
	    			</li>    
	    			<li>
	      					<div className="collapsible-header waves-effect"><i className="material-icons">report_problem</i>Furto de bagagem</div>
	      					<div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
	    			</li>        						    			
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