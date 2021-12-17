import { useEffect } from "react";
import s from "./Display.module.css"

function Display({content, firstNum, operationSign, secondNum, result}) {
    
    return (
        <div className={s.display}>
            <p>{content}</p>
            <span>{result}</span>
        </div>
    );
}

export default Display;
