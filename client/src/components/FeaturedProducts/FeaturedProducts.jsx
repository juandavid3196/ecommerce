import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import { useFecth } from '../../hooks/useFetch';


const FeaturedProducts = ({type}) => {

    const {data,loading,error} = useFecth(`/products?populate=*&[filters][type][$eq]=${type}`);
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tenetur!
                Eveniet, cupiditate eius nam animi velit officiis similique aut excepturi blanditiis 
                eos quam odit accusamus quibusdam libero, ex nostrum quaerat?
            </p>
        </div>
        <div className="bottom">
            {  error 
               ? "something went wrong" 
               : loading 
               ? "IsLoading" 
               : data?.map(item => (
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts