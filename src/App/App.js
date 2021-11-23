import React, { useState } from 'react';
import AppFooter from './app-footer/app-footer';
import AppHeader from './app-header/app-header';
import './App.css';
import Description from './content/description';
import Recomendation from './content/recomendation/recomendation';
import NavBarAbout from './navigation/nav-bar/nav-bar-list-items/nav-bar-about/nav-bar-about';
import Navigation from './navigation/navigation';
import NavBarDiet from './navigation/nav-bar/nav-bar-list-items/nav-bar-diet/nav-bar-diet';
import { Switch, Route } from 'react-router-dom';
import FormCalculator from './content/form-calculation/form-calculation';
import ArrowUp from './UI/arrow-up/arrow-up';

function App() {

  const [menuActive, setMenuActive] = useState(false);
  const [checkedTop,setCheckedTop] = useState(false);

  window.addEventListener('scroll',() => {
    if(window.scrollY > 1000) {
      setCheckedTop(true)
    } else {
      setCheckedTop(false)
    }
  })

  const navItems = [
    { value: 'Главная', href: '/' },
    { value: 'О нас', href: '/about' },
    { value: 'Диеты', href: '/diet' },
  ];

  return (
    <div className='app'>
      <Navigation menuActive={menuActive} setMenuActive={setMenuActive} navItems={navItems} />
        <Switch>
          <Route exact path='/' render={props => <NavBarMain checkedTop={checkedTop}/>} />
          <Route path='/about' component={NavBarAbout} />
          <Route path='/diet' render={props => <NavBarDiet checkedTop={checkedTop}/>} />
        </Switch>
      
    </div>
  );
}

const NavBarMain = ({checkedTop}) => {

  return (
    <>
      <AppHeader/>
      <Description />
      <FormCalculator />
      <Recomendation />
      {checkedTop ? <ArrowUp/> : null}
      <AppFooter />
    </>
  )
}

export default App;
