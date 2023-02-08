import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/Productprovider';

const Home = () => {
    // const {state:{products,loading,error}}= useProducts();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // let content;
    // if(loading){
    //     content = <p>Loading</p>
    // }
    // if(error){
    //     content=<p>someting is worng</p>;
    // }
    // if(!loading && !error && products.length){
    //     content =products?.map(product =><ProductCard key={product._id} product={product}></ProductCard>)
    // }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {products?.map(product =><ProductCard key={product._id} product={product}></ProductCard>)}
                
            
        </div>
    );
};

export default Home;