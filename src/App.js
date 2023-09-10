import Main from "./components/Navigation/Main";
import Nav from "./components/Navigation/Nav";
import { CartProvider } from "./contexts/CartContext";
import { LRPSwitchProvider } from "./contexts/LRPSwitchContext";
import { ProductListProvider } from "./contexts/ProductListContext";
import "./styles/App.css";

function App() {
  return (
   <>
      <CartProvider>
        <LRPSwitchProvider>
          <Nav/>
          <ProductListProvider>
            <Main/>
          </ProductListProvider>
        </LRPSwitchProvider>
      </CartProvider>
   </>
  );
}

export default App;
