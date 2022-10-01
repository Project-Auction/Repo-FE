import CardProduct from "../../../../shared/components/UIElement/Card/CardProduct";
import "./ProductList.css";

const ProductList = ({ items = [], className, classCard }) => {
  return (
    <>
      {items.map((item) => (
        <div className={className} key={item.codeProduct}>
          <CardProduct
            headerTitle="COUNTDOWN FINISHED"
            codeProduct={item.codeProduct}
            initialPrice={item.initialPrice}
            currentPrice={item.currentPrice}
            image={item.image}
            nameProduct={item.nameProduct}
            classNam={classCard}
          />
        </div>
      ))}
    </>
  );
};

export default ProductList;
