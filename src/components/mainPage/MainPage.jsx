import { Link } from "react-router-dom";
import Header from "../Header";

export default function MainPage() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Link to={"./products"} className="shopnow">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
