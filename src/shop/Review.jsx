import React, { useState } from "react";
import Ratting from "../components/Ratting";
const reviewtitle = "Add A Review";

let ReviewList = [
  {
    imgUrl: "/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
    
  return (
    <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
           <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Description</li>
           <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
        </ul>

        {/* desc & review content */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className="content lab-ul">
                    {
                        ReviewList.map((review, i) =>  (           
                            <li key={i}>
                                <div className="post-thumb">
                                    <img src={review.imgUrl} alt={review.imgAlt} />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <a href="#">{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))                           
                    }
                </ul>

                {/* add review field */}
                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviewtitle}</h5>
                        </div>

                        <form action="action" className="row">
                            <div className="col-md-4 col-12">
                                <input type="text" name="name" placeholder="Your Name *" />
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" name="enail" placeholder="Your Email *" />
                            </div>
                            <div className="col-md-4 col-12">
                               <div className="ratting">
                                    <span className="me-2">Your Rating :</span>
                                    <Ratting />
                               </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <textarea name="message" id="message" rows="8" placeholder="Your Review *"></textarea>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="default-button">
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>    
                </div>
            </div>

            {/* description */}
            <div className="description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam magnam praesentium voluptatum assumenda vitae corrupti amet ipsam sunt recusandae ipsa, aliquam modi iste unde eos! Sequi consequuntur nesciunt voluptas dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est qui, voluptates a excepturi eius facere quas? Culpa, soluta earum, placeat dolor reprehenderit accusamus aut distinctio beatae, eveniet accusantium eligendi?</p>
                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, optio.</li>
                            <li> amet consectetur adipisicing elit. A, optio.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, optio.</li>
                            <li> amet consectetur adipisicing elit. A, optio.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, optio.</li>
                            <li> amet consectetur adipisicing elit. A, optio.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, optio.</li>
                        </ul>
                    </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam magnam praesentium voluptatum assumenda vitae corrupti amet ipsam sunt recusandae ipsa, aliquam modi iste unde eos! Sequi consequuntur nesciunt voluptas dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est qui, voluptates a excepturi eius facere quas? Culpa, soluta earum, placeat dolor reprehenderit accusamus aut distinctio beatae, eveniet accusantium eligendi?</p>
            </div>
        </div>
    </>
  )
};

export default Review;
