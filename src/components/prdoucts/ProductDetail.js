import React ,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { fetchProducts } from "../../redux/actions/fetchData";
import { addToCart } from '../../redux/actions/action';

function ProductDetail() {
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
    
}, []);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const product = products.find((i) => i.id == id)
  const handleAddToCart = product => {
      dispatch(addToCart(product));
  };


  return (
    <div className='container'>
      <h2 className='text-center mt-3'>Product Details</h2>
      <div className='row'>
      <div className='col-lg-5'>
        <img src={product?.image} alt={product?.title} height={"500px"} />
      </div>
      <div className='col-lg-6  d-flex flex-column justify-content-center   text-center'>
      <h3>{product?.title}</h3>
      <p>{product?.description}</p>
      <p className='h4'>Price: ${product?.price}</p>
      <button className='btn btn-primary ' onClick={() => handleAddToCart(product)}>Add to Cart</button>

    </div>
    </div>
    </div>
  );
}

export default ProductDetail;
