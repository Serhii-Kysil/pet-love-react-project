import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
