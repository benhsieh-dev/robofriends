import React from 'react';
import './cardlist.css';
import Card from './Card'; 

const Cardlist = ({robots}) => {

    return (
      <div>
        {robots.map((user, idx) => {
          return (
            <Card
              key={idx}
              id={robots[idx].id}
              name={robots[idx].name}
              email={robots[idx].email}
            />
          );
        })}
      </div>
    );
}


export default Cardlist; 
