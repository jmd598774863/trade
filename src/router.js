import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import ListMessage from "./routes/ListMessage.js";

import NewMessage from "./routes/NewMessage.js";

import DetailMessage from "./routes/DetailMessage.js";

import EditMessage from "./routes/EditMessage.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/index" component={IndexPage} />
      <Route path="/" component={ListMessage} />
      <Route path="/newMessage" component={NewMessage} />
      <Route path="/detailMessage" component={DetailMessage} />
      <Route path="/editMessage" component={EditMessage} />
    </Router>
  );
}

export default RouterConfig;
