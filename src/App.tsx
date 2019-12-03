import React, { Component } from 'react';
import id from 'uuid/v4';
import './App.css';
import copyToClipboard from './copyToClipboard';

class App extends Component<{}, { uuid: string }> {
    state = {
        uuid: id(),
    };

    componentDidMount(): void {
        copyToClipboard(this.state.uuid);
    }

    generateNewOne(): void {
        const uuid = id();
        this.setState({ uuid });
        copyToClipboard(uuid);
    }

    render() {
        return (
            <div className="App">
        <header className="App-header">
            <h1>UUID v4 generator</h1>
          <h2>{this.state.uuid}</h2>
          <p>UUID has been copied to your clipboard !</p>
          <a
              className="App-link"
              onClick={() => this.generateNewOne()}
          >
            Generate new one
          </a>
        </header>
      </div>
        );
    }
}

export default App;
