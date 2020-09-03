import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import StoreView from '../views/StoreView';

describe('<StoreView />', () => {
    it('updates shopping-chart icon in Navigation after adding item to cart', () => {
        render(
            <Provider store={store}>
                <StoreView />
            </Provider>, {
                wrapper: MemoryRouter
            }
        );
        
        expect(screen.getByTestId('cart-count')).toHaveTextContent(0);

        fireEvent.mouseEnter(screen.getByTestId('store-item1'));
        fireEvent.click(screen.getByTestId(/add1/));

        expect(screen.getByTestId('cart-count')).toHaveTextContent(1);
    });
});