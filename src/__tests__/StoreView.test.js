import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import products from '../products';
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

    it('search string matches currently showed items', () => {
        render(
            <Provider store={store}>
                <StoreView />
            </Provider>, {
                wrapper: MemoryRouter
            }
        );

        const searchedString = 'Belt';
        fireEvent.change(screen.getByPlaceholderText(/search product/i), {
            target: {
                value: searchedString,
            },
        });

        let count = 0;
        products.forEach(({ name }) => {
            if(name.match(searchedString)) {
                expect(screen.getByText(name)).toBeInTheDocument();
                count++;
            } else {
                expect(screen.queryByText(name)).not.toBeInTheDocument();
            }
        });
        expect(screen.getByTestId('products-found')).toHaveTextContent(`${count} products`);
    });

    it('displays a message when search string has no matches', () => {
        render(
            <Provider store={store}>
                <StoreView />
            </Provider>, {
                wrapper: MemoryRouter
            }
        );

        const searchedString = 'dasdasdasdasdasd';
        fireEvent.change(screen.getByPlaceholderText(/search product/i), {
            target: {
                value: searchedString,
            },
        });

        products.forEach(({ name }) => {
            expect(screen.queryByText(name)).not.toBeInTheDocument();
        });
        expect(screen.getByTestId('products-found')).toHaveTextContent(`0 products`);
        expect(screen.getByText(/no items found/i)).toBeInTheDocument();
    });
});