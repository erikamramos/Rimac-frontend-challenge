import React from "react";
import Layout from "@/components/Layout";
import Divider from "@/components/atoms/Divider";
import familyImage from "../../assets/img/family-group.png";
import { TitleForm, Form, DescriptionForm } from "@/components/molecules/Form";
import style from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { savePaymentResponsible } = useUser(); 

  const handleSubmit = (formData: any) => {
    savePaymentResponsible(formData);
    navigate("/plans");
  };

  return (
    <Layout>
      <div className={style["home-container"]}>
        <div className={style["home-container__right"]}>
          <img src={familyImage} alt="Family Image" />
          <div className={style["right__texts"]}>
            <TitleForm />
          </div>
        </div>
        <div className={style["home-container__divider"]}>
          <Divider />
        </div>
        <div className={style["home-container__left"]}>
          <div className={style["left__texts"]}>
            <TitleForm />
          </div>
          <DescriptionForm />
          <div className={style["left__form-container"]}>
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
