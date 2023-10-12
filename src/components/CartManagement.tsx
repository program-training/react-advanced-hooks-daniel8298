import items from "../util/Items";
import { useReducer } from "react";
import reducer from "../customHooks/useReducer";
import CartProduct from "./CartProduct";
import CartItem from "./CartItem";
import Typography from "@mui/material/Typography";

const initialState: Cart = { items: [] };
const CartManagement = () => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <Typography variant="h2">All Items</Typography>
        {items.map((item) => (
          <div>
            <CartProduct
              key={item.id}
              product={item}
              addProduct={() =>
                dispatch({ type: "increase", payload: { id: item.id } })
              }
            />
          </div>
        ))}
      </div>

      <div>
        <Typography variant="h2">Product in a Cart</Typography>
        {cart.items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() =>
              dispatch({ type: "increase", payload: { id: item.product.id } })
            }
            removeItem={() =>
              dispatch({ type: "decrement", payload: { id: item.product.id } })
            }
            deleteItem={() =>
              dispatch({ type: "delete", payload: { id: item.product.id } })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CartManagement;
