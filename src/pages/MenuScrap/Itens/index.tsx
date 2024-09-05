import { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./Itens.module.scss";
import menu from "data/menu.json";

interface Props {
  search: string,
  filter: number | null,
  orderer: string;
}

export default function Items(props: Props) {
  const { search, filter, orderer } = props;
  const [list, setList] = useState(menu);

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function orderNewList(newList: typeof menu) {
    switch (orderer) {
      case 'price':
        return newList.sort((a, b) => a.price - b.price);
      case 'num_people':
        return newList.sort((a, b) => a.serving - b.serving);
      case 'portion':
        return newList.sort((a, b) => a.size - b.size);
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(orderNewList(newList));
  }, [search, filter, orderer]);

  return (
    <div className={styles.items}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
