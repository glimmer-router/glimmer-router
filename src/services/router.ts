import { createBrowserHistory } from 'history';
import BaseRouter from './base-router';

export default class BrowserRouter extends BaseRouter {
  createHistory() {
    return createBrowserHistory();
  }
}
