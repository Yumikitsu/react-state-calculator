import { useState } from "react"
import "./App.css"

function App() {

  // First number of the calculator
  const [firstNum, setFirstNum] = useState('0')

  // The operator used in the calculation
  const [operator, setOperator] = useState('+')

  // Second number of the calculator
  const [secondNum, setSecondNum] = useState('0')

  // The result of the first and second number
  const [sum, setSum] = useState('0')

  // The memory of the currently stored equation
  const [memory, setMemory] = useState({value: sum, stored: false})

  // Update the first number whenever a button is pressed
  const updateFirstNum = (num) => {
    if (num === '0' && firstNum === '0') { // Both are 0, do nothing
      return
    } else if (num === 'clear') { // Set back to 0
      setFirstNum('0')
      return
    } else if (num === 'recall') { // Set to the stored memory
      if (memory.stored) {
        setFirstNum(memory.value)
      }
      return
    } else if (firstNum === '0' && num !== '.') { // Change value from 0 to the number
      setFirstNum(num)
      return
    } else if (num === '.') { // Check if a dot already exists
      if (firstNum.indexOf(num) !== -1)
      {
        return
      }
    }

    // Add to the end of the firstNum
    const newNum = firstNum + num
    setFirstNum(newNum)
  }

  // Update the operator whenever a button is pressed
  const updateOperator = (op) => {
    if (op !== operator) {
      setOperator(op)
    }
  }

  // Update the second number whenever a button is pressed
  const updateSecondNum = (num) => {
    if (num === '0' && secondNum === '0') { // Both are 0, do nothing
      return
    } else if (num === 'clear') { // Set back to 0
      setSecondNum('0')
      return
    } else if (num === 'recall') { // Set to the stored memory
      if (memory.stored) {
        setSecondNum(memory.value)
      }
      return
    } else if (secondNum === '0' && num !== '.') { // Change value from 0 to the number
      setSecondNum(num)
      return
    } else if (num === '.') { // Check if a dot already exists
      if (secondNum.indexOf(num) !== -1)
      {
        return
      }
    }

    // Add to the end of the secondNum
    const newNum = secondNum + num
    setSecondNum(newNum)
  }

  // Update the sum whenever the button is pressed
  const updateSum = () => {
    let result = 'undefined'

    if (operator === '+') {
      // Addition
      result = `${parseFloat(firstNum) + parseFloat(secondNum)}`
    } else if (operator === '-') {
      // SUbtraction
      result = `${parseFloat(firstNum) - parseFloat(secondNum)}`

    } else if (operator === '*') {
      // Multiplication
      result = `${parseFloat(firstNum) * parseFloat(secondNum)}`

    } else if (operator === '÷') {
      // Division
      if (secondNum !== '0') {
        result = `${parseFloat(firstNum) / parseFloat(secondNum)}`
      }
    }

    setSum(result)
  }

   // Update the memory when the store button is pressed
   const updateMemory = () => {
    setMemory({value: sum, stored: true})
   }



  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={() => updateFirstNum('1')}>1</button>
          <button onClick={() => updateFirstNum('2')}>2</button>
          <button onClick={() => updateFirstNum('3')}>3</button>
          <button onClick={() => updateFirstNum('4')}>4</button>
          <button onClick={() => updateFirstNum('5')}>5</button>
          <button onClick={() => updateFirstNum('6')}>6</button>
          <button onClick={() => updateFirstNum('7')}>7</button>
          <button onClick={() => updateFirstNum('8')}>8</button>
          <button onClick={() => updateFirstNum('9')}>9</button>
          <button onClick={() => updateFirstNum('0')}>0</button>
          <button onClick={() => updateFirstNum('clear')}>Clear</button>
          <button onClick={() => updateFirstNum('recall')}>Recall</button>
          <button onClick={() => updateFirstNum('.')}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => updateOperator('+')}>+</button>
          <button onClick={() => updateOperator('-')}>-</button>
          <button onClick={() => updateOperator('*')}>*</button>
          <button onClick={() => updateOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={() => updateSecondNum('1')}>1</button>
          <button onClick={() => updateSecondNum('2')}>2</button>
          <button onClick={() => updateSecondNum('3')}>3</button>
          <button onClick={() => updateSecondNum('4')}>4</button>
          <button onClick={() => updateSecondNum('5')}>5</button>
          <button onClick={() => updateSecondNum('6')}>6</button>
          <button onClick={() => updateSecondNum('7')}>7</button>
          <button onClick={() => updateSecondNum('8')}>8</button>
          <button onClick={() => updateSecondNum('9')}>9</button>
          <button onClick={() => updateSecondNum('0')}>0</button>
          <button onClick={() => updateSecondNum('clear')}>Clear</button>
          <button onClick={() => updateSecondNum('recall')}>Recall</button>
          <button onClick={() => updateSecondNum('.')}>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={() => updateSum()}>=</button>
          <button onClick={() => updateMemory()}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
