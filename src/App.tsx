import "./App.css";
import ClassComp from "./1.classComponents";
import FuncCom from "./2.functionComponents";

function App() {
  return (
    <div className="App">
      {/* <ClassComp title="Class Components" namaHalaman="class" /> */}
      <FuncCom title="function Components">
        <p> Child Props</p>
      </FuncCom>
    </div>
  );
}

export default App;
