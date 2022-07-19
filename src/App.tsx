import "./App.css";
import ClassComp from "./1.classComponents";
import FuncCom from "./2.functionComponents";
import ConstComp from "./3.constComponents";

function App() {
  return (
    <div className="App">
      {/* <ClassComp title="Class Components" namaHalaman="class" /> */}
      {/* <FuncCom title="function Components">
        <p> Child Props</p>
      </FuncCom> */}
      <ConstComp title="Const Components" />
    </div>
  );
}

export default App;
