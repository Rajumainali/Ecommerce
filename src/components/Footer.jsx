import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
 import { TiSocialFacebook } from "react-icons/ti";
 import {RiInstagramFill} from "react-icons/ri";
 import { FaGooglePlusG } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoNorthStar } from "react-icons/go";

export default function Footer() {
    const styl = {
        fontWeight: "bold", 
        color: "black"
      
      }
      const color={
        color:"green"
       }
  return (
    <>
      <div className="suscription-section">
              <div className="featured-container">
              <h1>Subscribe Our Newsletter</h1>
              
              <div className="lines">
                <div className="left"></div>
                <div className="astrick">
                  <GoNorthStar size={"40px"} color="Green" />
                </div>
                <div className="right"></div>
              </div>
              <p className="para">Enter Your email address to join our mailing list and keep yourself update</p>
              <div className="mailing">
                <input type="text" name="" id="" placeholder="Enter your mail..." />
                <a href="#"><button>Shop Now <FaArrowRightLong /></button></a>
                </div>
            </div>
        
          </div>
          <footer className="footer">
            <div className="footer-container">
              <div className="contact-us">
                <h1>Contact-Us</h1>
            
            <span className="address"><h5 style={styl}>   <MdOutlineLocationOn size={"25px"}/>Address:Kathmandu-Kapan,44600 Nepal</h5></span>
               <h5> <MdOutlineLocalPhone size={"25px"}/>Phone : (+977) 9840026347</h5>
               <h5>   <HiOutlineMail size={"25px"}/>Email: Sabaikobajar@gmail.com</h5>
                 
                <h5 className="nohover">Follow us:   <TiSocialFacebook size={"25px"}/>  
                <FaTwitter  size={"25px"}/>
               <RiInstagramFill size={"25px"}/>
             <FaGooglePlusG size={"25px"} /></h5>
               
             
    
              </div>
              <div className="information">
                    <h1>Information</h1>
                <a href="#" className="product"><h5>New Products</h5></a>
                <a href="#" className="product"><h5>Top Sellers</h5></a>
                <a href="#" className="product"><h5>Our Blog</h5></a>
                <a href="#" className="product"><h5>About Our Shop</h5></a>
                <a href="#" className="product"><h5>Privacy policy</h5></a>
    
              </div>
              <div className="my-account">
                <a href="#" className="account"><h1>My-Account</h1></a>
                <a href="#" className="account"><h5>My account</h5></a>
                <a href="#" className="account"><h5>Discount</h5></a>
                <a href="#" className="account"><h5>Orders history</h5></a>
                <a href="#" className="account"><h5>Personal information</h5></a>
    
              </div>
              <div className="popular-tag">
                <h1>Popular-Tag</h1>
                <div className="buttons">
                  <button>Trend</button>
                  <button>Men's Product</button>
                  <button>Women's Product</button>
                  <button>Hot Product</button>
                  <button>Accessaries</button>
                  <button>Gaming</button>
                </div>
    
              </div>
            </div>
            <div className="footer-line">
              
            </div>
            <p> &copy; Copyright 2024 by <span style={color}>Sabaikobajar</span>- All right reserved</p>
    
          </footer>
    </>
  )
}
