import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import './Product.scss';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://images.pexels.com/photos/1002406/pexels-photo-1002406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
            <img src={images[0]} alt="" onClick={()=> setSelectedImg(0)}/>
            <img src={images[1]} alt="" onClick={()=> setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ducimus soluta, voluptatum
           neque eaque quaerat alias rerum mollitia necessitatibus! Molestias perferendis voluptates iure,
           quos omnis corporis aliquam sequi necessitatibus! Eos?</p>
           <div className="quantity">
              <button onClick={()=> setQuantity(quantity !== 1 ? quantity - 1 : 1)}>-</button>
                {quantity}
              <button onClick={()=> setQuantity(quantity+1)}>+</button>
           </div>
           <button className="add">
              <AddShoppingCartIcon/> ADD TO CART
           </button>
           <div className="links">
            <div className="item">
              <FavoriteBorderIcon/> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon/> ADD TO COMPARE
            </div>
           </div>
           <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product