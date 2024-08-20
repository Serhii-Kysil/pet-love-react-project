import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import css from "./RegistrationForm.module.css";

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
      <div className={css.inputsCont}>
        <div className={css.nameBlock}>
          <input
            {...register("name")}
            placeholder="Name"
            className={css.input}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className={css.emailBlock}>
          <input
            {...register("email")}
            placeholder="Email"
            className={css.input}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className={css.passwordBlock}>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={css.input}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className={css.confirmBlock}>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className={css.input}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
      </div>

      <button type="submit">Registration</button>
      <p>
        Already have an account?{" "}
        <a href="/login" className={css.link}>
          Login
        </a>
      </p>
    </form>
  );
};

export default RegistrationForm;
