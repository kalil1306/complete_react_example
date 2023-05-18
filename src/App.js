import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const data = [
  {
  productImage : "https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg",
  productName : "Apple Macbook Pro",
  productPrice : "Rs. 1,99,999",
  productRating : "8.9 Rating"
  },
  {
    productImage : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/pdp/laptop-xps-13-9320-pdp-hero-nonoled-sl.psd?fmt=png-alpha&wid=570&hei=400&fit=constrain%2C1&qlt=90",
    productName : "Dell XPS 13 - Inch",
    productPrice : "Rs. 1,29,999",
    productRating : "8.0 Rating"
  },
  {
    productImage : "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
    productName : "Asus Zenbook",
    productPrice : "Rs. 99,999",
    productRating : "7.9 Rating"
  },
  {
    productImage : "https://5.imimg.com/data5/SELLER/Default/2021/2/UY/YA/DI/122278461/microsoft-surface-pro-7-i7-16-512-500x500.jpg",
    productName : "Microsoft Surface Book",
    productPrice : "Rs. 89,998",
    productRating : "9.0 Rating"
  },
  {
    productImage : "https://m.media-amazon.com/images/I/716KdetNajL._SX569_.jpg",
    productName : "HP Pavillion 14-12th Gen",
    productPrice : "Rs. 66,700",
    productRating : "5.6 Rating"
  },
  {
    productImage : "https://cf.shopee.ph/file/f0baa7d837cbd4968d58a0dd4855afe2",
    productName : "SAMSUNG NT910S3L-M14 CHROME",
    productPrice : "Rs. 11,103",
    productRating : "4.8 Rating"
  }
]

function App() {

  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h2>Added to Cart {cartCount}</h2>
      </div>
      <div className='products'>
        {data.map((products, idx) => (
          <ProductCard
          key={idx} // so it will take the array index because its a unique value
          //you need to give the key value or else it will throw the error in the console
          productImage = {products.productImage}
          productName = {products.productName}
          productPrice = {products.productPrice}
          productRating = {products.productRating}
          cartCount = {cartCount}
          setCartCount = {setCartCount} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;

/*

Note : Whenever you return something you need to put inside the tag'<>'

props : meaning its a object the data where it is passed inside the App component that will
be called by the props with the help of dot walking see the below code

const props = {
  productImage : data.productImage,
  productName : data.productName,
  productPrice : data.productPrice,
  productRating : data.productRating
}

-------------------------------------
Object destructuring : **** remember the basics concept

const objectDestructure = {
    name : "Kalilur Rahman",
    age : 24
}

console.log(objectDestructure.name)

const {name, age} = objectDestructure
console.log(name, ":", age)

o/p :

Kalilur Rahman
Kalilur Rahman : 24

...............................................

How to destructure the props?

this is the way of destructuring the objects

const {productImage, productName, productPrice, productRating} = props
-----------------------------------------------------------------

whenver using list of objects and while you are trying to map you need to render
the key value as well because if any changes made into a obj, it doesnt know that
which product you changed 



*/

function ProductCard({productImage, productName, productPrice, productRating, cartCount, setCartCount}){

  const [show, setShow] = useState(true)
  console.log(show)
  
  /*

  show is variable and setShow is function

  useState : will work opposite to each click for example if they click it is true and
  again they click then opposite to true is false and again they click it will show as
  true and so on.

  let show = false
  setShow(data)
  function setShow(data){
    show = data;
  }
  setShow(true)

  Condition rendering : 
  Based on the true or false it will change the button for ec=xample if the condition is
  true it will show only the 'Add to Cart' but incase if the condtion is set to be false 
  it will show the 'Remove cart' button by default.

  As simple condition rendering means based on the boolean value, the functionality 
  will get triggers.
  ---------------------------------
  Note : 
  state and small function should be above the return
  inside the return only it should be jsx 

  even your state can be passed as a props by using the props as component

  */

  const handleAddToCart = () => {
    setShow(!show);
    setCartCount(cartCount + 1);
  }

  const handleRemoveCart = () => {
    setShow(!show);
    setCartCount(cartCount - 1);
  }

  return (
    <div className="card">
      <img 
      src= {productImage} 
      alt="productimage"/>
      {/* <h2> Product Image </h2> */}
      <div>
        <h3>{productName}</h3> 
        <p>{productPrice}</p>
        <p>{productRating}</p>
      </div>
      {show ? 
      <button style={{backgroundColor:"greenyellow", border:"none", color:"black", boxShadow: "1px 1px 3px black"}} onClick={handleAddToCart}> Add to Cart</button> 
      : 
      <button style={{backgroundColor:"lightcoral", border:"none", color:"black", boxShadow: "1px 1px 3px black"}} onClick={handleRemoveCart}> Remove Cart</button>}
      {/* 
      based on the 'show' variable set it will display the button
      <button> Add to Cart</button>
      <button> Remove Cart</button> 
      */}
    </div>
  )
}
