import './App.css';
import Display from "./Components/Display/Display";
import Buttons from "./Components/Buttons/Buttons";
import {useState} from "react";



function App() {
    const [contextDisplay,setContextDisplay] = useState('0')




    let firstNum = '';
    let secondNum = '';
    let operationSign = '';
    let finish = false;

    const number = ['0','1','2','3','4','5','6','7','8','9',','];
    const action = ['+','-','X','/', '+/-', '%', '='];
    const all = [...number,...action, 'AC']




    const clearAll = () => {
        firstNum = '';
        secondNum = '';
        operationSign = '';
        finish = '';
        setContextDisplay('0')

        console.log("КНОПКА СБРОС СРАБОТАЛА")
    }




    const actionsButton = (event) => {
        if(!all.some(el => el === event)) return

        console.log(event, "ЭТО КНОПКА")
        if (event === 'AC') clearAll();


    }
  return (
      <div className="App">
        <Display content = {contextDisplay} />
        <Buttons actionsButton = {actionsButton}/>
      </div>
  );
}

export default App;
