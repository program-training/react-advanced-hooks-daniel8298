import "./App.css";
import ButtonsCounts from "./components/ButtonsCounts";
import Component1 from "./components/StorageA";
import DivArea from "./components/DivArea";
import CartReducer from "./components/CartManagement";

function App() {
  return (
    <>
      <ButtonsCounts />
      <DivArea />
      <Component1 />
      <CartReducer />
    </>
  );
}

export default App;
