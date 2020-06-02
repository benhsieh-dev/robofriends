import React from 'react';
import './cardlist.css';
import Card from './Card'; 

const Cardlist = ({robots}) => {

    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
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
