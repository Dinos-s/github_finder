import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import classes from './Search.module.css'
type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName)
        }
    }

    return (
        <div className={classes.search}>
            <h2>Pesquise um usuário:</h2>
            <p>Conheça seus melhores repositorios</p>
            <div className={classes.container}>
                <input type="text" placeholder="Digite um usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search;
