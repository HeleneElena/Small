import style from './Options.module.css';

export const Options = () => {
  return  (<div className={style.options}>
  <ul className={style.options__list}>
      <li className={style.options__list_item}>
          <button>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.325 41.6575C50.5622 40.1259 51.2411 38.2188 51.25 36.25C51.25 33.9294 50.3281 31.7038 48.6872 30.0628C47.0462 28.4219 44.8206 27.5 42.5 27.5C40.1794 27.5 37.9538 28.4219 36.3128 30.0628C34.6719 31.7038 33.75 33.9294 33.75 36.25C33.7589 38.2188 34.4378 40.1259 35.675 41.6575C33.3818 42.8346 31.4281 44.5791 30 46.725C28.5719 44.5791 26.6182 42.8346 24.325 41.6575C25.5622 40.1259 26.2411 38.2188 26.25 36.25C26.25 33.9294 25.3281 31.7038 23.6872 30.0628C22.0462 28.4219 19.8206 27.5 17.5 27.5C15.1794 27.5 12.9538 28.4219 11.3128 30.0628C9.67187 31.7038 8.75 33.9294 8.75 36.25C8.75888 38.2188 9.4378 40.1259 10.675 41.6575C8.21642 42.9137 6.15225 44.8241 4.70984 47.1783C3.26743 49.5325 2.50274 52.2391 2.5 55C2.5 55.663 2.76339 56.2989 3.23223 56.7678C3.70107 57.2366 4.33696 57.5 5 57.5H55C55.663 57.5 56.2989 57.2366 56.7678 56.7678C57.2366 56.2989 57.5 55.663 57.5 55C57.4973 52.2391 56.7326 49.5325 55.2902 47.1783C53.8478 44.8241 51.7836 42.9137 49.325 41.6575ZM17.5 32.5C18.2417 32.5 18.9667 32.7199 19.5834 33.132C20.2001 33.544 20.6807 34.1297 20.9645 34.8149C21.2484 35.5002 21.3226 36.2542 21.1779 36.9816C21.0333 37.709 20.6761 38.3772 20.1517 38.9017C19.6272 39.4261 18.959 39.7833 18.2316 39.9279C17.5042 40.0726 16.7502 39.9984 16.0649 39.7145C15.3797 39.4307 14.794 38.9501 14.382 38.3334C13.9699 37.7167 13.75 36.9917 13.75 36.25C13.75 35.2554 14.1451 34.3016 14.8483 33.5983C15.5516 32.8951 16.5054 32.5 17.5 32.5V32.5ZM7.815 52.5C8.36749 50.3512 9.6189 48.4471 11.3723 47.0876C13.1256 45.728 15.2813 44.9901 17.5 44.9901C19.7187 44.9901 21.8744 45.728 23.6278 47.0876C25.3811 48.4471 26.6325 50.3512 27.185 52.5H7.815ZM42.5 32.5C43.2417 32.5 43.9667 32.7199 44.5834 33.132C45.2001 33.544 45.6807 34.1297 45.9645 34.8149C46.2484 35.5002 46.3226 36.2542 46.1779 36.9816C46.0333 37.709 45.6761 38.3772 45.1516 38.9017C44.6272 39.4261 43.959 39.7833 43.2316 39.9279C42.5042 40.0726 41.7502 39.9984 41.0649 39.7145C40.3797 39.4307 39.794 38.9501 39.382 38.3334C38.9699 37.7167 38.75 36.9917 38.75 36.25C38.75 35.2554 39.1451 34.3016 39.8483 33.5983C40.5516 32.8951 41.5054 32.5 42.5 32.5ZM32.815 52.5C33.3675 50.3512 34.6189 48.4471 36.3722 47.0876C38.1256 45.728 40.2813 44.9901 42.5 44.9901C44.7187 44.9901 46.8744 45.728 48.6277 47.0876C50.3811 48.4471 51.6325 50.3512 52.185 52.5H32.815ZM15 5V20C15 20.663 15.2634 21.2989 15.7322 21.7678C16.2011 22.2366 16.837 22.5 17.5 22.5H24.6625L28.08 26.6025C28.3146 26.8839 28.6082 27.1102 28.94 27.2655C29.2718 27.4209 29.6337 27.5014 30 27.5014C30.3663 27.5014 30.7282 27.4209 31.06 27.2655C31.3918 27.1102 31.6854 26.8839 31.92 26.6025L35.3375 22.5H42.5C43.163 22.5 43.7989 22.2366 44.2678 21.7678C44.7366 21.2989 45 20.663 45 20V5C45 4.33696 44.7366 3.70107 44.2678 3.23223C43.7989 2.76339 43.163 2.5 42.5 2.5H17.5C16.837 2.5 16.2011 2.76339 15.7322 3.23223C15.2634 3.70107 15 4.33696 15 5V5ZM20 7.5H40V17.5H34.1675C33.8008 17.4995 33.4386 17.5796 33.1063 17.7347C32.7741 17.8898 32.48 18.1161 32.245 18.3975L30 21.095L27.75 18.3975C27.5155 18.1167 27.2223 17.8908 26.8909 17.7357C26.5596 17.5807 26.1983 17.5002 25.8325 17.5H20V7.5Z" fill="black"/>
              </svg>
          </button>
      </li>
      <li className={style.options__list_item}>
          <button>
              <svg width="40" height="54" viewBox="0 0 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1718 36.8685L5.5 45.4164V6H34.5V45.4164L23.8282 36.8685L23.8282 36.8685L23.8225 36.864C22.6832 35.9785 21.4042 35.5287 20 35.5287C18.5958 35.5287 17.3168 35.9785 16.1775 36.864L16.1775 36.8639L16.1718 36.8685ZM39.2494 50.3485L39.25 50.3361V50.3237V3.625C39.25 2.95977 39.0317 2.37836 38.5767 1.92332C38.1216 1.46828 37.5402 1.25 36.875 1.25H3.125C2.45977 1.25 1.87836 1.46828 1.42332 1.92332C0.968282 2.37836 0.75 2.95977 0.75 3.625V50.3237V50.3361L0.750614 50.3485C0.773572 50.8114 0.893985 51.2348 1.13053 51.5995C1.36755 51.9648 1.7035 52.2439 2.11509 52.444C2.52758 52.6446 2.9554 52.7351 3.38912 52.69C3.82194 52.6449 4.22564 52.4684 4.59687 52.19L4.60293 52.1855L4.60885 52.1807L19.1355 40.5819C19.1362 40.5813 19.1369 40.5808 19.1375 40.5803C19.4037 40.3735 19.6864 40.2769 20 40.2769C20.3136 40.2769 20.5963 40.3735 20.8625 40.5803C20.8631 40.5808 20.8638 40.5813 20.8645 40.5819L35.3911 52.1807L35.3971 52.1855L35.4031 52.19C35.7744 52.4684 36.1781 52.6449 36.6109 52.69C37.0446 52.7351 37.4724 52.6446 37.8849 52.444C38.2965 52.2439 38.6325 51.9648 38.8695 51.5995C39.106 51.2348 39.2264 50.8114 39.2494 50.3485Z" fill="black" stroke="black"/>
                  </svg>
          </button>
      </li>
      <li className={style.options__list_item}>
          <button>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.0003 52H24.5003V52.5C24.5003 53.9587 25.0798 55.3576 26.1112 56.3891C27.1427 57.4205 28.5416 58 30.0003 58C31.459 58 32.8579 57.4205 33.8894 56.3891C34.9208 55.3576 35.5003 53.9587 35.5003 52.5V52H35.0003H25.0003ZM7.22835 46.1488L7.69029 45.9575L7.22842 46.149C7.45565 46.6971 7.84028 47.1654 8.33369 47.4949C8.82706 47.8244 9.40704 48.0001 10.0003 48C10.0003 48 10.0004 48 10.0004 48H50.0003H50.0004C50.5936 47.9999 51.1735 47.8239 51.6668 47.4942C52.16 47.1646 52.5444 46.6961 52.7714 46.148C52.9984 45.5999 53.0578 44.9968 52.9421 44.4149C52.8264 43.833 52.5408 43.2986 52.1214 42.879L52.1213 42.8789L48.0003 38.7579V25V24.999C47.992 20.6753 46.429 16.4987 43.5965 13.2319C40.8587 10.0744 37.1117 7.97042 33.0003 7.27258V5C33.0003 4.20435 32.6842 3.44129 32.1216 2.87868C31.559 2.31607 30.7959 2 30.0003 2C29.2046 2 28.4416 2.31607 27.879 2.87868C27.3164 3.44129 27.0003 4.20435 27.0003 5V7.27258C22.8889 7.97042 19.1418 10.0744 16.4041 13.2319C13.5716 16.4987 12.0086 20.6753 12.0003 24.999V25V38.7579L7.87935 42.8788C7.87931 42.8789 7.87927 42.8789 7.87924 42.8789C7.4595 43.2985 7.17361 43.833 7.05774 44.4151C6.94186 44.9971 7.00123 45.6005 7.22835 46.1488ZM42.0003 40.0001C42.0005 40.74 42.2739 41.4516 42.7647 42H17.2359C17.7267 41.4516 18.0001 40.74 18.0003 40.0001V40V25C18.0003 21.8174 19.2646 18.7652 21.515 16.5147C23.7654 14.2643 26.8177 13 30.0003 13C33.1829 13 36.2351 14.2643 38.4856 16.5147C40.736 18.7652 42.0003 21.8174 42.0003 25V40V40.0001Z" fill="black" stroke="black"/>
              </svg>
          </button>
      </li>
      <li className={style.options__list_item}>
          <button>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="8" width="50" height="10" rx="5" fill="black"/>
                  <rect x="5" y="25" width="50" height="10" rx="5" fill="black"/>
                  <rect x="5" y="42" width="50" height="10" rx="5" fill="black"/>
                  </svg>
          </button>
      </li>
    
  </ul>
</div>)
};