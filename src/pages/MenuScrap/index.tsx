import style from "./MenuScrap.module.scss"
import "normalize.css"
import { ReactComponent as LogoToy } from "assets/logo.svg"
import { ReactComponent as SepLeft } from "assets/left.svg"
import { ReactComponent as SepRight } from "assets/right.svg"
import { ReactComponent as Bar } from "assets/bar.svg"
import Search from "./Search"
import { useState } from "react"
import Filter from "./Filter"
import Orderer from "./Orderer"

export default function MenuScrap() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [orderer, setOrderer] =useState("")
    return (
        <main>
            <nav className={style.nav}>
                <div className={style.nav__details}>
                    <SepRight />
                    <div className={style.bar}>
                        <Bar />
                        <Bar />
                    </div>
                </div>
                <div className={style.logo}>
                    <LogoToy />
                </div>
                <div className={style.nav__details}>
                    <div className={style.bar}>
                        <Bar />
                        <Bar />
                    </div>
                    <SepLeft />
                </div>
                <div className={style.nav__info}>

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
                <div className={style.menu__filters}>
                    <Filter
                        filter={filter}
                        setFilter={setFilter}
                    />

                    <Orderer 
                    orderer={orderer}
                    setOrderer={setOrderer}
                    />
                </div>


            </section>
        </main>
    )
}