import React, { Component } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Main from './components/Main';
import Form from './components/forms/Form';
import Cv from './components/Cv';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalData : {
        fullname : 'Nombre y Apellidos',
        profession : 'Profesión',
        tel : 'Número de teléfono',
        mail : 'Correo Electrónico',
        city : 'Ciudad',
        country : 'País',
        enlaceLinkedin : 'Enlace a Linkedin',
        enlaceGitHub : 'Enlace a GitHub',
        enlaceTwitter : 'Enlace a Twitter',
        personalDescription : 'Breve descripción personal'
      },
      value: ''
    };

    // this.updateState = this.updateState.bind(this);
  }

  // updateState(event) {
  //   this.setState({
  //     value: event.target.value,
  //
  //   });
  // }

  getData = (type, data) => {
    this.setState({[type]: Object.assign({}, this.state[type], data)})
  };


  render() {
    return (
      <div>
      <Header />
      <Hero />
      <Introduction />
      <Main>
        <Form getData={this.getData} data={this.state} updateState={this.updateState}/>
        <Cv data={this.state.value}  personalData={this.state.personalData}/>
      </Main>
      <Footer />
      </div>

    );
  }
}

export default App;
