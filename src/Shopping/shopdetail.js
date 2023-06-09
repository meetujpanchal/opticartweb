import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { varibles } from "../API/variable";

function ShopDetail() {

    const [product, setproduct] = useState([]);

    const productId = useParams()

    useEffect(() => {
        fetch(`http://localhost:51507/api/ProductTbls/${productId.productId}`)
            .then(responce => responce.json())
            .then(json => setproduct(json))
        console.log(productId);
    }, []);

    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                {/* <!--
                    manifest.json provides metadata used when your web app is installed on a
                    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
                    --> */}
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                {/* <!--
                    Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.

                    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                    work correctly both with client-side routing and a non-root public URL.
                    Learn how to configure a non-root public URL by running `npm run build`.
                    --> */}
                <title>OPticart-Fashion</title>

                {/* <!-- Google Font --> */}
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
                    rel="stylesheet" />

                {/* <!-- Css Styles --> */}
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/font-awesome.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/elegant-icons.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/nice-select.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/slicknav.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />

            </head>
            <body>
                {/* // <!-- Offcanvas Menu Begin --> */}
                <div class="offcanvas-menu-overlay"></div>
                <div class="offcanvas-menu-wrapper">
                    <div class="offcanvas__option">
                        <div class="offcanvas__links">
                            <a href="#">Sign in</a>
                            <a href="#">FAQs</a>
                        </div>
                        <div class="offcanvas__top__hover">
                            <span>Usd <i class="arrow_carrot-down"></i></span>
                            <ul>
                                <li>USD</li>
                                <li>EUR</li>
                                <li>USD</li>
                            </ul>
                        </div>
                    </div>
                    <div class="offcanvas__nav__option">
                        <a href="#" class="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                        <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                        <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                        <div class="price">$0.00</div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                    <div class="offcanvas__text">
                        <p>Free shipping, 30-day return or refund guarantee.</p>
                    </div>
                </div>
                {/* <!-- Offcanvas Menu End --> */}

                {/* <!-- Header Section Begin --> */}
                <header class="header">
                    <div class="header__top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-7">
                                    <div class="header__top__left">
                                        <p>Protect your eye with our best products..!!</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-5">
                                    <div class="header__top__right">
                                        <div class="header__top__links">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3">
                                <div class="header__logo">
                                    <a href="./index.html"><img src="/assets/img/opti.jpg" height="150px" width="300px" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <nav class="header__menu mobile-menu">
                                    <ul>
                                        <li class="active"><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/shop">Shop</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        {/* <li><a href="#">Pages</a>
                                                    <ul class="dropdown">
                                                        <li><NavLink to="/about">About Us</NavLink></li>
                                                        <li><NavLink to="/detail">Shop Detaill</NavLink></li>
                                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                                        <li><a href="./checkout.html">Check Out</a></li>                                                        
                                                    </ul>
                                                </li>                                                 */}
                                        <li><NavLink to="/contact">Contacts</NavLink></li>
                                        {/* <li><a href="./contact.html">Contacts</a></li> */}
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="header__nav__option">
                                    <a href="#" class="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                                    <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                                    <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="canvas__open"><i class="fa fa-bars"></i></div>
                    </div>
                </header>
                {/* <!-- Header Section End --> */}
                {/* <!-- Shop Details Section Begin --> */}
                <section class="shop-details">

                    <div class="product__details__pic">
                        <div class="container" >
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="product__details__breadcrumb">
                                        <a href="./index.html">Home</a>
                                        <a href="./shop.html">Shop</a>
                                        <p>{product.productName}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3 col-md-3">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-1.png">
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-2.png">
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-3.png">
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                                <div class="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-4.png">
                                                    <i class="fa fa-play"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-9">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                            <div class="product__details__pic__item">
                                                <img src={"/assets/img" + product.productImage} height="400px" width="400px" alt="" />
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabs-2" role="tabpanel">
                                            <div class="product__details__pic__item">
                                                <img src="img/shop-details/product-big-3.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabs-3" role="tabpanel">
                                            <div class="product__details__pic__item">
                                                <img src="img/shop-details/product-big.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabs-4" role="tabpanel">
                                            <div class="product__details__pic__item">
                                                <img src="img/shop-details/product-big-4.png" alt="" />
                                                <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" class="video-popup"><i class="fa fa-play"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product__details__content">
                        <div class="container">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-8">
                                    <div class="product__details__text">
                                        <h4>{product.productName}</h4>
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span> - 5 Reviews</span>
                                        </div>
                                        <h3>₹{product.productPrice} <span>70.00</span></h3>
                                        <p>{product.description}</p>
                                        <div class="product__details__option">
                                            <div class="product__details__option__size">
                                                <span>Size:</span>
                                                <label for="xxl">xxl
                                                    <input type="radio" id="xxl" />
                                                </label>
                                                <label class="active" for="xl">xl
                                                    <input type="radio" id="xl" />
                                                </label>
                                                <label for="l">l
                                                    <input type="radio" id="l" />
                                                </label>
                                                <label for="sm">s
                                                    <input type="radio" id="sm" />
                                                </label>
                                            </div>
                                            <div class="product__details__option__color">
                                                <span>Color:</span>
                                                <label class="c-1" for="sp-1">
                                                    <input type="radio" id="sp-1" />
                                                </label>
                                                <label class="c-2" for="sp-2">
                                                    <input type="radio" id="sp-2" />
                                                </label>
                                                <label class="c-3" for="sp-3">
                                                    <input type="radio" id="sp-3" />
                                                </label>
                                                <label class="c-4" for="sp-4">
                                                    <input type="radio" id="sp-4" />
                                                </label>
                                                <label class="c-9" for="sp-9">
                                                    <input type="radio" id="sp-9" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="product__details__cart__option">
                                            <div class="quantity">
                                                <div class="pro-qty">
                                                    <input type="text" value="1" />
                                                </div>
                                            </div>
                                            <a href="#" class="primary-btn"><Link to={`/addtocart/${product.productId}`}> Add To Cart</Link></a>
                                        </div>
                                        <div class="product__details__btns__option">
                                            <a href="#"><i class="fa fa-heart"></i> add to wishlist</a>
                                            <a href="#"><i class="fa fa-exchange"></i> Add To Compare</a>
                                        </div>
                                        <div class="product__details__last__option">
                                            <h5><span>Guaranteed Safe Checkout</span></h5>
                                            <img src="img/shop-details/details-payment.png" alt="" />
                                            <ul>
                                                <li><span>SKU:</span> 3812912</li>
                                                <li><span>Categories:</span> {product.categoryId}</li>
                                                <li><span>Tag:</span> Clothes, Skin, Body</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Shop Details Section End --> */}

                {/* <!-- Footer Section Begin --> */}
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="footer__about">
                                    <div class="footer__logo">
                                        <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                                    </div>
                                    <p>The customer is at the heart of our unique business model, which includes design.</p>
                                    <a href="#"><img src="img/payment.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h6>Shopping</h6>
                                    <ul>
                                        <li><a href="#">Clothing Store</a></li>
                                        <li><a href="#">Trending Shoes</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Sale</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h6>Shopping</h6>
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Delivary</a></li>
                                        <li><a href="#">Return & Exchanges</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                                <div class="footer__widget">
                                    <h6>NewLetter</h6>
                                    <div class="footer__newslatter">
                                        <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                        <form action="#">
                                            <input type="text" placeholder="Your email" />
                                            <button type="submit"><span class="icon_mail_alt"></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <div class="footer__copyright__text">
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    <p>Copyright ©
                                        <script>
                                            document.write(new Date().getFullYear());
                                        </script>2020
                                        All rights reserved | This template is made with <i class="fa fa-heart-o"
                                            aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </p>
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Footer Section End --> */}

                {/* <!-- Search Begin --> */}
                <div class="search-model">
                    <div class="h-100 d-flex align-items-center justify-content-center">
                        <div class="search-close-switch">+</div>
                        <form class="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
                {/* <!-- Search End --> */}

                {/* <!-- Js Plugins --> */}
                <script src="/assets/js/jquery-3.3.1.min.js"></script>
                <script src="/assets/js/bootstrap.min.js"></script>
                <script src="/assets/js/jquery.nice-select.min.js"></script>
                <script src="/assets/js/jquery.nicescroll.min.js"></script>
                <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                <script src="/assets/js/jquery.countdown.min.js"></script>
                <script src="/assets/js/jquery.slicknav.js"></script>
                <script src="/assets/js/mixitup.min.js"></script>
                <script src="/assets/js/owl.carousel.min.js"></script>
                <script src="/assets/js/main.js"></script>

            </body>
        </html>
    )

}
export default ShopDetail;