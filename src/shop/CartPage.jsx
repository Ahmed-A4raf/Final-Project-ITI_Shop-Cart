import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);
  useEffect(() => {
    // * fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, []);

  // * clculate total price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // * handle quantity increment
  const handleIncrement = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // * update local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // * handle quantity decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      // * update local storage
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // * handle remove item
  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    // * update new cart
    setcartItems(updateCart);

    // * update local storage
    updateLocalStorage(updateCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // * cart total price
  const cartSuptotal = cartItems.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  );

  // * ordar total
  const orderTotal = cartSuptotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* ------------------cart top-start------------------ */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                             <div className="dec qtybutton" onClick={() => handleDecrement(item)}>-</div>
                             <input type="text" className="cart-plus-minus-box" name="qtybutton"
                             value={item.quantity}/>
                             <div className="inc qtybutton" onClick={() => handleIncrement(item)}>+</div>
                        </div>
                      </td>
                      <td>$ {calculateTotalPrice(item)}</td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>

            {/* ------------------cart Top end------------------ */}
            {/*  ------------------cart button-start------------------  */}
            <div className="cart-bottom">
                {/* ------------------checkout box-start------------------ */}
                <div className="cart-checkout-box">
                    <form className="coupon">
                        <input className="cart-page-input-text" type="text" placeholder="Coupon code..." name="coupon" id="coupon" />
                        <input type="submit" value="Apply Coupon" />
                    </form>
                    {/* checkout */}
                    <form className="cart-checkout">
                        <input type="submit" value="Update Cart" />
                        <div>
                            <CheckOutPage />
                        </div>
                    </form>
                </div>
                {/* ------------------checkout box-end------------------ */}

                {/* shopping box */}
                <div className="shiping-box">
                    <div className="row">
                        {/* left */}
                        <div className="col-md-6 col-12">
                            <div className="calculate-shiping">
                                <h3>Caculate Shipping</h3>
                                <div className="outline-select">
                                    <select>
                                        <option value="egp">Egypt (EGP)</option>
                                        <option value="uk">United Kingdom (UK)</option>
                                        <option value="ksa">Kingdom of Saudi Arabia (KSA)</option>
                                        <option value="uae">United Arab Emirates (UAE)</option>
                                    </select>
                                    <span className="select-icon">
                                        <i className="icofont-rounded-down"></i>
                                    </span>
                                </div>

                                <div className="outline-select shipping-select">
                                <select>
                                        <option value="egp">Cairo</option>
                                        <option value="uk">London</option>
                                        <option value="ksa">Riyadh</option>
                                        <option value="uae">Abu Dhabi</option>
                                    </select>
                                    <span className="select-icon">
                                        <i className="icofont-rounded-down"></i>
                                    </span>
                                </div>
                                <input type="text" name="postalCode" id="postalCode" placeholder="Postal Code/Zip*" className="cart-page-input-text"/>
                                <button type="submit">Update Adress</button>
                            </div>
                        </div>
                        {/* right */}
                        <div className="col-md-6 col-12">
                            <div className="cart-overview">
                                <h3>Cart Totals</h3>
                                <ul className="label-ul">
                                    <li>
                                        <span className="pull-left">Cart Suptotal</span>
                                        <p className="pull-right">$ {cartSuptotal}</p>
                                    </li>
                                    <li>
                                        <span className="pull-left">Shipping and Handling</span>
                                        <p className="pull-right">Free Shipping</p>
                                    </li>
                                    <li>
                                        <span className="pull-left">Order Total</span>
                                        <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
