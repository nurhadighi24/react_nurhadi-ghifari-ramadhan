import React from "react";

import JumbotronTitle from "./JumbotronTitle";
import JumbotronBody from "./JumbotronBody";
import { article } from "../../utils/article";

export default function Jumbotron() {
  return (
    <div className="text-center mt-5">
      <JumbotronTitle title={article.title.en} />
      <JumbotronBody body={article.description.en} />
    </div>
  );
}
