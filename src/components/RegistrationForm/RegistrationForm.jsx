import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import css from "./RegistrationForm.module.css";

import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
  const [touchedFields, setTouchedFields] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const isFieldTouched = (fieldName) => touchedFields[fieldName];

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
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
                isFieldTouched("email") &&
                (errors.email ? css.errorInput : css.successInput)
              }`}
              onBlur={() => handleInputChange("email")}
            />
            {isFieldTouched("email") &&
              (errors.email ? (
                <RxCross2 className={css.iconErrorEmail} />
              ) : (
                <BiCheck className={css.iconSuccessEmail} />
              ))}
          </div>
          <p className={css.error}>{errors.email?.message} </p>
        </div>

        <div className={css.passwordBlock}>
          <div className={css.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className={`${css.input} ${
                isFieldTouched("password") &&
                (errors.password ? css.errorInput : css.successInput)
              }`}
              onBlur={() => handleInputChange("password")}
            />

            <span onClick={togglePasswordVisibility} className={css.eyeIcon}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>

            {isFieldTouched("password") &&
              (errors.password ? (
                <RxCross2 className={css.iconError} />
              ) : (
                <BiCheck className={css.iconSuccess} />
              ))}
          </div>
          <p className={css.error}>{errors.password?.message}</p>
        </div>

        <div className={css.confirmBlock}>
          <div className={css.inputWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm password"
              className={`${css.input} ${
                isFieldTouched("confirmPassword") &&
                (errors.confirmPassword ? css.errorInput : css.successInput)
              }`}
              onBlur={() => handleInputChange("confirmPassword")}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className={css.eyeIcon}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
            {isFieldTouched("confirmPassword") &&
              (errors.confirmPassword ? (
                <RxCross2 className={css.iconError} />
              ) : (
                <BiCheck className={css.iconSuccess} />
              ))}
          </div>
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
