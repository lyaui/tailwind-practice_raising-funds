import React, { Fragment } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Introduction from '../../pages/productDetails/TabIntroduction';
import FAQ from '../../pages/productDetails/TabFAQ';
import Process from '../../pages/productDetails/TabProcess';
import Comments from '../../pages/productDetails/TabComments';
import PerkInfo from '../../compnents/productDetails/PerkInfo.js';

function ProductInfoTabs() {
  const { url } = useRouteMatch();
  const tabItems = [
    { label: '專案介紹', path: `${url}/introductoin` },
    { label: '常見問答', path: `${url}/FAQ` },
    { label: '目前進度', path: `${url}/process` },
    { label: '留言', path: `${url}/comments` },
  ];
  const RouteItems = [
    { path: `${url}/introductoin`, component: <Introduction /> },
    { path: `${url}/FAQ`, component: <FAQ /> },
    { path: `${url}/process`, component: <Process /> },
    { path: `${url}/comments`, component: <Comments /> },
  ];
  const renderTabItems = tabItems.map(({ path, label }) => (
    <li className='py-6 font-bold text-font-link' key={path}>
      <Link className='px-5 py-6' to={path}>
        {label}
      </Link>
    </li>
  ));
  const renderRouteItems = RouteItems.map(({ path, component }) => (
    <Route path={path} exact key={path}>
      {component}
    </Route>
  ));
  return (
    <Fragment>
      <div className='bg-white'>
        <ul className='flex items-center border-t border-b'>
          <div className='container flex'>{renderTabItems}</div>
        </ul>
        <main className='container grid grid-cols-12 gap-x-6 py-12'>
          <div className='col-span-8'>
            <Switch>{renderRouteItems}</Switch>
          </div>
          <PerkInfo />
        </main>
      </div>
    </Fragment>
  );
}

export default ProductInfoTabs;
