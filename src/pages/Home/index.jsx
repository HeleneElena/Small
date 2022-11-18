import { useEffect, useState } from 'react';
import { Categories } from './../../components/Categories';
import { Sort } from './../../components/Sort';
import { PizzaBlock } from './../../components/PizzaBlock';

export const Home = () => {

    const [elem, setElem] = useState([]);

    useEffect(() => {
        fetch('https://63778c4d5c4777651220e948.mockapi.io/pizzas')
        .then(res => res.json())
        .then(arr => setElem(arr));
    }, []);

    return (
       <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              elem.map(obj => {
                return <PizzaBlock key={obj.id} {...obj} />
              })
            }
          </div>
        </div>
      </div>
    );
};