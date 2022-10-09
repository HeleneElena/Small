import style from './Location2.module.css';
import { ReactComponent as SearchSvg} from '../img/search.svg';
import banner from '../img/banner.jpg';
import { TextLocation } from './TextLocation/TextLocation';
import ReactDOM from 'react-dom';
import {ReactComponent as CloseSvg} from './img/close.svg';
import { useEffect, useCallback } from 'react';
import { PropTypes } from 'prop-types';

export const Location2 = ({closeModal}) => {

  const escFunction = useCallback(e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  return closeModal && ReactDOM.createPortal(
    <div className={style.overlay}>
      <div className={style.modal}> 
      <img className={style.img} src={banner} alt='banner'/>
      <h3 className={style.title}>лОКация</h3>
      <div className={style.wrapper}>
        <input 
          type="text" 
          name="name" 
          className={style.search}
        >
        </input>
        <SearchSvg className={style.svgSearch} width={60} height={70}/>
      </div>
      <TextLocation />
      <button className={style.close} onClick={closeModal}>
        <CloseSvg />
        </button>
      </div>
      </div>,
    document.getElementById('modal-root'),
  );
};

Location2.propTypes = {
  closeModal: PropTypes.func,
};