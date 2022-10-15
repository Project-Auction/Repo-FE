import { useState } from "react";
import FormProductDetail from "../../components/post-product/FormProductDetail/FormProductDetail";
import FormProductInfo from "../../components/post-product/FormProductInfo/FormProductInfo";
import FormUserInfo from "../../components/post-product/FormUserInfo/FormUserInfo";
import "./PostProduct.css";

const PostProduct = (props) => {
  const [steps, setSteps] = useState(0);

  const conditionalComponents = () => {
    switch (steps) {
      case 0:
        return <FormProductInfo />;

      case 1:
        return <FormProductDetail />;

      case 2:
        return <FormUserInfo />;

      default:
        return <FormProductInfo />;
    }
  };

  return <>{conditionalComponents()}</>;
};

export default PostProduct;
