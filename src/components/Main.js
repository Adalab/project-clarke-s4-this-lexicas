import React, { Component } from 'react';



class Main extends Component {
  
  render() {
    return (
      <main>
      <section className="principal-content">
        {this.props.children}
      </section>
      </main>
    );
  }
}

export default Main;
