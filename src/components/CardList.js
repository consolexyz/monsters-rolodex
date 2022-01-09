import React from 'react';
import './Card-list.css';
import Card from './Card';
 const CardList = props =>  (
     
        <div className='card-list'>
                {/* map the data  */}
        {props.users.map(user =>  
        <Card key={ user.id} user={user}/>) 
        } {/* and pass in the data as props into the card component */}
        </div>
    )

export default CardList 


