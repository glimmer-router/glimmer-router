import Component, { tracked } from '@glimmer/component';
import trackService from '../../../utils/tracked';
import Router from '../../../services/router';

@trackService('router')
export default class GRoute extends Component {
  router: Router;

  @tracked match: Match;

  computeMatch(path: string, history: any): Match {
    const { location: { pathname } } = history;

    if (path === pathname) {
      return {
        path,
        url: path,
        isExact: path === pathname,
        params: {}
      }
    }
    return null;
  }

  @tracked('router')
  get isActive() {
    const match = this.computeMatch(this.args.path, this.router.history);

    if (match != null) {
      this.match = match;
      return true;
    }

    return false;
  }
};
