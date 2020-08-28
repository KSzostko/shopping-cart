import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Search from './components/Search';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navigation />
            <Header />
            <Search />
            <ProductsList />
            <Footer />
        </div>
    );
}

export default App;
