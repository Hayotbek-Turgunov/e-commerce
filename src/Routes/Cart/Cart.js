import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector, useDispatch } from 'react-redux'
import CartProduct from '../../components/cart-product/CartProduct'

function Cart() {
  const carts = useSelector(state => state.carts.value)
  console.log(carts);
  return (
    <div className='h-70'>
      {
        carts.length ?
          <CartProduct data={carts} />
          :
          <Empty
            title="Savatda hozircha ma-hsulot yoʻq"
            url="https://uzum.uz/static/img/shopocat.490a4a1.png"
            desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
            btnTitle="Bosh sahifa"
            link="/"
          />
      }
    </div>
  )
}

export default Cart