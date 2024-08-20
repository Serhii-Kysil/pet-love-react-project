import css from "./FormTitle.module.css";

const FormTitle = ({ title, desc }) => {
  return (
    <div className={css.titleBlock}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.desc}>{desc}</p>
    </div>
  );
};

export default FormTitle;
