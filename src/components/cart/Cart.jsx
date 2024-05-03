import React, { useEffect, useState } from "react";
import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <Container>
          <div className="bg-white p-4">
            <div className="border-b-2 border-gray-100">
              <div className="flex my-4">
                <h1 className="font-bold text-xl">Checkout</h1>
                <button
                  type="button"
                  className="rounded-sm mx-4 bg-red-400 px-3 text-white hover:bg-red-500"
                  onClick={() => dispatch(clearCart())}
                >
                  Remove All Items
                </button>
              </div>
            </div>

            <div className="w-3/5">
              {cartItems.map((item) => (
                <ItemList key={item.id} item={item}></ItemList>
              ))}
            </div>
            <div className="w-2/5"></div>
          </div>
        </Container>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <div className="text-center">
            <BsCart2 className="h-40 w-40 text-black/[.6] mx-auto my-6" />
            <div>
              <span className="font-semibold text-xl">Your cart is empty</span>
              <h4 className="text-black/[.5]">
                You can go to home page to view more restaurants
              </h4>
            </div>

            <div className="my-6">
              <Link to="/">
                <button
                  type="button"
                  className="rounded-sm mx-4 bg-red-400 p-2 text-white hover:bg-red-500"
                >
                  SEE ALL RESTAURANT
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
