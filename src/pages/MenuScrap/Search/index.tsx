import React from "react"
import style from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'


interface props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({search , setSearch}: props) {
    return(
        <div className={style.search}>
            <input 
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />   
            <CgSearch 
            size={25}
            color="#4c4d5e"
            />
        </div>
    )
} 