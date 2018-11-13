import React from 'react'
import LocationInput from './LocationInput'
import CalculatorTitle from './CalculatorTitle'
import IssueRefinerSelect from './components/IssueRefinerSelect'

class DelayedFlight extends React.Component {
  state = {
    locationFrom: '',
    locationTo: '',
    delay: '',
    reason: '',
    lostAppointment: ''
  }
  
  componentDidMount = () => {
    localStorage.setItem('issueType', 'Atraso de vôo');
  }
  
  updateState = (field, value) => {
    let obj = {};
    obj[field] = value;
    this.setState(obj);
    localStorage.setItem(field, value);
  }
 
	render = () => {
    const state = this.state;
    let showExtraField = (this.state.delay!=='' && 
              this.state.delay!=='Mais de 4 horas');
      return (
        <div>
          <CalculatorTitle />
          <div className='issue-type-selected' style={{backgroundImage: 'url(/site-gerrie-van-der-walt-371629-unsplash.jpg)'}}>
            <a href='/' className='back-button'>
              <i className='material-icons'>arrow_back</i>
            </a>
            <p className='issue-type-title'>
              ATRASO DE VÔO
            </p>
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-helper'>Para onde você voou?</p>
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
                  title='O atraso foi de quantas horas?'
                  handleChange={(event)=>this.updateState('delay', event.target.value)}
                  options={[
                      'Mais de 4 horas',
                      'Entre 3 e 4 horas',
                      'Entre 2 e 3 horas',
                      'Entre 1 e 2 horas',
                      'Menos de 1 hora'
                    ]}
                />
              </div>
            </div>  
            <div className='row'>
              <div className='col s10 offset-s1'>
                <IssueRefinerSelect
                  title='Qual foi o motivo informado?'
                  handleChange={(event)=>this.updateState('reason', event.target.value)}
                  options={[
                      'Problemas técnicos',
                      'Problemas metereológicos',
                      'Outros'
                    ]}
                />              
              </div>
            </div>  
            <div className={`row ${showExtraField?'':'hide'}`}>
              <div className='col s10 offset-s1'>
                <IssueRefinerSelect
                  title='Você perdeu algum compromisso por causa do atraso?'
                  handleChange={(event)=>this.updateState('lostAppointment', event.target.value)}
                  options={[
                      'Sim, um compromisso de trabalho',
                      'Sim, um compromisso pessoal',
                      'Não'
                    ]}
                />               
              </div>
            </div>           
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-info'>
                  <i className='material-icons left'>info</i>
                  Vôos com atraso de mais de 4 horas geram indenizações para clientes em 98% dos casos
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

export default DelayedFlight