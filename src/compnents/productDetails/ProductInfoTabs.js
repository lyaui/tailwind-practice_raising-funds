import React, { Fragment } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Introduction from '../../pages/productDetails/TabIntroduction';
import FAQ from '../../pages/productDetails/TabFAQ';
import Process from '../../pages/productDetails/TabProcess';
import Comments from '../../pages/productDetails/TabComments';

function ProductInfoTabs() {
  const { url } = useRouteMatch();
  const tabItems = [
    { label: '專案介紹', path: `${url}/introductoin` },
    { label: '常見問答', path: `${url}/FAQ` },
    { label: '目前進度', path: `${url}/process` },
    { label: '留言', path: `${url}/comments` },
  ];
  const renderTabItems = tabItems.map(({ path, label }) => (
    <li className='py-6 text-bold text-font-link'>
      <Link className='px-5 py-6' to={path}>
        {label}
      </Link>
    </li>
  ));
  return (
    <Fragment>
      <ul class='flex items-center bg-white border-t border-b'>
        <div className='container flex'>{renderTabItems}</div>
      </ul>
      <main class='container'>
        <Switch>
          <Route path={`${url}/introductoin`} exact>
            <Introduction />
          </Route>
          <Route path={`${url}/FAQ`} exact>
            <FAQ />
          </Route>
          <Route path={`${url}/process`} exact>
            <Process />
          </Route>
          <Route path={`${url}/comments`} exact>
            <Comments />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default ProductInfoTabs;
