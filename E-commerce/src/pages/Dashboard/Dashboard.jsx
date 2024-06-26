import { Navbar, Header } from "../../components";
import Slider from "./components/Slider";

const Dashboard = () => {
  return (
    <div>
      <Navbar cart={true} home={true} products={true} />
      <Header />
      <Slider />
    </div>
  );
};

export default Dashboard;
