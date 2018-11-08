import React from 'react'

export default () => (
	<div className='about row'>
	    <div className="title-wrapper">
	      	<i className="material-icons">airplanemode_active</i>
	      	<h1 className="title-line">
	        	Garanta seus direitos.
	      	</h1>
	      	<h2 className="title-line">
	        	Conte com nossa proteção!
	      	</h2>
	    </div>	
		<div className='col s12 about-text'>
			<p className='bold font120'>QUEM SOMOS</p>
			<p className='justify'>
				Nosso principal objetivo é ajudar os passageiros de todo o Brasil a conseguirem reembolsos e indenizações por <strong>ATRASOS, CANCELAMENTOS, OVERBOOKING, DANO E EXTRAVIO DE BAGAGEM</strong>, dentre outros. Através da mediação entraremos em contato com as companhias aéreas em nome de nossos clientes que sofrem com as arbitrariedades cometidas por estas e que não possuem tempo ou desconhecem o procedimento para garantir seus direitos! A principal questão é que os direitos dos passageiros não foram feitos para serem interpretados apenas pelo ponto de vista das companhias aéreas. É por isso que nos certificamos de que elas cumpram com suas obrigações legais. Nosso dever é garantir os direitos dos consumidores!
			</p>
			<p className='justify'>
				Tornaremos as reivindicações de compensações tão fáceis e fluídas para nossos clientes quanto possíveis. Acreditamos que isto pode ser alcançado com tecnologias de ponta que apresentem dados em websites de fácil navegação e aplicativos para dispositivos móveis.	
			</p>
		</div>
		<div className='col s12'>
			<iframe title='LiberFly-Map' width="100%" height="300" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-20.28804669258137,-40.30387043952942&amp;q=Av.%20Nossa%20Senhora%20da%20Penha%20n%C2%BA%202796%2C%20Ed.%20Impacto%20Empresarial%2C%208%C2%BA%20Andar%2C%20Praia%20do%20Canto%2C%20Vit%C3%B3ria%2FES+(LiberFly)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
			</iframe>
		</div>

		<div className='col s11 offset-s1 grey-text text-darken-1'>
			<div className='row'>
				<div className='col s2'>
					<i className='material-icons'>place</i>
				</div>
				<div className='col s10 left-align'>
					Av. Nossa Senhora da Penha nº 2796, Ed. Impacto Empresarial, 8º Andar, Praia do Canto, Vitória/ES
				</div>
			</div>
			<div className='row'>
				<div className='col s2'>
					<i className='material-icons'>phone</i>
				</div>
				<div className='col s10 left-align'>
					+ 55 27 3024-8609
				</div>
			</div>	
			<div className='row'>
				<div className='col s2'>
					<i className='material-icons'>mail</i>
				</div>
				<div className='col s10 left-align'>
					contato@liberfly.com.br
				</div>
			</div>						
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
)