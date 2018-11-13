import React from 'react'
import LocationInput from './LocationInput'
import CalculatorTitle from './CalculatorTitle'
import IssueRefinerSelect from './components/IssueRefinerSelect'

class BoardingDenied extends React.Component {
  state = {
    locationFrom: '',
    locationTo: '',
    whenItWasInformed: '',
    reimbursementOffered: '',
  }
  
  componentDidMount = () => {
    localStorage.setItem('issueType', 'Não pude embarcar');
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
          <div className='issue-type-selected' style={{backgroundImage: 'url(/site-murucutu-686316-unsplash.jpg)'}}>
            <a href='/' className='back-button'>
              <i className='material-icons'>arrow_back</i>
            </a>
            <p className='issue-type-title'>
              NÃO PUDE EMBARCAR
            </p>
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-helper'>Qual seria o vôo?</p>
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
                  title='Quando a companhia informou que você não poderia embarcar?'
                  handleChange={(event)=>this.updateState('whenItWasInformed', event.target.value)}
                  options={[
                      'Somente na hora',
                      'Menos de 24 horas antes da hora marcada',
                      'Mais de 24 horas antes da hora marcada',
                    ]}
                />
              </div>
            </div>  
            <div className='row'>
              <div className='col s10 offset-s1'>
                <IssueRefinerSelect
                  title='A companhia ofereceu reembolso do valor pago?'
                  handleChange={(event)=>this.updateState('reimbursementOffered', event.target.value)}
                  options={[
                      'Não',
                      'Sim, parcial',
                      'Sim, integral'
                    ]}
                />              
              </div>
            </div>           
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-info'>
                  <i className='material-icons left'>info</i>
                    Ter o embarque impedido pela companhia pode gerar direito a receber indenização
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