import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdSportsHandball, MdOutlineContactPage } from 'react-icons/md';

import { IoBagRemoveOutline } from 'react-icons/io5';

import { LiaSalesforce } from "react-icons/lia";

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <div className='CartWrapper align-items-center'>
                            <button className='allCartTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><IoMenu /></span>
                                <span className="text">All Categories</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </button>

                            <div className={`sidebarNav ${isopenSidebarVal ? 'open' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <MdSportsHandball /> Accessories<FaAngleRight className="ml-auto "/>
                                        </Link>
                                        <div className="submenu">
                                            <Link to="/">Caps</Link>
                                            <Link to="/">Watches</Link>
                                            <Link to="/">Eyewear</Link>
                                            <Link to="/">Sport Optics</Link>
                                            <Link to="/">HeadBands</Link>
                                            <Link to="/">Water Bottles</Link>
                                            <Link to="/">Shakers</Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><IoBagRemoveOutline /> FootWear</Link></li>
                                    <li>
                                        <Link to="/">
                                            <LiaSalesforce /> SportsWear <FaAngleRight className="ml-auto "/>
                                        </Link>
                                        <div className="submenu1">
                                            <Link to="/">Golf Clothing </Link>
                                            <Link to="/">Badminton Clothing</Link>
                                            <Link to="/">Gym & YogaWear</Link>
                                            <Link to="/">Cricket Clothing</Link>
                                            <Link to="/">Boxing & MMA Clothing</Link>
                                            <Link to="/">Tennis Clothing </Link>
                                            <Link to="/">Squash Clothing</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><MdOutlineHome /> Home</Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><MdSportsHandball /> Shop By Sport</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Badminton</Link>
                                    <Link to="/">Cricket</Link>
                                    <Link to="/">Squash</Link>
                                    <Link to="/">Tennis</Link>
                                    <Link to="/">FootBall</Link>
                                    <Link to="/">BaseBall</Link>
                                    <Link to="/">BasketBall</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><IoBagRemoveOutline /> Accessories</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Caps</Link>
                                    <Link to="/">Bags & BagsPacks</Link>
                                    <Link to="/">Sport Watches</Link>
                                    <Link to="/">WristBands</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><LiaSalesforce /> Sales</Link></li>
                            <li className='list-inline-item'><Link to="/"><MdOutlineContactPage /> Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
