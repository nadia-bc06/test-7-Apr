import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
     </div>
    </div>
  );
}

export default App;
