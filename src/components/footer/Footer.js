import React from 'react'
import './Footer.css'
import { FaInstagram, FaYoutube, FaTelegram, FaFacebook, FaApple, FaGooglePlay } from "react-icons/fa";


function Footer() {
  return (
    // SITE-FOOTER-START
    <div className='footer'>
      <div className="container">
        <div className="footer__container">
          <div className='footer__container-internal-wrapper'>
            <h4 className='footer__container-title'>Biz haqimizda</h4>
            <ul className='footer__container-list'>
              <li className='footer__container-item'>
                <a className='footer__container-link' href="#">Topshirish punktlari</a>
              </li>
              <li className='footer__container-item'>
                <a className='footer__container-link' href="#">Vakansiyalar</a>
              </li>
            </ul>
          </div>

          <div className='footer__container-internal-wrapper'>
            <h4 className='footer__container-title'>Foydalanuvchilarga</h4>
            <ul className='footer__container-list'>
              <li className='footer__container-item'>
                <a className='footer__container-link' href="#">Biz bilan boglanish</a>
              </li>
              <li className='footer__container-item'>
                <a className='footer__container-link' href="#">Savol-javob</a>
              </li>
            </ul>
          </div>

          <div className='footer__container-internal-wrapper'>
            <h4 className='footer__container-title'>Tadbirkorlarga</h4>
            <ul className='footer__container-list'>
              <li className='footer__container-item'>
                <a className='footer__container-link' href="#">uzumdan soting</a>
              </li>
              <li className='footer__container-item'>
                <a className='footer__container-link' href="#">Sotuvchi kabinetiga kirish</a>
              </li>
            </ul>
          </div>

          <div className='footer__container-internal-wrapper'>
            <h4 className='footer__container-social-title footer__container-title'>Ilovani yuklab olish</h4>
            <ul className='footer__container-social-list'>
              <li className='footer__container-social-item'>
                <a className='footer__container-social-link' href="#"><FaApple /></a>
                <span>AppStore</span>
              </li>
              <li className='footer__container-social-item'>
                <a className='footer__container-social-link' href="#"><FaGooglePlay /></a>
                <span>GooglePlay</span>
              </li>
            </ul>

            {/* Footer-container-bottom */}
            <div className='footer__container-internal-wrapper-bottom'>
              <h4 className='footer__container-bottom-contact-title footer__container-title' >Uzum ijtimoiy tarmoqlarda</h4>
              <ul className='footer__container-bottom-contact-list'>
                <li className='footer__container-bottom-contact-item'>
                  <a className='footer__container-bottom-contact-link' href="#"><FaInstagram /></a>
                </li>
                <li className='footer__container-bottom-contact-item'>
                  <a className='footer__container-bottom-contact-link' href="#"><FaTelegram /></a>
                </li>

                <li className='footer__container-bottom-contact-item'>
                  <a className='footer__container-bottom-contact-link' href="#"><FaYoutube /></a>
                </li>

                <li className='footer__container-bottom-contact-item'>
                  <a className='footer__container-bottom-contact-link' href="#"><FaFacebook /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        {/* SITE-FOOTER-BOTTOM-START */}
        <div className="footer__bottom">
          <div className="footer__bottom-polisy">
            <div className='footer__bottom-polisy-container'>
              <a className='footer__bottom-polisy-link footer__container-title' href=""> Maxfiylik kelishuvi</a>
              <a className='footer__bottom-polisy-link footer__container-title' href=""> Foydalanuvchi kelishuvi  </a>
            </div>
            <div className='footer__bottom-copyright'>
              <p className='footer__bottom-copyright-text footer__container-link'> «2024© ООО «UZUM MARKET». ИНН 309376127. Все права защищены» </p>
            </div>
          </div>
        </div>
      </div >
    </div >
    //  SITE-FOOTER-END
  )
}

export default Footer