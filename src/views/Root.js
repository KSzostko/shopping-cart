import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import StoreView from './StoreView';
import AboutView from './AboutView';
import CartView from './CartView';

function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StoreView} />
                <Route path="/about" component={AboutView} />
                <Route path="/cart" component={CartView} />
            </Switch>
        </BrowserRouter>
    );
}

export default Root;
