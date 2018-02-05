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
      education : {
        title : 'Estudios realizados',
        institute : 'Escuela',
        city : 'Ciudad',
        country : 'País',
        startMonth : '',
        startYear : 'Inicio',
        endMonth : 'Fin',
        endYear : '',
        textEducation : 'Descripción educación'
      },

      professionalExp : {
        cargo : 'Puesto o Cargo',
        company : 'Empresa',
        professionalStartMonth: '',
        professionalStartYear: 'Inicio',
        professionalEndMonth: '',
        professionalEndYear: 'Fin',
        professionalText : 'Descripción del puesto'
        },

      language : {
        '1' : {
          languageSkill: 'Idioma',
          level: 'Nivel'
        },
        '2' : {
          languageSkill: '',
          level: ''
        },
        '3' : {
          languageSkill: '',
          level: ''
        }
      },

      skills : {
        '1' : {
          languageSkill: 'Habilidad',
          level: 'Nivel'
        },
        '2' : {
          languageSkill: '',
          level: ''
        },
        '3' : {
          languageSkill: '',
          level: ''
        }
      },
    };
  }


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
        <Form getData={this.getData} data={this.state}/>
        <Cv personalData={this.state.personalData} education={this.state.education} professionalExp={this.state.professionalExp} language={this.state.language} skills={this.state.skills}/>
      </Main>
      <Footer />
      </div>

    );
  }
}

export default App;
