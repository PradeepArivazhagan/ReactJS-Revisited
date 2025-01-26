import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
const ProductList = () => {
  // let [products, setProducts] = useState([]);
  // let [error, setError] = useState();
  // let [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Search Proper Data");
  //       }
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       console.log(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cartProducts = useSelector((state) => {
    return state.cart;
  });

  let { isLoading, error, products, setProducts } = useFetch(
    "http://localhost:4000/products"
  );

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <LifeLine
          color="#0026ff"
          size="medium"
          text="Loading..."
          textColor="green"
        />
      </div>
    );
  }

  let handleDelete = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      let newProductList = products.filter((product) => {
        if (product.id !== id) {
          return product;
        }
      });
      setProducts(newProductList);
    });
  };

  let handleAddNew = () => {
    navigate("/newProduct");
  };

  let addItemToCart = (product) => {
    let check = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!check) {
      dispatch(addItem(product));
    } else {
      alert("Item is Already in Cart");
    }
  };

  return (
    <div>
      <article>
        <span>To Create New Product</span>
        <Button onClick={handleAddNew}>Add New</Button>
      </article>
      <h1>Product List</h1>
      {products.length !== 0 && (
        <section className="products">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem" }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "9rem", height: "9rem" }}
                />
              </center>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => addItemToCart(product)}
                  variant="primary"
                >
                  Add To Cart
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate(`/update/${product.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProductList;
