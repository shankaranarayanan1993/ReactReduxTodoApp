import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store/configureStore';

import TodoApp from './containers/TodoApp';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </AppContainer>,
  rootEl
);
/*HMR can be used in development as a LiveReload replacement.
 webpack-dev-server supports a hot mode in which it tries to update with HMR before trying to reload the whole page.
 See the Hot Module Replacement guide for details.*/
if (module.hot) {
  module.hot.accept('./containers/TodoApp', () => {
    const TodoApp = require('./containers/TodoApp');

    render(
      <AppContainer>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
