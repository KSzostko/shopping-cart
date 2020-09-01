import React from 'react';
import productsArr from '../products';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Search from '../components/Search';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

class StoreView extends React.Component {
    state = {
        products: [
            ...productsArr,
        ],
    };

    filterProducts = e => {
        const text = e.target.value;
        const filteredProducts = productsArr.filter(({ name }) => name.match(text));

        this.setState({
            products: filteredProducts
        });
    }
    
    render() {
        const { products } = this.state;
        
        return (
            <div>
                <Navigation />
                <Header />
                <Search filterProductsFn={this.filterProducts} count={products.length} />
                <ProductsList products={products} />
                <Footer />
            </div>
        );
    }
}

export default StoreView;
