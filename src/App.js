import "./styles.css";
import Header from "./components/Header";
import AppLayout from "./components/AppLayout";
import img1 from "./components/img/supersunny.jpg";
export default function App() {
  return (
    <div className="App">
      <Header />
      <img src={img1} alt="loading" />
      <AppLayout />
    </div>
  );
}
