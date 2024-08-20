import FormTitle from "../../components/FormTitle/FormTitle";
import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.registerCont}>
      <PetBlock
        img1x={"/Cat@1x.png"}
        img2x={"/Cat@2x.png"}
        img3x={"/Cat@3x.png"}
        alt={"Cat image"}
      />
      <div className={css.formContainer}>
        <FormTitle
          title={"Registration"}
          desc={"Thank you for your interest in our platform."}
        />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
