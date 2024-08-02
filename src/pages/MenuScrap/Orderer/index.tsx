import React, { useState } from "react"
import style from "./Orderer.module.scss"
import options from './option.json'
import classNames from "classnames"
import  {MdKeyboardArrowUp} from 'react-icons/md'
import  {MdKeyboardArrowDown} from 'react-icons/md'


interface props {
    orderer: string,
    setOrderer:React.Dispatch<React.SetStateAction<string>>;
}

export default function Orderer( {orderer, setOrderer}: props ){
    const [open, setOpen] = useState(false)
    const nameorderer = orderer && options.find( (options) => options.value === orderer)?.name
    return(
        <button 
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(!open)} 
        className={classNames({
            [style.orderer]: true,
            [style["orderer--ativo"]]: orderer !== "",

        })}
        >
            <span>{nameorderer || "Order By"}</span>
            {open ? <MdKeyboardArrowUp size={20} />  : < MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [style.orderer__options]: true,
                [style["orderer__options--ativo"]]:open
            })}>
                {options.map(options => (
                    <div className={style.orderer__option} key={options.value}
                    onClick={() => setOrderer(options.value)}>
                        {options.name}
                    </div>
                ))}
            </div>
        </button>
    )
}