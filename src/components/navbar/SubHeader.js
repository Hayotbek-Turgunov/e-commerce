import React from 'react'
import './Navbar.css'
import { CiLocationOn } from "react-icons/ci";

function SubHeader() {
  return (
    <div className='subheader'>
      <div className="container subheader__wrapper">
        <div className="subheader__item">
          <CiLocationOn />
          <p className='subheader__item-region '>
            SHahar:
            <span className='subheader__item-region-text'>
              Namangan
            </span>
          </p>
        </div>
        <div className="subheader__item">
          <p>Buyurtmangizni bir kunda yetkazib beramiz</p>
        </div>
        <div className="subheader__item">
          <p>Buyurtmalarim</p>
        </div>
      </div>
    </div>
  )
}

export default SubHeader