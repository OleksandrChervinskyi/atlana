import React, {FC} from "react";
import styles from "../user-list.module.scss";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {setInput} from "./search-Slice";

export const Search: FC = () => {

    const {usersListPage: {search: {searchInput}}} = useAppSelector(store => store)
    const dispatch = useAppDispatch()

    return (
        <div className={styles.search}>
            <input type={'text'}
                   name={'search'}
                   placeholder={'Search for users'}
                   value={searchInput}
                   onChange={({target: {value}}) => dispatch(setInput(value))}/>
        </div>
    )
}