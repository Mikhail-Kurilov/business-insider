import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Authorization from './components/Authorization/Authorization';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  authorizationToggle(value) {
    this.setState({ login: value });
  }

  authorizationResult(value) {
    this.setState({ login: !value });
    this.footer.setState({ authorizationState: value })
  }

  render () {
    return (
      <div className="wrapper">
        <div className="App">
          {this.state.login ?
            <Authorization
              authorizationResult={(val) => this.authorizationResult(val)}
              authorizationToggle={(val) => this.authorizationToggle(val)}
            /> : ''
          }
          <Header />
          <Body />
          <Footer
          ref={footer => this.footer = footer}
          authorizationToggle={(val) => this.authorizationToggle(val)}
          authorizationState={this.state.login}
          />
        </div>
      </div>
    );
  }
}

export default App;
