import React, { Fragment } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Introduction from '../../pages/productDetails/TabIntroduction';
import FAQ from '../../pages/productDetails/TabFAQ';
import Process from '../../pages/productDetails/TabProcess';
import Comments from '../../pages/productDetails/TabComments';

function ProductInfoTabs() {
  const { url } = useRouteMatch();
  return (
    <Fragment>
      <ul class='flex items-center'>
        <li>
          <Link to={`${url}/introductoin`}>專案介紹</Link>
        </li>
        <li>
          <Link to={`${url}/FAQ`}>常見問答</Link>
        </li>
        <li>
          <Link to={`${url}/process`}>目前進度</Link>
        </li>
        <li>
          <Link to={`${url}/comments`}>留言</Link>
        </li>
      </ul>
      <main>
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
