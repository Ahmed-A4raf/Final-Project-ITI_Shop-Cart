import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result);
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

      <div className="blog-section padding-tb blog-single section-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* =============>> Left Side */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  {item.desc},Lorem ipsum dolor sit amet
                                  consectetur adipisicing elit. Recusandae
                                  eligendi eveniet deleniti error itaque facilis
                                  sunt architecto fugit dolore quidem? Deleniti
                                  aliquid placeat sapiente, quam architecto
                                  excepturi. Laudantium, perspiciatis corrupti.
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically recaptiualize distributed
                                    technologies is wherease turnkey channels
                                    and onotonectally provide access to resource
                                    leveling expertise vias worldwide
                                    deliverables uolisticly extend aserser are
                                    diverse vortals.
                                  </p>
                                  <cite>
                                    <a href="#">...Ahmed Ashraf</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot whch the blissouls
                                  like mineing am soo happy my dearsi frend
                                  absoribed the exquste sense enjoy my whole
                                  hearts alone and fee the charm of exstenceths
                                  spotsi whch was the blis of soulis mineing
                                  amsoing dear frend soingu absoribed the exqust
                                  sense tranqui existence neglect my talentsr
                                  should ncapable ofing is drawng singe
                                  wonderful serenty has taken possesison of my
                                  entre soulng these sweet present moment and
                                  yet feel that never was greater artst.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Serenity hasir taken poseson mying entre soung
                                  these sweet morngs sprng whch enoywith whole
                                  heart create am alones and feel the charm of
                                  exstenceth spot whch the blissouls like
                                  mineing am soo happy my dearsi frend absoribed
                                  the exquste sense enjoy my whole hearts alone
                                  and fee the charm of exstenceths spotsi whch
                                  was the blis of soulis mineing amsoing dear
                                  frend soingu absoribed the exqust sense
                                  tranqui existence neglect my talentsr should
                                  ncapable ofing is drawng singe wonderful
                                  serenty has taken possesison of my entre
                                  soulng these sweet present moment and yet feel
                                  that never was greater artst.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/agpZsCUllqc?si=-M7nSOejCO8mRJBW"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot whch the blissouls
                                  like mineing am soo happy my dearsi frend
                                  absoribed the exquste sense enjoy my whole
                                  hearts alone and fee the charm of exstenceths
                                  spotsi whch was the blis of soulis mineing
                                  amsoing dear frend soingu absoribed the exqust
                                  sense tranqui existence neglect my talentsr
                                  should ncapable ofing is drawng singe
                                  wonderful serenty has taken possesison of my
                                  entre soulng these sweet present moment and
                                  yet feel that never was greater artst.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href={val.link} className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>Previous Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parellel Processes via  Technica Sound Models Authoritative
                          </a>
                        </div>   
                        <div className="right">
                          <a href="#" className="next">
                            <i className="icofont-double-right"></i>Next Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parellel Processes via  Technica Sound Models Authoritative
                          </a>
                        </div>   
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* ============>> Right Side */}
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags />
                    <PopularPost />
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
