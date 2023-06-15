import React, { useContext, useReducer } from 'react';
import './App.css';
import MouseContainer from './components/10useEffect-cleanup/MouseContainer';
import IntervalClassCounter from './components/11useEffectincorrectdependency/IntervalClassCounter';
import IntervalHookCounter from './components/11useEffectincorrectdependency/IntervalHookCounter';
import DataFetching from './components/12DataFetchingUsinguseEffect/DataFetching';
import DataSingleFetching from './components/13DataFetchingUsinguseEffect/DataSingleFetching';
import DataFetchingByButton from './components/14DataFetchingUsinguseEffect/DataFetchingByButton';
//import ComponentC from './components/15useContextPart2/ComponentC';
//import CounterOne from './components/19useReducer/CounterOne';
//import CounterTwo from './components/20useReducer/CounterTwo';
import CounterThree from './components/21useReducer/CounterThree';
import ComponentA from './components/22useReducerWithContext/ComponentA';
import ComponentB from './components/22useReducerWithContext/ComponentB';
import ComponentC from './components/22useReducerWithContext/ComponentC';
import DataFetchingOne from './components/23useReducerDataFetch/DataFetchingOne';
import DataFetchingTwo from './components/23useReducerDataFetch/DataFetchingTwo';
import ParentComponent from './components/26useCallback/ParentComponent';
import Counter from './components/27useMemo/Counter';
import FocueInput from './components/28useRef/FocueInput';
import ClassTimer from './components/29useRef/ClassTimer';
import HookTimer from './components/29useRef/HookTimer';
import DocTitleOne from './components/31CustomHooks/DocTitleOne';
import DocTitleTwo from './components/31CustomHooks/DocTitleTwo';
import CounterOne from './components/32CustomHooks/CounterOne';
import CounterTwo from './components/32CustomHooks/CounterTwo';
import UserForm from './components/33CustomHooks/UserForm';
import UserCustomForm from './components/33CustomHooks/UserCustomForm';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CountContext.Provider value={{ countState: count, dispatch: dispatch }}>
        {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>


      <ParentComponent />

      <UserForm />

      <UserCustomForm />


      {/*    
      
      <CounterOne />
      <CounterTwo />

          <DocTitleOne />

    <DocTitleTwo />
      
          <ClassTimer />
    <HookTimer />
         
          <FocueInput />
          <Counter />
            <DataFetchingTwo />
            <DataFetchingOne />
      <CounterThree />  
      <CounterTwo />
      <ComponentC />
      <DataFetchingByButton />
      <DataSingleFetching />
      <DataFetching />
      <IntervalHookCounter />
      <IntervalClassCounter />
      <MouseContainer /> 
      <HookMouse />
      <ClassMouse />
      <HookCounterFive />
      <ClassCounterTwo />
      <ClassCounterOne />   
      <HookCounterOne />

      <HookCounterFour />
      <HookCounterThree />
      <HookCounterTwo />
      <ClassCounter />
      <HookCounter /> */}
    </div>
  );
}

export default App;
