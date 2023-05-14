import { Header } from "./Component/Header";
import { LeftContainer } from "./Component/LeftContainer";
import { RightContainer } from "./Component/RightContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-header">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}
