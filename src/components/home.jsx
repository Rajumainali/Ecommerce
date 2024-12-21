import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay} from "swiper/modules";
import "swiper/css/pagination";
import ad1 from "../assets/soon.png";
import ad2 from "../assets/shoes1.png";
import ad3 from "../assets/shoes.png";
import ad4 from "../assets/image3.jpg";
import ad5 from "../assets/image4.jpg";
import { MdOutlineHighQuality } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuLeaf } from "react-icons/lu";
import { GoNorthStar } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
 import { TiSocialFacebook } from "react-icons/ti";
 import {RiInstagramFill} from "react-icons/ri";
 import { FaGooglePlusG } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const color={
   color:"green"
  }
  const styl = {
    fontWeight: "bold", 
    color: "black"
  
  }

  const sty = {
    width: "80%",
    height: "300px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginLeft: "120px",
  };

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
             autoplay={{
          delay: 3000, // Auto-swipes every 3 seconds
          disableOnInteraction: false, // Continues auto-swiping even after user interaction
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={ad1} style={sty} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ad2} style={sty} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ad3} style={sty} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ad4} style={sty} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ad5} style={sty} alt="" />
        </SwiperSlide>
      </Swiper>

      {/* Why Choose Us Section */}
      <div className="choose-container">
        <div className="secondbox">
          <div className="leftone">
            <h1>
              <span>Why</span> Choose Us ?
            </h1>
            <p>
              We don’t believe in one-size-fits-all. Every eCommerce website we
              create is tailored to your brand, audience, and business goals.
            </p>
          </div>
        </div>
        <div className="firstbox">
          <div className="detail-container">
            <div className="detail">
              <h5>
                <MdOutlineHighQuality size={"50px"} color="green" />
                Premium Quality Products
              </h5>
              <p>
                We offer high-quality, durable clothing and essential products,
                carefully curated to ensure comfort, style, and value for your
                money.
              </p>
            </div>
            <div className="detail">
              <h5>
                <CiDeliveryTruck size={"50px"} color="green" />
                Fast & Free Shipping
              </h5>
              <p>
                Enjoy quick and hassle-free delivery with free shipping on all
                orders above rs50.
              </p>
            </div>
            <div className="detail">
              <h5>
                <LuLeaf size={"50px"} color="green" />
                Sustainable Fashion
              </h5>
              <p>
                Our products are sourced responsibly, prioritizing
                sustainability and eco-friendly materials to protect the planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="featured-product">
        <div className="featured-container">
          <h1>Featured Product</h1>
          <div className="lines">
            <div className="left"></div>
            <div className="astrick">
              <GoNorthStar size={"40px"} color="Green" />
            </div>
            <div className="right"></div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="product-container">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
          <div className="Daily-product">
        <div className="Daily-container">
          <h1>Daily Deal</h1>

          <div className="lines">
            <div className="left"></div>
            <div className="astrick">
              <GoNorthStar size={"40px"} color="Green" />
            </div>
            <div className="right"></div>
          </div>
            <div className="time">
            <h2>0:0:0</h2>
            </div>
            <div className="period">
              <h5>Hours</h5>
              <h5>Minutes</h5>
              <h5>Seconds</h5>
            </div>
        </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
            autoplay={{
          delay: 3000, // Auto-swipes every 3 seconds
          disableOnInteraction: false, // Continues auto-swiping even after user interaction
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="icon-container">
                <div className="icon">
                  <FaRegHeart size={"20px"} color="#333" />
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
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
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
  );
};

export default Home;
