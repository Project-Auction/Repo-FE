import { memo } from "react";
import CardProduct from "../../../../shared/components/UIElement/Card/CardProduct";
import "./ProductList.css";

const ProductList = ({ items = [], className, classCard }) => {
  return (
    <>
      {items.map((item) => (
        <div className={className} key={item.codeProduct}>
          <CardProduct
            headerTitle={item.headerTitle}
            name={item.name}
            codeProduct={item.codeProduct}
            initialPrice={item.initialPrice}
            currentPrice={item.currentPrice}
            image={item.image}
            nameProduct={item.nameProduct}
            startDate={item.startDate}
            endDate={item.endDate}
            className={classCard}
          />
        </div>
      ))}
    </>
  );
};

export default memo(ProductList);
