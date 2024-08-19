import { ModalApproveAction } from "../../components/ModalApproveAction/ModalApproveAction";

import css from "./HomePage.module.css";

import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={css.homePageCont}>
      <div className={css.mainInfoBlock}>
        <h1 className={css.title}>
          Take good <span className={css.span}>care</span> of your small pets
        </h1>
        <p className={css.info}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>

      <img
        className={css.img}
        srcSet="/main-img@2x.jpg, /main-img@3x.jpg"
        src="/main-img@1x.jpg"
        alt="Dog image"
      />
      <ModalApproveAction isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
