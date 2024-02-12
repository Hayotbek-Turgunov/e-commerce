import React, { useState, useRef, memo } from 'react'
import './CartProduct.css'

//contorolled and uncontolled form(component)
//controlled form = useState
//uncontrolled from useRef

const BOT_TOKEN = '6864903118:AAHurOj12Mv0EtlnxLVD3POCzOVTJcT22tM'
//https://api.telegram.org/bot6864903118:AAHurOj12Mv0EtlnxLVD3POCzOVTJcT22tM/getUpdates
const CHAT_ID = -4122646600
const USER_ID = 5866589375




function CartForm({ data }) {
  const [fullName, setFullName] = useState("")
  const tel = useRef()
  const address = useRef()
  const message = useRef()
  console.log('CartFrom render');



  const handleSumbit = (e) => {
    e.preventDefault()
    let text = 'Buyurtma %0A %0A '
    text += `Ism :${fullName} %0A`
    text += `Tel :${tel.current.value} %0A`
    text += `Adress :${address.current.value} %0A`
    text += `Xabar :${message.current.value} %0A`
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

    let api = new XMLHttpRequest()
    api.open('GET', url, true)
    api.send()
  }


  return (
    <div className="input__reg">
      <h3>Ma'lumotlarni to'ldiring:</h3>
      <form onSubmit={handleSumbit} action="">
        <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="To'liq ismingiz" />
        <input ref={tel} type="text" placeholder="+998 00-000-00-00" />
        <input ref={address} type="text" placeholder="Manzilingiz" />
        <input ref={message} type="text" placeholder="Habar yo'llash" />
        <div className="total">
          <p>Umumiy narx:</p>
          <p>Jami: {data.reduce((sum, item, index, arr) => sum + item.price * item.quantity, 0).brm()}</p>
        </div>
        <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
      </form>
    </div>
  )
}

export default memo(CartForm)