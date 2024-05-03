import React from 'react'
import ItemCard from './ItemCard';
const RestuarantMenuCard = ({menu}) => {
  // console.log(menu.itemCards)
  return (
      <>
         {menu.itemCards.map((item, index) => {
          return (
            <ItemCard key={item.card.info.id} item={item.card?.info}/>
          );
        })}
      </>
  )
}

export default RestuarantMenuCard