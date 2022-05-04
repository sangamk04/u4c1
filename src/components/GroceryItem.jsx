// import GroceryDetails from "./Grocerydetails";
import React from 'react'
import CartButton from "./CartButton";

// reusable card component
const GroceryItem = (props) => {
      console.log(props)
      const {discount,id,imgURL,mrp,sellingPrice,title} = props;
  return <>
  <div>

<img src={imgURL} alt="" />
<h1>{title}</h1>
<p>{mrp}</p>
{/* <CartButton/> */}
  </div>

  </>;
};
export default GroceryItem;
