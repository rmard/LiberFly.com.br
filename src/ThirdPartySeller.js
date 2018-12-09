import React from 'react'
import CalculatorTitle from './CalculatorTitle'
import IssueRefinerSelect from './components/IssueRefinerSelect'

class ThirdPartySeller extends React.Component {
  state = {
    justInputedThirdPartySeller: ''
  }
  
  componentDidMount = () => {
  }
  
  updateState = (field, value) => {
    let obj = {};
    obj[field] = value;
    this.setState(obj);
    localStorage.setItem(field, value);
  }

  submitForm = (event) => {
    event.preventDefault();
    if(this.state.justInputedThirdPartySeller==='') {
      window.M.toast({html: 'É necessário preencher o campo antes de prosseguir'});
    }
    else
      window.location.href = '/results';
  }
 
	render = () => {
      return (
        <div>
          <CalculatorTitle />
          <form onSubmit={this.submitForm}>
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
                    handleChange={(event)=>this.updateState('justInputedThirdPartySeller', event.target.value)}
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
                  </p>
                  <p className='center-align'><strong>🡆 Isso aumenta nossas chances!</strong></p>
                </div>
              </div>                       
              <br/>
              <div className='row'>
                <div className='col s10 offset-s1'>
                  <button //href="/results" 
                    // onClick={()=>this.setState({result: true})}
                    className='btn btn-large red accent-2 white-text waves-effect waves-light'>
                    <i className="material-icons left">settings</i> 
                    Calcule agora!
                  </button>
                </div>
              </div>                      
            </div>
          </form>
        </div>
    	)
  }
}

export default ThirdPartySeller