import React from 'react'
 import './Card-list.css';


const Card  = props =>
     (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}/>
                <h2>{props.user.name}</h2>
                 <p>{props.user.email}</p>
        </div>
    );

export default Card
