import './App.css';
import React, {createContext, useReducer} from 'react';
import ComponentA from './Components/ComponentA/ComponentA';
import ComponentB from './Components/ComponentB/ComponentB';
import ComponentC from './Components/ComponentC/ComponentC';
import ComponentD from './Components/ComponentB/ComponentD/ComponentD';
import ComponentE from './Components/ComponentC/ComponentE/ComponentE';
import ComponentF from './Components/ComponentC/ComponentE/ComponentF/ComponentF';
import ComponentG from './Components/ComponentC/ComponentE/ComponentF/ComponentG/ComponentG';


export const CountContext = createContext()

const intitialState = 0

const reducer = (state,action)=>{
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
          return state - 1
        case 'reset':
          return intitialState
      default:
        return state
    }
  }
  function App() {
    const [count,dispatch] = useReducer(reducer, intitialState)
  return (
    <div className="App">
      <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
        Count {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        <ComponentD/>
        <ComponentE/>
        <ComponentF/>
        <ComponentG/>
      </CountContext.Provider>
    </div>
  );
}

export default App;
