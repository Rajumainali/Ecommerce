import React,{useState,useEffect}from 'react'
import './store.css'
import { IoIosSearch } from "react-icons/io";
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { FaRegEye } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Footer from './footer';
import { FaRegHeart } from "react-icons/fa6";
const Store = () => {
  const sty={
    display:'none'
  }
   const [loading, setLoading] = useState(true); // New loading state
  const sty1={
    display:'block'
  }
  const[unset,set] = useState(sty)
    const [products, setProducts] = useState([]);
  const show =()=>{
    set(sty1);
  }
  const clean =()=>{
   document.querySelector('#input').value=''
   set(sty)
  }
  const [unsetprice, setprice] = useState(50);
  const run = (e)=>{
    setprice(e.target.value)
  }
  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);
  return (
    <>
    <div className="storemain">
    <h1>Shop</h1>
    <span><a href="http://">Home /</a> Store</span>
    </div>
    <div className="aside">
    <div className='sidebar'>
    <div className="search-bar">
       <form action="" method="post">
        <input type="text" id='input' placeholder="Type here..." onChange={show} /></form>
        <span className="clear-btn" style={unset} onClick={clean}>&times;</span>
        <button className="search-btn"><IoIosSearch /></button></div>
        <div className='categories'>
        <h1>product cagegories</h1>
      <a href="">Home & Lifestyle</a>
      <a href="">Electronic Accessories</a>
      <a href="">Sports and Outdoor</a>
      <a href="">Men's Fashion</a>
      <a href="">Watches & Accessories</a>
      <a href="">Women's Fashion</a>
      <a href="">Health & Beauty</a>
    </div>
    <div className="price">
      <h1>Filter by price</h1>
<Slider defaultValue={50} onChange={run} aria-label="Default" valueLabelDisplay="auto" color="success"/>
 <Button variant="contained" color="success">Filter</Button>
   <span id='only'>Price:$0-${unsetprice}</span> 
    </div>
    </div>
     
     <div className="right_aside">
      <div className="top">
      <div className="left">Showing 1–9 of 24 results</div>
      <div className="right">Sort by:&nbsp;
        <select name="">
          <option value="">Default sorting</option>
          <option value="">Sorting By Number</option>
        </select>
      </div>
      </div>
       {/* Product Cards */}
              <div className="product-container">
              {loading ? (
           <div className="loading">
           <div className="spinner"></div>
           <p>Loading products...</p>
         </div>
          ) : (
                products.map((product) => (
                  <div key={product.id} className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="icon-container">
          <div className="icon">
            <FaRegHeart  size={"20px"} color="#333" />
          </div>
          <div className="icon">
            <FiShoppingCart size={"20px"} color="#333" />
          </div>
          <div className="icon">
            <FaRegEye size={"20px"} color="#333" />
          </div>
        </div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
                ))
              )}
              </div>
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default Store
