import React, { useState } from 'react';
import AppFooter from './app-footer/app-footer';
import AppHeader from './app-header/app-header';
import './App.css';
import Description from './content/description';
import Recomendation from './content/recomendation/recomendation';
import NavBarLogin from './navigation/nav-bar/nav-bar-list-items/nav-bar-login/nav-bar-login';
import NavBarHelp from './navigation/nav-bar/nav-bar-list-items/nav-bar-help/nav-bar-help';
import Navigation from './navigation/navigation';
import NavBarCreate from './navigation/nav-bar/nav-bar-list-items/nav-bar-create/nav-bar-create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormCalculator from './content/form-calculation/form-calculation';

function App() {
  const items = [
    { value: 'Главная', href: '/' },
    { value: 'Войти', href: '/login' },
    { value: 'Зарегистрироваться', href: '/create' },
    { value: 'Поддержка', href: '/help' }
  ];
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className='app'>
      <Navigation menuActive={menuActive} setMenuActive={setMenuActive} items={items} />
      <Router>
        <Switch>
          <Route exact path='/' component={AppHeader} />
          <Route path='/login' component={NavBarLogin} />
          <Route path='/create' component={NavBarCreate} />
          <Route path='/help' component={NavBarHelp} />
        </Switch>
      </Router>
      <Description />
      <FormCalculator />
      <Recomendation />
      <AppFooter />
    </div>
  );
}

export default App;
