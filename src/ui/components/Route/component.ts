import Component, { tracked } from '@glimmer/component';
import injectService from '../../../utils/injectService';
import Router from '../../../services/router';

@injectService('router')
export default class Route extends Component {
  router: Router;

  @tracked match: Match;

  computeMatch(path: string, history: any): Match {
    const { pathname } = history;

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

  @tracked('router', 'args')
  get isActive() {
    const history = this.args.location || this.router.history.location;
    console.log(history);
    const match = this.computeMatch(this.args.path, history);

    if (match != null) {
      this.match = match;
      return true;
    }

    return false;
  }
};
