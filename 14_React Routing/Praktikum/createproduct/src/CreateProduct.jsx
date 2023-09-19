import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Form from "./components/Form/Form";

import "../src/styles/App.css";
import RandomNumber from "./utils/RandomNumber";

function CreateProduct() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "id" : "en");
  };

  return (
    <>
      <Header />
      <Jumbotron currentLanguage={currentLanguage} />
      <Form />
      <Button
        label="klik untuk ganti bahasa di jumbotron"
        onClick={changeLanguage}
      />
      <Button
        label="Klik untuk mendapatkan random number di console"
        onClick={RandomNumber}
      />
    </>
  );
}

export default CreateProduct;
