import React, { useState } from 'react'
import { json, Link } from 'react-router-dom';
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template."


const ProductDisplay = ({item}) => {
    // console.log(item)
    const {name, id, price, seller, ratingsCount, quantity, img} = item;

    const [perquantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleDecrement = () => {
        if(perquantity > 1) {
            setQuantity(perquantity - 1)
        }
    }
    const handleIncrement = () => {  
        setQuantity(perquantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product ={
            id: id,
            img: img,
            name: name,
            price: price,
           quantity: perquantity,
           size: size,
           color: color,
           coupon: coupon
        }

        // console.log(product)
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingproductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingproductIndex !== -1) {
            existingCart[existingproductIndex].quantity += perquantity;
        }else {
            existingCart.push(product);
        }
         
        // apdate local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // reset quantity
        setQuantity(1);
        setSize("Select size");
        setColor("Select Color");
        setCoupon("");
    }

  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
               <span> {ratingsCount} review</span>
            </p>
            <h4>$ {price}</h4>
            <h6>Seller: {seller}</h6>
            <p>{desc}</p>
        </div>
        {/* cart component */}
        <div>
            <form onSubmit={handleSubmit}>
                {/* size */}
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option value="Select size">Select size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                {/* color */}
                <div className='select-product color'>
                    <select value={color} onChange={handleColorChange}>
                        <option value="Select size">Select color</option>
                        <option value="Pink">Pink</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Black">Black</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                {/* cart plus minus */}
                <div className='cart-plus-minus'>
                    <div className='dec qtybutton' onClick={handleDecrement}>-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtybutton'id='qtybutton' value={perquantity} onChange={(e) => setQuantity(parseInt(e.target.value,10))}/>
                    <div className='inc qtybutton' onClick={handleIncrement}>+</div>
                </div>

                {/* coupon field */}
                <div className='discount-code mb-2'>
                    <input type="text" placeholder='Enter coupon code' value={coupon} onChange={(e) => setCoupon(e.target.value)}/>
                </div>

                {/* button section */}
                <button type="submit" className='lab-btn'>
                    <span>Add to cart</span>
                </button>
                <Link to="/cart-page" className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay