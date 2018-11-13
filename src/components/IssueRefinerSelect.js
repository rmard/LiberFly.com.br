import React from 'react'

export default (props) => (
	<div>
        <p className='form-helper'>{props.title}</p>
        <select
          defaultValue=''
          onChange={props.handleChange}
        >
          <option value='' disabled>Selecione</option>
          {props.options.map((option)=>(
            <option key={option}>{option}</option>
          ))}
        </select>		
	</div>
);