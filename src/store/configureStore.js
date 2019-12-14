import {createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from '../reducers';


function configureStore() {
    const enhancer = compose(autoRehydrate(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    /*Redux-Persist saves the Redux Store when the app is closed or refreshed.*/
    const store = createStore(reducers, enhancer);
    persistStore(store);

    return store;
}

export default configureStore();
