import { TbMilk } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
 import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="topinfo row">
                    <div className="col d-flex align-items-center">
                        <span><TbMilk/></span>
                     <span className="ml-2">Every Products Available</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                     <span className="ml-2">Free Delivery For Order Over 2k</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine /></span>
                     <span className="ml-2">Daily Mega Discounts</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><FaIndianRupeeSign/></span>
                     <span className="ml-2">Best Price In Market</span>
                    </div>

                    
                   
                </div>
                 <div className="row mt-4 linkWrap">
                        <div className="col">
                            <h5>Customer Services </h5>
                            <ul>
                                <li><Link to="#">Payment Methods</Link></li>
                                <li><Link to="#">Shipping & Delivery</Link></li>
                                <li><Link to="#">Store Locator </Link></li>
                                <li><Link to="#">Return & Exchange</Link></li>
                                <li><Link to="#">Subscribe To Newsletter</Link></li>
                                <li><Link to="#">Disclaimer</Link></li>
                                <li><Link to="#">Help</Link></li>
                                </ul>
                    </div>

                    <div className="col">
                            <h5>Football</h5>
                            <ul>
                                <li><Link to="#">Football accessories</Link></li>
                                <li><Link to="#">Futsal Balls</Link></li>
                                <li><Link to="#">Football Footwear</Link></li>
                                <li><Link to="#">Football Training</Link></li>
                                <li><Link to="#">Goalkeeper Gloves</Link></li>
                               
                                </ul>
                    </div>
                    <div className="col">
                            <h5>Sports Eyewear</h5>
                            <ul>
                                <li><Link to="#">Goggles</Link></li>
                                <li><Link to="#">Protective Eyewear</Link></li>
                            <li><Link to="#">
                            Sunglasses</Link></li>
                            <li><Link to="#">
                            Prescription Goggles</Link></li>
                              
                      
                                </ul>
                    </div>
                    <div className="col">
                            <h5>Cricket</h5>
                            <ul>
                                <li><Link to="#">Batting Equipments</Link></li>
                                <li><Link to="#">Cricket Bags</Link></li>
                                <li><Link to="#">Cricket Footwear </Link></li>
                                <li><Link to="#">Wicket Set</Link></li>
                                <li><Link to="#">Cricket Clothing</Link></li>
                                <li><Link to="#">Cricket basmati</Link></li>
                            <li><Link to="#">Balling Machines</Link></li>
                            <li><Link to="#">Keeping Equipments </Link></li>
                                </ul>
                    </div>

                </div>
                
                <div className="copyright d-flex justify-content-between align-items-center">
    <p className="mb-0">© 2024 Sports Store. All rights reserved.</p>
    <ul className="list list-inline mb-0">
        <li className="list-inline-item">
            <Link to="#"><BsInstagram/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaTwitter/></Link>
        </li>
        <li className="list-inline-item">
            <Link to="#"><FaFacebookSquare/></Link>
        </li>
    </ul>
</div>


            </div>
        </footer>
    )
}
export default Footer;