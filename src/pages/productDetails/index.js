import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Introduction from '../productDetails/TabIntroduction';
import FAQ from '../productDetails/TabFAQ';
import Process from '../productDetails/TabProcess';
import Comments from '../productDetails/TabComments';

function ProductDetails() {
  const { url } = useRouteMatch();
  return (
    <div>
      ProductDetails
      <ul>
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
    </div>
  );
}

export default ProductDetails;
