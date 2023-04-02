import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { REACT_APP_UPLOAD_URL } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../makeRequest.js';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);

    const totalPrice = () => {
        let total =0;
        
        products?.forEach( (element) => {
               total += element.quantity * element.price;  
        });

        return total.toFixed(2);
    };

    const stripePromise = loadStripe('pk_test_51Mr6hCLJ5W7TOOwvEME8fGMoHD4DqctkuKvBgnSx2lGboCwHWbBHoJ3pNp1cor464jG99QwRlbmYnmA51kI3TQG600UxDNbtbB');

    const handlePayment =  async () => {
        try {

            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {
            products?.map((item) => (
                <div className='item' key={item.id}>
                    <div className="itemContainer">
                        <img src={REACT_APP_UPLOAD_URL+item.img} alt="" />
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc.substring(0,100)}</p>
                            <div className="price">{item.quantity} x ${item.price}</div>
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={()=> dispatch(removeItem(item.id))} />
                </div>
            ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHEKOUT</button>
        <span className='reset' onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart