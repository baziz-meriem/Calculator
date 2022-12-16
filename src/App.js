import './index.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';


export const ACTIONS= {
  ADD_DIGIT :'add digit',
  CHOOSE_OPERATION :'choose operation',
  CLEAR :'clear',
  DELETE_DIGIT :'delete digit',
  EVALUATE :'evaluate',

}

function reducer(state,{type,payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentOperand === "0") return state
      return {
        ...state , 
        currentOperand:`${state.currentOperand || ""}${payload.digit}`
      }
      case ACTIONS.CHOOSE_OPERATION:
        if(payload.operation === "." && state.currentOperand.includes(".")) return state
        return {
          ...state , 
          currentOperand:`${state.currentOperand || ""}${payload.operation}`
        }
      case ACTIONS.CLEAR:
        return {
        }
  }

}

function App() {
  const [{currentOperand,previousOperand,operation}, dispatch] = useReducer(reducer,{})
  return (
    <div className="calculator-grid">
      <div className="output">
      <div className='previous-operand'>{previousOperand}</div>
      <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button onClick={()=>{dispatch({type:ACTIONS.CLEAR})}}>DEL</button>
      <OperationButton operation="/">/</OperationButton>
      <DigitButton digit="1" dispatch={dispatch}></DigitButton>
      <DigitButton digit="2" dispatch={dispatch}></DigitButton>
      <DigitButton digit="3" dispatch={dispatch}></DigitButton>
      <DigitButton digit="4" dispatch={dispatch}></DigitButton>
      <DigitButton digit="5" dispatch={dispatch}></DigitButton>
      <DigitButton digit="6" dispatch={dispatch}></DigitButton>
      <DigitButton digit="7" dispatch={dispatch}></DigitButton>
      <DigitButton digit="8" dispatch={dispatch}></DigitButton>
      <DigitButton digit="9" dispatch={dispatch}></DigitButton>

      <OperationButton operation="-" dispatch={dispatch}></OperationButton>
      <OperationButton operation="." dispatch={dispatch}></OperationButton>
      <DigitButton digit="0" dispatch={dispatch}></DigitButton>

      <button className='span-two'>=</button>
    </div>

  );
}

export default App;
