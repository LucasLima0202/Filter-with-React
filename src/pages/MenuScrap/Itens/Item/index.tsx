import style from "./Item.module.scss"
import menu from "../itens.json"
import classNames from "classnames";

type Props =  typeof menu[0]

export default function Item( props: Props ) {
    const {title, description, category, size, price, serving, photo} = props;
    return (
        <div className={style.item}>
        <div className={style.item__imagem}>
          <img src={photo} alt={title} />
        </div>
        <div className={style.item__descricao}>
          <div className={style.item__titulo}>
            <h2> {title} </h2>
            <p> {description} </p>
          </div>
          <div className={style.item__tags}>
            <div className={classNames({
              [style.item__tipo]: true,
              [style[`item__tipo__${category.label.toLocaleLowerCase()}`]]:true})}
            >{category.label}
            </div>
            <div className={style.item__porcao}>{size}</div>
            <div className={style.item__qtdpessoas}>Serves {serving} people</div>
            <div className={style.item__valor}>R$ {price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    )
}