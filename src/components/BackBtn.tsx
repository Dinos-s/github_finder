import { useNavigate } from "react-router-dom"
import classes from '../moduleCss/BackBtn.module.css'

const BackBtn = () => {
    const naviate = useNavigate()
    return (
        <>
            <button className={classes.backBtn} onClick={() => naviate(-1)}>
                Voltar
            </button>
        </>
    )
}

export default BackBtn