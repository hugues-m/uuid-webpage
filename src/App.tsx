import React, { Component } from "react";
import id from "uuid/v4";
import "./App.css";
import copyToClipboard from "./copyToClipboard";

class App extends Component {
  state = {
    uuid: id(),
    autoCopy: true,
    copiedConfirmation: false
  };

  componentDidMount(): void {
    document.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        this.generateNewOne();
      }
    });
  }

  generateNewOne(): void {
    const uuid = id();
    this.setState({ uuid });

    if (this.state.autoCopy) {
      copyToClipboard(uuid);
      this.confirmCopy();
    }
  }

  confirmCopy(): void {
    this.setState({ copiedConfirmation: true });
    setTimeout(() => {
      this.setState({ copiedConfirmation: false });
    }, 2000);
  }

  copyToClipboard(): void {
    copyToClipboard(this.state.uuid);
    this.confirmCopy();
    if (!this.state.autoCopy) {
      this.setState({ autoCopy: true });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>UUID v4 generator</h1>
          <h2>{this.state.uuid}</h2>
          {this.state.copiedConfirmation ? (
            <p>UUID has been copied to your clipboard!</p>
          ) : (
            <p>
              <a className="App-link" onClick={() => this.copyToClipboard()}>
                Copy to clipboard
              </a>
            </p>
          )}
          <p>
            <a className="App-link" onClick={() => this.generateNewOne()}>
              Generate new one
            </a>
          </p>
          <p>
            You can also press <strong>Enter</strong> to generate a new UUID.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
