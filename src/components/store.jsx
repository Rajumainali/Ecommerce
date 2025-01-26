import React,{useState,useEffect}from 'react'
import './store.css'
import { IoIosSearch } from "react-icons/io";
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { FaRegEye } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Footer from './Footer';
import { FaRegHeart } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
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
  const [url, setUrl] = useState("http://localhost/api/index.php/"); // Default URL
  const[count,setcount] =useState(0);
  const[total, settotal] = useState(0);
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        if(url==='http://localhost/api/index.php/'){
          settotal(data.length);
        }else{
          setcount(data.length)
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, [url]); // Refetch data whenever the URL changes



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
      <span>Home & Lifestyle</span>
      <span onClick={() => setUrl("https://fakestoreapi.com/products/category/electronics")} >Electronic Accessories</span>
      <span>Sports and Outdoor</span>
      <span onClick={() => setUrl("https://fakestoreapi.com/products/category/men's clothing")}>Men's Fashion</span>
      <span onClick={() => setUrl("https://fakestoreapi.com/products/category/jewelery")}>Watches & Accessories</span>
      <span onClick={() => setUrl("https://fakestoreapi.com/products/category/women's clothing")}>Women's Fashion</span>
      <span>Health & Beauty</span>
    </div>
    <div className="price">
      <h1>Filter by price</h1>
<Slider defaultValue={50}  min={0}
  max={300} onChange={run} aria-label="Default" valueLabelDisplay="auto" color="success"/>
 <Button variant="contained"  color="success" >Filter</Button>
   <span id='only'>Price:$0-${unsetprice}</span> 
    </div>
    </div>
     
     <div className="right_aside">
      <div className="top">
      <div className="left">  <button onClick={()=>{setcount(0);setUrl("https://fakestoreapi.com/products")}}><GrPowerReset size={"20px"} /></button>
      <span className='reset'>Reset</span>
      Showing {count==0?total:count} of {total} results
      </div>
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
         <p className="product-price">${product.price}</p>
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
