import React from 'react';
import Card from './Card'; 

// const CardList = ({robots}) => {

//     return (
//       <div>
//         {robots.map((user, idx) => {
//           return (
//             <Card
//               key={idx}
//               id={robots[idx].id}
//               name={robots[idx].name}
//               email={robots[idx].email}
//             />
//           );
//         })}
//       </div>
//     );
// }

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList; 
