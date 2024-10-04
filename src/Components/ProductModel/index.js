import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog';
import { Rating } from '@mui/material';
import { MdClose } from "react-icons/md";
import Slider from 'react-slick';
import { useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { IoIosHeartEmpty } from "react-icons/io";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityDropdown from '../QuantityDropdown';
import { MdCompareArrows } from "react-icons/md";
const ProductModel = (props) => {

    const zoomSliderBig = useRef();
    
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        SlidesToScroll: 1,
        fade: false,
        arrows: false,
    };
    return (
        <>
            <Dialog open={true} className="productModel" onClose={()=> props.closeProductModel()} >
                
                <Button className="btn close_" onClick={() => props.closeProductModel()}><MdClose/>
                    
                </Button>

                <h4 class="mb-1 font-weight-bold " >Cricket Bat </h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brand:</span>
                        <span className='ml-2'> <b>Apollo</b></span>

                       
                   </div>
                      <Rating name="read-only " value={5}  size="small" precision={0.5} readOnly />
                   
                </div>
                <hr />
                
                <div className="row mt-2 productDetailsModel">
                    <div className='col-md-5'>
                        <div className="productZoom">
                              <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>

                            <div className="item">
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                src={'https://apollosports.pk/wp-content/uploads/2024/03/Metador-Cricket-Tapeball-Bat-Fiber-XF-1000-Green2-600x600.jpg'}/>
                            </div>
                        </Slider>
                      </div>

                    </div>

                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-2'>
                            <span className='netprice text-danger details '>Rs-2100</span>
                        </div>
                        <span className="badge ">In Stock</span>
                        <p className='p mt-3'>My product ensures exceptional quality, delivering a rich and satisfying experience.</p>

                        <div className="d-flex align-items-center">
                           <QuantityDropdown/>
                               
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add To Cart</Button>
                        </div>
                        
                        <div className="d-flex align-items-center mt-4 actions">
                            <Button className="btn-round btn-small" varient="outlined"><IoIosHeartEmpty /> ADD TO WISHLIST</Button>
                             <Button className="btn-round btn-small ml-3" varient="outlined">< MdCompareArrows/> COMPARE</Button>
                        </div>

                   
                    </div>
                </div>

                
            </Dialog>

            
        </>
    )
}

export default ProductModel