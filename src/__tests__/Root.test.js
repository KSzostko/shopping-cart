import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import products from '../products';
import Root from '../views/Root';

describe('<Root />', () => {
    it('displays all added cart items in CartView with right quantity after adding them in shop and clears everything after checkout', () => {
        render(
            <Provider store={store}>
                <Root />
            </Provider>, {
                wrapper: MemoryRouter
            }
        );

        fireEvent.mouseEnter(screen.getByTestId('store-item1'));
        fireEvent.click(screen.getByTestId(/add1/i));
        fireEvent.click(screen.getByTestId(/add1/i));
        expect(screen.getByTestId('cart-count')).toHaveTextContent(2);

        fireEvent.mouseEnter(screen.getByTestId('store-item2'));
        fireEvent.click(screen.getByTestId(/view2/i));
        fireEvent.change(screen.getByTestId('amount-input'), {
            target: {
                value: '7'
            },
        });
        fireEvent.click(screen.getByText(/add to cart/i));
        expect(screen.getByTestId('cart-count')).toHaveTextContent(9);

        fireEvent.click(screen.getByTestId(/nav-cart/));

        expect(screen.getByText(products[0].name)).toBeInTheDocument();
        expect(screen.getByTestId('cart-price1')).toHaveTextContent(`Price: $${products[0].price}`);
        expect(screen.getByTestId('cart-qty1')).toHaveTextContent(2);

        expect(screen.getByText(products[1].name)).toBeInTheDocument();
        expect(screen.getByTestId('cart-price2')).toHaveTextContent(`Price: $${products[1].price}`);
        expect(screen.getByTestId('cart-qty2')).toHaveTextContent(7);

        expect(screen.getByTestId('total-items')).toHaveTextContent(9);
        let totalPrice = (2 * products[0].price + 7 * products[1].price).toFixed(2);
        expect(screen.getByTestId('total-payment')).toHaveTextContent(`$${totalPrice}`);

        fireEvent.click(screen.getByTestId('cart-remove1'));
        expect(screen.getByTestId('cart-qty1')).toHaveTextContent(1);
        fireEvent.click(screen.getByTestId('cart-add1'));
        expect(screen.getByTestId('cart-qty1')).toHaveTextContent(2);
        fireEvent.click(screen.getByTestId('cart-remove1'));
        fireEvent.click(screen.getByTestId('cart-remove1'));
        expect(screen.queryByText(products[0].name)).not.toBeInTheDocument();

        expect(screen.getByTestId('total-items')).toHaveTextContent(7);
        totalPrice = (7 * products[1].price).toFixed(2);
        expect(screen.getByTestId('total-payment')).toHaveTextContent(`$${totalPrice}`);

        fireEvent.click(screen.getByText(/checkout/i));
        expect(screen.getByTestId('total-items')).toHaveTextContent(0);
        expect(screen.getByTestId('total-payment')).toHaveTextContent(`$0.00`);
        expect(screen.getByTestId('cart-count')).toHaveTextContent(0);
    });
});