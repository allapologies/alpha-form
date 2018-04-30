import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from './components/container';

import store from './__data__/store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  componentDidCatch(e) {
    this.setState({ error: 'Ошибонька' });
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
