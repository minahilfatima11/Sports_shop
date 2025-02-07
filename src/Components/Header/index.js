import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import Cart from './SearchBox/Cart'; 
import { useState } from 'react';

const Header = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const closeCart = () => {
        setIsCartVisible(false); 
    };

    return (
        <>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                        </div>

                        <SearchBox />

                        <div className='part3 d-flex align-items-center '>
                            <Button className='circle mr-3'><FaUser /></Button>
                            <div className='ml-auto cartTab d-flex align-items-center'>
                                <span className='price'>$5</span>
                                <div className='position-relative ml-3'>
                                    <Button className='circle1' onClick={toggleCartVisibility}><TiShoppingCart /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Cart component conditionally */}
            {isCartVisible && <Cart onClose={closeCart} />}

            <Navigation />
        </>
    );
}

export default Header;
