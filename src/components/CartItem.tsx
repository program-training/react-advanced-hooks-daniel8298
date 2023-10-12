import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CartItem = ({ item, addItem, removeItem, deleteItem }: ItemComponent) => {
  return (
    <>
      <div style={{ border: "1px" }}>
        <Typography variant="h5">{item.product.name}</Typography>
        <Typography variant="h5">price: {item.product.price}</Typography>
        <Typography variant="h5">amount: {item.amount}</Typography>
        <Button onClick={() => addItem()} variant="contained">
          +
        </Button>
        <Button onClick={() => removeItem()} variant="contained">
          -
        </Button>
        <Button onClick={() => deleteItem()} variant="contained">
          delete
        </Button>
      </div>
    </>
  );
};

export default CartItem;
