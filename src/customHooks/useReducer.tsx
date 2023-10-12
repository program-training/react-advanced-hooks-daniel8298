import items from "../util/Items";

const reducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "increase": {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.product.id === id);

      if (!existingItem) {
        const newProduct = items.find((item) => item.id === id)!;
        state.items.push({ amount: 1, product: newProduct });
      } else {
        existingItem.amount++;
      }
      break;
    }

    case "decrement":
      {
        const foundItem = state.items.find(
          (item) => item.product.id === action.payload.id
        );
        if (foundItem) foundItem.amount--;

        if (foundItem && foundItem.amount === 0) {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== action.payload.id
          );

          state.items = updatedItems;
        }
      }
      break;
    case "delete":
      {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.id
        );
      }
      break;

    default:
      break;
  }
  return { ...state };
};

export default reducer;
