import React from 'react';
import filters from './filter.json';
import style from './Filters.module.scss';
import classNames from 'classnames';

type IOption = typeof filters[0]

interface props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: props) {
    function SelectionFiler(option: IOption) {
        if(filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }
    return (
        <div className={style.filtes}>
            {filters.map((option) => (

                <button
                    className={classNames({
                        [style.filtes__filter]:true,
                        [style['filtes__filter--activate']]: filter == option.id
                    })}
                    key={option.id}
                    onClick={() => SelectionFiler(option)}

                >

                    {option.label}
                </button>
            ))}
        </div>
    )
}