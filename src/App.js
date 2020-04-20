import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.scss';

export default class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      markdownSource: ''
    };
  }

  handleMarkdownChange = (e) => {
    localStorage.setItem('markreator', e.target.value);
    this.setState({
      markdownSource: e.target.value
    });
  }

  componentDidMount() {
    const defaultValue = `# Markreator\n_simple as it must be!_\n\n***\n\nI Really hope you understand that this is version 1, so if you get some bugs feel free to help us to improve at [Github](https://github.com/felipe0liveira/markreator).\n\n### This version have\n- Auto Save`;
    this.setState({
      markdownSource: localStorage.getItem('markreator') || defaultValue
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Markreator</h1>
          <small>simple as it must be!</small>
        </header>
        <section>
          <textarea onChange={this.handleMarkdownChange} defaultValue={this.state.markdownSource}></textarea>
          <ReactMarkdown className="preview" source={this.state.markdownSource} />
        </section>
      </div>
    );
  }
}
