import React from 'react'
import './SingleRoute.css'
import { useParams } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SingleRoute({ data }) {
  const params = useParams()
  const cardItem = data.find((el) => el._id === params.id)
  console.log(cardItem);



  return (
    <div className='single'>
      <div className="container">
        <div className="single__info">
          <div className="single__info-container">
            <div className="single__info-img-container">
              <div className="single__info-navigatin-img">
                <div className="single__info-nav-item">
                  <img className='single__info-nav-item-img' src={cardItem.url[0]} alt="" />
                </div>

                <div className="single__info-nav-item">
                  <img className='single__info-nav-item-img' src={cardItem.url[0]} alt="" />
                </div>

                <div className="single__info-nav-item">
                  <img className='single__info-nav-item-img' src={cardItem.url[0]} alt="" />
                </div>

              </div>
              <div className="single__info-main-img">
                <img className='single__info-img-main' src={cardItem.url[0]} alt="" />
              </div>
            </div>

            {/* SINGLE-INFO-PRODUCT */}
            <div className="single__info-product">
              <h3 className='single__info-product-heading'>{cardItem.title}</h3>
              <p className='single__info-product-price-title'>Narx:</p>
              <p className='single__info-product-price'>{cardItem.price.brm()} So'm</p>
              <del>{cardItem.price * 1.2}</del>
              <button className='single__info-product-action'>aksiya</button>
              <br />
              <hr className='single__info-product-line' />

              <div className="single__info-product-credit-wrapper">
                <div className="single__info-product-credit-text">
                  <span className='single__info-product-credit-per-month'>
                    Oyiga
                    <span className='single__info-product-credit-currensy'>760</span>
                  </span>
                  muddatli to'lov
                </div>

                <div className='single__product-credit-icon'>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>

              {/* SINGLE-INFO-PRODUCT-BTN */}

              <div className="single__info-product-btn-wrapper">
                <button className='single__info-product-btn-basket'>Savatga qo'shish</button>
                <button className='single__info-product-btn'>Tugmani bir bosishda xarid qilish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRoute