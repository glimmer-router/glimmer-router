import { createBrowserHistory } from 'history';
import { tracked } from '@glimmer/component';
import Service from './-utils/service';
import { Match } from '../utils/interfaces';

export default class Router extends Service {
  history = createBrowserHistory();

  unlisten: Function;

  @tracked match: Match;

  @tracked route: any = {
    location: this.history.location,
    match: this.match
  };

  computeMatch(pathname: string): Match {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  }

  constructor(options: any) {
    super(options);

    this.history = createBrowserHistory();

    this.unlisten = this.history.listen(() => {
      this.match = this.computeMatch(this.history.location.pathname);
      this.notify();
    });
  }
}
