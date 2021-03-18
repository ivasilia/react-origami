import style from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <li className="listItem">
            {props.linkText}
        </li>
    )
}

export default MenuItem;