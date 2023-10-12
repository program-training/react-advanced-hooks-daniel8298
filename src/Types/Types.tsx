type Product = {
  id: number;
  name: string;
  price: string;
};

type CartItem = {
  product: Product;
  amount: number;
};

type Cart = {
  items: CartItem[];
};

type CartAction = {
  type: string;
  payload: CartState;
};
type CartState = {
  id: number;
};

type ItemComponent = {
  item: CartItem;
  addItem: () => void;
  removeItem: () => void;
  deleteItem: () => void;
};

type ProductComponent = {
  product: Product;
  addProduct: () => void;
};
