import style from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = () => {
    console.log(style.menu);
    return (
        <aside className={style.menu}>
            <ul>
                <MenuItem linkText="Lorem" />
                <MenuItem linkText="Ipsum" />
                <MenuItem linkText="Dolor" />
                <MenuItem linkText="Sit" />
                <MenuItem linkText="Amet" />
            </ul>
            
        </aside>
    )
}

export default Menu;