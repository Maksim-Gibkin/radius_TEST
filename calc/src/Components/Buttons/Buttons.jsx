import s from './Buttons.module.css'

function Buttons() {
    return (
        <div>
            <form action="#" className={s.btns}>
                <button className={`${s.bg_grey} ${s.ac}`}>AC</button>
                <button className={`${s.bg_grey} ${s.plusAndMinus}`}>+/-</button>
                <button className={`${s.bg_grey} ${s.percent}`}>%</button>
                <button className={`${s.bg_orange} ${s.divide}`}>/</button>

                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className={s.bg_orange}>X</button>

                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className={s.bg_orange}>-</button>

                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className={s.bg_orange}>+</button>

                <button>0</button>
                <button>.</button>
                <button>del</button>
                <button className={s.bg_orange}>=</button>
            </form>
        </div>
    );
}

export default Buttons;
