import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Fullname"),
  email: Yup.string()
    .email()
    .required("Email is Required")
    .matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{2,4}$/, "Enter a valid Email"),
  age: Yup.number()
    .integer()
    .positive()
    .required("Enter Your Age")
    .min(18, "Enter Age between 18 to 30")
    .max(30, "Enter Age between 18 to 30"),
  password: Yup.string().required("Password is Required"),
  cPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must be Same"
  ),
});

const SignUp = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };
  renderCount++;
  let [input, setInput] = useState("");

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(errors);

  let handleData = (data) => {
    console.log(data);
  };
  return (
    <Paper
      elevation={10}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center" variant="h6">
        Create Account - {renderCount}
      </Typography>
      <TextField
        label="Name"
        {...register("name", { required: "Name is Required" })}
        helperText={errors.name?.message}
        error={!!errors.name}
      />
      <TextField
        label="Email"
        {...register("email")}
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <TextField
        label="Age"
        {...register("age")}
        helperText={errors.age?.message}
        error={!!errors.age}
      />
      <TextField
        label="Password"
        {...register("password")}
        helperText={errors.password?.message}
        error={!!errors.password}
      />
      <TextField
        label="Confirm Password"
        {...register("cpassword")}
        helperText={errors.cpassword?.message}
        error={!!errors.cpassword}
      />
      <Button variant="contained" type="submit">
        SignUp
      </Button>
    </Paper>
  );
};

export default SignUp;
