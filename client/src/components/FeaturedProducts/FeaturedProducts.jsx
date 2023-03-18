import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: 'https://images.pexels.com/photos/10669636/pexels-photo-10669636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12 
        },
        {
            id:2,
            img: 'https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12 
        },
        {
            id:3,
            img: 'https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Skirt',
            oldPrice: 19,
            price: 12 
        },
        {
            id:4,
            img: 'https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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