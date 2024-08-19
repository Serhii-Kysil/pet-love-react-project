import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <button type="button" className={css.logBtn}>
        Log in
      </button>
      <button type="button" className={css.regBtn}>
        Registration
      </button>
    </div>
  );
};
