import React, { useEffect, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Hello = React.memo(({ count }) => {
  console.log("Hello render");
  useEffect(() => {
    let fafa = true;
    console.log("Hello Effect");
    return () => {
      fafa = false;
      console.log("Hello UnMount", fafa);
    };
  }, [count]);
  return <div>{count}</div>;
});

// const Hello = ({count}) => {
//   console.log("Hello render");
//   useEffect(()=> {
//     let fafa = true
//     console.log("Hello Effect")
//     return () =>{console.log("Hello UnMount")}
//   },[count])
//   return (<div>{count}</div>)
// }

function App() {
  const [state, setState] = useState(1);
  const [stateToggle, setToggle] = useState(false);
  console.log(state);
  console.log(stateToggle);
  console.log("App render");
  useEffect(() => {
    console.log("App Effect");
    return () => console.log("App UnMount");
  });
  const onClick = useCallback(() => {
    console.log("click");
    setState(state + 1);
  }, [state]);
  const toggle = useCallback(() => {
    console.log("toggle");
    setToggle(() => !stateToggle);
  }, [stateToggle]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {stateToggle && <div>true</div>}
      <button onClick={toggle}>トグル</button>
      <Hello count={state} />
      <button onClick={onClick}>ボタン</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
