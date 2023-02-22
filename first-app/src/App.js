
import './App.css';
import ComponentFour from './Components/ClassComponent/ComponentFour';
import { ComponentOne } from './Components/ClassComponent/ComponentOne';
import ComponentThree from './Components/ClassComponent/ComponentThree';
import ComponentTwo from './Components/ClassComponent/ComponentTwo';
import { Header } from './Components/ClassComponent/Header';
import ComponentA from './Components/FunctionComponent/ComponentA';
import ComponentB from './Components/FunctionComponent/ComponentB';
import ComponentC from './Components/FunctionComponent/ComponentC';
import ComponentD from './Components/FunctionComponent/CompponentD';
import Counter from './Components/hd/Counter';

function App() {
  // const linkName={
  //   google: "https://www.google.com/",
  //   youtube: "https://www.youtube.com/",
  //   facebook: "https://www.facebook.com/",
  //   react: "https://reactjs.org/"
  // };
  // const Hello={
  //   fullAdd:"i am shahed"
  // };
  return (
    <div className="App">
      {/* <Header linkname={linkName} /> */}
      {/* <ComponentA hello={Hello} />
      <ComponentB/>
      <ComponentC/>
      <ComponentD/>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour /> */}
      <Counter />
    </div>
  );
}

export default App;
