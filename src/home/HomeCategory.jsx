

import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './HomeCategory.css'; 

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container mycate p-3 rounded-2">
        {/* section header */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* Bootstrap Carousel */}
        <Carousel interval={1000} indicators={false} controls={true} className="carousel-1-items">
          {categoryList.reduce((rows, card, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(card);
            return rows;
          }, []).map((row, rowIndex) => (
            <Carousel.Item key={rowIndex}>
              <div className="row g-4 justify-content-center">
                {row.map((val, i) => (
                  <div key={i} className="col-md-4">
                    <Link to="/shop" className="category-item">
                      <div className="category-inner">
                        {/* image thumbnail */}
                        <div className="category-thumb">
                          <img src={val.imgUrl} alt={val.imgAlt} className="d-block w-100 carousel-image" />
                        </div>

                        {/* category content */}
                        <div className="category-content text-center mt-3">
                          <div className="cate-icon">
                            <i className={val.iconName}></i>
                          </div>
                          <h6>{val.title}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="text-center mt-5">
          <Link to="/shop" className="lab-btn text-reset"><span>{btnText}</span></Link>
       </div>
      </div>
    </div>
  );
};

export default HomeCategory;
