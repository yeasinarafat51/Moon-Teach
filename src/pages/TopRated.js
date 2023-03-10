import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/Productprovider';

const TopRated = () => {
    const {state:{products,loading,error}}= useProducts();
    let content;
    if(loading){
        content = <p>Loading</p>
    }
    if(error){
        content=<p>someting is worng</p>;
    }
    if(!loading && !error && products.length){
        content =products?.filter(product => product.rating >3).map(product =><ProductCard key={product._id} product={product}></ProductCard>)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
                
            
        </div>
    );
};

export default TopRated;