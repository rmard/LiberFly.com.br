import React from 'react'
import LocationInput from './LocationInput'
import CalculatorTitle from './CalculatorTitle'

class DelayedFlight extends React.Component {
  state = {
    locationFrom: '',
    locationTo: '',
    delay: '',
    reason: '',
    result: false
  }
  updateLocationFrom = (value) => {
    this.setState({locationFrom: value})
  }
  updateLocationTo = (value) => {
    this.setState({locationTo: value})
  }  
	render = () => {
    const state = this.state;
    // if(state.result)
    //   return (<CalculatorResult />);
    // else
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
                  onChange={this.updateLocationFrom}
                  label='Partida'/>    
                <LocationInput 
                  value={state.locationTo} 
                  onChange={this.updateLocationTo}
                  label='Destino'/>
              </div>
            </div>   
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-helper'>O atraso foi de quantas horas?</p>
                <select
                  defaultValue=''
                  onChange={(event)=>this.setState({delay: event.target.value})}
                >
                  <option value='' disabled>Selecione</option>
                  <option>Mais de 4 horas</option>
                  <option>Entre 3 e 4 horas</option>
                  <option>Entre 2 e 3 horas</option>
                  <option>Entre 1 e 2 horas</option>
                  <option>Menos de 1 hora</option>
                </select>
              </div>
            </div>  
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-helper'>Qual foi o motivo informado?</p>
                <select 
                  defaultValue=''
                  onChange={(event)=>this.setState({reason: event.target.value})}
                  >
                  <option value='' disabled>Selecione</option>
                  <option>Problemas técnicos</option>
                  <option>Problemas metereológicos</option>
                  <option>Outros</option>
                </select>
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