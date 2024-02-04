import React from 'react'
import './Products.css'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from "react-icons/fi";
import { UseDispatch, useDispatch } from 'react-redux';
import { addToWishies, removeFromWishies } from '../../context/wishiesSlice'


function Products({ data }) {

  const dispatch = useDispatch()
  return (
    <div className='container'>
      <h2 className='product__heading'>Arzon narxlar <span>&#10095;</span></h2>

      <div className="wrapper">
        {
          data.map((el) => (
            <div key={el._id} className="card">
              <div className="card__image">
                <img src={el.url[0]} alt="" />
                <div onClick={() => dispatch(addToWishies(el))} className="card__heart">
                  <FaRegHeart />
                </div>
              </div>
              <div className="card__body">
                <h3 className='card__title'>{el.title}</h3>
                <mark>{(el.price * 1.5 / 12)?.brm()} so'm</mark>
                <div className="card__prices">
                  <div className='card__price-item'>
                    <del>{(el.price * 1.2)?.brm()} so'm</del>
                    <p>{el.price?.brm()} so'm</p>
                  </div>
                  <div className='card__cart'>
                    <FiShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products