import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeItem } from "../store/cartSlice";
const WishList = () => {
  let dispatch = useDispatch();
  let cartProducts = useSelector((state) => {
    return state.cart;
  });

  let handleDelete = (id) => {
    dispatch(removeItem(id));
  };
  if (cartProducts.length > 0) {
    return (
      <div>
        <h1>Wishlist</h1>
        <section className="products">
          {cartProducts.map((cartProduct) => (
            <Card
              key={cartProduct.id}
              style={{ width: "18rem" }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={cartProduct.image}
                  style={{ width: "9rem", height: "9rem" }}
                />
              </center>
              <Card.Body>
                <Card.Title>{cartProduct.title}</Card.Title>
                <Card.Text>${cartProduct.price}</Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="danger"
                  onClick={() => handleDelete(cartProduct.id)}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      </div>
    );
  } else {
    return <h1>Your Wishlist is Empty </h1>;
  }
};

export default WishList;
