import { ReactComponent as LogoToy } from "assets/logo.svg"
import { ReactComponent as SepLeft } from "assets/left.svg"
import { ReactComponent as SepRight } from "assets/right.svg"
import { ReactComponent as Bar } from "assets/bar.svg"
import style from "./header.module.scss"

export default function Header(){
    return(
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
                   <a className={style.nav__info__a} href="/">Home</a> 
                   <a className={style.nav__info__a} href="/menu">Menu</a> 
                </div>
            </nav>
    )
}