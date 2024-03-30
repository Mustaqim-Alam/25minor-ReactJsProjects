import Accordian from "./Components/1_AccordianProject/Accordian";
import Random from "./Components/2_RandomColorGen/Index";
import Starrating from "./Components/3_StarRating_Project";
import "./App.css";

function App() {
  return (
    <div>
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <Random /> */}

      {/* Star Rating Component */}
      <Starrating noOfStars={10} />
    </div>
  );
}

export default App;
