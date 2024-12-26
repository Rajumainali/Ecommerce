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
import { FaRegHeart } from "react-icons/fa6";
import "./home.css";
import Footer from "./footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
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
            ))
          )}
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
      >{loading ? (
        <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
       ) : (
        products.map((product) => (
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
        ))
      )}
      </Swiper>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
