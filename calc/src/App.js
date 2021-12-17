import './App.css';
import Display from "./Components/Display/Display";
import {Buttons} from "./Components/Buttons/Buttons";
import {useEffect, useState} from "react";


class contextDispayClass {
    constructor(defaultValue, firstNum, secondNum, operationSign) {
        this.defaultValue = defaultValue;
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operationSign = operationSign;
    }

    calculate() {
        // describe method calculate
        switch(this.operationSign) {
            case '+':
                return parseFloat(this.firstNum) + parseFloat(this.secondNum);
                break;
            case '-':
                return this.firstNum - this.secondNum;
                break;
            case 'X':
                return this.firstNum * this.secondNum;
                break;
            case '/':
                return this.firstNum / this.secondNum;
                break;
        }
    }

    get result() {
        // разделить выражение на первыйнамберб знак и второй намбер через индексОФ
        this.calculate()
    }


}


function App() {
    const [contextDisplay,setContextDisplay] = useState('')
    const [result,setResult] = useState()


    let firstNum = '';
    let secondNum = '';
    let operationSign = '';
    let finish = false;

    const number = ['0','1','2','3','4','5','6','7','8','9','.'];
    const action = ['+','-','X','/'];
    const all = [...number,...action, 'AC']



    // сброс данных кнопкой АС
    const clearAll = () => {
        firstNum = '';
        secondNum = '';
        operationSign = '';
        finish = '';
        setContextDisplay('0')
        setResult('')

        console.log("КНОПКА СБРОС СРАБОТАЛА")
    }


    const actionsButton = (event) => {

        if(!all.includes(event.target.textContent)) return;// проверка нажата ли кнопка, сравнивается с массивом all

        if (event.target.textContent === 'AC') {
            clearAll();
            return;
        }  // сброс всех данных, кнопка AC


        if(all.includes(event.target.textContent)){

            setContextDisplay((prev) => prev + event.target.textContent)

        }

    }

    useEffect(() => setContextDisplay('0'), [])


    const separatorNum =  (content) => {

        const numbers = (op) => {
            firstNum = content.slice(0,contextDisplay.indexOf(op) - 1)
            operationSign = content.charAt(firstNum.length)
            secondNum = content.slice(firstNum.length+1,contextDisplay.length)

            if(op === '/') {
                debugger
                firstNum = content.slice(0,contextDisplay.indexOf(op))
                operationSign = content.charAt(firstNum.length)
                secondNum = content.slice(firstNum.length+1,contextDisplay.length)
            }
        }

        action.forEach(el => el === '/'? '' : numbers(el))

        const result = new contextDispayClass(undefined,firstNum,secondNum,operationSign)

        setResult(result.calculate())
        console.log(content.length, "RESULT")
        console.log(firstNum, "FIRST")
        console.log(secondNum, "SECOND")
        console.log(operationSign, "OPER")
    }





  return (
      <div className="App">
        <Display content = {contextDisplay} result = {result} secondNum={secondNum}/>
        <Buttons actionsButton = {actionsButton} result = {separatorNum} content = {contextDisplay}/>
      </div>
  );
}

export default App;
