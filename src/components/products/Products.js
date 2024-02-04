import React from 'react'
import './Products.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishies, removeFromWishies } from '../../context/wishiesSlice'
import { Link } from 'react-router-dom';


function Products({ data }) {
  const dispatch = useDispatch()
  let wishes = useSelector(state => state.wishes.value)
  return (
    <div className='container'>
      <h2 className='product__heading'>Arzon narxlar <span>&#10095;</span></h2>

      <div className="wrapper">
        {
          data.map((el) => (
            <div key={el._id} className="card">
              <div className="card__image">
                <Link to={`/product/${el._id}`}>
                  <img src={el.url[0]} alt="" />
                </Link>
                {
                  wishes?.some((item) => item._id === el._id) ?
                    <div onClick={() => dispatch(removeFromWishies(el))} className="card__heart">
                      <FaHeart />
                    </div>
                    :
                    <div onClick={() => dispatch(addToWishies(el))} className="card__heart">
                      <FaRegHeart />
                    </div>
                }
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