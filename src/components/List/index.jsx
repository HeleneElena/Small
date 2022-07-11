import React from "react";
import './List.scss';

const List = ({ items }) => {
    return (
        <ul className="list">
            {
                items.map(el => 
                    <li className={el.active ? 'active' : ''} >
                        <i>
                            <i>{el.icon ? (
                                el.icon
                                ) : (
                                <i className={`badge badge--${el.color}`} ></i> 
                                )} </i>
                            <span className='span'>{el.name}</span>
                        </i>
                    </li>
                )
            }
          
        </ul>
    );
}

export default List;