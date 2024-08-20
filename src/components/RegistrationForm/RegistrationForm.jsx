import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import css from "./RegistrationForm.module.css";

import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

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
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/profile");
  };

  const handleInputChange = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputsCont}>
        <div className={css.nameBlock}>
          <input
            {...register("name")}
            placeholder="Name"
            className={css.input}
          />
          <p className={css.error}>{errors.name?.message}</p>
        </div>

        <div className={css.emailBlock}>
          <div className={css.inputWrapper}>
            <input
              {...register("email")}
              placeholder="Email"
              className={`${css.input} ${
                errors.email ? css.errorInput : css.successInput
              }`}
              onChange={() => handleInputChange("email")}
              onBlur={() => handleInputChange("email")}
            />
            {errors.email ? (
              <RxCross2 className={css.iconError} />
            ) : (
              <BiCheck className={css.iconSuccess} />
            )}
          </div>
          <p className={css.error}>{errors.email?.message} </p>
        </div>

        <div className={css.passwordBlock}>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={css.input}
          />
          <p className={css.error}>{errors.password?.message}</p>
        </div>

        <div className={css.confirmBlock}>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className={css.input}
          />
          <p className={css.error}>{errors.confirmPassword?.message}</p>
        </div>
      </div>

      <button type="submit" className={css.submitBtn}>
        Registration
      </button>
      <p className={css.text}>
        Already have an account?{" "}
        <a href="/login" className={css.link}>
          Login
        </a>
      </p>
    </form>
  );
};

export default RegistrationForm;
