import "./styles.css";
import Header from "./components/Header";
import AppLayout from "./components/AppLayout";
import img1 from "./components/img/supersunny.jpg";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <div className="App" style={{ background: "black" }}>
      <Header />
      <img src={img1} alt="loading" />
      <AppLayout />
      <Footer />
    </div>
  );
}
