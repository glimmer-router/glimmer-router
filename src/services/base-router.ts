import { tracked } from '@glimmer/component';
import Service from './-utils/service';

export default class BaseRouter extends Service {
  history: any = this.createHistory();

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

  createHistory(): any {
    return null;
  }

  constructor(options: any) {
    super(options);

    this.createHistory();

    this.unlisten = this.history.listen(() => {
      this.match = this.computeMatch(this.history.location.pathname);
      this.notify();
    });
  }
}
