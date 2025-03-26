import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { SearchContext } from "./SearchContext"; // Import SearchContext

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchQuery } = useContext(SearchContext); // Get search query from context

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  // Filter products dynamically as the user types
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <p>Loading...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                  <p className="card-text">{product.description.substring(0, 90)}...</p>
                </div>
                <div className="card-body">
                  <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => {
                      toast.success("Added to cart");
                      dispatch(addCart(product));
                    }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
