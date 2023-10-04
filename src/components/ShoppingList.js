import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // state for select element
  let [ category, setCategory ] = useState('All')

  let changeCategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          if (category === 'All'){
            return <Item key={item.id} name={item.name} category={item.category} />
          } else if (item.category === category) {
            return <Item key={item.id} name={item.name} category={item.category} />
          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
