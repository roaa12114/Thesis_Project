import React from "react";
import "./card.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Card = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h3>Products we offer</h3>
      </div>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="card-container">
          <img src="/imges/2.jpg" alt="Product" className="card-img" />
          <h1>Modern Chair</h1>
          <p>
            This modern chair is perfect for your living room or office. Click
            to view more details.
          </p>
          <div className="icons">
            <a href="cardPage">View</a>
            <FaHeart
              className="icon1"
              size={30}
              style={{ marginRight: "10px" }}
            />
            <FaShoppingCart className="icon2" size={30} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-container">
          <img src="/imges/2.jpg" alt="Product" className="card-img" />
          <h1>Stylish Sofa</h1>
          <p>
            A stylish sofa to make your home more comfortable. Check it out for
            more information.
          </p>
          <div className="icons">
            <a href="cardPage">View</a>
            <FaHeart
              className="icon1"
              size={30}
              style={{ marginRight: "10px" }}
            />
            <FaShoppingCart className="icon2" size={30} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-container">
          <img src="/imges/1.jpg" alt="Product" className="card-img" />
          <h1>Minimalist Chair</h1>
          <p>
            This minimalist chair design blends perfectly with any modern decor.
            View more details.
          </p>
          <div className="icons">
            <a href="cardPage">View</a>
            <FaHeart
              className="icon1"
              size={30}
              style={{ marginRight: "10px" }}
            />
            <FaShoppingCart className="icon2" size={30} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="card-container">
          <img src="/imges/1.jpg" alt="Product" className="card-img" />
          <h1>Classic Table</h1>
          <p>
            A classic wooden table that complements any dining room. Click for
            more details.
          </p>
          <div className="icons">
            <a href="cardPage">View</a>
            <FaHeart
              className="icon1"
              size={30}
              style={{ marginRight: "10px" }}
            />
            <FaShoppingCart className="icon2" size={30} />
          </div>
        </div>

        {/* Card 5 */}
        <div className="card-container">
          <img src="/imges/1.jpg" alt="Product" className="card-img" />
          <h1>Classic Table</h1>
          <p>
            A classic wooden table that complements any dining room. Click for
            more details.
          </p>
          <div className="icons">
            <a href="cardPage">View</a>
            <FaHeart
              className="icon1"
              size={30}
              style={{ marginRight: "10px" }}
            />
            <FaShoppingCart className="icon2" size={30} />
          </div>
        </div>

        {/* Card 6 */}
        <div className="card-container">
          <img src="/imges/1.jpg" alt="Product" className="card-img" />
          <h1>Classic Table</h1>
          <p>
            A classic wooden table that complements any dining room. Click for
            more details.
          </p>
          <div className="icons">
            <a href="cardPage">View</a>
            <FaHeart
              className="icon1"
              size={30}
              style={{ marginRight: "10px" }}
            />
            <FaShoppingCart className="icon2" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
