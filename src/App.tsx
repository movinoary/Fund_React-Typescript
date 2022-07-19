import "./App.css";
import ClassComp from "./1.classComponents";
import FuncCom from "./2.functionComponents";
import ConstComp from "./3.constComponents";
import FetchData from "./4.fetchData";

function App() {
  return (
    <div className="App">
      {/* <ClassComp title="Class Components" namaHalaman="class" /> */}
      {/* <FuncCom title="function Components">
        <p> Child Props</p>
      </FuncCom> */}
      {/* <ConstComp title="Const Components" /> */}
      <FetchData title="Fetch Data" />
    </div>
  );
}

export default App;
