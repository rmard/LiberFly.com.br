import React from 'react'

class BlogLinks extends React.Component {

	render = () => {
		var props = this.props;
		return (
			<div className='row blog-links'>
			    <div className="title-wrapper">
			      	<i className="material-icons">airplanemode_active</i>
			      	<h1 className="title-line">
			        	{props.title}
			      	</h1>	
			    </div>		
			    {props.links.map((link)=>(
					<a href={link.url}
						key={link.url} 
						className='blog-link'
						target='_blank'
						rel="noopener noreferrer"
					>
						<img
						className='responsive-img' 
						alt={link.title}
						src={link.img} />
					</a>	    	
			    ))}	

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
}

export default BlogLinks;