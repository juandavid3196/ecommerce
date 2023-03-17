import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img: 'https://www.pexels.com/photo/woman-wearing-black-sport-1972115/',
            img2: '',
            title: 'long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12 
        },
        {
            id:2,
            img: 'https://www.pexels.com/photo/woman-wearing-black-sport-1972115/',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12 
        },
        {
            id:3,
            img: 'https://www.pexels.com/photo/woman-wearing-black-sport-1972115/',
            title: 'Skirt',
            oldPrice: 19,
            price: 12 
        },
        {
            id:4,
            img: 'https://www.pexels.com/photo/woman-wearing-black-sport-1972115/',
            title: 'Hat',
            oldPrice: 19,
            price: 12 
        }
    ]


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
            {   
                data.map(item => (
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts