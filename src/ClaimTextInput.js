import React from 'react'
import {DebounceInput} from 'react-debounce-input'

class ClaimTextInput extends React.Component {
	render = () => (
		<div className='input-field'>
		    <DebounceInput
	        	id={this.props.id}
	          	minLength={3}
	          	debounceTimeout={500} 
	        	onChange={this.props.onChange}
	        	value={this.props.value} 
	        	type={this.props.type === undefined ? 'text': this.props.type} 
	        	className="input-white-bg"/>  
	        <label htmlFor={this.props.id}>{this.props.label}</label> 
	    </div>
    );
}

export default ClaimTextInput;