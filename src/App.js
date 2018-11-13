import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import DelayedFlight from './DelayedFlight';
import CancelledFlight from './CancelledFlight';
import BoardingDenied from './BoardingDenied';
import LuggageIssues from './LuggageIssues';
import MainOptions from './MainOptions';
import CalculatorResult from './CalculatorResult';
import ClaimForm from './ClaimForm';
import About from './About';
import YourRights from './YourRights';
import BlogLinks from './BlogLinks';
import Faq from './Faq';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">       
        <Navbar />
        <Route exact path="/about" component={About} />
        <Route exact path="/your-rights" component={YourRights} />
        <Route exact path="/blog" render={()=>(
          <BlogLinks 
            title='Blog de viagem'
            links={[
              {
                img: 'https://liberfly.com.br/wp-content/uploads/2018/10/09-2-1024x1024.jpg',
                title: 'Documentos necessários para viajar para a Europa',
                url: 'https://liberfly.com.br/documentoseuropa/'
              },
              {
                img: 'https://liberfly.com.br/wp-content/uploads/2018/10/06.png',
                title: 'Destinos baratos para sua primeira viagem internacional',
                url: 'https://liberfly.com.br/destinos-baratos-para-sua-primeira-viagem-internacional/'
              }, 
              {
                img: 'https://liberfly.com.br/wp-content/uploads/2018/10/03-e1539200939118.png',
                title: 'Meu voo foi cancelado, o que fazer?',
                url: 'https://liberfly.com.br/meu-voo-foi-cancelado/'
              },                            
            ]}
          />
        )}/>
        <Route exact path="/news" render={()=>(
          <BlogLinks 
            title='Notícias'
            links={[
              {
                img: 'https://liberfly.com.br/wp-content/uploads/2018/09/extraviaram-minha-mala-e-agora-1-e1537223779963.png',
                title: 'Minha mala foi extraviada, e agora?',
                url: 'https://liberfly.com.br/minha-mala-foi-extraviada-e-agora/'
              },
              {
                img: 'https://liberfly.com.br/wp-content/uploads/2018/09/01.png',
                title: 'Bagagem de mão: 5 dicas que ninguém te conta',
                url: 'https://liberfly.com.br/bagagem-de-mao-5-dicas-que-ninguem-te-conta/'
              },                            
            ]}
          />
        )}/>        
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/" component={MainOptions} />
        <Route path="/delayed-flight" component={DelayedFlight} />
        <Route path="/cancelled-flight" component={CancelledFlight} />
        <Route path="/boarding-denied" component={BoardingDenied} />
        <Route path="/luggage-issues" component={LuggageIssues} />
        <Route path="/results" component={CalculatorResult} />
        <Route path="/claim" component={ClaimForm} />
        <Route path="/reclamacao" component={ClaimForm} />
      </div>
    );
  }
}

export default App;
