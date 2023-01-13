import GlobalStyle from "./assets/GlobalStyle";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inside from "./components/Inside";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Service from "./components/Service";
import ViewDetail from "./components/ViewDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <Service />
      <ViewDetail />
      <Product />
      <Business />
      <Inside />
      <Footer />
    </>
  );
}

export default App;
