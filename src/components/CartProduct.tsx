import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = ({ product, addProduct }: ProductComponent) => {
  return (
    <div style={{ border: "1px" }}>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="h5">price: {product.price}</Typography>
      <Button onClick={() => addProduct()} variant="contained">
        Add to cart
      </Button>
    </div>
  );
};
export default Product;
