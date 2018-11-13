import React from 'react'
import LocationInput from './LocationInput'
import CalculatorTitle from './CalculatorTitle'
import {DebounceInput} from 'react-debounce-input';

class AnotherIssues extends React.Component {
  state = {
    locationFrom: '',
    locationTo: '',
    details: ''
  }
  
  componentDidMount = () => {
    localStorage.setItem('issueType', 'Problemas com bagagem');
  }
  
  updateState = (field, value) => {
    let obj = {};
    obj[field] = value;
    this.setState(obj);
    localStorage.setItem(field, value);
  }
 
	render = () => {
    const state = this.state;
      return (
        <div>
          <CalculatorTitle />
          <div className='issue-type-selected' style={{backgroundImage: 'url(/site-kelvin-balingit-531607-unsplash.jpg)'}}>
            <a href='/' className='back-button'>
              <i className='material-icons'>arrow_back</i>
            </a>
            <p className='issue-type-title'>
              OUTROS PROBLEMAS
            </p>
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-helper'>Em qual vôo aconteceu?</p>
                <LocationInput 
                  value={state.locationFrom} 
                  onChange={(value)=>this.updateState('locationFrom', value)}
                  label='Partida'/>    
                <LocationInput 
                  value={state.locationTo} 
                  onChange={(value)=>this.updateState('locationTo', value)}
                  label='Destino'/>
              </div>
            </div>             
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-helper'>Qual foi o problema?</p>
                <div className="input-field input-white-bg">
                  <i className="material-icons prefix indigo-text text-darken-2">edit</i>
                  <DebounceInput
                    minLength={3}
                    debounceTimeout={500} 
                    onChange={(e)=>this.updateState('details', e.target.value)}
                    value={this.state.details} 
                    type="text" 
                    placeholder='Descreva o ocorrido'
                    className=''/>       
                </div>              
              </div>
            </div>            
            <div className='row'>
              <div className='col s10 offset-s1'>
                <br/>
                <p className='form-info'>
                  <i className='material-icons left'>info</i>
                    Temos uma equipe de especialistas prontos para avaliar seu caso
                </p>
              </div>
            </div>  
            <div className='row'>
              <div className='col s10 offset-s1'>
                <br/>
                <a href="/results" 
                  // onClick={()=>this.setState({result: true})}
                  className='btn btn-large red accent-2 white-text waves-effect waves-light'>
                  <i className="material-icons left">settings</i> 
                  Calcule agora!
                </a>
              </div>
            </div>                        
          </div>
        </div>
    	)
  }
}

export default AnotherIssues