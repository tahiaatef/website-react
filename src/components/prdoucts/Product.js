import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/action';
import {Link} from 'react-router-dom';
function Product() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const handleAddToCart = product => {
        dispatch(addToCart(product));
    };
    return (
        <div className='container'>
            <div className='m-5 row text-center  justify-content-center'>
                <h2 className='col-lg-2 col-12 mt-lg-1'>Products</h2>
                <div className="col-lg-10 col-12">
                    <form className=" d-flex justify-content-between">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search products..."
                            />
                        </div>
                        <button type="button" className="search-btn" >
                            Search
                        </button>
                    </form>
                </div>
            </div>
                <div className='row gap-4 mb-3 justify-content-center justify-content-md-around'>
                    {products.map(product => (
                        <div key={product.id} className="card   border border-1 col-md-5 col-11 col-lg-3">

                            <img class="card-img-top" src={product.image} alt="Card "></img>
                            <div class="card-body d-flex flex-column justify-content-between ">
                                <Link to={`/product/${product.id}`} className='h5 mt-3 pro-link text-decoration-none'>
                                {product.title}
                                </Link>                            
                                <h5 class="card-title ">{product.price} $</h5>
                                <button className='btn btn-primary  mt-' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Product;
