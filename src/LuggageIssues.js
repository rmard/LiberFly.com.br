import React from 'react'
import LocationInput from './LocationInput'
import CalculatorTitle from './CalculatorTitle'
import IssueRefinerSelect from './components/IssueRefinerSelect'

class BoardingDenied extends React.Component {
  state = {
    locationFrom: '',
    locationTo: '',
    wasYourLuggageReturned: '',
    didYouRegister: '',
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
          <div className='issue-type-selected' style={{backgroundImage: 'url(/site-belinda-fewings-977695-unsplash.jpg)'}}>
            <a href='/' className='back-button'>
              <i className='material-icons'>arrow_back</i>
            </a>
            <p className='issue-type-title'>
              PROBLEMAS COM A BAGAGEM
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
                <IssueRefinerSelect
                  title='Sua bagagem foi devolvida a você?'
                  handleChange={(event)=>this.updateState('wasYourLuggageReturned', event.target.value)}
                  options={[
                      'Não, foi perdida definitivamente',
                      'Sim, mas com atraso',
                      'Sim, mas com avaria(s)',
                    ]}
                />
              </div>
            </div>  
            <div className='row'>
              <div className='col s10 offset-s1'>
                <IssueRefinerSelect
                  title='Você registrou o problema junto à companhia?'
                  handleChange={(event)=>this.updateState('didYouRegister', event.target.value)}
                  options={[
                      'Sim, e tenho a cópia ou protocolo da reclamação',
                      'Sim, e tenho os emails trocados',
                      'Sim, e tenho outro documento',
                      'Não'
                    ]}
                />              
              </div>
            </div>           
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-info'>
                  <i className='material-icons left'>info</i>
                    A companhia aérea é responsável pela bagagem durante todo o trajeto
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

export default BoardingDenied