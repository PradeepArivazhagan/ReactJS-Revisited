import { Grid2, Paper, TextField, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdateProduct = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let [updateProduct, setUpdateProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then((response) => {
      setUpdateProduct(response.data);
    });
  }, []);

  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    let fieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({ ...updateProduct, [name]: value });
    }
  };

  let handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Saved successfully");
      navigate("/products");
    });
  };

  if (updateProduct !== null) {
    return (
      <Paper elevation={10} style={paperStyle}>
        <Typography variant="h5">Update Product</Typography>
        <Grid2
          component="form"
          style={{ display: "grid", gap: "20px" }}
          onSubmit={handleUpdate}
        >
          <TextField
            value={updateProduct.title}
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={updateProduct.category}
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid2 container>
            <Grid2 size={6}>
              <TextField
                value={updateProduct.rating.rate}
                name="rating.rate"
                type="number"
                label="Rate"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                value={updateProduct.rating.count}
                name="rating.count"
                type="number"
                label="Count"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid2>
          </Grid2>
          <Button type="submit" fullWidth color="success" variant="contained">
            Save
          </Button>
        </Grid2>
      </Paper>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default UpdateProduct;
