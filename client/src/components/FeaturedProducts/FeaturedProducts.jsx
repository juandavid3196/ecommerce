import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import axios from "axios";


const FeaturedProducts = ({type}) => {

    const REACT_APP_API_TOKEN = "f80b088fd04d03978806e3077d54732762e22a399c2a6f8111a4c41d33a05ee0df29b51b26116a88dc61e93e16f1fd1d2adf0030405910ee58fc1bbd65c12aa020566dbf7e4a7930c77ea3bdd66205af68acd489179920787367f1c7221e58a8068c4ae927c799150704238f85fbc026eff891f08a27f1a51acecc8916f8bee7";
    const REACT_APP_API_URL = "http://localhost:1337/api";

    const [data,setData] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const res = await axios.get(REACT_APP_API_URL+ "/products?populate=*", {
                    headers :{
                        Authorization: "bearer " + REACT_APP_API_TOKEN,
                    },
                })
               setData(res.data.data);
               console.log(res.data.data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    },[]);

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