import style from './Header.module.css';
import HeaderItem from './HeaderItem';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <li className="listItem"><img src="/white-origami-bird.png" alt="white-origami"></img></li>
            <HeaderItem className="listItem" author="Lorem"/>
            <HeaderItem author="Ipsum"/>
            <HeaderItem author="Dolor"/>
            <HeaderItem author="Sit"/>
            <HeaderItem author="Amet"/>
            <HeaderItem author="Logout"/>
        </nav>
    )
}

export default Header;