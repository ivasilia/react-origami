import style from './HeaderItem.module.css';

const HeaderItem = (props) => {
    return (
        <li className="listItem">
            <a className={style.navListItem}>{props.author}</a>
        </li>
    )
}

export default HeaderItem;