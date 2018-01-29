import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Main extends Component {
  //   constructor (props) {
  // super(props);
  // this.state = {value: ""}
  // this.handleChange= this.handleChange.bind(this);
  //   }
  //   handleChange (event) {
  //     this.setState({value:event.target.value})
  //   }
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
