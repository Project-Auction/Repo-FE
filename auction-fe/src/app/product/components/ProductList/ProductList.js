import CardProduct from "../../../../shared/components/UIElement/Card/CardProduct";
import "./ProductList.css";

const ProductList = ({ items = [], className, classCard }) => {
  return (
    <>
      {items.map((item) => (
        <div className={className} key={item.codeProduct}>
          <CardProduct
            headerTitle="COUNTDOWN FINISHED"
            name={item.name}
            codeProduct={item.codeProduct}
            initialPrice={item.initialPrice}
            currentPrice={item.currentPrice}
            image={item.image}
            nameProduct={item.nameProduct}
            className={classCard}
          />
        </div>
      ))}
    </>
  );
};

export default ProductList;
