import style from "./MenuScrap.module.scss"
import "normalize.css"

import Search from "./Search"
import { useState } from "react"
import Filter from "./Filter"
import Orderer from "./Orderer"
import Itens from "./Itens"
import Header from "components/header"

export default function MenuScrap() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [orderer, setOrderer] =useState("")
    return (
        <main>
            <Header></Header>
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
                <Itens search={search} filter={filter} orderer={orderer}  />
            </section>
        </main>
    )
}