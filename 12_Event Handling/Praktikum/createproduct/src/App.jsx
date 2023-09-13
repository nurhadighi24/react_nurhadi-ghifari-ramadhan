import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Form from "./components/Form/Form";

import { article } from "./utils/article";

import "../src/styles/App.css";
import RandomNumber from "./utils/RandomNumber";

function App() {
  return (
    <>
      <Header />
      <Jumbotron title={article.title.en} body={article.description.en} />
      <Form />
      <Button
        label="Klik untuk mendapatkan random number di console"
        onClick={RandomNumber}
      />
    </>
  );
}

export default App;
