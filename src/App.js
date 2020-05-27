import React, { useState } from "react";
import "./App.css";
import Checkbox from "./component/Checkbox";
import { replaceAt } from "./utils";

// Initial infomations
const INITIAL_STATE = [
  { label: "Item 1", value: false },
  { label: "Item 2", value: false },
  { label: "Item 3", value: false },
  { label: "Item 4", value: false },
];

function App() {
  // define hooks state
  const [state, setState] = useState(INITIAL_STATE);
  const [isSelectAll, setIsSelectAll] = useState(false);

  // fct called when click select all
  const onSelect = (index = null) => {
    let newState;
    if (Number.isInteger(index)) {
      // case select item is clicked
      // replace at index for reverse value
      newState = replaceAt(state, index, {
        ...state[index],
        value: !state[index].value,
      });
      setState(newState);
    } else {
      // case select all is clicked
      // replace all table with true if not already all true or with false
      const isFullyTrue = state.filter((x) => x.value === false).length === 0;
      newState = INITIAL_STATE.map((el) => ({
        ...el,
        value: isFullyTrue ? false : true,
      }));
    }

    // update state for select items
    setState(newState);
    // update state for select all
    const isFullyTrue = newState.filter((x) => x.value === false).length === 0;
    if (isFullyTrue) {
      setIsSelectAll(true);
    } else {
      setIsSelectAll(false);
    }
  };

  return (
    <div className="App">
      {/* SELECT ALL */}
      <div style={{ marginBottom: "20px" }}>
        <Checkbox
          onClick={() => onSelect()}
          label="Select all"
          checked={isSelectAll}
        />
      </div>
      {/* Others individuals select */}
      {state.map((el, index) => (
        <Checkbox
          key={index}
          onClick={() => onSelect(index)}
          label={el.label}
          checked={el.value}
        />
      ))}
    </div>
  );
}

export default App;
