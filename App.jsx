import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="card-container">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
