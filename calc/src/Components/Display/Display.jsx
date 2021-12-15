import s from "./Display.module.css"

function Display({content}) {
    return (
        <div className={s.display}>
            <p>{content}</p>
        </div>
    );
}

export default Display;
