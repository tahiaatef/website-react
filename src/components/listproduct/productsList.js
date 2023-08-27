import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductsArray,
} from "../../redux/actions/action";
import { fetchProducts } from "../../redux/actions/fetchData";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
        dispatch(fetchProducts());    
    }, []);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
  });
  const handleCreate = (productData) => {
    dispatch(createProduct(productData));
    dispatch(updateProductsArray([...products, productData])); 
    setFormData({ title: "", price: 0 });
  };
  
  const handleUpdate = (productId, productData) => {
    dispatch(updateProduct(productId, productData));
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...productData } : product
    );
    dispatch(updateProductsArray(updatedProducts)); 
    setIsEditing(false);
    setEditingProductId(null);
    setFormData({ title: "", price: 0, image: "" });
  };
  

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setEditingProductId(product.id);
    setFormData({ title: product.title, price: Math.floor(product.price) , image: product.image });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingProductId(null);
    setFormData({ title: "", price: 0 });
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <button
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            className="btn btn-success"
            onClick={() => setIsEditing(true)}
          >
            Add User [+]
          </button>
        </div>
        {loading ? (
                <div className={"loader"}></div>
            ) : (

        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>image</td>
                <td>title</td>
                <td>price</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt="cardimg"
                      width={"100px"}
                      height={"50px"}
                    ></img>{" "}
                  </td>{" "}
                  <td>{product.title}</td> <td>{Math.floor(product.price)}</td>
                  <td className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(product)}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                    )}

      </div>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                
                {editingProductId ? "Update Product" : "Create Product"}
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editingProductId) {
                    handleUpdate(editingProductId, formData);
                    document
                      .getElementById("myModal")
                      .classList.remove("show", "d-block");
                    document
                      .querySelectorAll(".modal-backdrop")
                      .forEach((el) => el.classList.remove("modal-backdrop"));
                  } else {
                    handleCreate(formData);
                    document
                    .getElementById("myModal")
                    .classList.remove("show", "d-block");
                  document
                    .querySelectorAll(".modal-backdrop")
                    .forEach((el) => el.classList.remove("modal-backdrop"));

                  }
                }}
              >
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">
                    title
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="pwd" class="form-label">
                    price
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: parseFloat(e.target.value),
                      })
                    }
                  ></input>
                </div>
                <button type="submit" class="btn btn-primary submit">
                  {editingProductId ? "Update" : "Create"}
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleCancelEdit}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
