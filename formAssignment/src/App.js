import logo from "./logo.svg";
import "./App.css";
import Forms from "./forms/Forms";
// import 'bootstrap/dist/css/bootstrap.min.css';
import IndexComponent from "./forms/IndexComponent";
import OtherDetails from "./forms/OtherVariabels";
import Header from "./forms/Header";

function App() {
  return (
    <div>
      <Header />

      <IndexComponent />
      {/* <Forms/> */}
    </div>
  );
}

export default App;
