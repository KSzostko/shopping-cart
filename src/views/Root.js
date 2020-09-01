import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import StoreView from './StoreView';
import AboutView from './AboutView';
import CartView from './CartView';
import ProductView from './ProductView';

function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StoreView} />
                <Route path="/about" component={AboutView} />
                <Route path="/cart" component={CartView} />
                <Route path="/product/:id" component={ProductView} />
            </Switch>
        </BrowserRouter>
    );
}

export default Root;
