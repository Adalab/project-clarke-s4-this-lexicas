import React, { Component } from 'react';


class Cv extends Component {
  render() {
    return (
      <div id="printCv" className="resume-container" onLoad={() => { window.print();window.close()}}>

      <section className="resume">

        <aside className="resume-left">
          <img className="profile-picture margin" alt=""/>
          <div className="personal-info-mvl margin">
            <h2 className="title" id="CV0">{this.props.personalData.fullname}</h2>
            <h2 className="title-medium" id="CV0">{this.props.personalData.profession}</h2>
          </div>
          <div className="extract-info">
            <h3>Sobre mí</h3>
            <p id="description-personal-cv">{this.props.personalData.personalDescription}</p>
          </div>
          <div className="contact-section">
            <div className="contact-info">
              <h4>Contacto</h4>
              <div className="phone-info">

                <p id="CV1" >{this.props.personalData.tel}</p>
              </div>
              <div className="email-info">

                <p id="CV1" >{this.props.personalData.mail}</p>
              </div>
              <div className="location-info">

                <p id="CV1" >{this.props.personalData.city}, {this.props.personalData.country}</p>
              </div>
            </div>
            <div className="social-media">
              <p id="social-enlace" >{this.props.personalData.enlaceLinkedin}</p>
              {/*<p>Linkedin:<a href="https://github.com/Adalab/clarke-s2-varwomen/tree/js-adds">Icono Linkedin</a></p>
              <p>GitHub: @ejemplo</p>*/}
              <p id="social-enlace" >{this.props.personalData.enlaceGitHub}</p>
              <p id="social-enlace" >{this.props.personalData.enlaceTwitter}</p>
            </div>
          </div>
        </aside>


        <div className="resume-right">

          <div className="personal-info-desktop margin">
            <h2 className="title" id="CV1">{this.props.personalData.fullname}</h2>
            <h3 className="title-medium" id="CV1">{this.props.personalData.profession}</h3>
          </div>

          <div className="work-info margin">
            <h3>Experiencia laboral</h3>
            <div className="option">
              <h4 id="work-type-CV">{this.props.professionalExp.cargo}</h4>
              <div className="where-info">
                <h5 id="company-name-CV">{this.props.professionalExp.company}</h5>
                <div className="date-info">
                  <p id="start-work-date" >{this.props.professionalExp.professionalStartMonth} {this.props.professionalExp.professionalStartYear}</p>
                  <p id="end-work-date" >{this.props.professionalExp.professionalEndMonth} {this.props.professionalExp.professionalEndYear}</p>
                </div>
              </div>
              <p id="work-description" >{this.props.professionalExp.professionalText}</p>

              <div className="background-info margin">
                <h3>Estudios</h3>
                <div className="option">
                  <h4 id="study-title">{this.props.education.title}</h4>
                  <div className="where-info">
                    <h5 id="school">{this.props.education.institute}</h5>
                    <div className="date-info">
                      <p id="start-study-date">{this.props.education.startMonth} {this.props.education.startYear}</p>
                      <p id="end-study-date">{this.props.education.endMonth} {this.props.education.endYear}</p>
                    </div>
                  </div>
                  <p id="study-description">{this.props.education.textEducation}</p>
                  <div className="options-content">
                    <div className="options-content-items">
                      <h4>Idiomas</h4>
                      <div className="options-content">
                        <div className="options-content-items">
                          <p id="primero-idioma-into-CV" >{this.props.language['1'].languageSkill}</p>
                          <p id="idioma-extra1-into-CV" >{this.props.language['2'].languageSkill}</p>
                          <p id="idioma-extra2-into-CV" >{this.props.language['3'].languageSkill}</p>
                        </div>
                        <div className="options-content-items">
                          <p id="nivel-primero-idioma-into-CV" >{this.props.language['1'].level}</p>
                          <p id="nivel-idioma-extra1-into-CV" >{this.props.language['2'].level}</p>
                          <p id="nivel-idioma-extra2-into-CV" >{this.props.language['3'].level}</p>
                        </div>
                      </div>
                    </div>
                    <div className="options-content-items">
                      <h4>Habilidades</h4>
                      <div className="options-content">
                        <div className="options-content-items">
                          <p id="skill1-cv" >{this.props.skills['1'].languageSkill}</p>
                          <p id="skill2-cv" >{this.props.skills['2'].languageSkill}</p>
                          <p id="skill3-cv" >{this.props.skills['3'].languageSkill}</p>
                        </div>
                        <div className="options-content-items">
                          <p id="skill1-level-cv" >{this.props.skills['1'].level}</p>
                          <p id="skill2-level-cv" >{this.props.skills['2'].level}</p>
                          <p id="skill3-level-cv" >{this.props.skills['3'].level}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>




    );
  }
}

export default Cv;
