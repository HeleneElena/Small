import style from './Footer.module.css';
import FooterLogo from './img/billboard.png';

export const Footer = () => {
  return (
    <footer className={style.footer}>
            <div className={style.container}>
            
              <div className={style.footer__columns}>
                <div className={style.footer__colum}>
                    <div className={style.logo__item}>
                        <img className={style.logo__item_img} src={FooterLogo} alt="Логотип приложения WTG"/>
                        <p className={style.logo__item_text}></p>
                  </div>
                </div>
                  <div className={style.footer__column}>
                    <h3 className={style.footer__title}>Выбор за Вами:</h3>
                      <ul className={style.footer__list}>
                          <li className={style.footer__item}>
                              <a href="#events" className={style.footer__link}>События</a>
                          </li>
                          <li className={style.footer__item}>
                              <a href="#locations" className={style.footer__link}>Локации</a>
                          </li>
                          <li className={style.footer__item}>
                              <a href="#roads" className={style.footer__link}>Маршруты</a>
                          </li>
                          <li className={style.footer__item}>
                            <a href="#rest" className={style.footer__link}>Отдых</a>
                          </li>
                      </ul>
                  </div>
                  <div className={style.footer__column}>
                      <h3 className={style.footer__title}>Адрес организации:</h3>
                      <p className={style.footer__description}>г.&nbsp;Краснодар, ул.&nbsp;Производственная 104/3 1&nbsp;этаж</p>
                  </div>
                  <div className={`${style.footer__column} ${style.contacts}`}>
                      <h3 className={style.footer__title}>Контакты:</h3>
                     <div className={`${style.contacts__list} ${style.footer__link_box}`}>
                        <a className={style.contacts__link} href="tel:+7800757575">
                              <svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                                  fill="currentColor"/>
                              </svg>
                              <span className={style.contacts__link_text}>+780075757577</span>
                          </a>   
                          
                          <a className={style.contacts__link} href="mailto:ETrans@gmail.com">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z" fill="#B8FF20"/>
                              </svg>
                              <span className={style.contacts__link_text}>wtg@gmail.com</span>
                          </a>
                     </div>
                      
                      <ul className={style.contacts__social}>
                           <li className={style.social__item}>
                               <a className={style.footer__link_social} href="#">
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="23" cy="23" r="23" fill="#B8FF20"/>
                                  <path d="M38.5239 13.5827C37.4106 14.076 36.2146 14.4094 34.9573 14.56C36.2546 13.7837 37.2252 12.562 37.6879 11.1227C36.4691 11.8467 35.1351 12.3563 33.7439 12.6294C32.8084 11.6305 31.5693 10.9685 30.219 10.746C28.8687 10.5235 27.4827 10.7531 26.2763 11.399C25.0698 12.045 24.1103 13.0712 23.5468 14.3183C22.9833 15.5654 22.8473 16.9637 23.1599 18.296C20.6902 18.172 18.2741 17.5301 16.0685 16.4119C13.8629 15.2937 11.9171 13.7242 10.3573 11.8054C9.82393 12.7254 9.51727 13.792 9.51727 14.928C9.51667 15.9507 9.76851 16.9577 10.2504 17.8597C10.7324 18.7617 11.4295 19.5307 12.2799 20.0987C11.2936 20.0673 10.3291 19.8008 9.4666 19.3214V19.4014C9.4665 20.8357 9.96264 22.2259 10.8708 23.336C11.779 24.4462 13.0434 25.2079 14.4493 25.492C13.5343 25.7396 12.5751 25.7761 11.6439 25.5987C12.0406 26.8328 12.8133 27.9121 13.8538 28.6853C14.8943 29.4585 16.1505 29.8869 17.4466 29.9107C15.2464 31.6379 12.5291 32.5748 9.73193 32.5707C9.23644 32.5708 8.74137 32.5419 8.24927 32.484C11.0886 34.3096 14.3937 35.2785 17.7693 35.2747C29.1959 35.2747 35.4426 25.8107 35.4426 17.6027C35.4426 17.336 35.4359 17.0667 35.4239 16.8C36.639 15.9213 37.6878 14.8332 38.5213 13.5867L38.5239 13.5827Z" fill="white"/>
                                  </svg>
                               </a>
                           </li>
                           <li className={style.social__item}>
                              <a className={style.footer__link_social} href="#">
                                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="23" cy="23" r="23" fill="currentColor"/>
                                      <path d="M36.9187 13.1625L32.6937 33.0875C32.375 34.4937 31.5437 34.8438 30.3625 34.1812L23.925 29.4375L20.8187 32.425C20.475 32.7687 20.1875 33.0562 19.525 33.0562L19.9875 26.5L31.9187 15.7188C32.4375 15.2563 31.8062 15 31.1125 15.4625L16.3625 24.75L10.0125 22.7625C8.63121 22.3313 8.60621 21.3813 10.3 20.7188L35.1375 11.15C36.2875 10.7188 37.2937 11.4063 36.9187 13.1625Z" fill="white"/>
                                  </svg>
                               </a>
                           </li> 
                      </ul>
                  </div>                     
                  </div>
                  <p className={style.footer__copyright}>© City Events, 2022</p>
              </div> 
  </footer> 
  );
}