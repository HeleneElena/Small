import './Categories.scss';
import { useState } from 'react';

export const Categories = () => {
    const LIST = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [active, setActive] = useState(0);

    return (
        <div className="categories">
            <ul>
                {
                    LIST.map((el, i) => {
                        return <li key={i} 
                                   className={active === i ? "active" : ''}
                                   onClick={() => setActive(i)}
                        >{el}</li>
                    })
                }
            </ul>
        </div>
    );
};
