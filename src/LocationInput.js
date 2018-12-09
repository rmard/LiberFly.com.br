import React from 'react'
import {DebounceInput} from 'react-debounce-input';

class LocationInput extends React.Component {
	render = () => {
		return (
      <div className="input-field location-input">
        <i className="material-icons prefix indigo-text text-darken-2">place</i>
        <DebounceInput
          	minLength={3}
          	debounceTimeout={500} 
        	onChange={(e)=>this.props.onChange(e.target.value)}
        	value={this.props.value} 
        	type="text" 
        	placeholder={this.props.label} 
		/>     	
      </div>
		);
	}

}

export default LocationInput
