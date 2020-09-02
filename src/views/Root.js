import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from '../redux/store';
import StoreView from './StoreView';
import AboutView from './AboutView';
import CartView from './CartView';
import ProductView from './ProductView';

function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={StoreView} />
                    <Route path="/about" component={AboutView} />
                    <Route path="/cart" component={CartView} />
                    <Route path="/product/:id" component={ProductView} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;
