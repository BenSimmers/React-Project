import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


function User(props) {
  let random = Math.floor(Math.random() * 11) + 1;

  const fetchUser = () => {
    const url = `https://reqres.in/api/users/${random}`;

    return fetch(url)
      .then((res) => res.json())
      .then((res) => res.data);
  };

  const [user, setUser] = useState(fetchUser(props.id));

  return (
    <div className="row">
      <div className='column'>
        <div className='card'>
          <img className='img_' src={user.avatar} alt="Photo"/>
          <p className='text'>{user.first_name} {user.last_name}</p>
          <button onClick={() => { fetchUser(props.id).then((user) => { setUser(user); }); }}>Person</button>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div>
      <Navbar>

        <NavItem icon={"💀"} />
        <NavItem icon={"💀"} />
        <NavItem icon={"💀"} />

        <NavItem icon={"💀"}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <h1>facebook</h1>

      <br></br>

      <User id={1} />
      <User id={1} />
      <User id={1} />
      <User id={1} />
      <User id={1} />
      <User id={1} />
      <User id={1} />
      <User id={1} />
      
      





    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}




function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>page</DropdownItem>
          <DropdownItem
            leftIcon={"💀"}
            rightIcon={""}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={""}
            goToMenu="animals">
            hmm
          </DropdownItem>
        </div>
      </CSSTransition>





      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"💀"}>
            <h2>hmm</h2>
          </DropdownItem>
          <DropdownItem leftIcon={"💀"}>L</DropdownItem>
          <DropdownItem leftIcon={"💀"}>hehe</DropdownItem>
          <DropdownItem leftIcon={"💀"}>bruh</DropdownItem>
          <DropdownItem leftIcon={"💀"}>some!</DropdownItem>
        </div>
      </CSSTransition>




      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={"<-"}>
            <h2>second menu</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">hmm</DropdownItem>
          <DropdownItem leftIcon="🐸">something</DropdownItem>
          <DropdownItem leftIcon="🦋">x</DropdownItem>
          <DropdownItem leftIcon="🦔">cab203 sad</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;