import PetBlock from "../../components/PetBlock/PetBlock";
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
    </div>
  );
};

export default RegisterPage;
