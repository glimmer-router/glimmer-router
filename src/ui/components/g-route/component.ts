import Component, { tracked } from '@glimmer/component';
import { match } from '../../../utils/interfaces';
import trackService from '../../../utils/tracked';
import Router from '../../../services/router';

@trackService('router')
export default class GRoute extends Component {
    router: Router;

    @tracked match: any = null;

    computeMatch(path: string, history: any): match {
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
    get shouldRender() {
        const match = this.computeMatch(this.args.path, this.router.history);

        if (match != null) {
            this.match = match;
            return true;
        }

        return false;
    }
};
