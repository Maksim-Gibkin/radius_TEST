import {  useState } from 'react';
import s from './Buttons.module.css'


export const Buttons = ({actionsButton, result, content}) => {


    const buttonConfig = [
        {value: 'AC', className: s.bg_grey, onClick: actionsButton},
        {value: '+/-', className: s.bg_grey, onClick: actionsButton},
        {value: '%', className: s.bg_grey, onClick: actionsButton},
        {value: '/', className: s.bg_grey, onClick: actionsButton},
        {value: '9', className: '', onClick: actionsButton},
        {value: '8', className: '', onClick: actionsButton},
        {value: '7', className: '', onClick: actionsButton},
        {value: 'X', className: s.bg_orange, onClick: actionsButton},
        {value: '4', className: '', onClick: actionsButton},
        {value: '5', className: '', onClick: actionsButton},
        {value: '6', className: '', onClick: actionsButton},
        {value: '-', className: s.bg_orange, onClick: actionsButton},
        {value: '1', className: '', onClick: actionsButton},
        {value: '2', className: '', onClick: actionsButton},
        {value: '3', className: '', onClick: actionsButton},
        {value: '+', className: s.bg_orange, onClick: actionsButton},
        {value: '0', className: '', onClick: actionsButton},
        {value: '.', className: '', onClick: actionsButton},
    ]

    const [rows, setRows] = useState(buttonConfig)

    return (
        <div className={s.button__wrapper}>
            {rows.map((e, index) => {
                return ( <button key={index} className={e.className} onClick={e.onClick}>{e.value}</button>)
            })}
            <button className={s.bg_orange} onClick = {() => result(content)}> = </button>
        </div>
    );
}
