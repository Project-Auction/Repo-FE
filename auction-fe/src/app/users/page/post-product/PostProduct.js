import { useState } from "react";
import FormProductInfo from "../../components/post-product/FormProductInfo/FormProductInfo";
import "./PostProduct.css";

const PostProduct = (props) => {
  const [steps, setSteps] = useState(0);

  const conditionalComponents = () => {
    switch (steps) {
      case 0:
        return <FormProductInfo />;

      case 1:
        return "1";

      case 2:
        return "2";

      default:
        return "hi";
    }
  };

  return <>{conditionalComponents()}</>;
};

export default PostProduct;
