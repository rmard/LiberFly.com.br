import React from 'react'
import CalculatorTitle from './CalculatorTitle'
import IssueRefinerSelect from './components/IssueRefinerSelect'

class ThirdPartySeller extends React.Component {
  state = {
    thirdPartySeller: ''
  }
  
  componentDidMount = () => {
  }
  
  updateState = (field, value) => {
    let obj = {};
    obj[field] = value;
    this.setState(obj);
    localStorage.setItem(field, value);
  }
 
	render = () => {
      return (
        <div>
          <CalculatorTitle />
          <div className='issue-type-selected' style={{backgroundImage: 'url(/site-gerrie-van-der-walt-371629-unsplash.jpg)'}}>
            <a href='/' className='back-button'>
              <i className='material-icons'>arrow_back</i>
            </a>
            <p className='issue-type-title'>
              INFORMAÇÃO ADICIONAL
            </p>
            <div className='row'>
              <div className='col s10 offset-s1'>
                <IssueRefinerSelect
                  title='A passagem foi comprada por alguma intermediadora?'
                  handleChange={(event)=>this.updateState('thirdPartySeller', event.target.value)}
                  options={[
                      'Sim',
                      'Não'
                    ]}
                />              
              </div>
            </div>          
            <div className='row' style={{backgroundColor: 'rgba(35, 58, 122, 0.75)'}}>
              <div className='col s10 offset-s1'>
                <p className='justify'>
                  Intermediadoras são agências de viagem e sites de busca, por exemplo: Decolar, MaxMilhas, ViajaNet etc.
                </p>
              </div>
            </div>    
            <div className='row'>
              <div className='col s10 offset-s1'>
                <p className='form-info justify'>
                  <i className='material-icons left'>info</i>
                  De acordo com a legislação brasileira, intermediadoras são co-responsáveis pela prestação do serviço de transporte aéreo. Por isso, elas também tem o dever de compensar os passageiros lesados.
                  <p className='center-align'><strong>🡆 Isso aumenta nossas chances!</strong></p>
                </p>
              </div>
            </div>                       
            <br/>
            <div className='row'>
              <div className='col s10 offset-s1'>
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

export default ThirdPartySeller