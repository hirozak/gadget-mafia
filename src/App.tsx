import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Entries from './containers/Entries/Entries';
import Entry from './containers/Entry/Entry';
import store from './store/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Entries} />
            <Route path="/entries/:slug" exact={true} component={Entry} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
