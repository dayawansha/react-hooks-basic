import React, { useReducer } from 'react'
import './App.css'
import CounterOne from './components/stateVsStateObject/CounterOne'
import CounterTwo from './components/stateVsStateObject/CounterTwo'
import CounterThree from './components/sameReducerMulitipleTimes/CounterThree'
import ComponentA from './components/contextAPI-withTree/ComponentA'
import ComponentP from './components/contextAPI-withTree/ComponentP'
import ComponentX from './components/contextAPI-withTree/ComponentX'
import DataFetchingOne from './components/useStateVsUseReducer-APIcall/DataFetchingOne'
import DataFetchingTwo from './components/useStateVsUseReducer-APIcall/DataFetchingTwo'
// import * as testReducer from "../src/components/contextAPI-withTree/reducers/testReducer";
import testReducer from "../src/components/contextAPI-withTree/reducers/testReducer";

const initialState = 0;

export const CountContext = React.createContext();

const testReducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState
		default:
			return state
	}
};

function App() {

	const [count, dispatch] = useReducer(testReducer, initialState);

	return (
		<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
			<div className="App">
				{/* <CounterOne /> */}
				{/* <CounterTwo />*/}
				{/* <CounterThree />*/}
				{/* {count} */}
				 <ComponentA />
				 <ComponentP />
				 <ComponentX />
				{/* <DataFetchingOne /> */}
				{/*<DataFetchingTwo />*/}
			</div>
		</CountContext.Provider>
	)
}

export default App
