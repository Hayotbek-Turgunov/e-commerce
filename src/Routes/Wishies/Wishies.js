import React from 'react'
import Empty from '../../components/empty/Empty'

function Wishies() {
  return (
    <div className='wishies'>
      <div className="container">
        <Empty
          title="Sizga yoqqanini qoʻshing"
          url="https://uzum.uz/static/img/hearts.cf414be.png"
          desc="Mahsulotdagi belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
          btnTitle="Akkountga kirish"
          link="/login"
        />
      </div>
    </div>
  )
}

export default Wishies