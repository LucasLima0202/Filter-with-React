import style from "./MenuScrap.module.scss"
import "normalize.css"
// import {ReactComponent as Logo} from "assets/logo.svg"
import {ReactComponent as LogoToy} from "assets/55.svg"
import Search from "./Search"
import { useState } from "react"

export default function MenuScrap() {
const [search,setSearch] = useState("");
return (
<main>
    <nav className={style.nav}>
       <div className={style.logo}>
        <LogoToy/>
        <span className={style.logo__text}></span>
        </div>
    </nav>
    <header className={style.header}> 
        <div className={style.header__text}>
        Order the best pizza with <span className={style.header__text__span}>unbeatable deals</span> 
        </div>
    </header>
    <section className={style.menu}>
        <h3 className={style.menu__title} >Menu</h3>
        <Search 
        search={search} 
        setSearch={setSearch}
         />
    </section>
</main>
)
}