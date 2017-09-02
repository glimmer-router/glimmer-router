import Component, { tracked } from '@glimmer/component';
import { match } from '../../../utils/interfaces';
import trackService from '../../../utils/tracked';
import Router from '../../../services/router';

@trackService('router')
export default class GRouter extends Component {
    router: Router;

    @tracked('router')
    get hasMatch() {
        return this.router.match ? true : false;
    }
};
