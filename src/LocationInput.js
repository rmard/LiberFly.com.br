import React from 'react'
import {DebounceInput} from 'react-debounce-input';

const endpoint = '//novosite.liberfly.com.br/googlemaps.php?input=';

class LocationInput extends React.Component {
	state = {
		predictions: []
	}
	handleChange = (event) => {
		this.props.onChange(event.target.value);
		this.setState({value: event.target.value});
		fetch(endpoint+event.target.value)
			.then((res)=>(res.json()))
			.then((data)=>{
				//console.log(data);
				this.setState({predictions: data.predictions});
			});
	}
	selectPrediction = (event) => {
		this.setState({predictions: []});
		this.setState({
			predictions: []
		});
		this.props.onChange(event.target.innerHTML);
	}
	render = () => {
		return (
      <div className="input-field location-input">
        <i className="material-icons prefix indigo-text text-darken-2">place</i>
        <DebounceInput
          minLength={3}
          debounceTimeout={500} 
        	onChange={this.handleChange}
        	value={this.props.value} 
        	type="text" 
        	placeholder={this.props.label} 
        	className="autocomplete"/>
        	{this.state.predictions.length>0 && (
						<ul 
							className="autocomplete-content dropdown-content" 
							tabIndex="0" 
							style={{display: 'block', 
								opacity: 1,
								top: '50px'}}>
							{this.state.predictions.map((prediction)=>(
								<li key={prediction.description} onClick={this.selectPrediction}>
									<span>{prediction.description}</span>
								</li>
							))}
						</ul> 
        	)}       	
      </div>
		);
	}

}

export default LocationInput
