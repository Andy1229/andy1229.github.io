import '../App.css';

// function Home() {
//     return (
//         <div className="Home">
//             <h2>Hi</h2>

//         </div>
//     )
//}
import React, { Component } from 'react';

const textArray = ['Software Developer', 'Web Developer', 'Technical Support Engineer', 'Customer Support Engineer', 'Data & Business Analyst', 'Sales Representative',  'Korean Translator'];

class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section>
        <h1>Hi</h1>
        <h2>I'm <span>{textThatChanges}</span></h2>
      </section>
    )
  }
}

export default Home;
