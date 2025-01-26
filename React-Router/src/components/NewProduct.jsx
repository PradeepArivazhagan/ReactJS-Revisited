import { Grid2, Paper, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    let fieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  let handleAdd = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("Data Added successfully");
      setNewProduct({
        title: "",
        price: 500,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Typography variant="h5">Create New Product</Typography>
      <Grid2
        component="form"
        style={{ display: "grid", gap: "20px" }}
        onSubmit={handleAdd}
      >
        <TextField
          value={newProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={newProduct.category}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid2 container>
          <Grid2 size={6}>
            <TextField
              value={newProduct.rating.rate}
              name="rating.rate"
              type="number"
              label="Rate"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              value={newProduct.rating.count}
              name="rating.count"
              type="number"
              label="Count"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
        <Button type="submit" fullWidth variant="contained">
          Add
        </Button>
      </Grid2>
    </Paper>
  );
};

export default NewProduct;
