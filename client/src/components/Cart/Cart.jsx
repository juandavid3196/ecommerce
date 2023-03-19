import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: 'https://images.pexels.com/photos/10669636/pexels-photo-10669636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'long Sleeve Graphic T-shirt',
            desc: '20%',
            isNew: true,
            oldPrice: 19,
            price: 12 
        },
        {
            id:2,
            img: 'https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Coat',
            desc: '30%',
            isNew: true,
            oldPrice: 19,
            price: 12 
        }
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {
            data.map(item=>(
                <div className='item' key={item.id}>
                    <div className="itemContainer">
                        <img src={item.img} alt="" />
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc.substring(0,100)}</p>
                            <div className="price">1 x ${item.price}</div>
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHEKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart