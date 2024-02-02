import React from 'react'
import Empty from '../../components/empty/Empty'

function Cart() {
  return (
    <div className='cart'>
      <div className="container">
        <Empty
          title="Savatda hozircha ma-hsulot yoʻq"
          url="https://uzum.uz/static/img/shopocat.490a4a1.png"
          desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
          btnTitle="Bosh sahifa"
          link="/"
        />
      </div>
    </div>
  )
}

export default Cart