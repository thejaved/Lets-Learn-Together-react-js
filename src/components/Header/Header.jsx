import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrollMenu, setScrollMenu] = useState(false);

    const scrollAddNewHeader = () =>{
        if(window.scrollY > 100){
            setScrollMenu(true);
        }else{
            setScrollMenu(false);
        }
    }
    const activeStyle = {
        color: scrollMenu ? "var(--primary-color)" : "var(--active-color)",
    }

    window.addEventListener('scroll', scrollAddNewHeader);

    return (
        <header className="header" id="header">
            <div className={scrollMenu ? "header_container active" : "header_container"} id="header_container">
                <nav className="nav" id="nav">
                    <div className="logo" id="logo">
                        <h1>Technical Clips</h1>
                    </div>
                    <div className={openMenu ? "menu_container active" : "menu_container"}>
                        <ul className="menu_list">
                            {/* <li className="menu_items"><NavLink exact activeStyle={activeStyle} to='/' onClick={()=>setOpenMenu(!openMenu)}>Home</NavLink></li> */}
                            <li className="menu_items"><NavLink exact activeStyle={activeStyle} to='/posts' onClick={()=>setOpenMenu(!openMenu)}>Posts</NavLink></li>
                            <li className="menu_items"><NavLink exact activeStyle={activeStyle} to='/about' onClick={()=>setOpenMenu(!openMenu)}>About Us</NavLink></li>
                            <li className="menu_items"><NavLink exact activeStyle={activeStyle} to='/contact' onClick={()=>setOpenMenu(!openMenu)}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="button_container">
                        {!openMenu && <i className='bx bx-menu' onClick={()=>setOpenMenu(!openMenu)}></i>}
                        {openMenu && <i className='bx bx-x' onClick={()=>setOpenMenu(!openMenu)}></i>}
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;
